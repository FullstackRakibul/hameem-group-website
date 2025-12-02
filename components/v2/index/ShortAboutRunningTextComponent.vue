<template>
  <section class="relative w-full bg-[rgba(255,255,255,0.96)] overflow-hidden">
    <!-- Particle Background (colorful) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="particles-container">
        <div v-for="i in particleCount" :key="i" class="particle" :style="particleStyles[i - 1]" aria-hidden="true" />
      </div>

      <!-- subtle blurred bulbs to give depth (very light, almost-white) -->
      <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
        style="background: radial-gradient(closest-side, rgba(99,102,241,0.06), rgba(99,102,241,0));">
      </div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s; background: radial-gradient(closest-side, rgba(236,72,153,0.06), rgba(236,72,153,0));">
      </div>
    </div>

    <div class="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Running text (old design ~60%) -->
        <div class="lg:col-span-7 relative" ref="leftRef" :style="leftAnimStyle">
          <div
            class="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 mb-6">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="text-xs md:text-sm font-semibold text-primary-600 uppercase tracking-wider">About Us</span>
          </div>

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-700 leading-tight mb-6">
            We stitch trust into every seam
          </h2>

          <p class="text-primary-600 text-base md:text-lg leading-relaxed max-w-3xl mb-6 running-text"
            ref="runningTextRef" :style="runningTextStyle">
            We are a textile group with decades of craft. From yarn to finished garment, our teams ensure
            consistency, quality, and sustainability. Our factories combine timeless techniques with modern
            process control to produce reliable apparel for global brands. We invest in people, in communities,
            and in responsible manufacturing — always moving forward, never compromising the standards that have
            defined us.
          </p>

          <!-- small meta / tags (old look) -->
          <div class="flex flex-wrap gap-3 mt-4">
            <span class="px-3 py-1 bg-white/70 text-primary-700 rounded-full text-sm border border-gray-200">Knit</span>
            <span
              class="px-3 py-1 bg-white/70 text-primary-700 rounded-full text-sm border border-gray-200">Woven</span>
            <span
              class="px-3 py-1 bg-white/70 text-primary-700 rounded-full text-sm border border-gray-200">Denim</span>
            <span
              class="px-3 py-1 bg-white/70 text-primary-700 rounded-full text-sm border border-gray-200">Sustainability</span>
          </div>
        </div>

        <!-- Right: New modern panel (new ~40%) -->
        <aside class="lg:col-span-5">
          <div class="relative" ref="rightRef" :style="rightAnimStyle">
            <div
              class="p-6 md:p-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-primary-700 mb-1">Our Commitment</h3>
                  <p class="text-primary-600 text-sm md:text-base max-w-md">
                    Delivering consistent quality while reducing environmental impact—measured, audited, and improved.
                  </p>
                </div>

                <div class="ml-4 flex-shrink-0">
                  <div
                    class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM12 8v13"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="mt-6 grid grid-cols-2 gap-4">
                <div class="p-3 bg-white/80 rounded-lg border border-gray-100">
                  <div class="text-sm text-primary-600">Daily Capacity</div>
                  <div class="text-primary-700 text-lg font-bold">250k pcs</div>
                </div>
                <div class="p-3 bg-white/80 rounded-lg border border-gray-100">
                  <div class="text-sm text-primary-600">Global Clients</div>
                  <div class="text-primary-700 text-lg font-bold">120+</div>
                </div>
                <div class="p-3 bg-white/80 rounded-lg border border-gray-100">
                  <div class="text-sm text-primary-600">Sustainability Score</div>
                  <div class="text-primary-700 text-lg font-bold">A+</div>
                </div>
                <div class="p-3 bg-white/80 rounded-lg border border-gray-100">
                  <div class="text-sm text-primary-600">Years</div>
                  <div class="text-primary-700 text-lg font-bold">34</div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-6 flex items-center justify-between">
                <a href="#contact"
                  class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-indigo-500 text-white rounded-md text-sm font-medium shadow hover:opacity-95 transition-opacity">
                  Contact Sales
                </a>

                <button class="text-sm text-primary-600 underline-offset-2 hover:text-primary-700 transition-colors"
                  @click="toggleMore" :aria-expanded="moreOpen ? 'true' : 'false'">
                  {{ moreOpen ? 'Less' : 'More about us' }}
                </button>
              </div>

              <!-- Expanded paragraph -->
              <div v-show="moreOpen" class="mt-4 text-primary-600 text-sm transition-all">
                We follow strict audit trails for labor, environment, and quality — every line inspected, every
                process documented. Our community programs focus on health, education, and livelihoods.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Refs
