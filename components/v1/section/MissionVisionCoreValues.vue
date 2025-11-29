<template>
  <section class="relative w-full min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
    :style="{ backgroundImage: 'url(/assets/v1/section/achievement-bg.jpg)' }">
    <!-- Overlay gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-32 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <!-- Section header with tabs -->
      <div class="mb-16 md:mb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div ref="headerRef" class="space-y-4" :style="headerAnimStyle">
          <div
            class="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span class="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">Our Direction</span>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Mission,<br />Vision &<br />Values
          </h2>
        </div>

        <!-- Tab navigation -->
        <div class="flex flex-wrap gap-2 md:gap-3">
          <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base',
            activeTab === tab
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
              : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
          ]">
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Main content area: Points + Slider -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <!-- Left: Points cards -->
        <div class="lg:col-span-2 space-y-4 md:space-y-6">
          <div v-for="(point, index) in activeData.points" :key="index" ref="pointsRef"
            class="group relative flex items-start space-x-6 p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
            :style="getPointAnimStyle(index)">
            <!-- Icon with gradient -->
            <div class="flex-shrink-0">
              <div
                class="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold border border-blue-500/50 group-hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40">
                <span class="relative z-10">{{ index + 1 }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 pt-1">
              <h3
                class="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {{ point.title }}
              </h3>
              <p
                class="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {{ point.description }}
              </p>
            </div>

            <!-- Hover indicator -->
            <div class="absolute -right-3 -top-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div
                class="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                →
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Image slider -->
        <div class="lg:col-span-1">
          <div class="relative sticky top-8" ref="sliderRef" :style="sliderAnimStyle">
            <!-- Main carousel container -->
            <div
              class="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50">
              <!-- Images stack -->
              <div class="relative w-full aspect-square overflow-hidden bg-black/30">
                <!-- Slider images -->
                <transition-group name="fade" tag="div">
                  <div v-for="(image, index) in activeData.images" v-show="currentSlide === index" :key="index"
                    class="absolute inset-0">
                    <img :src="image" alt="Mission Vision" class="w-full h-full object-cover" loading="lazy" />
                    <!-- Image overlay gradient -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </transition-group>

                <!-- Counter badge -->
                <div
                  class="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-white/20 z-20">
                  {{ currentSlide + 1 }} / {{ activeData.images.length }}
                </div>

                <!-- Navigation arrows -->
                <button @click="previousSlide"
                  class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
                  aria-label="Previous slide">
                  <svg class="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button @click="nextSlide"
                  class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40 group"
                  aria-label="Next slide">
                  <svg class="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <!-- Auto-play progress bar -->
                <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
                  :style="{ width: autoPlayProgress + '%', transition: 'width 0.1s linear' }"></div>
              </div>

              <!-- Thumbnail indicators -->
              <div class="flex gap-2 p-4 bg-black/20 border-t border-white/10 overflow-x-auto">
                <button v-for="(image, index) in activeData.images" :key="`thumb-${index}`" @click="goToSlide(index)"
                  :class="[
                    'relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 group',
                    currentSlide === index
                      ? 'border-blue-400 shadow-lg shadow-blue-500/50 scale-105'
                      : 'border-white/20 hover:border-white/40 opacity-60 hover:opacity-100'
                  ]">
                  <img :src="image" :alt="'Thumbnail ' + index"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Description area -->
      <div
        class="mt-16 md:mt-24 p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 md:col-span-2"
        ref="descRef" :style="descAnimStyle">
        <p class="text-gray-300 text-base md:text-lg leading-relaxed">
          {{ activeData.description }}
        </p>
      </div>
    </div>
  </section>
  <CorevaluesSection />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import CorevaluesSection from './mission-vision/CorevaluesSection.vue'


const activeTab = ref('Mission')
const currentSlide = ref(0)
const autoPlayProgress = ref(0)
let autoPlayInterval: ReturnType<typeof setInterval>

const tabs = ['Mission', 'Vision']

const headerRef = ref(null)
const pointsRef = ref(null)
const sliderRef = ref(null)
const descRef = ref(null)

const headerAnimStyle = ref({})
const sliderAnimStyle = ref({})
const descAnimStyle = ref({})

const missionData = {
  description: 'Our mission is to provide quality products on time while eliminating poverty and promoting industrialization through sustainable manufacturing practices, community engagement, and continuous improvement.',
  points: [
    {
      title: 'Quality Excellence',
      description: 'Delivering exceptional quality products consistently and on time to build long-term partnerships with our global clients across all markets.'
    },
    {
      title: 'Poverty Elimination',
      description: 'Creating employment opportunities and economic growth that helps uplift communities and eliminate poverty through sustainable practices.'
    },
    {
      title: 'Sustainable Industry',
      description: 'Promoting sustainable industrial development through innovation, technology adoption, and world-class manufacturing practices.'
    }
  ],
  images: [
    '/assets/achivements/2021-2022/BSMET-21-22.JPG',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600'
  ]
}

const visionData = {
  description: 'To become the leading global clothing manufacturer recognized for excellence, innovation, and positive impact on society through ethical practices and continuous improvement.',
  points: [
    {
      title: 'Global Leadership',
      description: 'Becoming recognized as the leading clothing manufacturer in Bangladesh and globally, setting industry standards for quality and innovation.'
    },
    {
      title: 'Industry Breakthrough',
      description: 'Achieving breakthrough innovations in the textile industry through research and development, driving technological advancement in our sector.'
    },
    {
      title: 'Employee Wellness',
      description: 'Ensuring educational advancement, financial security, and overall wellbeing of all employees, fostering a culture of growth and excellence.'
    }
  ],
  images: [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600'
  ]
}

const activeData = computed(() => activeTab.value === 'Mission' ? missionData : visionData)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % activeData.value.images.length
  resetAutoPlay()
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + activeData.value.images.length) % activeData.value.images.length
  resetAutoPlay()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoPlay()
}

const resetAutoPlay = () => {
  autoPlayProgress.value = 0
  clearInterval(autoPlayInterval)
  startAutoPlay()
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    autoPlayProgress.value += 2
    if (autoPlayProgress.value >= 100) {
      nextSlide()
      autoPlayProgress.value = 0
    }
  }, 100)
}

const getPointAnimStyle = (index: number) => {
  return {
    opacity: 1,
    transform: 'translateY(0)',
    animation: `fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s`
  }
}

watch(() => activeTab.value, () => {
  currentSlide.value = 0
  resetAutoPlay()
})

onMounted(() => {
  startAutoPlay()

  // Scroll animation observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === headerRef.value) {
          headerAnimStyle.value = {
            opacity: 1,
            transform: 'translateY(0)',
            animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }
        }
        if (entry.target === sliderRef.value) {
          sliderAnimStyle.value = {
            opacity: 1,
            transform: 'translateX(0)',
            animation: 'slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }
        }
        if (entry.target === descRef.value) {
          descAnimStyle.value = {
            opacity: 1,
            transform: 'translateY(0)',
            animation: 'fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s'
          }
        }
      }
    })
  }, { threshold: 0.1 })

  if (headerRef.value) observer.observe(headerRef.value)
  if (sliderRef.value) observer.observe(sliderRef.value)
  if (descRef.value) observer.observe(descRef.value)
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>