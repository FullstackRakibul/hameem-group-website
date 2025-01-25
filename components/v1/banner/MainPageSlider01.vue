<template>
  <div :style="{ backgroundImage: `url('/assets/ha-meem-group-banner-main-bg-01.png')` }"
    class="bg-cover bg-center bg-no-repeat relative">
    <!-- Carousel Section -->
    <el-carousel :height="carouselHeight" autoplay :interval="5000" :loop="true">
      <!-- Garments Slide -->
      <!-- <el-carousel-item key="garments">
        <div class=" h-screen mx-24">
          <ImageSliderSection />
        </div>
      </el-carousel-item> -->
      <!-- Denim Slide -->
      <el-carousel-item key="denim">
        <div class="h-screen mx-24">
          <HeroImageSectionOne />
        </div>
      </el-carousel-item>
      <el-carousel-item key="denim">
        <div class="h-screen mx-24">
          <HeroImageSectionTwo />
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
// Responsive carousel height
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
/* Add responsive padding for the container */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}

/* Customize el-image hover animation */
img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.el-carousel__arrow {
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black background */
  color: #f40000;
  /* White arrow icon */
  border-radius: 50%;
  /* Make the arrow buttons circular */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}
</style>