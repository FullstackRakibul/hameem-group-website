<template>
    <div class="flex items-center justify-start text-white">
      <div class="text-left">
        <el-space direction="vertical" alignment="start">
          <h1 class="text-4xl md:text-8xl font-bold text-white ">
            Welcome to Hameem Group
          </h1>
          <p class="text-lg md:text-2xl text-white">
            Excellence in Textile Manufacturing
          </p>
          <p class="text-white text-md" size="small">Ha-Meem Group, a Bangladeshi clothing manufacturer, is leading supplier of readymade garments and denim fabric in the world. We are one of the top clothing companies in Bangladesh. The company produces some of the most fashionable denim fabrics and garment products and owns one of the most comprehensive and resourceful manufacturing facilities in Bangladesh.</p>
          <el-button type="primary" plain>Explore sections</el-button>
        </el-space>
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
