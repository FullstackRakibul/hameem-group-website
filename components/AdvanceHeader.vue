<template>
  <header :class="[
    'fixed top-0 left-0 right-0 bg-slate-500 z-10 transition-all duration-300 flex items-center justify-between w-full lg:px-16 md:px-14 p-3',
    isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  ]">
    <!-- Left side: Logo -->
    <NuxtLink to="/">
      <img src="/public/assets/group-logo.png" alt="Logo" class="h-10" />
    </NuxtLink>

    <!-- Right side: Language switcher, mobile menu toggle -->
    <LanguageSwitcher />
    <button class="md:hidden p-2" @click="isMobileMenuOpen = !isMobileMenuOpen">
      <!-- Hamburger icon -->
      <span class="material-icons text-3xl">menu</span>
    </button>

    <!-- MegaMenu component: handles all navigation links -->
    <AdvanceMegaMenu :mobileOpen="isMobileMenuOpen" @closeMobileMenu="isMobileMenuOpen = false" />

    <el-space class="bg-white rounded-full px-1 ">
      <Search />
      <span class="p-2 flex items-center rounded-full bg-primary text-white">
        <Icon name="hugeicons:menu-circle" />
      </span>
    </el-space>
  </header>
</template>

<script setup>
import AdvanceMegaMenu from './v2/AdvanceMegaMenu.vue';
import Search from './mediator/Search.vue';
import LanguageSwitcher from './mediator/LanguageSwitcher.vue';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);



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

</script>
