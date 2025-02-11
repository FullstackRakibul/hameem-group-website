<template>
  <section class="container mx-auto  md:py-28">
    <!-- Section Header -->
    <SectionHeader
      title="Our Strengths And Quality"
      subtitle="Innovative Solutions for Global Brands with a Focus on Quality, Sustainability, and End-to-End Excellence"
      buttonTextLink="/#"
      buttonText="Know More" 
    />

    <!-- Strengths Section -->
    <div class="my-24">
      <div class="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
        <!-- Card 1 -->
        <div class="bg-white shadow hover:shadow-xl rounded-md border p-6 text-center transition-shadow duration-300 ">
          <div class="flex justify-center items-center mb-4">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center -mt-16">
              <Icon name="fluent-mdl2:delivery-truck" class="text-white text-2xl" />
            </div>
          </div>
          <h3 class="md:text-2xl font-sans font-semibold mb-2">State-of-the-Art Facilities</h3>
          <p class="text-sm text-gray-600 font-titillium">
            Advanced infrastructure including label/embroidery units, packaging, and washing facilities.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white shadow hover:shadow-xl rounded-md border p-6 text-center transition-shadow duration-300">
          <div class="flex justify-center items-center mb-4">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center -mt-16">
              <Icon name="mdi:worker" class="text-white text-2xl" />
            </div>
          </div>
          <h3 class="md:text-2xl font-semibold mb-2">Skilled Workforce</h3>
          <p class="text-sm text-gray-600 font-titillium">
            Employing over 50,000 experienced professionals.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white shadow hover:shadow-xl border rounded-md p-6 text-center transition-shadow duration-300">
          <div class="flex justify-center items-center mb-4">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center -mt-16">
              <Icon name="material-symbols:eco" class="text-white text-2xl" />
            </div>
          </div>
          <h3 class="md:text-2xl font-semibold mb-2">Sustainability Focus</h3>
          <p class="text-sm text-gray-600 font-titillium">
            Eco-friendly operations and practices.
          </p>
        </div>

        <!-- Card 4 -->
        <div class="bg-white shadow hover:shadow-xl border rounded-md p-6 text-center transition-shadow duration-300">
          <div class="flex justify-center items-center mb-4">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center  -mt-16">
              <Icon name="mdi:earth" class="text-white text-2xl" />
            </div>
          </div>
          <h3 class="md:text-2xl font-semibold mb-2">Global Reach</h3>
          <p class="text-sm text-gray-600 font-titillium">
            Partnerships with top international retailers.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
</script>

<style scoped>
/* Optional Styling if needed */
</style>
