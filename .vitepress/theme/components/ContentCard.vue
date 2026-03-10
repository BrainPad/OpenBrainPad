<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
import { fetchOgImage } from '../composables/useOgImage'

const { site } = useData()

const props = defineProps<{
  title: string
  url: string
  description?: string
  source: 'speakerdeck' | 'note' | 'qiita' | 'zenn' | 'brainpad' | 'blog' | 'podcast' | 'connpass' | 'media' | 'book' | 'spreadsheet' | 'competitive'
  author?: string
  episode?: string
  image?: string
}>()

const ogImage = ref<string | null>(null)
const imageError = ref(false)
const loading = ref(true)
const viewCount = ref<string | null>(null)

const isPodcast = computed(() => props.source === 'podcast')
const isSpeakerDeck = computed(() => props.source === 'speakerdeck')
const isBook = computed(() => props.source === 'book')

const sourceConfig = computed(() => {
  const map: Record<string, { label: string; cls: string; fallbackBg: string; icon: string }> = {
    speakerdeck: { label: 'Speaker Deck', cls: 'badge-speakerdeck', fallbackBg: '#e8f5e9', icon: '🎴' },
    note:         { label: 'note',         cls: 'badge-note',        fallbackBg: '#fff8e1', icon: '✏️' },
    qiita:        { label: 'Qiita',        cls: 'badge-qiita',       fallbackBg: '#e8f5e9', icon: '💚' },
    zenn:         { label: 'Zenn',         cls: 'badge-zenn',        fallbackBg: '#e3f2fd', icon: '💙' },
    brainpad:     { label: '公式ブログ',   cls: 'badge-brainpad',    fallbackBg: '#f3e5f5', icon: '🧠' },
    blog:         { label: 'ブログ',       cls: 'badge-blog',        fallbackBg: '#fce4ec', icon: '📝' },
    podcast:      { label: 'Podcast',      cls: 'badge-podcast',     fallbackBg: '#ede7f6', icon: '🎙' },
    connpass:     { label: 'connpass',     cls: 'badge-connpass',    fallbackBg: '#fff3e0', icon: '🍺' },
    media:        { label: 'メディア掲載', cls: 'badge-media',       fallbackBg: '#fef2f2', icon: '📰' },
    book:         { label: '書籍',         cls: 'badge-book',        fallbackBg: '#f8f9fa', icon: '📖' },
    spreadsheet:  { label: 'スプレッドシート', cls: 'badge-spreadsheet', fallbackBg: '#f0fdf4', icon: '📊' },
    competitive:  { label: '競技プログラミング', cls: 'badge-competitive', fallbackBg: '#fff7ed', icon: '🏆' },
  }
  return map[props.source] ?? map.blog
})

/** URL から ISBN-13 を抽出（ハイフンあり・なし両対応） */
function extractIsbn(url: string): string | null {
  const m = url.match(/97[89][\-\d]{9,}/)
  if (!m) return null
  const cleaned = m[0].replace(/-/g, '')
  return cleaned.length === 13 ? cleaned : null
}

/**
 * 書籍 URL から表紙画像 URL を直接構築する
 * - 技術評論社 (gihyo.jp): 公式 CDN URL を構築
 * - ISBN が URL に含まれる場合: OpenLibrary カバー画像 (書影なし時は 404)
 * - それ以外: null を返し microlink OGP にフォールバック
 */
function buildBookCoverUrl(url: string): string | null {
  // 技術評論社 — /book/{year}/{isbn-with-hyphens}
  const gihyo = url.match(/gihyo\.jp\/book\/(\d{4})\/(978[\-\d]+)/)
  if (gihyo) {
    const isbn = gihyo[2].replace(/-/g, '')
    return `https://gihyo.jp/assets/images/cover/${gihyo[1]}/thumb/TH800_${isbn}.jpg`
  }

  // ISBN が URL に含まれる出版社 (翔泳社など)
  const isbn = extractIsbn(url)
  if (isbn) {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`
  }

  return null
}

/** Speaker Deck と同じ 2有効数字丸め表示 */
function formatLikeSD(num: number): string {
  if (num <= 0) return '0'
  const mag = Math.pow(10, Math.floor(Math.log10(num)) - 1)
  const rounded = Math.round(num / mag) * mag
  if (rounded >= 1000) {
    const k = rounded / 1000
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`
  }
  return String(rounded)
}

async function fetchSpeakerDeckViews(url: string): Promise<string | null> {
  try {
    const proxies: Array<() => Promise<string | null>> = [
      async () => {
        const r = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
        if (!r.ok) return null
        return r.text()
      },
      async () => {
        const r = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, { signal: AbortSignal.timeout(8000) })
        if (!r.ok) return null
        const { contents } = await r.json()
        return contents ?? null
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
        if (!html || html.length < 100) continue
        const match = html.match(/title=(?:"|&quot;)([\d,]+)\s+views(?:"|&quot;)/)
        if (!match) continue
        const num = parseInt(match[1].replace(/,/g, ''), 10)
        if (isNaN(num) || num <= 0) continue
        return formatLikeSD(num)
      } catch { /* try next */ }
    }
    return null
  } catch {
    return null
  }
}

