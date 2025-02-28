<template>


  
  <section class="container mx-auto py-12">
    <el-row :gutter="20" class="items-center">
      <!-- Image Column -->
      <el-col :span="12">
        <div class=" relative overflow-hidden rounded-lg ">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 500px; width: 100%;"
            src="./assets/WEB-DESIGN-2025-2-section-mission-vision.jpg"
            alt="Mission Vision Section banner"
          />
        </div>
      </el-col>

      <!-- Content Column -->
      <el-col :span="12">
        <!-- Section Title -->
        <el-row class="mb-6">
          <el-col :span="24" class="text-left">
            <h2 class="text-5xl font-helvetica font-semibold text-gray">OUR VISION......</h2>
            <p class="text-lg text-gray-800 mt-2">
              To provide excellence and solutions in denim and non-denim textile products to humankind th responsible and as much sustainable ways, for fulfillment of their life-style need, desires and expressions.
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>

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
