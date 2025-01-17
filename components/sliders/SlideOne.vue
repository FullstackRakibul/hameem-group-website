<template>
  <div>
    <!-- Carousel Section -->
    <el-carousel :height="carouselHeight" indicator-position="outside" autoplay :interval="5000" :loop="true">
      <!-- Garments Slide -->
      <el-carousel-item key="garments">
        <div
          class="h-full bg-[url('/assets/home-banner-section-img-01.jpg')] bg-cover bg-no-repeat flex items-center justify-center bg-gray-100">
          <!-- <el-image
            class="transition-transform duration-300 ease-in-out hover:scale-105"
            style="max-width: 500px; width: 100%;"
            src="/assets/home-banner-section-img-01.jpg"
            alt="Garments Banner"
          /> -->
          <!-- <div class="ml-6 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-800">Premium Garments</h2>
            <p class="text-lg text-gray-600">Quality textiles crafted with precision.</p>
          </div> -->
        </div>
      </el-carousel-item>

      <!-- Denim Slide -->
      <el-carousel-item key="denim">
        <div class="h-full bg-[#D6D6D6] bg-cover bg-no-repeat flex items-center justify-center">
          <el-image class="transition-transform duration-300 ease-in-out hover:scale-105"
            style="max-width: 500px; width: 100%;" src="/assets/banner_02.jpg" alt="Denim Banner" />
          <div class="ml-6 text-center md:text-left">
            <h2 class="text-4xl font-bold text-primary">Denim Excellence</h2>
            <p class="text-lg text-primary">Versatile designs for every occasion.</p>
          </div>
        </div>
      </el-carousel-item>

      <!-- Sustainability Slide -->

      <el-carousel-item key="sustainability">
        <div
          class="relative h-full bg-[url('/assets/home-banner-section-img-06.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
          <!-- Black Overlay -->
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <!-- Main Content -->
          <div class="relative z-10">
            <HomePageBannerOne />
          </div>
        </div>
      </el-carousel-item>

    </el-carousel>
  </div>

</template>


<script setup lang="ts">
import HomePageBannerOne from '../banners/HomePageBannerOne.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Responsive carousel height
const carouselHeight = ref('800px');

// Update height based on screen size
const updateHeight = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    // Large screens (lg)
    carouselHeight.value = '800px';
  } else if (width >= 768) {
    // Medium screens (md)
    carouselHeight.value = '600px';
  } else {
    // Small screens
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
</style>