<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Section Title -->
    <el-row class="mb-10 justify-center">
      <el-col :span="24" class="text-center">
        <h2 class="text-4xl font-bold text-gray-800">Achievements</h2>
        <p class="text-lg text-gray-600 mt-2">
          Our milestones in excellence and recognition over the years.
        </p>
      </el-col>
    </el-row>

    <!-- Achievements Cards -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="6">
        <el-card shadow="hover" class="p-6 bg-blue-50 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800">
            Annual Winner
          </h3>
          <p class="text-md text-gray-600 mt-2">
            Strategic Quality Assurance Dept. KOHLS. 2010
          </p>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6">
        <el-card shadow="hover" class="p-6 bg-green-50 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800">
            Annual Winner
          </h3>
          <p class="text-md text-gray-600 mt-2">
            Strategic Quality Assurance Dept. KOHLS. 2009
          </p>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6">
        <el-card shadow="hover" class="p-6 bg-yellow-50 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800">
            Technical Design Certification
          </h3>
          <p class="text-md text-gray-600 mt-2">
            KOHLS. 2011
          </p>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="6">
        <el-card shadow="hover" class="p-6 bg-red-50 rounded-lg">
          <h3 class="text-2xl font-semibold text-gray-800">
            Technical Performance Award
          </h3>
          <p class="text-md text-gray-600 mt-2">
            JCPenny. 2009
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElCard } from 'element-plus';
</script>

<style scoped>
/* Optional styles for hover effects */
.el-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
