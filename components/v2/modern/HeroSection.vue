<template>
  <section ref="root" data-shot="hero" class="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-8 pt-24 sm:px-6 lg:px-10">
    <!-- HUD overlays: 64px grid (4%) + scanlines (3%), faded at the edges -->
    <div class="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute inset-0 bg-scanlines" aria-hidden="true"></div>

    <div class="relative mx-auto w-full max-w-[1440px]">
      <!-- single line in every font (fallback or webfont), so the swap can't reflow the hero (CLS) -->
      <p class="hero-fade mb-6 inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-xl sm:text-[11px]">
        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-800 text-thread-300" aria-hidden="true">◎</span>
        <span class="truncate">Comprehensive global garment manufacturer</span>
      </p>

      <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
        <!-- B1: giant display type over the WebGL core -->
        <h1
          aria-label="Manufacture the future"
          class="hero-title font-display font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white mix-blend-difference lg:col-span-8"
        >
          <!-- inline spans + <br>: the whole h1 stays one text block, so it is the LCP element -->
          <template v-for="(line, i) in lines" :key="line"><br v-if="i" /><span aria-hidden="true">{{ line }}</span></template>
        </h1>

        <div class="hero-fade max-w-md lg:col-span-4 lg:pb-4">
          <p class="min-h-[7rem] text-lg leading-relaxed text-white/75 sm:min-h-0">
            An AI-integrated garment manufacturing OS. Traceable, intelligent, vertical.
          </p>
          <p class="mt-2"><TodoTag label="client approval of hero sub-line" /></p>
          <!-- stacked on mobile so a font swap can never change the row count (CLS) -->
          <div class="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <NuxtLink to="/contact" class="group inline-flex items-center justify-center gap-2 rounded-full bg-thread px-6 py-3 font-semibold text-void transition-shadow hover:shadow-glow-thread" :class="focusRing">
              Talk to our team <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
            </NuxtLink>
            <a href="#manifesto" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white/90 transition-colors hover:border-white/40" :class="focusRing">
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
            <li v-for="(logo, i) in logos" :key="logo.file" :class="i > 3 ? 'hidden sm:block' : ''">
              <img
                :src="`/assets/v2/clients/${logo.file}`"
                :alt="logo.name"
                width="432"
                height="247"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                class="h-9 w-auto rounded-md opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-11"
              />
            </li>
          </ul>
        </div>

        <div class="proof-card relative shrink-0 self-start rounded-[28px] border border-thread/30 bg-ink-950/60 p-5 backdrop-blur-xl md:self-end">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">● Live system record</p>
          <p class="mt-2 whitespace-nowrap font-mono text-xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">
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
  gsap.to('.proof-card', { y: -10, duration: 3.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.5 })

  // canvas visibility (any part of the hero on screen)
  ScrollTrigger.create({
    trigger: root.value,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => setVisible('heroVisible', self.isActive),
  })

  // scroll scrub: camera dive + vortex speed-up + scatter live in the scene;
  // here we feed progress and slide the headline out
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
    // explicit start values: never capture a mid-CSS-animation transform as the origin
    .fromTo(title, { yPercent: 0, opacity: 1 }, { yPercent: -18, opacity: 0.15, ease: 'none', immediateRender: false }, 0)
})
</script>

<style scoped>
.hero-title {
  font-size: clamp(4rem, min(12vw, 17svh), 14rem);
}

/* Entry is CSS, not GSAP: it starts with the first paint, so the LCP element (the h1)
   renders immediately instead of waiting for hydration. A clip-path curtain + rise
   keeps the h1 LCP-eligible (Chrome skips text that fades in from opacity 0). */
@media (prefers-reduced-motion: no-preference) {
  .hero-title {
    animation: nx-curtain 0.9s cubic-bezier(0.16, 1, 0.3, 1) backwards; /* backwards: releases transform to GSAP afterwards */
  }
  .hero-fade {
    animation: nx-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  }
}
@keyframes nx-curtain {
  /* starts part-open so the first painted frame already contains the headline (LCP = first paint) */
  from {
    clip-path: inset(45% 0 0 0);
    transform: translateY(6%);
  }
  to {
    clip-path: inset(0 0 0 0);
    transform: translateY(0);
  }
}
@keyframes nx-fade {
  from {
    transform: translateY(16px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
