<template>
  <div class="bg-[url('/assets/mission-vission-bg.jpg')] bg-cover bg-no-repeat ">

  
  <section class="container mx-auto py-12">
    <el-row :gutter="20" class="items-center">
      <!-- Image Column -->
      <el-col :span="12">
        <div class=" relative overflow-hidden rounded-lg ">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 400px; width: 100%;"
            src="https://www.thecareline.org.uk/images/2020/05/10/vision-mission-values.png"
            alt="Mission Vision Section banner"
          />
        </div>
      </el-col>

      <!-- Content Column -->
      <el-col :span="12">
        <!-- Section Title -->
        <el-divider content-position="right">Stitching Futures</el-divider>
        <el-row class="mb-6">
          <el-col :span="24" class="text-left">
            <h2 class="text-4xl font-bold text-gray">Mission & Vision</h2>
            <p class="text-lg text-gray-800 mt-2">
              Our milestones in excellence and recognition over the years.
            </p>
          </el-col>
        </el-row>

        <!-- Description -->
        <p class="text-gray-700 text-justify mb-4">
          Ha-Meem Group is committed to shaping the future of the garment and textile industry by setting new standards of excellence, fostering innovation, and maintaining sustainability at its core.
        </p>

        <!-- Mission & Vision Points -->
        <div class="space-y-4">
          <div class="flex items-start space-x-3">
            <span class="text-blue-500 text-2xl">
              <i-carbon-checkmark />
            </span>
            <p class="text-gray-600 text-sm">
              To deliver innovative and sustainable garment solutions for the global market.
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-blue-500 text-2xl">
              <i-carbon-tree />
            </span>
            <p class="text-gray-600 text-sm">
              To achieve environmental sustainability by reducing carbon footprints and promoting eco-friendly practices.
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-blue-500 text-2xl">
              <i-carbon-group />
            </span>
            <p class="text-gray-600 text-sm">
              To empower 86,000+ workers and contribute to the economic growth of Bangladesh.
            </p>
          </div>
          <div class="flex items-start space-x-3">
            <span class="text-blue-500 text-2xl">
              <i-carbon-global />
            </span>
            <p class="text-gray-600 text-sm">
              To expand globally while remaining a symbol of trust and reliability.
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
  </div>
</template>

<script setup>
import { ElImage, ElRow, ElCol, ElDivider } from "element-plus";


</script>

<style scoped>
/* Hover effect for the image */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:opacity-20 {
  opacity: 0.2;
}
</style>
