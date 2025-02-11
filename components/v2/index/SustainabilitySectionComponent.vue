<template>
  <section class="container mx-auto py-10 md:py-16">
    <!-- Section Title -->
    <el-row class="mb-6 md:mb-10 justify-center">
      <el-col :span="24" class="">
        <SectionHeader
          title="Sustainability"
          subtitle="Our milestones in excellence and recognition over the years."
          buttonText="Know More"
          buttonTextLink="/sustainability"
          />
      </el-col>
    </el-row>

    <!-- Sustainability Cards -->
    <el-row :gutter="20">
      <el-col 
        :xs="24" 
        :sm="24" 
        :md="8" 
        v-for="(item, index) in sustainabilityItems" 
        :key="index"
        class="mb-4 md:mb-0"
      >
        <el-card class="p-4 md:p-6 rounded-md group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <!-- Icon -->
          <div class="icon-container mb-2 md:mb-4 text-center">
            <span :class="item.icon"
              class="text-4xl md:text-5xl text-white transition-transform duration-300 group-hover:scale-125"></span>
          </div>

          <!-- Title -->
          <p class="text-xl md:text-2xl font-semibold text-white text-center">
            {{ item.title }}
          </p>

          <!-- Key Points -->
          <ul class="mt-2 md:mt-4 space-y-1 md:space-y-2">
            <li v-for="(point, i) in item.keyPoints" :key="i" class="flex items-center text-white text-xs md:text-sm space-x-2">
              <span class="text-xs">&#8226;</span>
              <span class="transition-all duration-300 group-hover:text-white">
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
</template>

<script lang="ts" setup>
import { ElCard, ElRow, ElCol } from "element-plus";
import SectionHeader from "../ui/SectionHeader.vue";
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
/* Existing styles remain the same */
.el-card.group:hover {
  transform: translateY(-10px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 20px 20px rgba(255, 255, 255, 0.438);
}

.icon-container .group-hover\:scale-125 {
  transform: scale(1.25);
}

.el-card {
  background-color: #264156;
}
</style>