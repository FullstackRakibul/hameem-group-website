<template>
  <header class="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
    <div class="mx-auto flex max-w-[1440px] items-start justify-between gap-3">
      <!-- A1: floating pill, top-left -->
      <nav
        aria-label="Main"
        class="stitch pointer-events-auto relative flex origin-top-left items-center gap-1 rounded-full border bg-ink-950/70 py-1.5 pl-1.5 pr-2 backdrop-blur-2xl motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-300"
        :class="scrolled ? 'scale-[0.94] border-thread/30 shadow-glow-thread' : 'border-white/5'"
      >
        <NuxtLink to="/" class="rounded-full" :class="focusRing" aria-label="Ha-Meem Group home">
          <span class="flex h-10 items-center rounded-full bg-white px-3">
            <img src="/assets/v2/header/hameem-group-logo-primary.png" alt="" width="348" height="102" class="h-6 w-auto" />
          </span>
        </NuxtLink>

        <!-- <span class="ml-1 inline-flex items-center gap-2 rounded-full border border-bleach/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full rounded-full bg-bleach opacity-70 motion-safe:animate-ping"></span>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-bleach"></span>
          </span>
          SYS ONLINE
        </span> -->

        <ul class="hidden items-center md:flex">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="rounded-full px-3.5 py-2 text-sm text-white/75 transition-colors hover:text-white" :class="focusRing">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          :class="focusRing"
          :aria-expanded="open"
          aria-controls="nx-mobile-menu"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path v-if="open" d="M6 6l12 12M18 6L6 18" />
            <path v-else d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>
      </nav>

      <!-- A1: avatar CTA pill, top-right -->
      <NuxtLink
        to="/contact"
        class="group pointer-events-auto hidden origin-top-right items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-5 text-sm font-semibold text-void motion-safe:transition-transform motion-safe:duration-300 sm:flex"
        :class="[focusRing, scrolled ? 'scale-[0.94] shadow-glow-thread' : '']"
      >
        <span class="flex -space-x-2">
          <img v-for="a in avatars" :key="a" :src="a" alt="" width="32" height="32" class="h-8 w-8 rounded-full border-2 border-white object-cover object-top" />
        </span>
        Talk to us...
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-void text-white transition-colors group-hover:bg-thread group-hover:text-void" aria-hidden="true">→</span>
      </NuxtLink>
    </div>

    <div
      v-show="open"
      id="nx-mobile-menu"
      class="pointer-events-auto mx-auto mt-2 max-w-md rounded-[28px] border border-white/5 bg-ink-950/95 p-2 backdrop-blur-2xl md:hidden"
    >
      <NuxtLink
        v-for="link in [...links, { label: 'Talk to our team', to: '/contact' }]"
        :key="link.to + link.label"
        :to="link.to"
        class="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
        :class="focusRing"
        @click="open = false"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { focusRing } from '~/composables/nexus/ui.js'

const links = [
  { label: 'About us', to: '/about' },
  { label: 'Denim', to: '/denim' },
  { label: 'Gallery', to: '/our-gallery' },
  { label: '360° Tour', to: '/360vr' },
]
const avatars = ['/assets/boardofdirectors/DMD(Mondol)Sir.jpg'] // 17 KB; the other portraits are 200–570 KB

const open = ref(false)
const scrolled = ref(false)
// Lenis scrolls the window, so a passive native listener sees every position
const onScroll = () => (scrolled.value = window.scrollY > 80)
const onKey = (e) => e.key === 'Escape' && (open.value = false)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
/* denim contrast-stitch inside the pill */
.stitch::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 9999px;
  border: 1px dashed theme('colors.thread.DEFAULT / 0.28');
  pointer-events: none;
}
</style>
