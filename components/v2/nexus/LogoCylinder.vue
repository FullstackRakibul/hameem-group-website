<template>
  <!-- CSS 3D only: logos on a rotateY cylinder. Scroll velocity (Lenis) adds speed; hover pauses. -->
  <div ref="root" class="relative mx-auto h-[190px] [perspective:1200px]" @pointerenter="paused = true" @pointerleave="paused = false">
    <ul class="ring absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]" aria-label="Clients">
      <li
        v-for="(logo, i) in logos"
        :key="logo.file"
        class="absolute -left-[88px] -top-[52px] h-[104px] w-[176px] overflow-hidden rounded-2xl border border-white/10 bg-white [backface-visibility:hidden]"
        :style="{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }"
      >
        <img :src="`/assets/v2/clients/${logo.file}`" :alt="logo.name" width="432" height="247" loading="lazy" decoding="async" class="h-full w-full object-cover" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ logos: { type: Array, required: true } })

const step = 360 / props.logos.length
const radius = Math.round(((176 + 18) * props.logos.length) / (2 * Math.PI))
const root = ref(null)
const paused = ref(false)

useGsapScope(root, (gsap) => {
  const ring = root.value.querySelector('.ring')
  let angle = 0
  let speed = 0
  const tick = (_, dt) => {
    const lenis = getLenis()
    const boost = Math.min(Math.abs(lenis?.velocity ?? 0) * 0.6, 12)
    const target = paused.value ? 0 : 6 + boost // deg / s
    speed += (target - speed) * 0.08
    angle -= speed * (dt / 1000)
    // translateZ(-r) keeps the front face at 1:1 scale
    ring.style.transform = `translate3d(0,0,${-radius}px) rotateY(${angle}deg)`
  }
  gsap.ticker.add(tick)
  return () => gsap.ticker.remove(tick)
})
</script>
