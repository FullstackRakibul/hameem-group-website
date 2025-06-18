<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "/assets/v2/roadmap.png", // Update with actual image path
  },
});

import UISectionUnderline from '~/components/ui/UISectionUnderline.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
</script>

<template>
  <section id="index-sustainability"
    class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-white bg-opacity-80"></div>
    
    <!-- Content Container -->
    <div class="relative z-10 max-w-8xl w-full">
      <!-- Centered Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Sustainability <span class="text-primary font-medium">Goals</span>
        </h2>
        <div class="flex justify-center">
          <UISectionUnderline />
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left Side: Goals List -->
        <div class="text-left">
          <h3 class="text-2xl md:text-3xl text-green-600 font-light uppercase tracking-wide mb-8">
            ROADMAP 2030
          </h3>
          <ul class="space-y-4 text-lg text-gray-800">
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Reduce ground water use by 70% and Zero liquid discharge facility</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Net zero GHG emissions</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>More than 50% renewable energy</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Less than 2% wastage of materials</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Ensure employees' living wages</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Ensure gender equality</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Smart Factory 4.0</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>100% sustainable apparel</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>100% traceable and transparent supply-chain</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Chemical Water & Power Saving</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Environment Friendly Wash Chemicals</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Power Saving Machineries</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Water Saving And Recycling</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Green Dyes</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Natural Fibers</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Sustainable Laundry Machine</span>
            </li>
            <li class="flex items-start hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
              <span class="text-green-600 text-xl font-bold mr-3 mt-1">●</span>
              <span>Laser Technology</span>
            </li>
          </ul>
        </div>

        <!-- Right Side: Description & Visual -->
        <div class="space-y-8">
          <!-- Description Text -->
          <div class="space-y-6">
            <p class="text-gray-700 text-lg leading-relaxed">
              Ha-Meem Group is a 100% export-oriented knit garments manufacturing company.
              We have developed a sustainability framework with our core values.
              Ha-Meem Group's milestones are ambitious in terms of 'happiness of our employees' and 'pollution-free nature'.
            </p>
            <p class="text-gray-700 text-lg leading-relaxed">
              Our practices are fully committed to keeping environmental & societal
              costs at a minimum. We focus on strength, efficiency, productivity, and innovation
              while upholding product quality. Our plan is to manufacture for premium brands only,
              collaborating with sustainable suppliers.
            </p>
          </div>

          <!-- Sustainability Icons Section -->
          <div class="bg-white bg-opacity-60 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <h4 class="text-xl font-semibold text-gray-800 text-center mb-6">Our Sustainability Pillars</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Icon name="hugeicons:turtle-neck" 
                    class="text-green-600 text-3xl transition-transform group-hover:scale-110" />
                </div>
                <span class="text-gray-800 font-medium">Fabric Sustainability</span>
                <p class="text-sm text-gray-600 mt-2">Eco-friendly materials and processes</p>
              </div>

              <div class="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Icon name="hugeicons:chart-line-data-01" 
                    class="text-green-600 text-3xl transition-transform group-hover:scale-110" />
                </div>
                <span class="text-gray-800 font-medium">Wash Sustainability</span>
                <p class="text-sm text-gray-600 mt-2">Water-efficient washing technologies</p>
              </div>

              <div class="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-green-50 transition-all duration-300">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Icon name="hugeicons:eco-energy" 
                    class="text-green-600 text-3xl transition-transform group-hover:scale-110" />
                </div>
                <span class="text-gray-800 font-medium">Environment Sustainability</span>
                <p class="text-sm text-gray-600 mt-2">Clean energy and carbon reduction</p>
              </div>
            </div>
          </div>
          
          <!-- Centered Sustainability Image -->
          <div class="flex justify-center items-center">
            <div class="relative group">
              <div class="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img src="/assets/v1/sustain.png"
                class="relative rounded-full w-48 h-48 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500" 
                alt="Sustainability Goals" />
            </div>
          </div>

          <!-- Progress Indicators -->
          <div class="bg-white bg-opacity-60 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">2030 Progress Targets</h4>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Water Reduction</span>
                <div class="flex items-center space-x-2">
                  <div class="w-32 bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                  </div>
                  <span class="text-sm font-bold text-green-600">70%</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Renewable Energy</span>
                <div class="flex items-center space-x-2">
                  <div class="w-32 bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 50%"></div>
                  </div>
                  <span class="text-sm font-bold text-green-600">50%</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Waste Reduction</span>
                <div class="flex items-center space-x-2">
                  <div class="w-32 bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 98%"></div>
                  </div>
                  <span class="text-sm font-bold text-green-600">98%</span>
                </div>
              </div>
            </div>
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

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for the goals list */
.space-y-4::-webkit-scrollbar {
  width: 6px;
}

.space-y-4::-webkit-scrollbar-track {
  background: transparent;
}

.space-y-4::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.3);
  border-radius: 3px;
}

.space-y-4::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 197, 94, 0.5);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1.md\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .text-4xl.md\:text-6xl {
    font-size: 2.5rem;
  }
}
</style>
