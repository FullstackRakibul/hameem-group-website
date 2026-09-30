<template>
  <footer ref="root" class="relative overflow-hidden bg-ink-950 pt-8">
    <div class="container mx-auto px-4">
      <!-- CTA -->
      <div class="cta relative overflow-hidden rounded-[36px] border border-white/10 bg-ink-900 p-8 md:p-14">
        <div class="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-coral/40 blur-[110px]"></div>

        <div class="relative grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-white/40"><span class="text-coral">08</span> · Contact</p>
            <h2 class="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.045em] text-white md:text-7xl">
              Let's build your<br />next collection.
            </h2>
            <NuxtLink
              to="/contact"
              class="group mt-10 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 font-semibold text-ink-950 transition-colors hover:bg-coral"
            >
              <span class="flex -space-x-2">
                <img
                  v-for="a in avatars"
                  :key="a"
                  :src="a"
                  alt=""
                  class="h-10 w-10 rounded-full border-2 border-white object-cover object-top transition-colors group-hover:border-coral"
                />
              </span>
              Book a call with our team
              <Icon name="mdi:arrow-top-right" class="transition-transform group-hover:rotate-45" />
            </NuxtLink>
          </div>

          <!-- Glass contact card -->
          <div class="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:col-span-5">
            <dl class="space-y-5 text-sm">
              <div>
                <dt class="font-mono text-[11px] uppercase tracking-widest text-white/40">Head office</dt>
                <dd class="mt-1 text-white/80">387 (South), Tejgaon Industrial Area, Dhaka-1208, Bangladesh</dd>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <dt class="font-mono text-[11px] uppercase tracking-widest text-white/40">Phone</dt>
                  <dd class="mt-1"><a href="tel:+88028878703" class="text-white/80 hover:text-coral">+880-2-8878703-8</a></dd>
                </div>
                <div>
                  <dt class="font-mono text-[11px] uppercase tracking-widest text-white/40">Email</dt>
                  <dd class="mt-1"><a href="mailto:info@hameemgroup.net" class="text-white/80 hover:text-coral">info@hameemgroup.net</a></dd>
                </div>
              </div>
            </dl>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.836073151204!2d90.397174!3d23.759068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f36ebcbcdb%3A0x6363e2a5709dee2d!2sTML%20Building%20(Ha-Meem%20Group)!5e0!3m2!1sen!2sus!4v1738689429885!5m2!1sen!2sus"
              class="map mt-6 h-48 w-full rounded-2xl border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ha-Meem Group head office map"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col items-start justify-between gap-6 py-10 text-sm text-white/40 md:flex-row md:items-center">
        <div class="flex items-center gap-3">
          <img src="/assets/group-logo.png" alt="Ha-Meem Group" class="h-7 w-auto rounded-sm" />
          <span>© {{ year }} Ha-Meem Group. All rights reserved.</span>
        </div>
        <nav class="flex flex-wrap gap-x-6 gap-y-2">
          <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="hover:text-white">{{ l.label }}</NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Oversized wordmark -->
    <p class="wordmark pointer-events-none select-none whitespace-nowrap text-center text-[19vw] font-black leading-[0.75] tracking-[-0.06em] text-white/[0.04]">
      HA-MEEM
    </p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const avatars = [
  '/assets/boardofdirectors/SAJID SIR .jpg',
  '/assets/boardofdirectors/Sakib-Azad Director.jpg',
  '/assets/boardofdirectors/DMD(Mondol)Sir.jpg',
]
const links = [
  { label: 'About', to: '/about' },
  { label: 'Denim', to: '/denim' },
  { label: 'Gallery', to: '/our-gallery' },
  { label: '360° Tour', to: '/360vr' },
  { label: 'Contact', to: '/contact' },
]
const year = new Date().getFullYear()

const root = ref(null)

useGsapScope(root, (gsap) => {
  gsap.from('.cta', {
    y: 80,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cta', start: 'top 85%' },
  })
  gsap.from('.wordmark', {
    yPercent: 60,
    ease: 'none',
    scrollTrigger: { trigger: '.wordmark', start: 'top bottom', end: 'bottom bottom', scrub: true },
  })
})
</script>
