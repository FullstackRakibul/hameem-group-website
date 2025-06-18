<template>
  <div class="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
    :style="{ backgroundImage: `url('./assets/v1/section/Slider/wash-5.jpg')` }">
    <!-- Dark overlay -->
    <div class="absolute  inset-0 bg-black/40 z-10"></div>

    <div class="relative z-20 container mx-auto px-4 md:px-8 py-8">
      <div class="max-w-4xl text-center">
        <!-- Main Heading -->
        <h3 class="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-start animate-fade-in-up">
         Welcome to Our Wash Section
        </h3>

        <!-- Content Container -->
        <div class="bg-white/4 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl animate-slide-up">
          <!-- Description -->
          <p class="text-lg md:text-xl leading-relaxed text-gray-200 font-medium mb-8 line-clamp-2 hover:line-clamp-none transition-all duration-500 text-justify ">
            Ha-Meem Group transforms ideas into impeccable garments for global brands. Our commitment to quality, craftsmanship, and speed makes us a leader in Bangladesh’s thriving apparel industry.
          </p>

          <!-- CTA Button -->
          <div class="flex justify-start">
            <button class="group relative hover:bg-primary px-8 py-2 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div class="flex items-center space-x-3">
                <span>Discover More</span>
                <Icon name="mdi:arrow-right" class="transform group-hover:translate-x-1 transition-all duration-300 text-xl" />
              </div>
              <div class="absolute inset-0 border-2 border-white/30 rounded-full group-hover:border-orange-200 transition-all duration-500 -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>