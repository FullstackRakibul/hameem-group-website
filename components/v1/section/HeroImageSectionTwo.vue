<template>
  <div class="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
    :style="{ backgroundImage: `url('./assets/v1/section/IMG_9487.JPG')` }">
    <div class="absolute inset-0 bg-black/60 z-10"></div>

    <div class="relative z-20 container mx-auto px-4 md:px-8 py-8">
      <div class="max-w-xl text-left">
        <h3 class="text-4xl md:text-5xl px-4 md:px-8 font-bold mb-6 tracking-wide animate-fade-in-up">
          A Legacy of Growth Across Textiles 
        </h3>

        <div class="bg-white/4 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-xl animate-slide-up">
          <p class="text-lg md:text-xl leading-relaxed text-gray-200 font-medium mb-8 line-clamp-2 hover:line-clamp-none transition-all duration-500 text-justify ">
           At Ha-Meem Group, fashion is more than just fabric stitched into form — it’s a reflection of global trends, human creativity, and technical mastery woven together under one roof. Since 1984, we've been transforming the garment manufacturing landscape, growing from a single unit to one of Bangladesh's leading vertically integrated apparel powerhouses.
          </p>

          <div class="flex justify-start">
            <button class="group relative hover:bg-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
// No script changes needed for this fix
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