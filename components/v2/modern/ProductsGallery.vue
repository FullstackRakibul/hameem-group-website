<template>
  <section ref="root" class="bg-ink-950 py-24 md:py-36">
    <div class="container mx-auto px-4">
      <SectionIntro index="06" eyebrow="Major products" title="Made for the rails" accent="of the world's high streets." class="mb-14 md:mb-20">
        <template #action>
          <NuxtLink
            to="/our-gallery"
            class="intro-el mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-coral hover:text-coral md:float-right"
          >
            View full gallery <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </template>
      </SectionIntro>

      <div class="grid auto-rows-[240px] grid-cols-2 gap-4 lg:grid-cols-4">
        <figure
          v-for="(p, i) in products"
          :key="p.title"
          class="product group relative overflow-hidden rounded-[28px] border border-white/10"
          :class="p.span"
        >
          <img :src="p.image" :alt="p.title" class="product-img absolute inset-0 h-[115%] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent"></div>
          <figcaption class="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3 backdrop-blur-xl">
            <span class="font-semibold tracking-tight text-white">{{ p.title }}</span>
            <span class="font-mono text-xs text-white/50">{{ String(i + 1).padStart(2, '0') }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionIntro from './SectionIntro.vue'

const products = [
  { title: 'Hi-Fashion', image: '/assets/v2/gallary/gallary-image-0002.jpg', span: 'col-span-2 row-span-2' },
  { title: 'Denim Jeans', image: '/assets/v2/gallary/gallary-image-0004.jpg', span: '' },
  { title: 'Critical Cargos', image: '/assets/v2/gallary/gallary-image-0003.jpg', span: 'row-span-2' },
  { title: 'Jackets', image: '/assets/v2/gallary/gallary-image-0005.jpg', span: '' },
  { title: '3D Whisker', image: '/assets/v2/gallary/gallary-image-0006.jpg', span: 'col-span-2' },
  { title: "Men's Shirts", image: '/assets/v2/gallary/gallary-image-0007.jpg', span: 'col-span-2 lg:col-span-2' },
]

const root = ref(null)

useGsapScope(root, (gsap) => {
  const q = gsap.utils.selector(root.value)
  q('.product').forEach((el, i) => {
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: (i % 3) * 0.08,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    })
    // inner parallax
    gsap.fromTo(el.querySelector('.product-img'), { yPercent: -8 }, {
      yPercent: 0,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  })
})
</script>
