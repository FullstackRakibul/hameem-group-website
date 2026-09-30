<template>
  <div ref="root" class="grid gap-6 md:grid-cols-12 md:items-end">
    <div class="md:col-span-7">
      <p class="intro-el flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
        <span class="text-coral">{{ index }}</span>
        <span class="h-px w-8 bg-white/20"></span>
        {{ eyebrow }}
      </p>
      <h2 class="intro-el mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
        {{ title }}
        <span v-if="accent" class="block text-white/35">{{ accent }}</span>
      </h2>
    </div>
    <div class="md:col-span-5">
      <p v-if="$slots.default" class="intro-el max-w-md text-base font-light leading-relaxed text-white/55 md:ml-auto">
        <slot />
      </p>
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  index: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  accent: { type: String, default: '' },
})

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.intro-el', {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: root.value, start: 'top 80%' },
  })
})
</script>
