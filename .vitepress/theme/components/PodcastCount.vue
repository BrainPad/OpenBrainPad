<script setup lang="ts">
import { ref, onMounted } from 'vue'

const count = ref<string>('89')

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

onMounted(async () => {
  const html = await fetchHtml('https://shirokane-kougyou.github.io')
  if (!html) return

  // /episode/数字 のURLを全て抽出して最大値をエピソード数とする
  const matches = html.matchAll(/\/episode\/(\d+)/g)
  let max = 0
  for (const m of matches) {
    const n = parseInt(m[1], 10)
    if (n > max) max = n
  }
  if (max > 0) count.value = String(max)
})
</script>

<template>
  <span>{{ count }}</span>
</template>
