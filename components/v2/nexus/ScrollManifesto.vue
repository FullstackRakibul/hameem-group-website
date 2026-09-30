<template>
  <!-- A3: scroll-scrubbed statement. Height + sticky only when motion is allowed. -->
  <section id="manifesto" ref="root" data-shot="manifesto" class="relative px-4 py-32 motion-safe:h-[250vh] motion-safe:py-0 sm:px-6 lg:px-10">
    <div class="mx-auto flex max-w-[1440px] items-center motion-safe:sticky motion-safe:top-0 motion-safe:h-screen">
      <div>
        <p class="mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
          <span class="text-thread-300">[00]</span> System log · origin
        </p>
        <p class="font-display text-[clamp(2rem,4.6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
          <template v-for="(w, i) in words" :key="i">
            <span
              class="word inline-block"
              :class="w.data ? 'font-mono font-semibold tabular-nums tracking-[-0.02em] text-bleach' : ''"
            >{{ w.text }}</span>{{ ' ' }}
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'

const stat = (label) => companyData.stats.find((s) => s.label === label)?.value
const unit = (name) => companyData.factories.find((f) => f.name === name)?.count

// every figure is read from company.ts; `data: true` renders it as a bleach mono value
const parts = [
  { text: 'From a single garment factory in' },
  { text: stat('Since'), data: true },
  { text: 'to a vertical system of' },
  { text: stat('Employees'), data: true },
  { text: 'people,' },
  { text: unit('Garment Factories'), data: true },
  { text: 'garment factories and' },
  { text: unit('Solar Capacity'), data: true },
  { text: 'of solar.' },
]
const words = parts.flatMap((p) => (p.data ? [{ text: p.text, data: true }] : p.text.split(' ').map((text) => ({ text }))))

const root = ref(null)

useGsapScope(root, (gsap) => {
  // immediateRender:false → words stay at full contrast until the scrub range is reached
  // (the sticky text is still below the fold at that point, so the jump to 15% is never seen)
  gsap.fromTo(
    '.word',
    { opacity: 0.15, filter: 'blur(4px)' },
    {
      opacity: 1,
      filter: 'blur(0px)',
      ease: 'none',
      stagger: 0.1,
      immediateRender: false,
      scrollTrigger: { trigger: root.value, start: 'top 85%', end: 'bottom bottom', scrub: true },
    },
  )
})
</script>
