<template>
  <div class=" bg-contain bg-no-repeat relative overflow-hidden">
    <el-carousel :height="carouselHeight" autoplay :interval="3000" :loop="true">
      <el-carousel-item key="Slider02">
        <div class="h-screen">
          <DenimSlider01 />
        </div>
      </el-carousel-item>
      <el-carousel-item key="Slider02">
        <div class="h-screen">
          <FactoryHeroSlider />
        </div>
      </el-carousel-item>
      <el-carousel-item key="Slider01">
        <div class="h-screen">
          <WelcomeHeroSection />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>


<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';
import WelcomeHeroSection from './sliders/WelcomeHeroSection.vue';
import FactoryHeroSlider from './sliders/FactoryHeroSlider.vue';
import DenimSlider01 from './sliders/DenimSlider01.vue';
const carouselHeight = ref('800px');

// Update height based on screen size
const updateHeight = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    carouselHeight.value = '800px';
  } else if (width >= 768) {
    carouselHeight.value = '600px';
  } else {
    carouselHeight.value = '400px';
  }
};

// Event listeners for window resize
onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});
</script>

<style scoped>


/* Customize el-image hover animation */
img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}


</style>