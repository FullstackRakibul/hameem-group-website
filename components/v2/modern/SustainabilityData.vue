<template>
  <section ref="root" class="relative overflow-hidden bg-ink-950 py-24 md:py-36">
    <div class="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-coral/15 blur-[120px]"></div>

    <div class="container relative mx-auto px-4">
      <SectionIntro
        index="04"
        eyebrow="Roadmap 2030"
        title="Sustainability,"
        accent="measured — not promised."
        class="mb-14 md:mb-20"
      >
        A framework built on two milestones: the happiness of our employees and a pollution-free
        nature. These are the targets we report against.
      </SectionIntro>

      <div class="grid gap-4 lg:grid-cols-12">
        <!-- Target chart -->
        <article class="rounded-[28px] border border-white/10 bg-ink-900 p-7 md:p-10 lg:col-span-7">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-white">2030 targets</h3>
            <span class="font-mono text-xs text-white/40">% of goal</span>
          </div>

          <ul class="mt-8 space-y-7">
            <li v-for="t in targets" :key="t.label">
              <div class="flex items-baseline justify-between gap-4">
                <span class="text-sm text-white/70">{{ t.label }}</span>
                <span class="font-mono text-sm font-semibold text-white">{{ t.display }}</span>
              </div>
              <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                <div class="bar h-full origin-left rounded-full bg-gradient-to-r from-coral-600 to-coral-300" :style="{ width: t.value + '%' }"></div>
              </div>
            </li>
          </ul>
        </article>

        <!-- Pillars -->
        <div class="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          <article
            v-for="(p, i) in pillars"
            :key="p.title"
            class="pillar flex items-start gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral/15 text-coral">
              <Icon :name="p.icon" class="text-2xl" />
            </span>
            <div>
              <p class="font-mono text-[11px] text-white/40">{{ String(i + 1).padStart(2, '0') }}</p>
              <h4 class="mt-1 font-semibold text-white">{{ p.title }}</h4>
              <p class="mt-1 text-sm text-white/50">{{ p.text }}</p>
            </div>
          </article>
        </div>

        <!-- Initiatives -->
        <article class="rounded-[28px] border border-white/10 bg-ink-900 p-7 lg:col-span-12">
          <p class="mb-5 font-mono text-xs uppercase tracking-widest text-white/40">Initiatives in practice</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="g in initiatives"
              :key="g"
              class="chip rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
            >
              {{ g }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionIntro from './SectionIntro.vue'

const targets = [
  { label: 'Ground water use reduction', value: 70, display: '−70%' },
  { label: 'Renewable energy share', value: 50, display: '50%+' },
  { label: 'Material utilisation (waste < 2%)', value: 98, display: '98%+' },
  { label: 'Sustainable apparel', value: 100, display: '100%' },
  { label: 'Traceable, transparent supply chain', value: 100, display: '100%' },
]

const pillars = [
  { title: 'Fabric sustainability', text: 'Eco-friendly materials, natural fibres and green dyes.', icon: 'hugeicons:turtle-neck' },
  { title: 'Wash sustainability', text: 'Water-efficient laundry, ozone and laser technology.', icon: 'hugeicons:chart-line-data-01' },
  { title: 'Environment sustainability', text: 'Clean energy, net-zero GHG and zero liquid discharge.', icon: 'hugeicons:eco-energy' },
]

const initiatives = [
  'Net zero GHG emissions',
  'Zero liquid discharge',
  'Smart Factory 4.0',
  'Living wages',
  'Gender equality',
  'Environment friendly wash chemicals',
  'Power saving machinery',
  'Water saving & recycling',
  'Green dyes',
  'Natural fibres',
  'Sustainable laundry machines',
  'Laser technology',
]

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.bar', {
    scaleX: 0,
    duration: 1.4,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: { trigger: '.bar', start: 'top 85%' },
  })
  gsap.from('.pillar', {
    x: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: { trigger: '.pillar', start: 'top 85%' },
  })
  gsap.from('.chip', {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.03,
    scrollTrigger: { trigger: '.chip', start: 'top 90%' },
  })
})
</script>
