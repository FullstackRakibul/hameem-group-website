<template>
  <section ref="root" class="bg-ink-950 pb-24 md:pb-36">
    <div class="container mx-auto px-4">
      <SectionIntro index="07" eyebrow="Insights" title="News from" accent="the factory floor." class="mb-14 md:mb-20" />

      <div class="grid gap-4 lg:grid-cols-3">
        <NuxtLink
          v-for="(post, i) in posts"
          :key="post.slug"
          :to="`/blogs/${post.slug}`"
          class="post group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-ink-900 transition-colors hover:border-coral/40"
          :class="i === 0 ? 'lg:row-span-2' : 'lg:col-span-2 lg:flex-row'"
        >
          <div class="relative overflow-hidden" :class="i === 0 ? 'aspect-[4/5] lg:aspect-auto lg:flex-1' : 'aspect-video lg:aspect-auto lg:w-2/5'">
            <img :src="post.image" :alt="post.title" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div class="flex flex-1 flex-col justify-between gap-6 p-7">
            <div>
              <p class="font-mono text-xs uppercase tracking-widest text-white/40">{{ post.date }}</p>
              <h3 class="mt-3 text-2xl font-bold leading-tight tracking-tight text-white">{{ post.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-white/50">{{ post.description }}</p>
            </div>
            <span class="inline-flex items-center gap-2 text-sm font-medium text-coral">
              Read article <Icon name="mdi:arrow-right" class="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionIntro from './SectionIntro.vue'

const posts = [
  { image: '/assets/v2/index/IMG_4252.JPG', date: '12 Jan 2025', title: 'Ha-Meem is vertical in Denim', description: 'Installed capacity of over 4 million meters per month. Ha-Meem produces yarns...', slug: 'ha-meem-denim-vertical' },
  { image: '/assets/v2/index/IMG_7244.JPG', date: '12 Jan 2025', title: 'State of the art machineries', description: 'Ha-Meem is equipped with state-of-the-art machineries to keep pace...', slug: 'state-of-the-art-machinery' },
  { image: '/assets/v2/index/IMG_7299.JPG', date: '12 Jan 2025', title: "Ha-Meem's accessories unit is developing", description: 'Ha-Meem continues to innovate with its accessories manufacturing processes...', slug: 'accessories-unit' },
]

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.post', {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: { trigger: root.value, start: 'top 75%' },
  })
})
</script>
