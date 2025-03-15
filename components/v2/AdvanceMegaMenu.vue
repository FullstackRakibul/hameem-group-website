<script lang="ts" setup>
defineProps({
  bgImage: {
    type: String,
    default: "https://api.hameemgroup.com:9012/Resources/hameem-group-website/headebg03.jpeg",
  },
});

import { ref } from 'vue';
import { NuxtLink } from '#components';
import BusinessUnitMegamenu from './ui/BusinessUnit.megamenu.vue';
import ContactUsMapSectionComponent from './index/ContactUsMapSectionComponent.vue';

const isMenuOpen = ref(false);
const isBusinessUnitMenuOpen = ref(false);
const isContactMenuOpen = ref(false);
</script>

<template>
  <header class="w-full bg-white shadow-md">
    <nav class="container mx-auto flex flex-wrap justify-between items-center p-4">
      <NuxtLink to="/v2" class="flex items-center">
        <img src="/assets/v2/header/hameem-group-logo-primary.png" class="h-10" alt="Ha-Meem Group" />
      </NuxtLink>
      
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      
      <div :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="w-full md:flex md:w-auto">
        <ul class="flex flex-col md:flex-row md:space-x-8">
          <li><NuxtLink to="/" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">Home</NuxtLink></li>
          <li><NuxtLink to="/about" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">About Us</NuxtLink></li>
          <li>
            <NuxtLink to="#" @mouseenter="isBusinessUnitMenuOpen = true" class="text-lg font-medium hover:text-blue-600">Business Units</NuxtLink>
          </li>
          <li><NuxtLink to="#" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">Sustainability</NuxtLink></li>
          <li><NuxtLink to="#" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">Products</NuxtLink></li>
          <li><NuxtLink to="#" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">Clients</NuxtLink></li>
          <li><NuxtLink to="#" @click="isMenuOpen = false" class="text-lg font-medium hover:text-blue-600">Gallery</NuxtLink></li>
          <li>
            <NuxtLink to="/contact" @mouseenter="isContactMenuOpen = true" class="text-lg font-medium hover:text-blue-600">Contact Us</NuxtLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/hameemgroup" target="_blank"
               class="px-4 py-2 border rounded-full shadow-sm text-white bg-[#264156] hover:bg-[#5C2D23]">
              Career
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div v-show="isBusinessUnitMenuOpen" @mouseenter="isBusinessUnitMenuOpen = true" @mouseleave="isBusinessUnitMenuOpen = false"
         class="absolute left-0 right-0 bg-white shadow-lg border-t">
      <BusinessUnitMegamenu />
    </div>

    <div v-show="isContactMenuOpen" @mouseenter="isContactMenuOpen = true" @mouseleave="isContactMenuOpen = false"
         class="absolute left-0 right-0 bg-white shadow-lg border-t">
      <ContactUsMapSectionComponent />
    </div>
  </header>
</template>

<style scoped>
  .text-lg {
    display: block;
    padding: 8px 16px;
  }
</style>
