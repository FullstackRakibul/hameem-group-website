<template>


  <div
  class="h-screen flex flex-col items-center justify-center bg-cover bg-center text-gray-800"
  :style="{backgroundImage: `url('${backgroundImage}')` }"
>
    <div class=" flex items-center justify-center h-full text-white">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-primary ">
          Welcome to Hameem Group
        </h1>
        <p class="text-lg md:text-2xl mb-6 text-slate-800 ">
          Excellence in Textile Manufacturing
        </p>
        <el-button type="primary" plain>Learn More</el-button>


      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Background image URL
const backgroundImage = ref('/assets/banner_01.jpg');

</script>

<style scoped>
/* Add custom styles if needed */
</style>
