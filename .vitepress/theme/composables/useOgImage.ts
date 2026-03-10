/**
 * OGP 画像を取得する共通 composable
 * microlink.io API を優先し、失敗時は複数のCORSプロキシにフォールバック
 */

/** microlink.io API で og:image を直接取得 */
async function fetchViaMicrolink(url: string): Promise<string | null> {
  try {
    const r = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=false`, {
      signal: AbortSignal.timeout(8000),
    })
    if (!r.ok) return null
    const json = await r.json()
    // logo へのフォールバックは行わない（サイトロゴが返される場合があるため）
    const imgUrl = json?.data?.image?.url ?? null
    return typeof imgUrl === 'string' && imgUrl.startsWith('http') ? imgUrl : null
  } catch {
    return null
  }
}

async function fetchHtmlViaProxy(url: string): Promise<string | null> {
  const proxies: Array<() => Promise<string | null>> = [
    async () => {
      const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      const { contents } = await r.json()
      return contents ?? null
    },
    async () => {
      const r = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      return await r.text()
    },
    async () => {
      const r = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      return await r.text()
    },
  ]

  for (const proxy of proxies) {
    try {
      const html = await proxy()
      if (html && html.length > 100) return html
    } catch {
      // try next proxy
    }
  }
  return null
}

/** HTML の og:image / twitter:image を抽出する
 *
 * Qiita の OGP URL は &w=1200&fm=jpg... のように生の & を含む長い URL になる。
 * そのため val パターンは "'"&quot; のみで止め、& は許容する。
 */
function extractOgImageFromHtml(html: string): string | null {
  // クォートで囲まれた content 値を URL ごと取り出す
  // &quot; / " / ' の3種を開閉クォートに対応
  const patterns = [
    // &quot; 区切り
    /property=&quot;og:image&quot;\s+content=&quot;(https?:[^&]+(?:&(?!quot;)[^&]*)*)/i,
    /content=&quot;(https?:[^&]+(?:&(?!quot;)[^&]*)*)&quot;[^>]*property=&quot;og:image&quot;/i,
    /name=&quot;twitter:image&quot;\s+content=&quot;(https?:[^&]+(?:&(?!quot;)[^&]*)*)/i,
    // " 区切り
    /property="og:image"\s+content="(https?:[^"]+)"/i,
    /content="(https?:[^"]+)"[^>]*property="og:image"/i,
    /name="twitter:image"\s+content="(https?:[^"]+)"/i,
    /content="(https?:[^"]+)"[^>]*name="twitter:image"/i,
    // ' 区切り
    /property='og:image'\s+content='(https?:[^']+)'/i,
    /content='(https?:[^']+)'[^>]*property='og:image'/i,
    // secure_url
    /property=["']og:image:secure_url["']\s+content=["'](https?:[^"']+)["']/i,
  ]

  for (const pat of patterns) {
    const m = html.match(pat)
    if (m?.[1]) {
      return m[1].replace(/&amp;/g, '&').replace(/&quot;/g, '')
    }
  }
  return null
}

export async function fetchOgImage(url: string): Promise<string | null> {
  const cacheKey = `ogimg5:${url}`
  const cached = sessionStorage.getItem(cacheKey)
  if (cached !== null) return cached === 'null' ? null : cached

  const store = (val: string | null) => {
    sessionStorage.setItem(cacheKey, val ?? 'null')
    return val
  }

  try {
    // 1. microlink.io を最初に試す
    const microlinkImg = await fetchViaMicrolink(url)
    if (microlinkImg) return store(microlinkImg)

    // 2. CORS プロキシ経由で HTML をパース
    const html = await fetchHtmlViaProxy(url)
    if (!html) throw new Error('no contents')

    const imgUrl = extractOgImageFromHtml(html)
    if (imgUrl) return store(imgUrl)

    throw new Error('no og:image found')
  } catch {
    return store(null)
  }
}
