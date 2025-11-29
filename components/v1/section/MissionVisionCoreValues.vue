<template>
  <section class="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-20 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <!-- Header with VISION title -->
      <div class="mb-16">
        <!-- VISION badge and title -->
        <div class="inline-block mb-8">
          <div class="bg-yellow-100 rounded-lg px-6 py-3 flex items-center space-x-3">
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">VISION</h2>
          </div>
        </div>

        <!-- Vision description -->
        <p class="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mb-12">
          {{ visionData.mainDescription }}
        </p>

        <!-- Decorative corner element -->
        <div class="absolute top-32 right-12 w-20 h-20 bg-orange-200 rounded-3xl opacity-40 hidden md:block"></div>
      </div>

      <!-- Main content: 3 Cards + Carousel Slider -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Left: 3 Point Cards -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Point 1 -->
          <div v-for="(point, index) in visionData.points" :key="index"
            class="relative group flex items-start space-x-6 p-6 bg-yellow-50 rounded-2xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">

            <!-- Icon number container -->
            <div class="flex-shrink-0">
              <Icon name={{ point.icon }} size="32"
                class="absolute right-6 top-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <!-- <div
                class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {{ index + 1 }}
              </div> -->
            </div>

            <!-- Content -->
            <div class="flex-1 pt-2">
              <h3
                class="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {{ point.title }}
              </h3>
              <p class="text-gray-700 text-sm md:text-base leading-relaxed">
                {{ point.description }}
              </p>
            </div>

            <!-- Hover icon indicator -->
            <div class="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Right: Image Carousel/Slider -->
        <div class="lg:col-span-1">
          <div class="relative sticky top-8">
            <!-- Main carousel container -->
            <div class="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <!-- Images stack -->
              <div class="relative w-full aspect-square overflow-hidden bg-gray-100">
                <div v-for="(image, index) in carouselImages" :key="index" :class="[
                  'absolute inset-0 transition-all duration-700 ease-in-out',
                  currentSlide === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                ]">
                  <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" loading="lazy" />
                </div>

                <!-- Image counter badge -->
                <div
                  class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold z-20">
                  {{ currentSlide + 1 }} / {{ carouselImages.length }}
                </div>
              </div>

              <!-- Navigation buttons -->
              <div class="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
                <button @click="previousSlide"
                  class="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                  aria-label="Previous slide">
                  <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button @click="nextSlide"
                  class="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                  aria-label="Next slide">
                  <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Thumbnail indicators -->
            <div class="flex gap-2 mt-4 px-2">
              <button v-for="(image, index) in carouselImages" :key="`thumb-${index}`" @click="goToSlide(index)" :class="[
                'w-12 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-300',
                currentSlide === index
                  ? 'border-orange-500 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
              ]">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission Section Below -->
      <div class="mt-24 pt-16 border-t border-gray-200">
        <div class="mb-12">
          <div class="inline-block mb-8">
            <div class="bg-red-100 rounded-lg px-6 py-3 flex items-center space-x-3">
              <div class="w-3 h-3 bg-red-600 rounded-full"></div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">MISSION</h2>
            </div>
          </div>

          <p class="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
            {{ missionData.mainDescription }}
          </p>
        </div>

        <!-- Mission points grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(point, index) in missionData.points" :key="index"
            class="group p-6 bg-red-50 rounded-2xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">

            <div class="flex items-center space-x-4 mb-4">
              <div
                class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {{ index + 1 }}
              </div>
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {{ point.title }}
              </h3>
            </div>

            <p class="text-gray-700 text-sm md:text-base leading-relaxed">
              {{ point.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="mt-24 pt-16 border-t border-gray-200">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          <span class="text-gray-400">CORE</span><br />
          <span>VALUES</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(value, index) in missionData.coreValues" :key="index"
            class="group p-6 bg-gray-100 rounded-2xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 text-center">

            <div
              class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400 transition-colors duration-300">
              <span class="text-2xl">{{ value.icon }}</span>
            </div>

            <h3 class="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {{ value.name }}
            </h3>
            <p class="text-sm text-gray-600 mt-2">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentSlide = ref(0)

const carouselImages = ref([
  { src: '/assets/v1/section/mission-vision/hg-web-mv-slider-03.jpg', alt: 'Factory Vision 1' },
  { src: '/assets/v1/section/mission-vision/HG-mission-vission-slider-02.jpg', alt: 'Factory Vision 2' },
  { src: '/assets/v1/section/mission-vision/hg-web-mv-slider-01.jpg', alt: 'Factory Vision 3' },
])

const visionData = ref({
  mainDescription: 'To become the leading global clothing manufacturer recognized for excellence, innovation, and positive impact on society through ethical practices and continuous improvement.',
  points: [
    {
      title: 'Leading Manufacturer',
      description: 'Becoming recognized as the leading clothing manufacturer in Bangladesh and globally, setting industry standards for quality and innovation.',
      icon: 'twemoji:womans-clothes'
    },
    {
      title: 'Industry Breakthrough',
      description: 'Achieving breakthrough innovations in the textile industry through research and development, driving technological advancement in our sector.',
      icon: 'twemoji:womans-clothes'
    },
    {
      title: 'Employee Welfare',
      description: 'Ensuring educational advancement, financial security, and overall wellbeing of all employees, fostering a culture of growth and excellence.',
      icon: 'twemoji:womans-clothes'
    }
  ]
})

const missionData = ref({
  mainDescription: 'Our mission is to provide quality products on time while eliminating poverty and promoting industrialization through sustainable manufacturing practices, community engagement, and continuous improvement.',
  points: [
    {
      title: 'Quality Products',
      description: 'Delivering exceptional quality products consistently and on time to build long-term partnerships with our clients.'
    },
    {
      title: 'Poverty Elimination',
      description: 'Creating employment opportunities and economic growth that helps uplift communities and eliminate poverty.'
    },
    {
      title: 'Industrialization',
      description: 'Promoting sustainable industrial development through innovation, technology adoption, and best practices.'
    }
  ],
  coreValues: [
    { name: 'Innovation', icon: '💡', description: 'Driving continuous improvement and creative solutions' },
    { name: 'Quality', icon: '✓', description: 'Maintaining highest standards in all operations' },
    { name: 'Integrity', icon: '🤝', description: 'Building trust through honest and ethical practices' },
    { name: 'Excellence', icon: '⭐', description: 'Pursuing perfection in everything we do' }
  ]
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.value.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + carouselImages.value.length) % carouselImages.value.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>

<style scoped>
/* Smooth transitions */
@media (prefers-reduced-motion: no-preference) {
  * {
    @apply transition-all duration-300;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sticky {
    position: static;
  }
}

@media (min-width: 1024px) {
  .sticky {
    position: sticky;
    top: 2rem;
  }
}
</style>