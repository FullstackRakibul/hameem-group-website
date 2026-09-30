<template>
  <section ref="root" class="bg-ink-950 py-24 md:py-36">
    <div class="container mx-auto px-4">
      <SectionIntro
        index="01"
        eyebrow="At a glance"
        title="Four decades of scale,"
        accent="built one line at a time."
        class="mb-14 md:mb-20"
      >
        {{ companyData.description }}
      </SectionIntro>

      <div class="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <!-- Image feature -->
        <article class="bento relative overflow-hidden rounded-[28px] border border-white/10 sm:col-span-2 lg:col-span-3 lg:row-span-2">
          <img
            src="/assets/v2/index/v2Hero-section-banner-hameemgroup-image-000002.JPG"
            alt="Ha-Meem Group design studio"
            class="bento-img absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"></div>
          <div class="relative flex h-full min-h-[380px] flex-col justify-end p-8">
            <span class="font-mono text-xs uppercase tracking-widest text-coral">{{ companyData.panelTitle }}</span>
            <p class="mt-3 max-w-md text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
              {{ companyData.panelDescription }}
            </p>
          </div>
        </article>

        <!-- Headline stats -->
        <article
          v-for="(stat, i) in headline"
          :key="stat.label"
          class="bento flex flex-col justify-between rounded-[28px] border p-7"
          :class="[
            i === 0 ? 'border-coral/40 bg-coral text-ink-950 lg:col-span-2' : 'border-white/10 bg-ink-900 text-white',
            i === 1 ? 'lg:col-span-1' : '',
            i >= 2 ? 'lg:col-span-3 lg:col-start-4' : '',
          ]"
        >
          <span class="font-mono text-xs uppercase tracking-widest" :class="i === 0 ? 'text-ink-950/60' : 'text-white/40'">
            {{ String(i + 1).padStart(2, '0') }} · {{ stat.label }}
          </span>
          <span class="count mt-6 text-5xl font-black tracking-[-0.04em] md:text-6xl" :data-value="stat.value">{{ stat.value }}</span>
        </article>

        <!-- Factories list -->
        <article class="bento rounded-[28px] border border-white/10 bg-ink-900 p-7 sm:col-span-2 lg:col-span-4">
          <div class="mb-5 flex items-center justify-between">
            <h3 class="text-lg font-semibold text-white">Vertical footprint</h3>
            <span class="font-mono text-xs text-white/40">{{ companyData.factories.length }} units</span>
          </div>
          <dl class="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
            <div v-for="f in companyData.factories" :key="f.name" class="border-t border-white/10 pt-3">
              <dd class="font-mono text-xl font-semibold text-white">{{ f.count }}</dd>
              <dt class="mt-1 text-xs text-white/50">{{ f.name }}</dt>
            </div>
          </dl>
        </article>

        <!-- Origin -->
        <article class="bento relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:col-span-2 lg:col-span-2">
          <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl"></div>
          <span class="relative font-mono text-xs uppercase tracking-widest text-white/40">Est.</span>
          <div class="relative">
            <span class="font-mono text-6xl font-semibold tracking-tight text-white">{{ since }}</span>
            <p class="mt-2 text-sm text-white/50">Started with a single garment factory.</p>
          </div>
        </article>

        <!-- Tags -->
        <article class="bento flex flex-wrap content-start gap-2 rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:col-span-2 lg:col-span-6">
          <span class="mr-4 self-center font-mono text-xs uppercase tracking-widest text-white/40">Expertise</span>
          <span
            v-for="t in companyData.tags"
            :key="t"
            class="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-coral hover:text-coral"
          >
            {{ t }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import SectionIntro from './SectionIntro.vue'

// "Since" gets its own card; the three measurable stats count up
const headline = companyData.stats.filter((s) => s.label !== 'Since')
const since = companyData.stats.find((s) => s.label === 'Since')?.value

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.bento', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: { trigger: root.value, start: 'top 70%' },
  })

  gsap.fromTo('.bento-img', { scale: 1.2 }, {
    scale: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.bento-img', start: 'top bottom', end: 'bottom top', scrub: true },
  })

  // count-up: "75K+" → 0…75 with prefix/suffix preserved
  gsap.utils.selector(root.value)('.count').forEach((el) => {
    const m = el.dataset.value.match(/^([^\d]*)([\d.,]+)(.*)$/)
    if (!m) return
    const [, pre, num, post] = m
    const target = parseFloat(num.replace(/,/g, ''))
    const decimals = (num.split('.')[1] || '').length
    const obj = { v: 0 }
    gsap.to(obj, {
      v: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => (el.textContent = pre + obj.v.toFixed(decimals) + post),
    })
  })
})
</script>
