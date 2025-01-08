<template>
  <footer class="bg-gray-100 text-gray-800 pt-8 pb-4">
    <!-- Top Section -->
    <div class="container mx-auto px-4 max-w-1400">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1: Logo and About -->
        <div>
          <img src="/public/assets/group-logo.png" alt="Hameem Group Logo" class="h-12 mb-4" />
          <p class="text-sm leading-relaxed">
            Hameem Group is one of the largest textile manufacturers in Bangladesh, specializing in apparel, knitting, dyeing, and more.
          </p>
        </div>

        <!-- Column 2: Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/units" class="hover:text-blue-600">Our Units</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/line-works" class="hover:text-blue-600">Line Works</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/machines" class="hover:text-blue-600">Machines</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: App Download and Social Media -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect with Us</h3>
          <div class="flex items-center space-x-4 mb-4">
            <a href="#">
              <el-icon>
                <download />
              </el-icon>
              <span class="ml-2 text-sm">App Store</span>
            </a>
            <a href="#">
              <el-icon>
                <download />
              </el-icon>
              <span class="ml-2 text-sm">Google Play</span>
            </a>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-blue-600">
              <font-awesome-icon :icon="['fab', 'facebook']" class="text-lg" />
            </a>
            <a href="#" class="hover:text-blue-600">
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-lg" />
            </a>
            <a href="#" class="hover:text-blue-600">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg" />
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
import { Download } from '@element-plus/icons-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the icons to the library
library.add(faFacebook, faTwitter, faInstagram);
</script>

<style scoped>
/* Optional footer-specific styling */
</style>
