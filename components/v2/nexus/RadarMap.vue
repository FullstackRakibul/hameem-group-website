<template>
  <!-- Blueprint/radar stand-in for the embedded map: SVG grid + a ping at the head office. -->
  <a
    :href="mapsUrl"
    target="_blank"
    rel="noopener"
    class="group relative block overflow-hidden rounded-[28px] border border-white/5 bg-ink-950"
    :class="focusRing"
    aria-label="Open the Ha-Meem Group head office in Google Maps (opens in a new tab)"
  >
    <svg viewBox="0 0 320 200" class="block h-auto w-full text-bleach" aria-hidden="true" focusable="false">
      <g stroke="currentColor" stroke-opacity="0.08" stroke-width="1">
        <path v-for="x in 20" :key="'x' + x" :d="`M${x * 16} 0V200`" />
        <path v-for="y in 12" :key="'y' + y" :d="`M0 ${y * 16}H320`" />
      </g>
      <!-- stylised roads -->
      <g stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" fill="none">
        <path d="M0 132 C80 120 150 128 320 104" />
        <path d="M150 0 C156 70 170 130 188 200" />
        <path d="M40 0 L110 200" />
        <path d="M230 0 C240 80 260 140 300 200" stroke-dasharray="4 4" />
      </g>
      <g fill="none" stroke="currentColor">
        <circle v-for="r in [22, 44, 66]" :key="r" cx="168" cy="110" :r="r" stroke-opacity="0.18" />
        <path class="sweep" d="M168 110 L168 44" stroke-opacity="0.6" stroke-width="1.5" />
      </g>
      <circle class="ping" cx="168" cy="110" r="10" fill="currentColor" fill-opacity="0.25" />
      <circle cx="168" cy="110" r="3.5" fill="currentColor" />
    </svg>
    <div class="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-void/70 px-4 py-2.5 backdrop-blur-xl">
      <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-bleach">● HQ · 23.759°N 90.397°E</span>
      <span class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 group-hover:text-white">Open map ↗</span>
    </div>
  </a>
</template>

<script setup>
import { focusRing } from '~/composables/nexus/ui.js'

// coordinates from the site's existing Google Maps embed (TML Building, Tejgaon)
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=23.759068,90.397174'
</script>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .sweep {
    transform-origin: 168px 110px;
    animation: nx-sweep 4s linear infinite;
  }
  .ping {
    transform-origin: 168px 110px;
    animation: nx-ping 2.4s ease-out infinite;
  }
}
@keyframes nx-sweep {
  to {
    transform: rotate(360deg);
  }
}
@keyframes nx-ping {
  from {
    transform: scale(0.6);
    opacity: 1;
  }
  to {
    transform: scale(2.6);
    opacity: 0;
  }
}
</style>
