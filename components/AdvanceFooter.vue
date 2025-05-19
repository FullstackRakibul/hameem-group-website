<template>
  <footer class="bg-gray-100 text-gray-800 pt-8">
    <div class=" mx-auto w-full lg:px-16 md:px-14 px-4 overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact Information -->
        <div>
          <img src="/public/assets/v2/header/hameem-group-logo-primary.png" alt="Hameem Group Logo" class="h-12 mb-4" />
          <p class="text-xl leading-relaxed">
            Hameem Group is one of the largest textile manufacturers in Bangladesh, specializing in apparel, knitting,
            dyeing, and more.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-blue-600">About</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-blue-600">Working Process</NuxtLink></li>
            <li><NuxtLink to="/" class="hover:text-blue-600">Plans & Programs</NuxtLink></li>
          </ul>
        </div>

        <!-- Newsletter & Social Media -->
        <div class="bg-primary shadow-lg rounded-xl p-6">
          <h3 class="text-white text-lg font-semibold mb-4">Join Our Newsletter for Exclusive Updates</h3>
          <p class="text-white text-sm mb-4">Subscribe to our exclusive newsletter for the latest updates</p>
          <div class="flex border rounded-lg overflow-hidden mb-4">
            <input type="email" placeholder="mail@outlook.com" class="flex-grow px-3 py-2 focus:outline-none" />
            <button class="bg-primary text-white px-4 py-2">Subscribe</button>
          </div>
          <div class="flex space-x-4">
            <a href="#" class=" text-2xl text-white  hover:text-blue-600"><Icon name="hugeicons:facebook-01"/></a>
            <a href="#" class="text-2xl text-white  hover:text-blue-600"><Icon name="hugeicons:youtube" /></a>
            <a href="#" class=" text-2xl text-white  hover:text-blue-600"><Icon name="hugeicons:instagram" /></a>
            <a href="#" class="text-2xl text-white  hover:text-blue-600"><Icon name="hugeicons:twitter" /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lower Section -->
    <div class="bg-primary mt-8 py-2">
      <div class="mx-auto w-full lg:px-16 md:px-14 px-4 grid grid-cols-1 md:grid-cols-3 text-sm  text-white">
        <div>Design and Developed by Ha-Meem Group IT Department</div>
        <div class="text-center">© 2025 Ha-Meem Group. All rights reserved.</div>
        <div class="text-end">Last updated at: {{ formattedLastUpdated }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Compute the last updated date, 3 days prior to the current date
const lastUpdatedDate = new Date();
lastUpdatedDate.setDate(lastUpdatedDate.getDate() - 3);
const formattedLastUpdated = ref(
  lastUpdatedDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
);
</script>

<style scoped>
/* Optional footer-specific styling */
</style>
