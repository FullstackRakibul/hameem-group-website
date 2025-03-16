<template>
  <footer class="bg-gray-100 text-gray-800 pt-8">
    <!-- Top Section -->
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1: Logo and About -->
        <div>
          <img src="/public/assets/v2/header/hameem-group-logo-primary.png" alt="Hameem Group Logo" class="h-12 mb-4" />
          <p class="text-sm leading-relaxed">
            Hameem Group is one of the largest textile manufacturers in Bangladesh, specializing in apparel, knitting,
            dyeing, and more.
          </p>
        </div>

        <!-- Column 2: Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-blue-600">Our Units</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-blue-600">Line Works</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="hover:text-blue-600">Machines</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: App Download and Social Media -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Download Our App</h3>
          <div class="flex items-center space-x-4 mb-4">
            <a href="#" class="hover:text-blue-600 flex justify-between items-center">
              <Icon name="hugeicons:app-store" style="color: black" />
              <span class="ml-2 text-sm">App Store</span>
            </a>
            <a href="#" class="hover:text-blue-600 flex justify-between items-center">
              <Icon name="hugeicons:play-store" style="color: black" />
              <span class="ml-2 text-sm">Google Play</span>
            </a>
          </div>
          <h3 class="text-lg font-semibold mb-4">Find Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-blue-600">
              <Icon name="hugeicons:linkedin-01" style="color: black" />
            </a>
            <a href="#" class="hover:text-blue-600">
              <Icon name="hugeicons:google" style="color: black" />
            </a>
            <a href="#" class="hover:text-blue-600">
              <Icon name="hugeicons:facebook-01" style="color: black" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lower Section -->
    <div class="bg-primary mt-8 py-2">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 text-sm text-justify md:text-justify">
        <!-- Left Section -->
        <div class="mb-2 md:mb-0 md:text-start text-white text-center">Design and Developed by Ha-Meem Group IT Department</div>
        <!-- Middle Section -->
        <div class="mb-2 text-center text-white  md:mb-0">© 2025 Ha-Meem Group. All rights reserved.</div>
        <!-- Right Section -->
        <div class="md:text-end text-center text-white md:mb-0" >Last updated at : {{ formattedLastUpdated }}</div>
      </div>
    </div>
  </footer>
  <!-- <Footer/> -->

  <section>

  </section>
</template>

<script setup>
import Footer from '@/components/Footer.vue';



// Compute the last updated date, 20 days prior to the current date
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