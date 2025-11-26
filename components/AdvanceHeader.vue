<template>
  <!-- Single root element wrapping everything -->
  <div class="header-wrapper">
    <header 
      :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between w-full lg:px-16 md:px-14 p-3',
        isScrolled ? 'bg-primary text-white  shadow-lg' : 'bg-transparent '
      ]"
    >
      <!-- Left side: Logo -->
      <NuxtLink to="/">
        <img 
          src="/assets/group-logo.png" 
          alt="Logo" 
          class="h-10 formal-logo" 
        />
      </NuxtLink>

      <!-- MegaMenu component: handles all navigation links -->
      <div class="flex items-center space-x-4">
        <AdvanceMegaMenu 
          :mobileOpen="isMobileMenuOpen" 
          @closeMobileMenu="isMobileMenuOpen = false" 
        />
        <el-space class="bg-white rounded-full px-1 border shadow-sm">
          <Search />
          <button 
            @click="toggleModuleMenu" 
            class="p-2 flex items-center rounded-full bg-primary text-white"
          >
            <Icon name="hugeicons:menu-circle" />
          </button>
        </el-space>
      </div>
      <LanguageSwitcher />
    </header>

    <!-- Module Toggle Menu - now inside the single root -->
    <Teleport to="body">
      <div 
        v-if="ModuleToggleMenuClick  " 
        ref="menuRef"
        class="fixed top-20 right-5 z-50 w-64 bg-white shadow-lg rounded-lg border border-gray-200"
      >
        <ModuleToggleMenu />
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import AdvanceMegaMenu from './v2/AdvanceMegaMenu.vue';
import Search from './mediator/Search.vue';
import LanguageSwitcher from './mediator/LanguageSwitcher.vue';
import ModuleToggleMenu from './v2/ui/ModuleToggleMenu.vue';

// Define props to handle inherited attributes properly
defineProps({
  class: {
    type: String,
    default: ''
  }
});

// Configure component to handle attributes
defineOptions({
  inheritAttrs: false
});

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

// Close menu when clicking outside
onClickOutside(menuRef, () => {
  ModuleToggleMenuClick.value = false;
});

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', updateWindowWidth);
    windowWidth.value = window.innerWidth;
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener('resize', updateWindowWidth);
  }
});

// State for menu visibility
const isMobileMenuOpen = ref(false);   // For mobile menu
const desktopMegaOpen = ref(false);    // For desktop mega menu

// Detect screen size dynamically
const windowWidth = ref(process.client ? window.innerWidth : 0);
const isDesktop = computed(() => windowWidth.value >= 1024);

// Update window width on resize
const updateWindowWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
};

// Toggle menu behavior based on screen size
const toggleMenu = () => {
  if (isDesktop.value) {
    desktopMegaOpen.value = !desktopMegaOpen.value;  // Toggle desktop mega menu
  } else {
    isMobileMenuOpen.value = !isMobileMenuOpen.value; // Toggle mobile menu
  }
};
</script>

<style scoped>
.header-wrapper {
  position: relative;
}

@keyframes waveFade {
  0%, 100% {
    transform: rotate(0deg) scale(1);
    opacity: 0.9;
  }
  25% {
    transform: rotate(3deg) scale(1.02);
    opacity: 1;
  }
  75% {
    transform: rotate(-3deg) scale(1.02);
    opacity: 1;
  }
}

.wave-logo {
  display: inline-block;
  transform-origin: 70% 70%;
  animation: waveFade 2.5s ease-in-out infinite;
}

@keyframes formalFlip {
  0%, 100% {
    transform: perspective(100px) rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: perspective(100px) rotateY(360deg);
    opacity: 0.8;
  }
}

.formal-logo {
  display: inline-block;
  transform-origin: center;
  animation: formalFlip 10s ease-in-out infinite;
  transform-style: preserve-3d;
}
</style>