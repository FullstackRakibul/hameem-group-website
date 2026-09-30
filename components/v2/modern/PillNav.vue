<template>
  <header ref="root" class="fixed inset-x-0 top-4 z-50 px-4">
    <nav
      class="nav-pill mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-ink-900/60 py-2 pl-5 pr-2 backdrop-blur-xl transition-shadow duration-300"
      :class="{ 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]': scrolled }"
      aria-label="Main"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/assets/group-logo.png" alt="Ha-Meem Group" class="h-7 w-auto rounded-sm" />
      </NuxtLink>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <NuxtLink
          to="/contact"
          class="group hidden items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-ink-950 transition-colors hover:bg-coral sm:flex"
        >
          <span class="flex -space-x-2">
            <img
              v-for="a in avatars"
              :key="a"
              :src="a"
              alt=""
              class="h-7 w-7 rounded-full border-2 border-white object-cover object-top transition-colors group-hover:border-coral"
            />
          </span>
          Talk to us
        </NuxtLink>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <Icon :name="open ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
        </button>
      </div>
    </nav>

    <Transition name="drop">
      <div
        v-if="open"
        class="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-ink-900/90 p-3 backdrop-blur-xl md:hidden"
      >
        <NuxtLink
          v-for="link in [...links, { label: 'Contact', to: '/contact' }]"
          :key="link.to"
          :to="link.to"
          class="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { label: 'About us', to: '/about' },
  { label: 'Denim', to: '/denim' },
  { label: 'Gallery', to: '/our-gallery' },
  { label: '360° Tour', to: '/360vr' },
]

const avatars = [
  '/assets/boardofdirectors/SAJID SIR .jpg',
  '/assets/boardofdirectors/Sakib-Azad Director.jpg',
  '/assets/boardofdirectors/DMD(Mondol)Sir.jpg',
]

const root = ref(null)
const open = ref(false)
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 40)

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

useGsapScope(root, (gsap) => {
  gsap.from('.nav-pill', { y: -40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 })
})
</script>

<style scoped>
.drop-enter-active,
.drop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
