<template>
  <div
    class="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden  "
    :style="{ backgroundImage: `url('./assets/v1/section/IMG_7306.JPG')` }">
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/60 z-10"></div>

    <div class="relative z-20 container mx-auto px-4 md:px-8 py-8 h-full flex flex-col justify-center">
      <!-- Header with Icon -->
      <div class="flex flex-col items-center mb-12 animate-fade-in-down">
        <h2 class="text-4xl md:text-6xl font-bold text-center mb-6 tracking-wider uppercase">
          <span class="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Major Products
          </span>
        </h2>
       
      </div>

      <!-- Marquee Container -->
      <div class="flex-1 relative overflow-hidden group">
        <!-- Gradient overlays -->


        <!-- Double marquee for seamless loop -->
        <div class="absolute inset-0 flex items-center space-x-8 animate-marquee">
          <div v-for="(product, index) in duplicatedProducts" :key="index"
            class="flex-shrink-0 px-8 py-6 bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-4">
              <Icon name="mdi:star-shooting" class="text-white text-2xl flex-shrink-0" />
              <span class="text-xl font-semibold text-gray-100">{{ product }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const products = ref([
  'ALL TYPES OF BOTTOMS AND TOPS',
  'HI-FASHION DENIM JEANS',
  'CRITICAL CARGOS',
  'BASIC & HIFASHION WASHES',
  'LASER FINISH / 3D WHISKER',
  'OVER DYEING OF GARMENTS',
  'WRINKLE FREE TECHNOLOGY',
  'MENS SHIRTS & DRESS PANTS',
  'OUTWEAR & JACKETS FACILITY',
  'CUSTOM CRITICAL WASHES',
  'PREMIUM DENIM FABRICS',
  'SUSTAINABLE PRODUCTION'
]);

const duplicatedProducts = computed(() => [...products.value, ...products.value]);
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
  min-width: 200%;
  will-change: transform;
}

/* .group:hover .animate-marquee {
  animation-play-state: paused;
} */

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 30s;
  }
}
</style>