<template>
  <!-- B2: centred statement on a sticky stage; product images drift past at their own speeds -->
  <section ref="root" data-shot="products" class="relative motion-safe:h-[220vh]">
    <div class="stage relative h-screen min-h-[640px] overflow-hidden px-4 sm:px-6 motion-safe:sticky motion-safe:top-0 lg:px-10">
      <figure v-for="(p, i) in placed" :key="p.title" class="collage absolute m-0" :class="p.pos" :data-speed="p.speed">
        <div class="collage-frame overflow-hidden rounded-[22px] border border-white/10">
          <img :src="p.image" :alt="p.title" :width="p.w" :height="p.h" loading="lazy" decoding="async" class="block h-auto w-full saturate-[.85]" />
        </div>
        <figcaption class="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">[{{ pad2(i + 1) }}] {{ p.title }}</figcaption>
      </figure>

      <div class="pointer-events-none relative z-10 flex h-full items-center justify-center">
        <div class="text-center">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70"><span class="text-thread-300">[06]</span> Major products</p>
          <h2
            aria-label="Traceable. Intelligent. Vertical."
            class="statement mt-4 font-display font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white mix-blend-difference"
          >
            <span v-for="w in ['Traceable.', 'Intelligent.', 'Vertical.']" :key="w" class="block overflow-hidden pb-[0.05em]" aria-hidden="true">
              <span class="statement-line block">{{ w }}</span>
            </span>
          </h2>
          <NuxtLink
            to="/our-gallery"
            class="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-void transition-shadow hover:shadow-glow-thread"
            :class="focusRing"
          >
            View the gallery <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { products } from '~/composables/nexus/content.js'
import { focusRing, pad2 } from '~/composables/nexus/ui.js'
import { glitchOnce } from '~/composables/nexus/glitch.js'

// placement + parallax travel (yPercent) per image; widths stay inside the viewport at 390px
const layout = [
  { pos: 'left-[3%] top-[9%] w-[40vw] md:w-[23vw]', speed: 45 },
  { pos: 'right-[3%] top-[13%] w-[38vw] md:w-[21vw]', speed: 70 },
  { pos: 'left-[6%] bottom-[9%] w-[28vw] md:left-[9%] md:w-[15vw]', speed: 60 },
  { pos: 'right-[5%] bottom-[7%] w-[42vw] md:w-[24vw]', speed: 30 },
  { pos: 'hidden md:block left-[31%] top-[4%] md:w-[13vw]', speed: 90 },
  { pos: 'right-[30%] bottom-[3%] w-[24vw] md:right-[34%] md:w-[12vw]', speed: 20 },
]
const placed = products.map((p, i) => ({ ...p, ...layout[i] }))

const root = ref(null)

useGsapScope(root, (gsap) => {
  const q = gsap.utils.selector(root.value)
  q('.collage').forEach((el) => {
    const frame = el.querySelector('.collage-frame')
    gsap.fromTo(frame, { clipPath: 'inset(100% 0 0 0)' }, {
      clipPath: 'inset(0% 0 0 0)', duration: 0.9, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    })
    // each image drifts from +speed to -speed yPercent (own rate) while scaling 0.8 → 1
    const speed = Number(el.dataset.speed)
    gsap.fromTo(el, { yPercent: speed, scale: 0.8 }, {
      yPercent: -speed,
      scale: 1,
      ease: 'none',
      scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: true },
    })
  })
  gsap.from('.statement-line', {
    yPercent: 105, duration: 0.9, ease: 'power4.out', stagger: 0.09,
    scrollTrigger: { trigger: '.statement', start: 'top 80%', once: true },
    onComplete: () => glitchOnce(gsap, q('.statement')[0]),
  })
})
</script>

<style scoped>
.statement {
  font-size: clamp(2.75rem, 7vw, 7.5rem);
}
</style>
