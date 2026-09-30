<template>
  <!-- Static illustration of each process state (mobile + no-WebGL). Decorative. -->
  <svg viewBox="0 0 120 90" class="h-auto w-full" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <g v-if="step === 0" class="text-thread" stroke="currentColor" stroke-width="1.2">
      <path v-for="r in [8, 15, 22, 29, 36]" :key="r" :d="spiral(r)" :opacity="1 - r / 50" />
    </g>
    <g v-else-if="step === 1" stroke-width="1.4">
      <path v-for="x in 9" :key="'w' + x" :d="`M${12 + x * 10} 12 V78`" class="text-thread" stroke="currentColor" />
      <path v-for="y in 6" :key="'f' + y" :d="`M16 ${8 + y * 11} H108`" class="text-bleach" stroke="currentColor" stroke-dasharray="6 4" :stroke-dashoffset="y % 2 ? 0 : 5" />
    </g>
    <g v-else-if="step === 2" class="text-thread" stroke="currentColor" stroke-width="1.4">
      <path :d="shirt" />
    </g>
    <g v-else-if="step === 3" stroke-width="1.4">
      <path :d="shirt" class="text-thread" stroke="currentColor" opacity="0.6" />
      <path d="M44 22 L50 36 M76 22 L70 36 M50 76 H70 M30 38 L36 44 M90 38 L84 44" class="text-bleach" stroke="currentColor" stroke-dasharray="3 3" />
    </g>
    <g v-else class="text-thread" stroke="currentColor" stroke-width="1.4">
      <path d="M30 40 L60 28 L92 40 L62 54 Z" />
      <path d="M30 40 V52 L62 66 V54 M62 66 L92 52 V40" />
      <path d="M36 47 L62 59 L86 47" class="text-bleach" stroke="currentColor" stroke-dasharray="3 3" />
    </g>
  </svg>
</template>

<script setup>
defineProps({ step: { type: Number, required: true } })

const spiral = (r) => {
  const pts = []
  for (let a = 0; a <= Math.PI * 1.7; a += 0.2) pts.push(`${(60 + Math.cos(a + r) * r * 1.3).toFixed(1)} ${(45 + Math.sin(a + r) * r).toFixed(1)}`)
  return 'M' + pts.join(' L')
}
// same silhouette as the WebGL "Design" target, in SVG space
const shirt = 'M46 14 Q60 24 74 14 L88 18 L104 34 L94 42 L84 34 L84 78 L36 78 L36 34 L26 42 L16 34 L32 18 Z'
</script>
