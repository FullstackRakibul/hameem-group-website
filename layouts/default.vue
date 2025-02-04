<template>
  <!-- <Header class="z-50" /> -->
  <AdvanceHeader class="z-50" />
  <div class="font-sans">
    <main class="">
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
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import AdvanceHeader from '~/components/AdvanceHeader.vue';
import AdvanceFooter from '~/components/AdvanceFooter.vue';
</script>

<style scoped>
/* Layout styles here */
</style>