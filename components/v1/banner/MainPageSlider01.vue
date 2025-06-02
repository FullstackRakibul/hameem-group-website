<template>
  <div :style="{ backgroundImage: `url('/assets/ha-meem-group-banner-main-bg-01.png')` }"
    class="bg-cover bg-bottom bg-no-repeat relative">
    <!-- Carousel Section -->
    <el-carousel height="100vh" autoplay :interval="5000" :loop="true" class="">
      <!-- Denim Slide -->
      <el-carousel-item key="denim">
        <div class="overflow-x-hidden">
          <HeroImageSectionOne />        
        </div>
      </el-carousel-item>
      <el-carousel-item key="denim">
        <div class="overflow-x-hidden">
          <HeroImageSectionTwo />
        </div>
      </el-carousel-item>
      <el-carousel-item key="products">
        <div class="overflow-x-hidden">
          <HeroImageSectionFive />
        </div>
      </el-carousel-item>
       <el-carousel-item key="GlobalPresence">
        <div class="overflow-x-hidden">
          <HeroImageSectionSix />
        </div>
      </el-carousel-item>
       <el-carousel-item key="DenimExcellence">
        <div class="overflow-x-hidden">
          <HeroImageSectionSeven />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>


<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';
import ImageSliderSection from '../section/ImageScrollSection.vue';
import HeroImageSectionOne from '../section/HeroImageSectionOne.vue';
import HeroImageSectionTwo from '../section/HeroImageSectionTwo.vue';
import HeroImageSectionFive from '../section/HeroImageSectionFive.vue';
import HeroImageSectionSix from '../section/HeroImageSectionSix.vue';
import HeroImageSectionSeven from '../section/HeroImageSectionSeven.vue';

// Responsive carousel height
// const carouselHeight = ref('100dvh');

// // Optional: Adjust for mobile browsers with dynamic viewport
// const updateHeight = () => {
//   carouselHeight.value = `${window.innerHeight}px`;
// };

// onMounted(() => {
//   updateHeight();
//   // Optional: Re-calculate on resize if needed
//   window.addEventListener('resize', updateHeight);
// });

// // Event listeners for window resize
// onMounted(() => {
//   updateHeight();
//   window.addEventListener('resize', updateHeight);
// });

// onUnmounted(() => {
//   window.removeEventListener('resize', updateHeight);
// });
</script>

<style scoped>


/* img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
} */

/* .el-carousel__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  color: #f40000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
} */

/* .el-carousel {
  --el-carousel-arrow-font-size: 12px;
  --el-carousel-arrow-size: 36px;
  --el-carousel-arrow-background: rgb(0, 119, 255);
  --el-carousel-arrow-hover-background: rgba(31, 45, 61, 0.23);
  --el-carousel-indicator-width: 30px;
  --el-carousel-indicator-height: 2px;
  --el-carousel-indicator-padding-horizontal: 4px;
  --el-carousel-indicator-padding-vertical: 12px;
  --el-carousel-indicator-out-color: var(--el-border-color-hover);
  position: relative;
} */

</style>