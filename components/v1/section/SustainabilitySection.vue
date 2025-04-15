<template>

  <el-divider class=""></el-divider>
  <section class="container mx-auto py-12">
    <!-- Section Title -->
    <el-row class="mb-10 justify-center">
      <el-col :span="24" class="text-center">
        <h2 class="text-4xl font-bold text-primary">Sustainability</h2>
        <p class="text-lg text-primary mt-2">
          Our milestones in excellence and recognition over the years.
        </p>
      </el-col>
    </el-row>

    <!-- Sustainability Cards -->
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in sustainabilityItems" :key="index">
        <el-card class=" p-6 rounded-lg group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <!-- Icon -->
          <div class="icon-container mb-4 text-center">
            <span :class="item.icon"
              class="text-5xl text-white transition-transform duration-300 group-hover:scale-125"></span>
          </div>

          <!-- Title -->
          <p class="text-2xl font-semibold text-white text-center">
            {{ item.title }}
          </p>

          <!-- Key Points -->
          <ul class="mt-4 space-y-2">
            <li v-for="(point, i) in item.keyPoints" :key="i" class="flex items-center text-white text-sm space-x-2">
              <span class="text-xs">&#8226;</span>
              <span class="transition-all duration-300 group-hover:text-black">
                {{ point }}
              </span>
            </li>
          </ul>

          <!-- Background Animation -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
  <el-divider class=""></el-divider>
</template>

<script lang="ts" setup>
import { ElCard, ElRow, ElCol } from "element-plus";

// Sustainability items data
const sustainabilityItems = [
  {
    title: "Fabric Sustainability",
    icon: "i-carbon-recycle", // Icon from https://icones.js.org/
    keyPoints: [
      "Eco-friendly fabrics",
      "Energy-efficient production",
      "Recycled materials",
    ],
  },
  {
    title: "Wash Sustainability",
    icon: "i-carbon-clean", // Icon from https://icones.js.org/
    keyPoints: [
      "Water conservation processes",
      "Non-toxic washing agents",
      "Advanced water recycling",
    ],
  },
  {
    title: "Environment Sustainability",
    icon: "i-carbon-tree", // Icon from https://icones.js.org/
    keyPoints: [
      "Carbon-neutral policies",
      "Afforestation projects",
      "Minimal environmental impact",
    ],
  },
];
</script>

<style scoped>
/* Style for card hover effects */
.el-card.group:hover {
  transform: translateY(-10px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 20px 20px rgba(255, 255, 255, 0.438);
}

/* Style for icons to scale on hover */
.icon-container .group-hover\:scale-125 {
  transform: scale(1.25);
}

.el-card {
  background-color: #9ac049;
}
</style>