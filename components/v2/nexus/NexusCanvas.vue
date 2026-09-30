<template>
  <canvas
    v-if="mode === 'webgl'"
    ref="canvas"
    class="pointer-events-none fixed inset-0 -z-10 h-full w-full transition-opacity duration-500"
    :class="live ? 'opacity-100' : 'opacity-0'"
    aria-hidden="true"
  />
  <!-- Static fallback: no WebGL, or reduced motion. The page still reads as finished. -->
  <div v-else-if="mode === 'fallback'" class="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
    <div class="absolute right-[-10vw] top-[8vh] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,theme(colors.bleach.DEFAULT/0.16),transparent_62%)] blur-2xl"></div>
    <div class="absolute bottom-[-20vw] left-[-12vw] h-[45vw] w-[45vw] rounded-full bg-[radial-gradient(circle,theme(colors.thread.DEFAULT/0.14),transparent_62%)] blur-2xl"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { nexusPalette } from '~/composables/nexusTokens.js'
import { hasWebGL } from '~/composables/nexus/webgl.js'

const { frame, ui, onVisibilityChange, reset } = useNexusScene()

const canvas = ref(null)
const mode = ref('pending') // 'pending' | 'webgl' | 'fallback'
const live = ref(false)

let nexus = null
let ro = null
let offVisibility = null
let dead = false

function sync() {
  if (!nexus) return
  const shouldRun = !document.hidden && (frame.heroVisible || frame.processVisible)
  if (shouldRun) nexus.start()
  else nexus.stop()
  live.value = shouldRun
}

onMounted(async () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced || !hasWebGL()) {
    mode.value = 'fallback'
    return
  }
  mode.value = 'webgl'
  await nextTick()

  const { createNexusScene } = await import('~/composables/nexus/scene.js')
  if (dead || !canvas.value) return

  const mobile = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
  nexus = createNexusScene(canvas.value, { frame, palette: nexusPalette, mobile })

  ro = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect
    if (width && height) nexus?.resize(width, height)
  })
  ro.observe(canvas.value)

  offVisibility = onVisibilityChange(sync)
  document.addEventListener('visibilitychange', sync)
  ui.webglReady = true
  sync()
})

onBeforeUnmount(() => {
  dead = true
  ro?.disconnect()
  offVisibility?.()
  document.removeEventListener('visibilitychange', sync)
  nexus?.dispose()
  nexus = null
  reset()
})
</script>
