<template>
  <section ref="root" data-shot="capabilities" class="px-4 py-24 sm:px-6 md:py-36 lg:px-10">
    <div class="mx-auto max-w-[1440px]">
      <SectionIntro index="02" eyebrow="Industries" :lines="['One group', `${industries.length} industries`]" :accent-from="1" class="mb-14 md:mb-20">
        Manufacturing and media businesses that share one standard of craft, from denim mills and laundries to a national daily.
      </SectionIntro>

      <div class="grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="(item, i) in industries"
          :key="item.title"
          :to="item.to"
          class="cap-card group relative block overflow-hidden rounded-[28px] border border-white/5 bg-ink-950 transition-[border-color,box-shadow] duration-300 hover:border-thread/30 hover:shadow-glow-thread [transform-style:preserve-3d]"
          :class="[item.span, focusRing]"
          data-cursor
        >
          <img
            :src="item.image"
            :alt="item.title"
            :width="item.w"
            :height="item.h"
            loading="lazy"
            decoding="async"
            class="absolute inset-0 h-full w-full object-cover opacity-80 saturate-[.7] transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent"></div>
          <!-- HUD overlay: 64px grid + scanlines -->
          <div class="pointer-events-none absolute inset-0 bg-grid"></div>
          <div class="pointer-events-none absolute inset-0 bg-scanlines"></div>

          <div class="relative flex h-full flex-col justify-between p-6">
            <div class="flex items-start justify-between">
              <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">[{{ pad2(i + 1) }}]</span>
              <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-void/40 text-white backdrop-blur transition-colors group-hover:border-thread group-hover:bg-thread group-hover:text-void" aria-hidden="true">↗</span>
            </div>
            <div>
              <h3 class="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white md:text-3xl">{{ item.title }}</h3>
              <p class="mt-1 text-sm text-white/75">{{ item.text }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
      <p class="mt-6"><TodoTag label="industry detail pages (cards without a page link to /about)" /></p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { industries } from '~/composables/nexus/content.js'
import { focusRing, pad2 } from '~/composables/nexus/ui.js'
import SectionIntro from './SectionIntro.vue'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

const root = ref(null)
const { ui } = useNexusScene()

useGsapScope(root, (gsap, ScrollTrigger) => {
  const cards = root.value.querySelectorAll('.cap-card')
  gsap.set(cards, { y: 70, opacity: 0 })
  ScrollTrigger.batch(cards, {
    start: 'top 90%',
    once: true,
    onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.07 }),
  })
})

// Tilt + "OPEN" cursor: fine pointer + motion only (touch / reduced motion get neither).
// Pointer events only, so keyboard focus never tilts a card.
useGsapScope(
  root,
  (gsap) => {
    const offs = []
    root.value.querySelectorAll('.cap-card').forEach((card) => {
      gsap.set(card, { transformPerspective: 900 })
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' })
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' })
      const move = (e) => {
        const r = card.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        ry(px * 16) // ±8deg
        rx(-py * 16)
      }
      const enter = () => (ui.cursorLabel = 'OPEN')
      const leave = () => {
        rx(0)
        ry(0)
        ui.cursorLabel = ''
      }
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerenter', enter)
      card.addEventListener('pointerleave', leave)
      offs.push(() => {
        card.removeEventListener('pointermove', move)
        card.removeEventListener('pointerenter', enter)
        card.removeEventListener('pointerleave', leave)
      })
    })
    return () => {
      offs.forEach((off) => off())
      ui.cursorLabel = ''
    }
  },
  { media: '(pointer: fine)' },
)
</script>
