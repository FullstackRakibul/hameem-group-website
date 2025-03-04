<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "/assets/v2/roadmap.png", // Update with actual image path
  },
});



import { library } from '@fortawesome/fontawesome-svg-core';


</script>

<template>
  <section class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-white bg-opacity-80"></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12">
      <!-- Left Side: Text & Goals -->
      <div class="text-left">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          SUSTAINABILITY GOALS:
        </h2>
        <h3 class="text-2xl md:text-3xl text-green-600 font-bold">
          ROADMAP 2030
        </h3>
        <ul class="mt-6 space-y-3 text-lg text-gray-800">
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Reduce ground water use by 70% and Zero liquid discharge facility
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Net zero GHG emissions
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            More than 50% renewable energy
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Less than 2% wastage of materials
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Ensure employees' living wages
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Ensure gender equality
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            Smart Factory 4.0
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            100% sustainable apparel
          </li>
          <li class="flex items-start">
            <span class="text-green-600 text-xl font-bold mr-2">●</span>
            100% traceable and transparent supply-chain
          </li>
        </ul>
      </div>

      <!-- Right Side: Description & Roadmap -->
      <div class="space-y-6">
    <p class="text-gray-700 text-lg">
      Cute Dress is a 100% export-oriented knit garments manufacturing company. 
      We have developed a sustainability framework with our core values. 
      Cute Dress’s milestones are ambitious in terms of ‘happiness of our employees’ and ‘pollution-free nature’.
    </p>
    <p class="text-gray-700 text-lg">
      Our practices are fully committed to keeping environmental & societal 
      costs at a minimum. We focus on strength, efficiency, productivity, and innovation 
      while upholding product quality. Our plan is to manufacture for premium brands only, 
      collaborating with sustainable suppliers.
    </p>

    <!-- Sustainability Icons Section -->
    <div class="flex space-x-6 mt-6">
      <div class="group flex flex-col items-center">
        <Icon name="hugeicons:turtle-neck" style="color: black" class="text-green-600 text-4xl transition-transform animate-pulse"  />
        <!-- <span class="mt-2 text-gray-800 font-medium">Fabric Sustainability</span> -->
      </div>

      <div class="group flex flex-col items-center">
        <Icon name="hugeicons:chart-line-data-01" style="color: black" class="text-green-600 text-4xl transition-transform animate-pulse" />
        <!-- <span class="mt-2 text-gray-800 font-medium">Wash Sustainability</span> -->
      </div>

      <div class="group flex flex-col items-center">
        <Icon name="hugeicons:eco-energy" style="color: black" class="text-green-600 text-4xl transition-transform animate-spin"  />
        <!-- <span class="mt-2 text-gray-800 font-medium">Environment Sustainability</span> -->
      </div>
    </div>
  </div>

    </div>
  </section>
</template>

<style scoped>
/* Ensuring smooth text readability */
section {
  position: relative;
  overflow: hidden;
}
</style>