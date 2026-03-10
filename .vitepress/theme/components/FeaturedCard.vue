<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchOgImage } from '../composables/useOgImage'

const props = defineProps<{
  title: string
  url: string
  description: string
  author: string
  linkText: string
  label?: string
}>()

const ogImage = ref<string | null>(null)
const imageError = ref(false)
const loading = ref(true)

onMounted(async () => {
  ogImage.value = await fetchOgImage(props.url)
  loading.value = false
})
</script>

<template>
  <a :href="url" target="_blank" rel="noopener" class="obp-featured">
    <div class="obp-featured-thumb">
      <img
        v-if="ogImage && !imageError"
        :src="ogImage"
        :alt="title"
        loading="lazy"
        @error="imageError = true"
        class="obp-featured-thumb-img"
      />
      <div v-else-if="loading" class="obp-card-thumb-skeleton" style="width:100%;height:100%">
        <span class="obp-skeleton-shimmer" />
      </div>
      <div v-else class="obp-featured-thumb-fallback">📢</div>
    </div>
    <div class="obp-featured-body">
      <div class="obp-featured-label">{{ label ?? 'プロジェクト発足記事' }}</div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="obp-featured-meta">
        <span class="obp-featured-author">✍ {{ author }}</span>
        <span class="obp-featured-link">{{ linkText }} →</span>
      </div>
    </div>
  </a>
</template>
