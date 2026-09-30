<template>
  <section ref="root" data-shot="process" class="relative">
    <div class="pin-wrap relative px-4 py-24 sm:px-6 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:px-10 lg:py-20">
      <div class="mx-auto w-full max-w-[1440px]">
        <SectionIntro index="03" eyebrow="How we make" :lines="['How', 'we', 'make']" :accent-from="2" />
        <div class="mt-6 max-w-md">
          <p class="text-base leading-relaxed text-white/70">
            Fibre to finished garment under one group: fewer hand-offs, tighter quality and full traceability.
          </p>
          <p class="readout mt-4 hidden font-mono text-[11px] uppercase tracking-[0.12em] text-bleach lg:block" aria-hidden="true">
            State [01/05] · {{ steps[0].title }}
          </p>
        </div>
      </div>

      <!-- Desktop: neon rail + A6 phase cards (row). Static equal row without motion. -->
      <div class="mx-auto mt-12 hidden w-full max-w-[1440px] lg:block">
        <div class="relative mb-5 h-[2px] rounded-full bg-white/5">
          <div class="rail-fill absolute inset-0 origin-left rounded-full bg-thread-bleach shadow-glow-bleach"></div>
        </div>
        <ol class="steps-row relative flex h-[300px] gap-3">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="step flex flex-1 flex-col justify-between overflow-hidden p-5 transition-colors duration-300"
            :class="[glass, i === 0 ? 'is-active' : '']"
          >
            <div class="flex items-start justify-between gap-3">
              <span class="step-num font-mono text-sm tabular-nums text-thread-300">{{ pad2(i + 1) }}</span>
              <StepGlyph :step="i" class="w-16 shrink-0 opacity-80" />
            </div>
            <div>
              <h3 class="step-title font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">{{ step.title }}</h3>
              <p class="mt-2 line-clamp-4 text-sm leading-relaxed text-white/70">{{ step.text }}</p>
              <p v-if="step.metric" class="mt-3 border-t border-white/5 pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">{{ step.metric }}</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Mobile / tablet: A5 sticky stacked cards with static SVG per step -->
      <ol class="mt-12 space-y-4 lg:hidden">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="sticky rounded-[28px] border border-white/5 bg-ink-950/95 p-6 backdrop-blur-xl"
          :style="{ top: `${88 + i * 14}px` }"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-sm tabular-nums text-thread-300">{{ pad2(i + 1) }} / {{ pad2(steps.length) }}</span>
            <span v-if="step.metric" class="font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">{{ step.metric }}</span>
          </div>
          <StepGlyph :step="i" class="mx-auto my-4 max-w-[220px]" />
          <h3 class="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/70">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import { glass, pad2 } from '~/composables/nexus/ui.js'
import SectionIntro from './SectionIntro.vue'
import StepGlyph from '~/components/v2/nexus/StepGlyph.vue'

const unit = (name) => companyData.factories.find((f) => f.name === name)?.count
const capacity = companyData.stats.find((s) => s.label === 'Monthly Capacity')?.value

const steps = [
  { title: 'Spin', text: 'Spinning mills and fibre recycling turn cotton and post-industrial waste into yarn.', metric: `${unit('Spinning Mills')} mills · ${unit('Fiber Recycling')}` },
  { title: 'Weave', text: 'Our denim mill weaves and dyes fabric in-house for consistent shade and hand-feel.', metric: `${capacity} / month` },
  { title: 'Design', text: 'In-house designers develop, fit and sample collections side by side with buyers.' },
  { title: 'Sew', text: 'Eliot RFID captures every sewing operation in real time: a factory that speaks to you.', metric: `${unit('Garment Factories')} garment factories` },
  { title: 'Finish', text: 'Ozone and laser finishing deliver low-water, low-chemical washes before pack and ship.', metric: `${unit('Ozone Machines')} ozone · ${unit('Laser Machines')} laser` },
]

const root = ref(null)
const { frame, setVisible } = useNexusScene()
const clamp01 = (x) => Math.min(Math.max(x, 0), 1)
const GAP = 12

// Desktop (≥1024px) with motion: pin + scrub through the 5 states
useGsapScope(
  root,
  (gsap, ScrollTrigger) => {
    const q = gsap.utils.selector(root.value)
    const row = q('.steps-row')[0]
    const cards = q('.step')
    const readout = q('.readout')[0]
    const fill = q('.rail-fill')[0]

    // Cards become absolutely positioned and are laid out with transforms + widths,
    // so the "active grows ×2" effect never moves a box's start point (no CLS).
    gsap.set(cards, { position: 'absolute', top: 0, left: 0, height: '100%', flex: 'none' })
    let active = -1

    const layout = (pp) => {
      const weights = cards.map((_, i) => 1 + Math.max(0, 1 - Math.abs(pp - i)))
      const total = weights.reduce((a, b) => a + b, 0)
      const unitW = (row.clientWidth - GAP * (cards.length - 1)) / total
      let x = 0
      cards.forEach((card, i) => {
        const w = weights[i] * unitW
        gsap.set(card, { x, width: w })
        x += w + GAP
      })
      gsap.set(fill, { scaleX: pp / 4 })
      const idx = Math.round(pp)
      if (idx !== active) {
        active = idx
        cards.forEach((c, i) => c.classList.toggle('is-active', i === idx))
        readout.textContent = `State [${pad2(idx + 1)}/05] · ${steps[idx].title}`
      }
    }

    const update = (p) => {
      const pp = clamp01((p - 0.1) / 0.8) * 4
      frame.processProgress = pp
      frame.processMix = clamp01(p / 0.08)
      frame.processAlpha = p < 0.94 ? clamp01(p / 0.08) : clamp01((1 - p) / 0.06)
      layout(pp)
    }

    const pin = ScrollTrigger.create({
      trigger: root.value,
      start: 'top top',
      end: '+=400%',
      pin: '.pin-wrap',
      scrub: true,
      onUpdate: (self) => update(self.progress),
      onRefresh: (self) => update(self.progress),
    })
    ScrollTrigger.create({
      trigger: root.value,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => setVisible('processVisible', self.isActive),
    })

    const onResize = () => update(pin.progress)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      setVisible('processVisible', false)
      frame.processMix = 0
      frame.processAlpha = 0
    }
  },
  { media: '(min-width: 1024px)' },
)
</script>

<style scoped>
/* A6: the active phase inverts to thread-on-ink */
.step.is-active {
  background: theme('colors.ink.950');
  border-color: theme('colors.thread.DEFAULT / 0.3');
  box-shadow: theme('boxShadow.glow-thread');
}
.step.is-active .step-title {
  color: theme('colors.thread.300');
}
</style>
