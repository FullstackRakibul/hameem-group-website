<template>
  <div class="relative h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-white overflow-hidden " 
    :style="{ backgroundImage: `url('./assets/v1/section/Slider/main-banner-shape-00001.jpg')` }">
     <div class="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
    <!-- Button at the lower center -->
    <div class="flex justify-end items-end w-4/5 h-2/5 mb-8">
      <button
        class="border-2 border-orange-400 bg-transparent text-black px-6 py-3 font-bold flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-300">
        <Icon name="mdi:arrow-right-thin" class="text-black text-lg" />
        <span class=" pl-6 text-lg font-medium ">SHOW MORE</span>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>




<!-- :style="{ backgroundImage: `url('./assets/home-banner-section-img-01.jpg')` }" -->