<template>
  <div class=" relative h-screen bg-cover bg-no-repeat  flex flex-col justify-center items-center text-white"
    :style="{ backgroundImage: `url('./assets/v1/section/Slider/main-banner-shape-00004.jpg')` }">
    <div class="absolute inset-0  bg-black bg-opacity-20 z-0"></div>
      <!-- Dark Overlay -->

      <!-- Content Container -->
      <div class="flex justify-end items-end w-4/5 h-[600px] z-50 animate-fade-in-up">
        <button
          class="border-2 rounded-md border-orange-500 bg-transparemt text-black px-6 py-3 font-bold flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-300">
          <Icon name="mdi:arrow-right-thin" class="text-black text-3xl" />
          <span class=" pl-6 text-lg font-medium ">SHOW MORE</span>
        </button>
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