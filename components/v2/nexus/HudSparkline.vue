<template>
  <!-- Decorative only: no axes, no values, so it never implies a real time series. -->
  <svg ref="root" viewBox="0 0 120 32" preserveAspectRatio="none" class="h-8 w-full text-bleach" aria-hidden="true" focusable="false">
    <path :d="d" fill="none" stroke="currentColor" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ seed: { type: Number, default: 1 } })

// deterministic squiggle per card so SSR and client markup match
const d = computed(() => {
  let s = props.seed * 9301 + 49297
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  const pts = Array.from({ length: 13 }, (_, i) => [i * 10, 26 - i * 1.4 - rnd() * 12])
  return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${Math.max(3, y).toFixed(1)}`).join(' ')
})

const root = ref(null)

useGsapScope(root, (gsap) => {
  const path = root.value.querySelector('path')
  const len = path.getTotalLength()
  gsap.fromTo(
    path,
    { strokeDasharray: len, strokeDashoffset: len },
    { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', scrollTrigger: { trigger: root.value, start: 'top 90%', once: true } },
  )
})
</script>
