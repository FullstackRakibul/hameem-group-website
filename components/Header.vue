<!-- <header class="border-b-2 bg-white border-indigo-100 fixed top-0 left-0 right-0 z-10 page-container"> -->
<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-10 page-container transition-all duration-300',
    isScrolled ? ' shadow-lg' : 'bg-transparent'
  ]">
    <div class="fixed top-0 left-0 right-0 z-10 container mx-auto transition-all duration-300">
      <nav class="mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="flex">
              <img src="/public/assets/group-logo.png" alt="Hameem Group Logo" class="h-8 w-auto" />

            </NuxtLink>
          </div>

          <!-- Desktop Menu -->
          <div class="flex items-center justify-between">

            <div class="hidden md:flex space-x-2 px-3">
              <NuxtLink to="/"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md">
                Home
              </NuxtLink>
              <NuxtLink to="/about"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md f">
                About Us
              </NuxtLink>
              <NuxtLink to="/#business-units"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md">
                Business Units
              </NuxtLink>
              <NuxtLink to="/#sustainability"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md ">
                Subtainability
              </NuxtLink>
              <NuxtLink to="/#industries"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md ">
                Products
              </NuxtLink>
              <NuxtLink to="/#clients"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md "">
               Clients
             </NuxtLink>
             <NuxtLink to=" /#gallary"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md=">
                Gallary
              </NuxtLink>
              <NuxtLink to="/contact"
                class="text-white font-semibold hover:text-primary hover:bg-slate-200 hover:rounded-full px-3 py-2 text-md">
                Contact Us
              </NuxtLink>
            </div>

            <!-- Download Brochure Button -->
            <el-space>
              <Search />
              <div class="hidden md:block">
                <a href="https://www.linkedin.com/company/hameemgroup" target="_blank" download
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#264156] hover:bg-[#5C2D23]">
                  Career
                </a>
              </div>
            </el-space>
            <LanguageSwitcher />
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="isMenuOpen = true"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Open main menu">
              <MenuIcon class="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <Transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 z-50 ">
          <div class="absolute inset-0 bg-black opacity-50" @click="isMenuOpen = false"></div>
          <div class="absolute top-0 right-0 w-3/4 max-w-xs bg-white shadow-lg h-full p-4 overflow-y-auto">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center">
                <img src="/public//assets/group-logo.png" alt="Hameem Group Logo" class="h-8 w-auto" />
                <span class="ml-2 text-xl font-bold text-gray-800">Ha-Meem Group</span>
              </div>
              <button @click="isMenuOpen = false" class="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Close menu">
                <CloseIcon class="h-6 w-6" />
              </button>
            </div>
            <nav class="flex flex-col space-y-4">
              <NuxtLink to="/" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Home
              </NuxtLink>
              <NuxtLink to="/about" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                About Us
              </NuxtLink>
              <NuxtLink to="/" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Business Units
              </NuxtLink>
              <NuxtLink to="/" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Subtainability
              </NuxtLink>
              <NuxtLink to="/" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Products
              </NuxtLink>
              <NuxtLink to="/sister-concerns/refat-garments-ltd" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Clients
              </NuxtLink>
              <NuxtLink to="/sister-concerns/refat-garments-ltd" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Gallary
              </NuxtLink>

              <NuxtLink to="/contact" @click="isMenuOpen = false"
                class="text-gray-700 hover:text-blue-600 text-lg font-medium">
                Contact Us
              </NuxtLink>
              <el-space>
                <div class="hidden md:block">
                  <a href="https://www.linkedin.com/company/hameemgroup" target="_blank" download
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#264156] hover:bg-[#5C2D23]">
                    Career
                  </a>
                </div>
              </el-space>
            </nav>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu as MenuIcon, Close as CloseIcon } from '@element-plus/icons-vue'
import Search from './mediator/Search.vue';
import LanguageSwitcher from './mediator/LanguageSwitcher.vue';
const isScrolled = ref(false);


// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Change background after scrolling 50px
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isMenuOpen = ref(false)
</script>

<style scoped>
/* Fade Transition for Mobile Menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>