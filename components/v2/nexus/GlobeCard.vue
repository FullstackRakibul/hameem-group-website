<template>
  <div ref="root" class="relative aspect-square w-full max-w-[260px]">
    <!-- static fallback (no WebGL): circle + meridians + Dhaka ping -->
    <svg v-if="!ready" viewBox="0 0 100 100" class="absolute inset-0 h-full w-full text-bleach/30" aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="0.6" />
      <ellipse v-for="rx in [10, 24, 36]" :key="'m' + rx" cx="50" cy="50" :rx="rx" ry="44" fill="none" stroke="currentColor" stroke-width="0.5" />
      <path v-for="y in [22, 36, 50, 64, 78]" :key="'p' + y" :d="`M${50 - Math.sqrt(44 * 44 - (y - 50) ** 2)} ${y}H${50 + Math.sqrt(44 * 44 - (y - 50) ** 2)}`" stroke="currentColor" stroke-width="0.5" />
      <circle cx="62" cy="40" r="2.2" class="fill-bleach" />
    </svg>
    <canvas v-if="enabled" ref="canvas" class="absolute inset-0 h-full w-full" aria-hidden="true" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { nexusPalette } from '~/composables/nexusTokens.js'
import { hasWebGL, whenNear } from '~/composables/nexus/webgl.js'

// HQ: Tejgaon, Dhaka. Client-region hotspots stay [TODO: region list] until supplied.
const hotspots = [{ lat: 23.76, lon: 90.4 }]

const root = ref(null)
const canvas = ref(null)
const enabled = ref(false)
const ready = ref(false)
let globe = null
let io = null
let ro = null
let dead = false

onMounted(async () => {
  if (!hasWebGL()) return
  await whenNear(root.value) // no second WebGL context until the card is about to scroll in
  if (dead) return
  enabled.value = true
  await nextTick()
  const { createGlobe } = await import('~/composables/nexus/globe.js')
  if (dead || !canvas.value) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  globe = createGlobe(canvas.value, { palette: nexusPalette, hotspots })

  ro = new ResizeObserver(([e]) => {
    const { width, height } = e.contentRect
    if (!width || !height) return
    globe?.resize(width, height)
    if (reduced) globe?.renderOnce() // reduced motion: one static frame, no loop
  })
  ro.observe(canvas.value)

  if (!reduced) {
    io = new IntersectionObserver(([e]) => (e.isIntersecting ? globe?.start() : globe?.stop()), { rootMargin: '100px' })
    io.observe(root.value)
  }
  ready.value = true
})

onBeforeUnmount(() => {
  dead = true
  io?.disconnect()
  ro?.disconnect()
  globe?.dispose()
  globe = null
})
</script>
