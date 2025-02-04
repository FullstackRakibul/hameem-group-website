<template>
  <footer class="bg-gray-100 text-gray-800 mt-12 pt-8">
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
          <h3 class="text-lg font-semibold mb-4">Connect with Us</h3>
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
    <div class="bg-gray-200 mt-8 py-2">
      <div class="container mx-auto px-4 max-w-1400 text-center text-sm">
        <span>© Hameem Group, IT Department</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram);
</script>

<style scoped>
/* Optional footer-specific styling */
</style>