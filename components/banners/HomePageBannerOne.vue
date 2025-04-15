<template>
  <section class="flex items-center">
    <div class="container mx-auto">
      <el-row :gutter="20" class="items-center">
        <!-- Column 1 -->
        <el-col :xs="24" :sm="24" :md="14" class="text-center md:text-left">
          <div class="p-4">
            <WelcomeSection />
          </div>
        </el-col>

        <!-- Column 2 -->
        <el-col :xs="24" :sm="24" :md="10" class="text-center md:text-right">
          <div class="flex justify-center md:justify-end items-center">
            <!-- <el-image class="transition-transform duration-300 ease-in-out hover:scale-105"
              style="max-width: 500px; width: 100%;" src="/assets/home-banner-img-01.png" alt="Home Banner Image" /> -->
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import WelcomeSection from '../sections/WelcomeSection.vue';



</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}

/* Customize the el-image hover animation */
img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>