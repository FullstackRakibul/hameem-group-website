<template>
  <section class="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-100/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block mb-6">
          <span class="px-4 py-2 bg-blue-100/50 text-primary text-sm font-semibold rounded-full backdrop-blur-sm">
            OUR CAPABILITIES
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          Production <span class="bg-primary bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <!-- Divider -->
        <UISectionUnderline />
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          State-of-the-art manufacturing facilities with cutting-edge technology and expertise
        </p>


      </div>

      <!-- Modern Carousel Section -->
      <div class="relative mb-16">
        <!-- Left Gradient Overlay -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent z-20 pointer-events-none">
        </div>

        <!-- Right Gradient Overlay -->
        <div
          class="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-50 via-slate-50/50 to-transparent z-20 pointer-events-none">
        </div>

        <!-- Carousel Container -->
        <div class="overflow-hidden">
          <div class="flex gap-4 md:gap-6 animate-marquee-smooth"
            :style="{ animationPlayState: isAnimationPaused ? 'paused' : 'running' }">
            <div v-for="(product, index) in duplicatedProducts" :key="index" class="flex-shrink-0">
              <!-- Product Card -->
              <div class="group relative cursor-pointer transition-all duration-500 hover:scale-105">
                <div
                  class="w-48 md:w-48 h-48 md:h-48 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                  <!-- Image Container -->
                  <div class="relative w-full h-full overflow-hidden bg-slate-100">
                    <img :src="product.image || fallbackImage" :alt="product.name" loading="lazy"
                      class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />


                  </div>

                  <!-- Product Label -->
                  <div
                    class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
                    <h4
                      class="text-sm md:text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {{ product.name }}
                    </h4>
                  </div>

                  <!-- Corner Accent -->
                  <div
                    class="absolute top-3 right-3 w-8 h-8 bg-blue-600/10 rounded-lg transform opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125 flex items-center justify-center">
                    <div class="w-1 h-1 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!-- Stats Grid -->
      <div class="relative w-full py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <!-- Animated Blur Background -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            class="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse">
          </div>
          <div
            class="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 2s"></div>
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"
            style="animation-delay: 4s"></div>
        </div>

        <!-- Stats Grid Container -->
        <div class="relative z-10 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <!-- Stat Card -->
            <div v-for="(stat, index) in stats" :key="index"
              class="stat-card group relative bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-white/40 hover:border-blue-300/60 transition-all duration-500 hover:shadow-2xl hover:bg-white/95 cursor-pointer overflow-hidden"
              :style="{ animationDelay: `${index * 0.1}s` }">
              <!-- Added animated gradient border on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/20 group-hover:to-blue-600/20 rounded-xl sm:rounded-2xl transition-all duration-500 pointer-events-none">
              </div>

              <!-- Fixed layout to proper flex column with better centering -->
              <div
                class="relative z-10 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 md:space-y-4 h-full">
                <!-- Icon with Blur Background -->
                <div class="relative">
                  <!-- Icon blur background effect -->
                  <div
                    class="absolute inset-0 bg-blue-400/20 blur-xl rounded-full scale-150 group-hover:scale-200 transition-transform duration-500">
                  </div>
                  <div
                    class="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-500">
                    {{ stat.icon }}
                  </div>
                </div>

                <!-- Value -->
                <!-- Improved responsive text sizing -->
                <div
                  class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-blue-600 transition-colors duration-500">
                  {{ stat.value }}
                </div>

                <!-- Label -->
                <!-- Better responsive font sizes and line height -->
                <p
                  class="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-gray-950 transition-colors duration-500 leading-tight">
                  {{ stat.label }}
                </p>

                <!-- Description (hidden on mobile, visible on hover and larger screens) -->
                <!-- Improved visibility on different screen sizes -->
                <p
                  class="hidden sm:block text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-500 opacity-0 sm:opacity-70 group-hover:opacity-100 line-clamp-2">
                  {{ stat.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Product {
  name: string
  image: string
}

const products = ref<Product[]>([
  { name: 'Garments Factory', image: 'assets/v1/section/capabilities/garments-factory.gif' },
  { name: 'Sweater Factory', image: 'assets/v1/section/capabilities/sweater-factory.gif' },
  { name: 'Washing Plant', image: 'assets/v1/section/capabilities/WashingPlant.webp' },
  { name: 'Automated Machine', image: 'assets/v1/section/capabilities/AutomatedMachine.gif' },
  { name: 'Embroidery', image: 'assets/v1/section/capabilities/Embroidery.gif' },
  { name: 'Printing', image: 'assets/v1/section/capabilities/Printing.gif' },
  { name: 'Re-Cycle Plant', image: 'assets/v1/section/capabilities/Re-CyclePlant.gif' },
  { name: 'Fabric Printing Plant', image: 'assets/v1/section/capabilities/FabricPrintingPlant.gif' },
  { name: 'Laser Machine', image: 'assets/v1/section/capabilities/LaserMachine.gif' },
  { name: 'In-House Accessories', image: 'assets/v1/section/capabilities/In-HouseAccessories.gif' },
  { name: 'Solar Plant', image: 'assets/v1/section/capabilities/SolarPlant.gif' }
])

const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /%3E%3C/svg%3E'

const stats = [
  {
    value: '26',
    label: 'Factories',
    icon: '🏭',
    description: 'Production facilities worldwide'
  },
  {
    value: '75K+',
    label: 'Employees',
    icon: '👥',
    description: 'Skilled workforce globally'
  },
  {
    value: '$1B+',
    label: 'Annual Revenue',
    icon: '💰',
    description: 'Yearly turnover and growth'
  },
  {
    value: '120M',
    label: 'Garments/Year',
    icon: '👕',
    description: 'Production capacity annually'
  }
]

const isAnimationPaused = ref(false)

const duplicatedProducts = computed(() => [...products.value, ...products.value])

const pauseAnimation = () => {
  isAnimationPaused.value = true
}

const resumeAnimation = () => {
  isAnimationPaused.value = false
}

onMounted(() => {
  const autoResumeTimer = setInterval(() => {
    if (isAnimationPaused.value) {
      resumeAnimation()
    }
  }, 30000)

  onUnmounted(() => clearInterval(autoResumeTimer))
})
</script>

<style scoped>
@keyframes marquee-smooth {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-smooth {
  animation: marquee-smooth 20s linear infinite;
  will-change: transform;
}

/* Smooth animation on pause/resume */
.animate-marquee-smooth {
  transition: animation-play-state 0.3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee-smooth {
    animation: none;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.6s ease-out forwards;
}

.group:nth-child(1) {
  animation-delay: 0s;
}

.group:nth-child(2) {
  animation-delay: 0.1s;
}

.group:nth-child(3) {
  animation-delay: 0.2s;
}

.group:nth-child(4) {
  animation-delay: 0.3s;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>