<template>
  <div class="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
    :style="{ backgroundImage: `url('./assets/home-banner-section-img-01.jpg')` }">
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