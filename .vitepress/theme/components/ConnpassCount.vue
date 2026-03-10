<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 検索結果で確認済みの最低値（Vol.20 = 2025/09開催確認）
const count = ref<string>('20')

async function fetchHtml(url: string): Promise<string | null> {
  const proxies: Array<() => Promise<string | null>> = [
    async () => {
      const r = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      return r.text()
    },
    async () => {
      const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      const d: { contents?: string } = await r.json()
      return d.contents ?? null
    },
    async () => {
      const r = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
      if (!r.ok) return null
      return r.text()
    },
  ]
  for (const proxy of proxies) {
    try {
      const html = await proxy()
      if (html && html.length > 200) return html
    } catch { /* try next */ }
  }
  return null
}

function extractMaxVol(html: string): number {
  // イベントタイトルに含まれる「Vol.XX」「vol.XX」「Vol XX」を全抽出して最大値を返す
  const matches = html.matchAll(/[Vv]ol[.\s_]?(\d+)/g)
  let max = 0
  for (const m of matches) {
    const n = parseInt(m[1], 10)
    if (n > max) max = n
  }
  return max
}

onMounted(async () => {
  // 1. connpass グループページ（イベント一覧）から Vol.XX を探す
  const groupHtml = await fetchHtml('https://brainpad-meetup.connpass.com/event/')
  if (groupHtml) {
    const max = extractMaxVol(groupHtml)
    if (max > 0) { count.value = String(max); return }
  }

  // 2. connpass トップページからも試みる
  const topHtml = await fetchHtml('https://brainpad-meetup.connpass.com/')
  if (topHtml) {
    const max = extractMaxVol(topHtml)
    if (max > 0) { count.value = String(max); return }
  }

  // 3. Speaker Deck（発表資料）から Vol.XX を探す
  const sdHtml = await fetchHtml('https://speakerdeck.com/brainpadpr')
  if (sdHtml) {
    const max = extractMaxVol(sdHtml)
    if (max > 0) { count.value = String(max); return }
  }

  // フォールバック: Vol.20 確認済み（2025/09）
})
</script>

<template>
  <span>{{ count }}</span>
</template>
