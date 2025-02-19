<script lang="ts" setup>
import { ref } from 'vue';
import Search from '../mediator/Search.vue';
import { NuxtLink } from '#components';
import BusinessUnitMegamenu from './ui/BusinessUnit.megamenu.vue';
import ContactUsMapSectionComponent from './index/ContactUsMapSectionComponent.vue';

// mega menu handle

const isBusinessUnitMenuOpen = ref(false);
const isContactMenuOpen = ref(false);


const toggleMenu = () => {
  isBusinessUnitMenuOpen.value = !isBusinessUnitMenuOpen.value;
  isContactMenuOpen.value = !isContactMenuOpen.value;
};
</script>
<template>
  <header>
    <nav class="bg-white border-gray-200 dark:border-gray-600 ">
      <div class="flex flex-wrap justify-between items-center mx-auto container p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/v2/header/hameem-group-logo-primary.png" class="h-8" alt="Flowbite Logo" />
        </a>
        <button data-collapse-toggle="mega-menu-full-image" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-image" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">Home</a>
            </li>
            <li>
              <button @mouseenter="isBusinessUnitMenuOpen = true" 
                class="flex items-center py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                Business Units
                <svg class="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
            </li>
            <li>
              <button @mouseenter="isContactMenuOpen = true" 
                class="flex items-center py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0">
                <a href="#"
                  class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mega Dropdown Desktop -->

      <!-- BusinessUnitMegamenu -->
      <div v-show="isBusinessUnitMenuOpen"
        @mouseenter="isBusinessUnitMenuOpen = true"
        @mouseleave="isBusinessUnitMenuOpen = false"
        class="absolute left-0 right-0 translate-y-0 transform-cpu  bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-20">
        <!-- business-unit mega menu -->
        <BusinessUnitMegamenu />
      </div>

      <!-- ContactMegamenu -->
       <div v-show="isContactMenuOpen"
       @mouseenter="isContactMenuOpen = true"
        @mouseleave="isContactMenuOpen = false"
        class="absolute left-0 right-0 translate-y-0 transform-cpu  bg-white border-t border-gray-200 shadow-lg transition-all duration-300 z-20">
        <!-- business-unit mega menu -->
        <ContactUsMapSectionComponent />
      </div>
    </nav>

  </header>
</template>

<style scoped></style>