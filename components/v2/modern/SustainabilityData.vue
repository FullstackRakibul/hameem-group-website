<template>
  <section ref="root" data-shot="impact" class="relative px-4 py-24 sm:px-6 md:py-36 lg:px-10">
    <div class="mx-auto max-w-[1440px]">
      <SectionIntro index="04" eyebrow="Roadmap 2030" :lines="['Measured', 'not promised']" :accent-from="1">
        A framework built on two milestones: the happiness of our employees and a pollution-free nature.
      </SectionIntro>

      <!-- A8: oversized word overlapping the panels -->
      <p class="impact-word pointer-events-none relative -mb-[0.32em] mt-10 select-none whitespace-nowrap font-display font-bold uppercase leading-none tracking-[-0.06em] text-white/[0.07]" aria-hidden="true">
        Impact
      </p>

      <!-- A8 stat row with small icons (all company.ts) -->
      <dl class="relative grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div v-for="s in stats" :key="s.name" class="stat flex items-center gap-4 p-5" :class="glass">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-bleach/20 text-bleach" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path :d="s.icon" /></svg>
          </span>
          <div class="flex min-w-0 flex-col-reverse">
            <dt class="text-xs text-white/70">{{ s.name }}</dt>
            <dd class="font-mono text-xl font-semibold tabular-nums text-bleach">{{ s.count }}</dd>
          </div>
        </div>
      </dl>

      <div class="relative mt-4 grid gap-4 lg:grid-cols-12">
        <!-- signal data bars -->
        <article class="p-7 md:p-9 lg:col-span-7" :class="glass">
          <div class="flex items-center justify-between">
            <h3 class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">2030 targets</h3>
            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">% of goal</span>
          </div>
          <ul class="mt-8 space-y-6">
            <li v-for="t in roadmapTargets" :key="t.label">
              <div class="flex items-baseline justify-between gap-4">
                <span class="text-sm text-white/75">{{ t.label }}</span>
                <span class="font-mono text-sm font-semibold tabular-nums text-bleach">{{ t.display }}</span>
              </div>
              <div class="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div class="bar h-full origin-left rounded-full bg-bleach shadow-glow-bleach" :style="{ width: t.value + '%' }"></div>
              </div>
            </li>
          </ul>
          <p class="mt-6"><TodoTag label="add 2030 targets to data/company.ts (copied from the current site)" /></p>
        </article>

        <!-- B5 index rows -->
        <ol class="lg:col-span-5" :class="glass">
          <li v-for="(p, i) in pillars" :key="p.title" class="pillar flex flex-col gap-2 border-b border-white/5 px-7 py-6 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between">
            <span class="font-display text-xl font-bold uppercase tracking-[-0.02em] text-white">
              <span class="mr-2 font-mono text-sm font-normal text-thread-300">({{ pad2(i + 1) }})</span>{{ p.title }} —
            </span>
            <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 sm:text-right">{{ p.metric }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import { roadmapTargets } from '~/composables/nexus/content.js'
import { glass, pad2 } from '~/composables/nexus/ui.js'
import SectionIntro from './SectionIntro.vue'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

const unit = (name) => companyData.factories.find((f) => f.name === name)?.count

const icons = {
  sun: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z',
  loop: 'M4 12a8 8 0 0114-5.3L20 9M20 4v5h-5M20 12a8 8 0 01-14 5.3L4 15M4 20v-5h5',
  wave: 'M3 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0',
  beam: 'M4 20L20 4M14 4h6v6M6 12l-2 2M12 18l-2 2',
}
const stats = [
  { name: 'Solar Capacity', icon: icons.sun },
  { name: 'Fiber Recycling', icon: icons.loop },
  { name: 'Ozone Machines', icon: icons.wave },
  { name: 'Laser Machines', icon: icons.beam },
].map((s) => ({ ...s, count: unit(s.name) }))

const pillars = [
  { title: 'Fabric', metric: 'Natural fibres · green dyes' },
  { title: 'Wash', metric: `${unit('Ozone Machines')} ozone · ${unit('Laser Machines')} laser machines` },
  { title: 'Energy', metric: `${unit('Solar Capacity')} solar · net-zero GHG target` },
]

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.impact-word', { xPercent: -8, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.impact-word', start: 'top 85%', once: true } })
  gsap.from('.stat', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: '.stat', start: 'top 88%', once: true } })
  gsap.from('.bar', { scaleX: 0, duration: 1.4, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.bar', start: 'top 88%', once: true } })
  gsap.from('.pillar', { x: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: '.pillar', start: 'top 88%', once: true } })
})
</script>

<style scoped>
.impact-word {
  font-size: clamp(5rem, 22vw, 22rem);
}
</style>
