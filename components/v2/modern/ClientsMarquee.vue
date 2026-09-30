<template>
  <section ref="root" data-shot="clients" class="overflow-hidden py-24 md:py-32">
    <div class="mx-auto mb-12 flex max-w-[1440px] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-10">
      <div>
        <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70"><span class="text-thread-300">[05]</span> Trusted by</p>
        <h2 class="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white">
          {{ clientLogos.length }} global brands<br /><span class="text-thread-300">wear our work</span>
        </h2>
      </div>
      <p class="max-w-sm text-sm leading-relaxed text-white/70">
        Partnering with the world's most renowned fashion houses through premium craftsmanship and sustainable innovation.
      </p>
    </div>

    <!-- ≥768px + motion: 3D cylinder -->
    <LogoCylinder v-if="mode === 'cylinder'" :logos="clientLogos" />

    <!-- <768px + motion: flat two-row marquee -->
    <div v-else-if="mode === 'marquee'">
      <div v-for="(row, r) in rows" :key="r" class="marquee-mask flex" :class="r ? 'mt-3' : ''">
        <ul v-for="copy in 2" :key="copy" class="track flex shrink-0 gap-3 pr-3" :data-row="r" :aria-hidden="copy === 2 ? 'true' : undefined">
          <li v-for="c in row" :key="c.file" class="h-20 w-36 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white">
            <img :src="`/assets/v2/clients/${c.file}`" :alt="copy === 1 ? c.name : ''" width="432" height="247" loading="lazy" decoding="async" class="h-full w-full object-cover" />
          </li>
        </ul>
      </div>
    </div>

    <!-- reduced motion (and SSR default): static grid, every logo visible -->
    <ul v-else class="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:grid-cols-6 lg:px-10" aria-label="Clients">
      <li v-for="c in clientLogos" :key="c.file" class="overflow-hidden rounded-xl border border-white/10 bg-white">
        <img :src="`/assets/v2/clients/${c.file}`" :alt="c.name" width="432" height="247" loading="lazy" decoding="async" class="h-auto w-full" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { clientLogos } from '~/composables/nexus/content.js'
import LogoCylinder from '~/components/v2/nexus/LogoCylinder.vue'

const { reduced, tablet } = useMotionPrefs()
const mode = computed(() => (reduced.value ? 'static' : tablet.value ? 'cylinder' : 'marquee'))

const half = Math.ceil(clientLogos.length / 2)
const rows = [clientLogos.slice(0, half), clientLogos.slice(half)]

const root = ref(null)

// flat marquee (mobile) — the watcher-free approach: this scope only matches below 768px
useGsapScope(
  root,
  (gsap) => {
    const q = gsap.utils.selector(root.value)
    const tweens = rows.map((_, r) => {
      const dir = r % 2 ? 1 : -1
      return gsap.fromTo(q(`.track[data-row="${r}"]`), { xPercent: dir === -1 ? 0 : -100 }, { xPercent: dir === -1 ? -100 : 0, duration: 40 + r * 8, ease: 'none', repeat: -1 })
    })
    return () => tweens.forEach((t) => t.kill())
  },
  { media: '(max-width: 767px)' },
)
</script>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
</style>
