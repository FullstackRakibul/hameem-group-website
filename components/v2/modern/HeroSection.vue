<template>
  <section ref="root" data-shot="hero" class="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-8 pt-24 sm:px-6 lg:px-10">
    <!-- HUD overlays: 64px grid (4%) + scanlines (3%), faded at the edges -->
    <div class="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 bg-scanlines" aria-hidden="true"></div>

    <div class="relative mx-auto w-full max-w-[1440px]">
      <p class="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-xl">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-ink-800 text-thread-300" aria-hidden="true">◎</span>
        Comprehensive global garment manufacturer
      </p>

      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <!-- B1: giant display type over the WebGL core -->
        <h1
          aria-label="Manufacture the future"
          class="hero-title font-display font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white mix-blend-difference lg:col-span-8"
        >
          <span v-for="(line, i) in lines" :key="line" class="hero-mask block overflow-hidden pb-[0.04em]" aria-hidden="true">
            <span class="hero-line block" :style="{ '--i': i }">{{ line }}</span>
          </span>
        </h1>

        <div class="hero-fade max-w-md lg:col-span-4 lg:pb-4">
          <p class="text-lg leading-relaxed text-white/75">
            An AI-integrated garment manufacturing OS. Traceable, intelligent, vertical.
          </p>
          <p class="mt-2"><TodoTag label="client approval of hero sub-line" /></p>
          <div class="mt-7 flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="group inline-flex items-center gap-2 rounded-full bg-thread px-6 py-3 font-semibold text-void transition-shadow hover:shadow-glow-thread" :class="focusRing">
              Talk to our team <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
            </NuxtLink>
            <a href="#manifesto" class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white/90 transition-colors hover:border-white/40" :class="focusRing">
              Enter the system <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <!-- A2: trusted-by row + floating proof card -->
      <div class="mt-12 flex flex-col gap-6 border-t border-white/5 pt-6 md:flex-row md:items-end md:justify-between">
        <div class="hero-fade min-w-0">
          <p class="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">Supplier to world-leading brands</p>
          <ul class="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Selected clients">
            <li v-for="logo in logos" :key="logo.file">
              <img
                :src="`/assets/v2/clients/${logo.file}`"
                :alt="logo.name"
                width="432"
                height="247"
                decoding="async"
                fetchpriority="low"
                class="h-9 w-auto rounded-md opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-11"
              />
            </li>
          </ul>
        </div>

        <div class="proof-card relative shrink-0 self-start rounded-[28px] border border-thread/30 bg-ink-950/60 p-5 backdrop-blur-xl md:self-end">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">● Live system record</p>
          <p class="mt-2 font-mono text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">
            SINCE {{ since }} · {{ employees }} PEOPLE
          </p>
          <p class="mt-1 text-sm text-white/70">One vertical group, fibre to finished garment.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'
import { focusRing } from '~/composables/nexus/ui.js'
import { glitchOnce } from '~/composables/nexus/glitch.js'
import { clientLogos } from '~/composables/nexus/content.js'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

const lines = ['Manu', 'facture', 'the', 'future']
const stat = (label) => companyData.stats.find((s) => s.label === label)?.value
const since = stat('Since')
const employees = stat('Employees')
const logos = clientLogos.slice(0, 6)

const root = ref(null)
const { frame, setVisible } = useNexusScene()

useGsapScope(root, (gsap, ScrollTrigger) => {
  const title = root.value.querySelector('.hero-title')
  // entry glitch once, after the CSS line rise has landed
  gsap.delayedCall(1.05, () => glitchOnce(gsap, title))
  gsap.from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.35 })
  gsap.to('.proof-card', { y: -10, duration: 3.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.5 })

  // canvas visibility (any part of the hero on screen)
  ScrollTrigger.create({
    trigger: root.value,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => setVisible('heroVisible', self.isActive),
  })

  // scroll scrub: camera dive + vortex speed-up + scatter live in the scene;
  // here we feed progress and slide the headline lines out (outer masks: the
  // inner lines are owned by the CSS entry animation)
  let glitched = false
  gsap
    .timeline({
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          frame.heroProgress = self.progress
          if (!glitched && self.progress > 0.35 && self.direction > 0) {
            glitched = true
            glitchOnce(gsap, title)
          }
        },
      },
    })
    .to('.hero-mask', { yPercent: -35, opacity: 0.15, ease: 'none', stagger: 0.06 }, 0)
})
</script>

<style scoped>
.hero-title {
  font-size: clamp(4rem, min(12vw, 17svh), 14rem);
}

/* Entry rise is CSS (starts at first paint → LCP is the h1 text, not a JS-delayed frame) */
@media (prefers-reduced-motion: no-preference) {
  .hero-line {
    animation: nx-rise 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
    animation-delay: calc(var(--i) * 90ms);
  }
}
@keyframes nx-rise {
  from {
    transform: translateY(105%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
