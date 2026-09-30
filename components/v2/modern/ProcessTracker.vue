<template>
  <section ref="root" class="relative overflow-hidden border-y border-white/5 bg-ink-900">
    <div class="pin-wrap flex min-h-screen flex-col justify-center py-24">
      <div class="container mx-auto px-4">
        <SectionIntro
          index="03"
          eyebrow="How we make"
          title="Fibre to finished garment,"
          accent="under one roof."
          class="mb-16"
        >
          Vertical integration means fewer hand-offs, tighter quality control and full traceability for
          every order — from the first spun yarn to the carton that ships.
        </SectionIntro>

        <!-- progress rail -->
        <div class="relative mb-10 hidden h-px bg-white/10 lg:block">
          <div class="rail-fill absolute inset-y-0 left-0 w-full origin-left bg-coral"></div>
        </div>

        <ol class="grid gap-4 lg:grid-cols-5">
          <li
            v-for="(step, i) in steps"
            :key="step.title"
            class="step relative rounded-[24px] border border-white/10 bg-ink-950/60 p-6 backdrop-blur"
          >
            <div class="flex items-center justify-between">
              <span class="step-num font-mono text-sm text-coral">{{ String(i + 1).padStart(2, '0') }}</span>
              <Icon :name="step.icon" class="text-xl text-white/40" />
            </div>
            <h3 class="mt-8 text-2xl font-bold tracking-tight text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">{{ step.text }}</p>
            <p v-if="step.metric" class="mt-6 border-t border-white/10 pt-4 font-mono text-xs text-white/70">
              {{ step.metric }}
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import SectionIntro from './SectionIntro.vue'

const count = (name) => companyData.factories.find((f) => f.name === name)?.count
const capacity = companyData.stats.find((s) => s.label === 'Monthly Capacity')?.value

const steps = [
  { title: 'Spin', icon: 'mdi:factory', text: 'Spinning mills and fibre recycling turn cotton and post-industrial waste into yarn.', metric: `${count('Spinning Mills')} mills · ${count('Fiber Recycling')}` },
  { title: 'Weave', icon: 'mdi:texture-box', text: 'Our denim mill weaves and dyes fabric in-house for consistent shade and hand-feel.', metric: `${capacity} / month` },
  { title: 'Design', icon: 'mdi:draw-pen', text: 'In-house designers develop, fit and sample collections side by side with buyers.' },
  { title: 'Sew', icon: 'mdi:needle', text: 'Eliot RFID captures every sewing operation in real time — a factory that speaks to you.', metric: `${count('Garment Factories')} garment factories` },
  { title: 'Finish', icon: 'mdi:washing-machine', text: 'Ozone and laser finishing deliver low-water, low-chemical washes before pack and ship.', metric: `${count('Ozone Machines')} ozone · ${count('Laser Machines')} laser` },
]

const root = ref(null)

useGsapScope(root, (gsap) => {
  const mm = gsap.matchMedia(root.value)
  const q = gsap.utils.selector(root.value)

  // Desktop: pin the section and scrub through the steps
  mm.add('(min-width: 1024px)', () => {
    gsap.set('.step', { opacity: 0.25, y: 30 })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: '+=160%',
        pin: '.pin-wrap',
        scrub: 0.6,
      },
    })
    tl.fromTo('.rail-fill', { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: steps.length }, 0)
    q('.step').forEach((el, i) => {
      tl.to(el, { opacity: 1, y: 0, borderColor: 'rgba(255,107,74,0.5)', duration: 0.5 }, i + 0.1)
      if (i < steps.length - 1) tl.to(el, { borderColor: 'rgba(255,255,255,0.1)', duration: 0.4 }, i + 1)
    })
  })

  // Mobile / tablet: simple stacked reveal
  mm.add('(max-width: 1023px)', () => {
    q('.step').forEach((el) => {
      gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } })
    })
  })

  return () => mm.revert()
})
</script>
