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


const isScrolled = ref(false);
const isMenuOpen = ref(false);
const isBusinessUnitMenuOpen = ref(false);
const isContactMenuOpen = ref(false);



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


let menuCloseTimeout: ReturnType<typeof setTimeout> | null = null;

// Delay closing the menu
const startCloseBusinessUnitMenu = () => {
  menuCloseTimeout = setTimeout(() => {
    isBusinessUnitMenuOpen.value = false;
  }, 200); // Adjust delay as needed (200ms)
};

// Cancel closing when re-entering the menu
const cancelCloseBusinessUnitMenu = () => {
  if (menuCloseTimeout) {
    clearTimeout(menuCloseTimeout);
  }
};



</script>

<template>
  <header :class="[
    'fixed top-0 left-0 right-0 bg-slate-500 z-10 page-container transition-all duration-300',
    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  ]">
    <nav class="lg:px-16 md:px-14 px-3">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex">
            <img src="/public/assets/v2/header/hameem-group-logo-primary.png" alt="Hameem Group Logo"
              class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="flex items-center justify-between">

          <div class="hidden md:flex space-x-2 px-3">
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-black hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md">
              Home
            </NuxtLink>
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-primary hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md f">
              About Us
            </NuxtLink>
            <NuxtLink 
              to="#" 
              @mouseenter="isBusinessUnitMenuOpen = true" 
              @mouseleave="startCloseBusinessUnitMenu" 
              class="text-lg font-medium hover:text-blue-600"
            >
              Business Units
            </NuxtLink>
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-primary hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md ">
              Subtainability
            </NuxtLink>
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-primary hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md ">
              Products
            </NuxtLink>
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-primary hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md">
              Clients
            </NuxtLink>
            <NuxtLink to="/v2"
              class="text-primary font-semibold hover:text-primary hover:bg-slate-300 hover:rounded-full px-3 py-2 text-md=">
              Gallary
            </NuxtLink>
            <NuxtLink to="/contact" @click="isMenuOpen = false"
              class="text-gray-700 hover:text-blue-600 text-lg font-medium">
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
        <div class="absolute inset-0 bg-black opacity-50">
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
              <div 
                v-show="isBusinessUnitMenuOpen" 
                @mouseenter="isBusinessUnitMenuOpen = true" 
                @mouseleave="startCloseBusinessUnitMenu"
                class="absolute left-0 right-0 bg-white shadow-lg border-t"
              >
                <BusinessUnitMegamenu />
              </div>
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
                <Search />
                <div class="hidden md:block">
                  <a href="https://www.linkedin.com/company/hameemgroup" target="_blank" download
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[#264156] hover:bg-[#5C2D23]">
                    Career
                  </a>
                </div>
              </el-space>
            </nav>
          </div>

          <div 
            v-show="isBusinessUnitMenuOpen" 
            @mouseenter="cancelCloseBusinessUnitMenu" 
            @mouseleave="startCloseBusinessUnitMenu"
            class="absolute left-0 right-0 bg-white shadow-lg border-t"
          >
            <BusinessUnitMegamenu />
          </div>


          <div v-show="isContactMenuOpen" @mouseenter="isContactMenuOpen = true" @mouseleave="isContactMenuOpen = false"
            class="absolute left-0 right-0 bg-white shadow-lg border-t">
            <ContactUsMapSectionComponent />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.text-lg {
  display: block;
  padding: 8px 16px;
}
</style>