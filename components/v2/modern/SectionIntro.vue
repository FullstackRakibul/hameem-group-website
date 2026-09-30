<template>
  <header ref="root" class="grid gap-6 lg:grid-cols-12 lg:items-end">
    <div class="lg:col-span-8">
      <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
        <span class="text-thread-300">[{{ index }}]</span> {{ eyebrow }}
      </p>
      <h2
        :aria-label="lines.join(' ')"
        class="section-title mt-4 font-display font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white"
      >
        <span v-for="(line, i) in lines" :key="line" class="block overflow-hidden pb-[0.05em]" aria-hidden="true">
          <span class="intro-line block" :class="i >= accentFrom ? 'text-thread-300' : ''">{{ line }}</span>
        </span>
      </h2>
    </div>
    <div class="lg:col-span-4">
      <p v-if="$slots.default" class="max-w-md text-base leading-relaxed text-white/70 lg:ml-auto">
        <slot />
      </p>
      <slot name="action" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { glitchOnce } from '~/composables/nexus/glitch.js'

defineProps({
  index: { type: String, required: true },
  eyebrow: { type: String, required: true },
  /** one word (or short phrase) per line, e.g. ['How', 'we', 'make'] */
  lines: { type: Array, required: true },
  /** lines from this index on are thread-coloured */
  accentFrom: { type: Number, default: 99 },
})

const root = ref(null)

useGsapScope(root, (gsap) => {
  const title = root.value.querySelector('.section-title')
  gsap.from('.intro-line', {
    yPercent: 105,
    duration: 0.9,
    ease: 'power4.out',
    stagger: 0.08,
    scrollTrigger: { trigger: root.value, start: 'top 80%', once: true },
    onComplete: () => glitchOnce(gsap, title),
  })
})
</script>

<style scoped>
.section-title {
  font-size: clamp(2.75rem, 7vw, 7.5rem);
}
</style>
