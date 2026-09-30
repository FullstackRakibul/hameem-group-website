<template>
  <section ref="root" data-shot="glance" class="px-4 py-24 sm:px-6 md:py-36 lg:px-10">
    <div class="mx-auto max-w-[1440px]">
      <SectionIntro index="01" eyebrow="At a glance" :lines="['Four', 'decades', 'of scale']" :accent-from="2" class="mb-14 md:mb-20">
        A vertical group across knit, woven and denim, built for global brands and measured line by line.
      </SectionIntro>

      <div class="grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <!-- B6 image card (curtain reveal) -->
        <article class="curtain relative overflow-hidden rounded-[28px] border border-white/5 sm:col-span-2 lg:col-span-3 lg:row-span-2">
          <img
            src="/assets/v2/index/v2Hero-section-banner-hameemgroup-image-000002.JPG"
            alt="Ha-Meem Group design studio"
            width="3984"
            height="2240"
            loading="lazy"
            decoding="async"
            class="curtain-media absolute inset-0 h-full w-full object-cover saturate-[.8]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
          <div class="relative flex h-full min-h-[400px] flex-col justify-end p-7">
            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-thread-300">{{ companyData.panelTitle }}</span>
            <p class="mt-3 max-w-md font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white md:text-3xl">
              {{ companyData.panelDescription }}
            </p>
          </div>
        </article>

        <!-- HUD stat panels -->
        <article
          v-for="(s, i) in headline"
          :key="s.label"
          class="hud flex flex-col justify-between gap-6 p-6"
          :class="[glass, i === 0 ? 'border-thread/30 lg:col-span-2' : i === 1 ? 'lg:col-span-1' : 'lg:col-span-2']"
        >
          <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">[{{ pad2(i + 1) }}] {{ s.label }}</span>
          <div>
            <span class="count block font-mono text-5xl font-semibold tabular-nums tracking-[-0.04em] text-bleach md:text-6xl" :data-value="s.value">{{ s.value }}</span>
            <HudSparkline :seed="i + 3" class="mt-4" />
          </div>
        </article>

        <!-- HQ globe -->
        <article class="hud flex flex-col gap-4 p-6 sm:flex-row sm:items-center lg:col-span-3 lg:row-start-2 lg:col-start-4" :class="glass">
          <GlobeCard class="mx-auto shrink-0 sm:w-[46%]" />
          <div>
            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">[04] HQ node</span>
            <p class="mt-2 font-mono text-2xl font-semibold uppercase text-bleach">Dhaka · 23.76°N 90.40°E</p>
            <p class="mt-2 text-sm text-white/70">Tejgaon Industrial Area, Bangladesh.</p>
            <p class="mt-3"><TodoTag label="client region list for globe hotspots" /></p>
          </div>
        </article>

        <!-- Factory counts -->
        <article class="hud p-6 sm:col-span-2 lg:col-span-4" :class="glass">
          <div class="mb-5 flex items-center justify-between">
            <h3 class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">[05] Vertical footprint</h3>
            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">{{ companyData.factories.length }} units</span>
          </div>
          <dl class="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            <div v-for="f in companyData.factories" :key="f.name" class="border-t border-white/5 pt-3">
              <dd class="font-mono text-xl font-semibold tabular-nums text-white">{{ f.count }}</dd>
              <dt class="mt-1 text-xs text-white/60">{{ f.name }}</dt>
            </div>
          </dl>
        </article>

        <!-- Origin + expertise -->
        <article class="hud relative flex flex-col justify-between gap-4 overflow-hidden p-6 sm:col-span-2 lg:col-span-6 lg:flex-row lg:items-end" :class="glass">
          <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">[06] Est.</span>
          <div class="lg:flex lg:flex-1 lg:items-end lg:justify-between lg:gap-8">
            <span class="font-mono text-6xl font-semibold tabular-nums tracking-tight text-white">{{ since }}</span>
            <ul class="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:justify-end">
              <li v-for="t in companyData.tags" :key="t" class="rounded-full border border-thread/30 px-3 py-1 text-xs text-thread-300">{{ t }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import { glass, pad2 } from '~/composables/nexus/ui.js'
import SectionIntro from './SectionIntro.vue'
import HudSparkline from '~/components/v2/nexus/HudSparkline.vue'
import GlobeCard from '~/components/v2/nexus/GlobeCard.vue'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

// "Since" gets its own panel; the three measurable stats count up.
// (The description's line/garment figures conflict with these stats and are not shown.)
const headline = companyData.stats.filter((s) => s.label !== 'Since')
const since = companyData.stats.find((s) => s.label === 'Since')?.value

const root = ref(null)

useGsapScope(root, (gsap) => {
  const q = gsap.utils.selector(root.value)

  // curtain wipe + media settle
  gsap.fromTo('.curtain', { clipPath: 'inset(100% 0 0 0)' }, {
    clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power4.out',
    scrollTrigger: { trigger: '.curtain', start: 'top 85%', once: true },
  })
  gsap.fromTo('.curtain-media', { scale: 1.08 }, { scale: 1, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: '.curtain', start: 'top 85%', once: true } })

  gsap.from('.hud', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.07, scrollTrigger: { trigger: '.hud', start: 'top 85%', once: true } })

  // count-up: "75K+" → 0…75 with prefix/suffix kept; ends on the exact company.ts string
  q('.count').forEach((el) => {
    const final = el.dataset.value
    const m = final.match(/^([^\d]*)([\d.,]+)(.*)$/)
    if (!m) return
    const [, pre, num, post] = m
    const decimals = (num.split('.')[1] || '').length
    const obj = { v: 0 }
    gsap.to(obj, {
      v: parseFloat(num.replace(/,/g, '')),
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = pre + obj.v.toFixed(decimals) + post),
      onComplete: () => (el.textContent = final),
    })
  })
})
</script>
