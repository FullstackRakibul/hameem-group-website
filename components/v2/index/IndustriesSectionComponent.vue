<template>
  <div class=" ">
    <!-- Section Title -->
    <el-row class="mb-10 justify-center">
      <el-col :span="24" class=" bg-primary py-40 ">

        <div class="container mx-auto ">
          <h2 class=" text-xl text-gray-300 ">Industries We Operate In <span class="border border-b-2"></span></h2>
          <p class="text-5xl font-semibold text-white mt-2">
            Our comprehensive manufacturing capabilities span multiple industries.
          </p>
        </div>
      </el-col>
    </el-row>
    <!-- <section class="container mx-auto py-40">
              <SectionHeader
            title="Industries We Operate In"
            subtitle="Our comprehensive manufacturing capabilities span multiple industries."
            primaryColorClass="bg-primary"
            />
    </section> -->


    <!-- Industry Cards -->
    <div class="container mx-auto -mt-32 z-10">


      <el-row :gutter="20" class="gap-y-6">
        <el-col :xs="24" :sm="12" :md="6" v-for="(industry, index) in industries" :key="index">
          <el-card shadow="hover" class="relative p-0 overflow-hidden rounded-xl bg-white group">
            <!-- Cover Image with Hover Effect -->
            <div class="relative h-44 overflow-hidden">
              <img :src="industry.icon" alt="Industry Icon"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <!-- Gradient Overlay on Hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-40 transition-opacity">
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <h3
                class="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-blue-600">
                {{ industry.title }}
              </h3>
              <p class="text-gray-600 text-sm transition-all duration-300 group-hover:text-gray-800">
                {{ industry.description }}
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ElCard, ElRow, ElCol } from "element-plus";

import SectionHeader from "../ui/SectionHeader.vue";


const industries = [
  {
    title: "Woven",
    icon: "/assets/industry/industry-image-01.jpg",
    description: "300 production lines in six locations.",
  },
  {
    title: "Denim Mill",
    icon: "/assets/industry/denim-02.png",
    description: "A serene 100-acre dream project.",
  },
  {
    title: "Laundry",
    icon: "/assets/industry/Laundry-01.webp",
    description: "Dry process capability",
  },
  {
    title: "Sweater",
    icon: "/assets/industry/Sweater=01.jpeg",
    description: "400 Jacquard Stall machines",
  },
  {
    title: "Jute Mill",
    icon: "/assets/industry/JuteMill-01.webp",
    description: "A growing industry",
  },
  {
    title: "Design",
    icon: "/assets/industry/design-03.png",
    description: "Experienced designers.",
  },
  {
    title: "Newspaper",
    icon: "/assets/industry/samakal.jpg",
    description: "Samakal, a popular national daily.",
  },
  {
    title: "News Channel",
    icon: "/assets/industry/ch24-logog.jpeg",
    description: "Covering news across Bangladesh.....",
  },
];
</script>

<style scoped>
/* Smooth hover effect for cards */
.el-card {
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.el-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Smooth image hover scaling */
.group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Overlay hover animation */
.group-hover\:opacity-40 {
  opacity: 0.4;
}
</style>