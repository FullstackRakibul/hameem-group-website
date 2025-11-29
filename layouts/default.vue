<template>
  <!-- <Header class="z-50" /> -->
  <AdvanceHeader class="z-50" />
  <!-- <AdvanceMegaMenu/> -->
  <div class="font-sans">
    <main :key="$route.fullPath" class="mt-12">
      <Preloader2 v-if="isLoading" />
      <slot />
    </main>
    <!-- <main class="pt-16">
      <slot />
    </main> -->
  </div>
  <!-- <Footer /> -->
  <AdvanceFooter />
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import AdvanceHeader from '~/components/AdvanceHeader.vue';
import AdvanceFooter from '~/components/AdvanceFooter.vue';
import AdvanceMegaMenu from '~/components/v2/AdvanceMegaMenu.vue';
import Preloader from '~/components/Preloader.vue'
import Preloader2 from '~/components/Preloader2.vue'

const isLoading = ref(true);

onMounted(() => {
  // Simulate loading completion after 3 seconds (or adjust based on your loading process)
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Adjust as needed for real loading duration
});

onBeforeUnmount(() => {
  isLoading.value = false;
});

</script>

<style scoped>
/* Added smooth scroll CSS for enhanced scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Optional: Add smooth transition for page navigation */
main {
  transition: opacity 0.3s ease-in-out;
}
</style>