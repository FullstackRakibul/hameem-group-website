<template>
  <section ref="root" class="relative flex min-h-[100svh] items-end overflow-hidden bg-paper pb-16 pt-32 md:pb-24">
    <!-- Backdrop: pass `image` for a still photo (e.g. a botanical close-up), otherwise the video plays -->
    <div class="hero-media absolute inset-0">
      <img v-if="image" :src="image" alt="" class="h-full w-full object-cover" />
      <video
        v-else
        autoplay
        muted
        loop
        playsinline
        :poster="poster"
        class="h-full w-full object-cover"
      >
        <source :src="video" type="video/mp4" />
      </video>
    </div>

    <!-- Coral gradient wash + organic petal shapes -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-t from-paper via-paper/85 to-paper/30"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,107,74,0.35),transparent_55%)] mix-blend-multiply"></div>
      <div class="petal petal-a"></div>
      <div class="petal petal-b"></div>
      <div class="grain absolute inset-0 opacity-[0.05] mix-blend-multiply"></div>
    </div>

    <div class="container relative z-10 mx-auto grid gap-10 px-4 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-8">
        <span class="hero-fade inline-flex items-center gap-2 rounded-full border border-ink-950/15 bg-white/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-950/75 backdrop-blur">
          <span class="h-1.5 w-1.5 rounded-full bg-coral"></span>
          Since {{ companyData.stats[3].value }} · Dhaka, Bangladesh
        </span>

        <h1 class="mt-6 text-[clamp(2.75rem,8vw,7.5rem)] font-black leading-[0.9] tracking-[-0.045em] text-ink-950">
          <span class="block overflow-hidden"><span class="hero-line block">We stitch trust</span></span>
          <span class="block overflow-hidden"><span class="hero-line block">into every <em class="not-italic text-coral-700">seam.</em></span></span>
        </h1>

        <p class="hero-fade mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-950/65">
          One of Bangladesh's largest apparel exporters — vertically integrated from fibre to finished
          garment, with real-time RFID traceability on every sewing line.
        </p>

        <div class="hero-fade mt-10 flex flex-wrap items-center gap-4">
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-3 rounded-full bg-coral py-2 pl-2 pr-6 font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            <span class="flex -space-x-2">
              <img
                v-for="a in avatars"
                :key="a"
                :src="a"
                alt=""
                class="h-9 w-9 rounded-full border-2 border-coral object-cover object-top"
              />
            </span>
            Talk to our team
            <Icon name="mdi:arrow-top-right" class="transition-transform group-hover:rotate-45" />
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="rounded-full border border-ink-950/15 bg-white/60 px-6 py-3 text-ink-950/80 backdrop-blur transition-colors hover:border-ink-950/30 hover:text-ink-950"
          >
            Our story
          </NuxtLink>
        </div>
      </div>

      <!-- Floating glass cards -->
      <div class="relative hidden lg:col-span-4 lg:block lg:h-[380px]">
        <div class="glass-card float-a absolute right-0 top-0 w-72 rounded-3xl border border-ink-950/[0.08] bg-white/70 p-5 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.25)] backdrop-blur-xl">
          <p class="font-mono text-[11px] uppercase tracking-widest text-coral-700">Case · Eliot RFID</p>
          <p class="mt-3 text-lg font-semibold leading-snug text-ink-950">Every sewing operation captured in real time.</p>
          <div class="mt-4 flex h-10 items-end gap-1">
            <span v-for="(h, i) in bars" :key="i" class="spark flex-1 rounded-sm bg-coral/80" :style="{ height: h + '%' }"></span>
          </div>
        </div>
        <div class="glass-card float-b absolute bottom-0 left-0 w-64 rounded-3xl border border-ink-950/[0.08] bg-white/70 p-5 shadow-[0_20px_50px_-20px_rgba(10,10,10,0.25)] backdrop-blur-xl">
          <p class="font-mono text-[11px] uppercase tracking-widest text-ink-950/60">Renewable</p>
          <p class="mt-2 text-4xl font-black tracking-tight text-ink-950">{{ solar }}</p>
          <p class="text-sm text-ink-950/60">rooftop solar capacity</p>
        </div>
      </div>
    </div>

    <div class="hero-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-950/50 md:block">
      Scroll
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { companyData } from '~/data/company'

defineProps({
  image: { type: String, default: '' },
  video: {
    type: String,
    default: 'https://api.hameemgroup.com:9012/Resources/hameem-group-website/RFIDDIGITALVIDEO.mp4',
  },
  poster: {
    type: String,
    default: '/assets/v2/index/v2Hero-section-banner-hameemgroup-image-000001.jpg',
  },
})

const avatars = [
  '/assets/boardofdirectors/SAJID SIR .jpg',
  '/assets/boardofdirectors/Sakib-Azad Director.jpg',
]
const solar = companyData.factories.find((f) => f.name === 'Solar Capacity')?.count
const bars = [30, 55, 42, 70, 50, 85, 64, 92, 78, 100]

const root = ref(null)

useGsapScope(root, (gsap) => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.from('.hero-media', { scale: 1.15, duration: 2.2, ease: 'power2.out' }, 0)
    .from('.hero-line', { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.2)
    .from('.hero-fade', { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.6)
    .from('.glass-card', { y: 60, opacity: 0, duration: 1, stagger: 0.15 }, 0.8)
    .from('.spark', { scaleY: 0, transformOrigin: 'bottom', duration: 0.6, stagger: 0.04 }, 1.2)

  // idle float
  gsap.to('.float-a', { y: -14, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 })
  gsap.to('.float-b', { y: 12, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 })
  gsap.to('.petal-a', { rotate: 25, x: 30, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  gsap.to('.petal-b', { rotate: -20, y: -30, duration: 11, ease: 'sine.inOut', yoyo: true, repeat: -1 })

  // parallax out on scroll
  gsap.to('.hero-media', {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: true },
  })
})
</script>

<style scoped>
.petal {
  position: absolute;
  border-radius: 62% 38% 55% 45% / 55% 60% 40% 45%;
  filter: blur(60px);
  opacity: 0.55;
}
.petal-a {
  width: 38vw;
  height: 30vw;
  right: -8vw;
  top: -6vw;
  background: radial-gradient(circle at 30% 30%, #ffa48f, #ff6b4a 45%, transparent 70%);
}
.petal-b {
  width: 24vw;
  height: 22vw;
  left: -6vw;
  bottom: 10%;
  background: radial-gradient(circle at 60% 40%, #ff8566, transparent 70%);
  opacity: 0.25;
}
.grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
