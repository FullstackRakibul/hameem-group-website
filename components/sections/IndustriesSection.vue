<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Section Title -->
    <el-row class="mb-10 justify-center">
      <el-col :span="24" class="text-center">
        <h2 class="text-4xl font-bold text-gray-800">Our Industries</h2>
        <p class="text-lg text-gray-600 mt-2">
          Ha-Meem Group has ventured into many industries in Bangladesh and is one of the fastest-growing groups in the country.
        </p>
      </el-col>
    </el-row>

    <!-- Industry Cards -->
    <el-row :gutter="20" class="gap-y-6">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        v-for="(industry, index) in industries"
        :key="index"
      >
        <el-card
          shadow="hover"
          class="p-6 bg-gray-50 rounded-lg text-center relative overflow-hidden group"
        >
          <!-- Animated Icon -->
          <div class="relative mx-auto mb-4">
            <img
              :src="industry.icon"
              alt="Industry Icon"
              class=" w-96 h-44 mx-auto transform transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-6"
            />
          </div>
          <!-- Title -->
          <h3
            class="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-blue-600"
          >
            {{ industry.title }}
          </h3>
          <!-- Description -->
          <p
            class="text-gray-600 text-sm transition-all duration-300 group-hover:text-gray-800"
          >
            {{ industry.description }}
          </p>
          <!-- Hover Animation Background -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          ></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElCard, ElRow, ElCol } from "element-plus";

// Data for industries
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
    description: "Dry process capability with advanced equipment.",
  },
  {
    title: "Sweater",
    icon: "/assets/industry/Sweater=01.jpeg",
    description: "400 Jacquard Stall machines (German).",
  },
  {
    title: "Jute Mill",
    icon: "/assets/industry/JuteMill-01.webp",
    description: "A growing industry of Ha-Meem Group.",
  },
  {
    title: "Design",
    icon: "/assets/industry/design-03.png",
    description: "Resourceful team led by experienced designers.",
  },
  {
    title: "Newspaper",
    icon: "/assets/industry/samakal.jpg",
    description: "Samakal, a popular national daily.",
  },
  {
    title: "News Channel",
    icon: "/assets/industry/ch24-logog.jpeg",
    description: "Channel-24, covering news across Bangladesh.",
  },
  {
    title: "Ancillary",
    icon: "/assets/industry/Ancillary-01.webp",
    description: "Embroidery, Printing, Carton, Label, and more.",
  },
];
</script>

<style scoped>
/* Smooth card hover effect */
.el-card:hover {
  transform: translateY(-10px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
}

/* Smooth background hover effect */
.group:hover .group-hover\:bg-gradient-to-r {
  background: linear-gradient(to right, #2563eb, #1d4ed8); /* Tailwind's blue-500 to blue-700 */
  opacity: 0.2;
}

/* Smooth hover animations for the icon */
.group:hover img {
  transform: translateX(8px) rotate(6deg);
}
</style>