const leftRef = ref<Element | null>(null)
const rightRef = ref<Element | null>(null)
const runningTextRef = ref<Element | null>(null)

// Animation style objects
const leftAnimStyle = ref<Record<string, string>>({})
const rightAnimStyle = ref<Record<string, string>>({})
const runningTextStyle = ref<Record<string, string>>({})

// Toggle for CTA extra text
const moreOpen = ref(false)
const toggleMore = () => {
  moreOpen.value = !moreOpen.value
}

// --- Particles ---
const particleCount = 30
const particleStyles = ref<Array<Record<string, string>>>([])

// color palette for particles (vibrant)
const palette = [
  'rgba(100,102,241,0.95)', // indigo
  'rgba(59,130,246,0.95)', // blue
  'rgba(234,88,12,0.95)', // orange
  'rgba(236,72,153,0.95)', // pink
  'rgba(16,185,129,0.95)', // green
  'rgba(139,92,246,0.95)', // violet
  'rgba(250,204,21,0.95)' // yellow
]

const randFromPalette = () => palette[Math.floor(Math.random() * palette.length)]

// Create colorful radial gradient background per particle
// const generateParticles = () => {
//   const particles: Array<Record<string, string>> = []
//   for (let i = 0; i < particleCount; i++) {
//     const size = Math.random() * 14 + 50
//     const left = Math.random() * 100
//     const top = Math.random() * 100
//     const delay = Math.random() * 8 // seconds
//     const duration = 6 + Math.random() * 10 // 6..16s
//     const opacity = (Math.random() * 0.6 + 0.25).toFixed(2)

//     // random two-color radial gradient
//     const colorA = randFromPalette()
//     const colorB = randFromPalette()
//     const bg = `radial-gradient(circle at 30% 30%, ${colorA} 0%, ${colorB} 60%, rgba(255,255,255,0) 100%)`

//     particles.push({
//       left: `${left}%`,
//       top: `${top}%`,
//       width: `${size}px`,
//       height: `${size}px`,
//       animationDelay: `${delay}s`,
//       animationDuration: `${duration}s`,
//       opacity,
//       background: bg,
//       transform: `translateY(0)` // initial transform for smoother transition
//     })
//   }
//   particleStyles.value = particles
// }

const generateParticles = () => {
  const particles = []
  for (let i = 0; i < 30; i++) {
    particles.push({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 5 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDelay: `${Math.random() * 20}s`,
      opacity: `${Math.random() * 0.8 + 0.1}`
    })
  }
  particleStyles.value = particles
}

// Respect reduced motion
const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  generateParticles()

  if (prefersReduced) {
    // No motion: set visible states immediately
    leftAnimStyle.value = { opacity: '1', transform: 'translateY(0)' }
    rightAnimStyle.value = { opacity: '1', transform: 'translateY(0)' }
    runningTextStyle.value = { opacity: '1', transform: 'translateY(0)' }
    return
  }

  // initial hidden states (light gentle moves)
  leftAnimStyle.value = { opacity: '1', transform: 'translateY(12px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
  runningTextStyle.value = { opacity: '0', transform: 'translateY(6px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
  rightAnimStyle.value = { opacity: '0', transform: 'translateY(12px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }

  // stagger reveal
  setTimeout(() => {
    leftAnimStyle.value = { opacity: '1', transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
  }, 120)

  setTimeout(() => {
    runningTextStyle.value = { opacity: '1', transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
  }, 260)

  setTimeout(() => {
    rightAnimStyle.value = { opacity: '1', transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s ease' }
  }, 420)
})
</script>

<style scoped>
/* Particles layout */
.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

/* Each particle is a colorful radial blob that slowly floats */
.particle {
  position: absolute;
  border-radius: 9999px;
  filter: blur(6px);
  transform: translateY(0);
  animation-name: float-slow;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform, opacity;
  mix-blend-mode: screen;
  /* colorful glow over light bg */
}

/* subtle float — moves up and down a little */
@keyframes float-slow {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.9;
  }

  50% {
    transform: translateY(-24px) scale(1.06);
    opacity: 0.65;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 0.9;
  }
}

/* make per-particle duration & delay with inline styles set in JS */

/* Mask / running-text tweak */
.running-text {
  -webkit-mask-image: linear-gradient(180deg, black 80%, transparent);
}

/* Accessibility: remove animations for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .particle {
    animation: none !important;
    filter: blur(0px);
    opacity: 0.6;
  }
}
</style>