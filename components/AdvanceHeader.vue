<template>
  <header :class="[
    'fixed top-0 left-0 right-0 bg-slate-500 z-10 transition-all duration-300 flex items-center justify-between w-full lg:px-16 md:px-14 p-3',
    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  ]">
    <!-- Left side: Logo -->
    <NuxtLink to="/">
      <img src="/public/assets/group-logo.png" alt="Logo" class="h-10" />
    </NuxtLink>


    <!-- MegaMenu component: handles all navigation links -->
    <div class="flex items-center space-x-4">
      <AdvanceMegaMenu :mobileOpen="isMobileMenuOpen" @closeMobileMenu="isMobileMenuOpen = false" />
      <el-space class="bg-white rounded-full px-1 border shadow-sm ">
        <Search />
        <button @click="toggleModuleMenu"
          class="p-2 flex items-center rounded-full bg-primary text-white">
          <Icon name="hugeicons:menu-circle" />
        </button>
      </el-space>
    </div>
    <LanguageSwitcher />
  </header>
  <div v-if="ModuleToggleMenuClick" ref="menuRef"
    class="absolute top-14 right-5 mt-2 z-50 w-64 bg-white shadow-lg rounded-lg border border-grey-200">
    <ModuleToggleMenu />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import AdvanceMegaMenu from './v2/AdvanceMegaMenu.vue';
import Search from './mediator/Search.vue';
import LanguageSwitcher from './mediator/LanguageSwitcher.vue';
import ModuleToggleMenu from './v2/ui/ModuleToggleMenu.vue';

const menuRef = ref(null);
const ModuleToggleMenuClick = ref(false);
const isScrolled = ref(false);


// Toggle menu visibility properly
const toggleModuleMenu = () => {
  ModuleToggleMenuClick.value = !ModuleToggleMenuClick.value;
};



// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});






// State for menu visibility
const isMobileMenuOpen = ref(false);   // For mobile menu
const desktopMegaOpen = ref(false);    // For desktop mega menu

// Detect screen size dynamically
const windowWidth = ref(process.client ? window.innerWidth : 0);
const isDesktop = computed(() => windowWidth.value >= 1024);

// Update window width on resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWindowWidth);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

// Toggle menu behavior based on screen size
const toggleMenu = () => {
  if (isDesktop.value) {
    desktopMegaOpen.value = !desktopMegaOpen.value;  // Toggle desktop mega menu
  } else {
    isMobileMenuOpen.value = !isMobileMenuOpen.value; // Toggle mobile menu
  }
};


</script>
