<template>
  <section ref="root" class="bg-ink-950 py-24 md:py-36">
    <div class="container mx-auto px-4">
      <SectionIntro
        index="02"
        eyebrow="Industries"
        title="One group."
        accent="Eight industries."
        class="mb-14 md:mb-20"
      >
        Our manufacturing and media businesses share one standard of craft — from denim mills and
        laundries to a national daily and a 24-hour news channel.
      </SectionIntro>

      <div class="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="(item, i) in industries"
          :key="item.title"
          :to="item.link"
          class="cap-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-ink-900"
          :class="item.span"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent"></div>

          <div class="relative flex h-full flex-col justify-between p-6">
            <div class="flex items-start justify-between">
              <span class="font-mono text-xs text-white/50">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition-colors group-hover:border-coral group-hover:bg-coral group-hover:text-ink-950">
                <Icon name="mdi:arrow-top-right" />
              </span>
            </div>
            <div>
              <h3 class="text-2xl font-bold tracking-tight text-white md:text-3xl">{{ item.title }}</h3>
              <p class="mt-1 text-sm text-white/55">{{ item.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionIntro from './SectionIntro.vue'

// `span` drives the asymmetric bento rhythm on large screens
const industries = [
  { title: 'Woven', image: '/assets/industry/industry-image-01.jpg', description: '300 production lines in six locations.', link: '/industries/woven', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Denim Mill', image: '/assets/industry/denim-02.png', description: 'A serene 100-acre dream project.', link: '/denim', span: 'lg:col-span-2' },
  { title: 'Laundry', image: '/assets/industry/Laundry-01.webp', description: 'Dry process capability.', link: '/industries/laundry', span: '' },
  { title: 'Sweater', image: '/assets/industry/Sweater=01.jpeg', description: '400 Jacquard Stall machines.', link: '/industries/sweater', span: 'lg:row-span-2' },
  { title: 'Jute Mill', image: '/assets/industry/JuteMill-01.webp', description: 'A growing industry.', link: '/industries/jute-mill', span: '' },
  { title: 'Design', image: '/assets/industry/design-03.png', description: 'Experienced designers.', link: '/industries/design', span: 'lg:col-span-2' },
  { title: 'Newspaper', image: '/assets/industry/samakal.jpg', description: 'Samakal, a popular national daily.', link: '/industries/newspaper', span: 'lg:col-span-2' },
  { title: 'News Channel', image: '/assets/industry/ch24-logog.jpeg', description: 'Covering news across Bangladesh.', link: '/industries/news-channel', span: 'lg:col-span-2' },
]

const root = ref(null)

useGsapScope(root, (gsap, ScrollTrigger) => {
  gsap.set('.cap-card', { y: 80, opacity: 0 })
  ScrollTrigger.batch(root.value.querySelectorAll('.cap-card'), {
    start: 'top 88%',
    onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 }),
  })
})
</script>
