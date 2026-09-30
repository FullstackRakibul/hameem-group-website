<template>
  <section ref="root" class="overflow-hidden border-y border-white/5 bg-ink-900 py-20 md:py-28">
    <div class="container mx-auto mb-12 flex flex-col gap-4 px-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="font-mono text-xs uppercase tracking-[0.25em] text-white/40"><span class="text-coral">05</span> · Trusted by</p>
        <h2 class="mt-4 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
          {{ clients.length }}+ global brands
          <span class="text-white/35">wear our work.</span>
        </h2>
      </div>
      <p class="max-w-sm text-sm font-light text-white/50">
        Partnering with the world's most renowned fashion houses through premium craftsmanship and
        sustainable innovation.
      </p>
    </div>

    <div
      v-for="(row, r) in rows"
      :key="r"
      class="marquee-mask relative flex"
      :class="r ? 'mt-4' : ''"
      @mouseenter="pause(r)"
      @mouseleave="play(r)"
    >
      <!-- two identical tracks → seamless loop at xPercent -100 -->
      <div v-for="copy in 2" :key="copy" class="track flex shrink-0 gap-4 pr-4" :data-row="r">
        <div
          v-for="c in row"
          :key="c + copy"
          class="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-white/90 px-5 grayscale transition duration-300 hover:bg-white hover:grayscale-0 md:h-28 md:w-52"
        >
          <img :src="`/assets/v2/clients/${c}`" :alt="c.replace(/\.jpg$/, '')" class="max-h-16 w-auto object-contain mix-blend-multiply" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const clients = [
  'abercrombie.jpg', 'aeropostale.jpg', 'American Eagle.jpg', 'Banana republic.jpg', 'calvin klein.jpg',
  'celio.jpg', 'Dickies.jpg', 'H&M.jpg', 'HOLLISTER.jpg', 'JCPENNEY.jpg', 'Justice.jpg', "KOHL'S.jpg",
  'Levis.jpg', 'NEXT.jpg', 'OLD NAVY.jpg', 'Oshkosh.jpg', 'PVH.jpg', 'Reitmans.jpg', 'The north face.jpg',
  'TOMMY HILFIGER.jpg', 'United legwear.jpg', 'VF LOGO .jpg', 'ZARA.jpg',
]
const half = Math.ceil(clients.length / 2)
const rows = [clients.slice(0, half), clients.slice(half)]

const root = ref(null)
const tweens = []
const pause = (r) => tweens[r]?.timeScale(0.15)
const play = (r) => tweens[r]?.timeScale(1)

useGsapScope(root, (gsap) => {
  const q = gsap.utils.selector(root.value)
  rows.forEach((_, r) => {
    const tracks = q(`.track[data-row="${r}"]`)
    const dir = r % 2 ? 1 : -1
    tweens[r] = gsap.fromTo(
      tracks,
      { xPercent: dir === -1 ? 0 : -100 },
      { xPercent: dir === -1 ? -100 : 0, duration: 45 + r * 10, ease: 'none', repeat: -1 },
    )
  })
})
</script>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
}
</style>