/**
 * 書籍: OpenLibrary が 404 (cover not found) を返した場合、
 * microlink 経由の OGP にフォールバックする
 */
async function handleImageError() {
  if (isBook.value && ogImage.value?.includes('openlibrary.org')) {
    ogImage.value = null
    const ogp = await fetchOgImage(props.url)
    if (ogp) {
      ogImage.value = ogp
    } else {
      imageError.value = true
    }
  } else {
    imageError.value = true
  }
}

onMounted(async () => {
  if (isPodcast.value) { loading.value = false; return }

  // image prop が指定されていれば OGP フェッチをスキップ
  if (props.image) {
    const base = site.value.base ?? '/'
    // ルート相対パス ("/foo.svg") に base が付いていない場合は補完する
    ogImage.value = props.image.startsWith('/') && !props.image.startsWith(base)
      ? base + props.image.slice(1)
      : props.image
    loading.value = false
    return
  }

  // 書籍: 出版社別の直接 CDN URL または OpenLibrary カバー画像を優先利用
  // URL が null の場合は microlink OGP にフォールバック（handleImageError 経由）
  if (isBook.value) {
    const coverUrl = buildBookCoverUrl(props.url)
    if (coverUrl) {
      ogImage.value = coverUrl
      loading.value = false
      return
    }
  }

  const tasks: Promise<void>[] = [
    fetchOgImage(props.url).then(img => { ogImage.value = img }),
  ]
  if (isSpeakerDeck.value) {
    tasks.push(fetchSpeakerDeckViews(props.url).then(v => { viewCount.value = v }))
  }
  await Promise.all(tasks)
  loading.value = false
})
</script>

<template>
  <a :href="url" target="_blank" rel="noopener" :class="['obp-card', isBook ? 'obp-card-book' : '']">

    <!-- ===== 書籍: 横並びレイアウト（カバー左・情報右） ===== -->
    <template v-if="isBook">
      <div class="obp-book-cover">
        <img
          v-if="ogImage && !imageError"
          :src="ogImage"
          :alt="title"
          loading="lazy"
          @error="handleImageError"
          class="obp-book-cover-img"
        />
        <div v-else-if="loading" class="obp-card-thumb-skeleton" style="width:100%;height:100%">
          <span class="obp-skeleton-shimmer" />
        </div>
        <div v-else class="obp-book-cover-fallback">
          <span>📖</span>
        </div>
      </div>
      <div class="obp-card-body">
        <div class="obp-card-top">
          <span class="obp-source-badge" :class="sourceConfig.cls">{{ sourceConfig.label }}</span>
        </div>
        <p class="obp-card-title">{{ title }}</p>
        <p v-if="description" class="obp-card-desc">{{ description }}</p>
        <div class="obp-card-footer">
          <span v-if="author" class="obp-card-author">{{ author }}</span>
        </div>
      </div>
    </template>

    <!-- ===== Podcast: タイトル重視サムネイル ===== -->
    <template v-else-if="isPodcast">
      <div class="obp-card-thumbnail obp-thumb-podcast">
        <span class="obp-podcast-wave-bg">🎙</span>
        <span class="obp-podcast-ep-chip">ep.{{ episode }}</span>
        <p class="obp-podcast-title-main">{{ title }}</p>
      </div>
      <div class="obp-card-body">
        <div class="obp-card-top">
          <span class="obp-source-badge" :class="sourceConfig.cls">{{ sourceConfig.label }}</span>
        </div>
        <p v-if="description" class="obp-card-desc obp-podcast-desc">{{ description }}</p>
        <div class="obp-card-footer">
          <span v-if="author" class="obp-card-author">{{ author }}</span>
        </div>
      </div>
    </template>

    <!-- ===== その他: OGP画像サムネイル ===== -->
    <template v-else>
      <div class="obp-card-thumbnail">
        <img
          v-if="ogImage && !imageError"
          :src="ogImage"
          :alt="title"
          loading="lazy"
          @error="imageError = true"
          class="obp-card-thumb-img"
        />
        <div v-else-if="loading" class="obp-card-thumb-skeleton">
          <span class="obp-skeleton-shimmer" />
        </div>
        <div v-else class="obp-card-thumb-fallback" :style="{ background: sourceConfig.fallbackBg }">
          <span class="obp-card-thumb-icon">{{ sourceConfig.icon }}</span>
        </div>
      </div>
      <div class="obp-card-body">
        <div class="obp-card-top">
          <span class="obp-source-badge" :class="sourceConfig.cls">{{ sourceConfig.label }}</span>
          <span v-if="episode" class="obp-episode-num">#{{ episode }}</span>
        </div>
        <p class="obp-card-title">{{ title }}</p>
        <p v-if="description" class="obp-card-desc">{{ description }}</p>
        <div class="obp-card-footer">
          <span v-if="author" class="obp-card-author">{{ author }}</span>
          <div class="obp-card-footer-right">
            <span v-if="viewCount" class="obp-view-count">👀 {{ viewCount }}</span>
          </div>
        </div>
      </div>
    </template>

  </a>
</template>
