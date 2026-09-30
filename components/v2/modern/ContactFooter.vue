<template>
  <footer ref="root" data-shot="footer" class="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-10">
    <div class="mx-auto max-w-[1440px]">
      <!-- CTA -->
      <div class="cta relative overflow-hidden rounded-[36px] border border-thread/30 bg-ink-950/80 p-8 backdrop-blur-xl md:p-14">
        <div class="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true"></div>
        <div class="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70"><span class="text-thread-300">[08]</span> Contact</p>
            <h2 class="cta-title mt-5 font-display font-bold uppercase leading-[0.85] tracking-[-0.05em] text-white">
              Let's build<br />your next<br /><span class="text-thread-300">collection</span>
            </h2>
          </div>
          <div class="lg:col-span-4">
            <NuxtLink to="/contact" class="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 font-semibold text-void transition-shadow hover:shadow-glow-thread" :class="focusRing">
              <span class="flex -space-x-2">
                <img v-for="a in avatars" :key="a" :src="a" alt="" width="40" height="40" loading="lazy" class="h-10 w-10 rounded-full border-2 border-white object-cover object-top" />
              </span>
              Book a call with our team <span aria-hidden="true">→</span>
            </NuxtLink>
            <p class="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">
              Dhaka · GMT+6 ·
              <ClientOnly><LiveClock class="text-bleach" /><template #fallback><span class="text-bleach">--:--:--</span></template></ClientOnly>
            </p>
          </div>
        </div>
      </div>

      <!-- B8: info, link columns, newsletter + socials, radar map -->
      <div class="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <address class="not-italic lg:col-span-3">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">Head office</p>
          <p class="mt-3 text-sm leading-relaxed text-white/80">Ha-Meem Group<br />387 (South), Tejgaon Industrial Area<br />Dhaka-1208, Bangladesh</p>
          <p class="mt-4 text-sm"><a href="tel:+88028878703" class="text-white/80 hover:text-thread-300" :class="focusRing">+880-2-8878703-8</a></p>
          <p class="mt-1 text-sm"><a href="mailto:info@hameemgroup.net" class="text-white/80 hover:text-thread-300" :class="focusRing">info@hameemgroup.net</a></p>
        </address>

        <nav aria-label="Footer" class="lg:col-span-2">
          <p class="font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">Company</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="l in links" :key="l.to"><NuxtLink :to="l.to" class="text-white/80 hover:text-thread-300" :class="focusRing">{{ l.label }}</NuxtLink></li>
          </ul>
        </nav>

        <div class="lg:col-span-3">
          <NewsletterForm />
          <p class="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70">Social</p>
          <ul class="mt-2 divide-y divide-white/5 border-y border-white/5">
            <li v-for="s in socials" :key="s" class="flex items-center justify-between py-3 text-sm text-white/80">
              {{ s }} <span class="text-thread-300" aria-hidden="true">›</span>
            </li>
          </ul>
          <p class="mt-2"><TodoTag label="social profile URLs" /></p>
        </div>

        <div class="md:col-span-2 lg:col-span-4">
          <RadarMap />
        </div>
      </div>

      <div class="flex flex-col gap-2 border-t border-white/5 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/70 sm:flex-row sm:justify-between">
        <span>© {{ year }} Ha-Meem Group</span>
        <span>HAMEEM // NEXUS · <span class="text-bleach">SYS ONLINE</span></span>
      </div>
    </div>

    <!-- A12 / B1: giant wordmark bleeding off the bottom edge (SVG: truly transparent fill, 1px gradient stroke) -->
    <div class="relative -mx-4 h-[15vw] overflow-hidden sm:-mx-6 lg:-mx-10" aria-hidden="true">
      <svg class="wordmark absolute inset-x-0 top-0 block w-full" viewBox="0 0 1000 215" focusable="false">
        <defs>
          <linearGradient id="nx-wordmark" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" class="[stop-color:theme(colors.thread.DEFAULT)]" />
            <stop offset="1" class="[stop-color:theme(colors.bleach.DEFAULT)]" />
          </linearGradient>
        </defs>
        <text x="500" y="200" text-anchor="middle" textLength="980" lengthAdjust="spacingAndGlyphs" class="wordmark-glow font-display font-bold" font-size="230" fill="url(#nx-wordmark)">HA-MEEM</text>
        <text x="500" y="200" text-anchor="middle" textLength="980" lengthAdjust="spacingAndGlyphs" class="font-display font-bold" font-size="230" fill="none" stroke="url(#nx-wordmark)" stroke-width="1" vector-effect="non-scaling-stroke">HA-MEEM</text>
      </svg>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { focusRing } from '~/composables/nexus/ui.js'
import LiveClock from '~/components/v2/nexus/LiveClock.vue'
import RadarMap from '~/components/v2/nexus/RadarMap.vue'
import NewsletterForm from '~/components/v2/nexus/NewsletterForm.vue'
import TodoTag from '~/components/v2/nexus/TodoTag.vue'

const avatars = ['/assets/boardofdirectors/SAJID SIR .jpg', '/assets/boardofdirectors/Sakib-Azad Director.jpg', '/assets/boardofdirectors/DMD(Mondol)Sir.jpg']
const links = [
  { label: 'About us', to: '/about' },
  { label: 'Denim', to: '/denim' },
  { label: 'Gallery', to: '/our-gallery' },
  { label: '360° Tour', to: '/360vr' },
  { label: 'Contact', to: '/contact' },
]
const socials = ['LinkedIn', 'Facebook', 'YouTube']
const year = new Date().getFullYear()

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.fromTo('.cta', { clipPath: 'inset(100% 0 0 0 round 36px)' }, {
    clipPath: 'inset(0% 0 0 0 round 36px)', duration: 0.9, ease: 'power4.out', clearProps: 'clipPath',
    scrollTrigger: { trigger: '.cta', start: 'top 85%', once: true },
  })
  gsap.from('.wordmark', {
    yPercent: 40,
    ease: 'none',
    scrollTrigger: { trigger: '.wordmark', start: 'top bottom', end: 'bottom bottom', scrub: true },
  })
})
</script>

<style scoped>
.cta-title {
  font-size: clamp(2.75rem, 7vw, 7.5rem);
}
.wordmark-glow {
  opacity: 0.22;
  filter: blur(14px);
}
</style>
