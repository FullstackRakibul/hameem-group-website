<template>
  <Header class="z-50" />
  <div class="font-sans">
    <main class="">
      <slot />
    </main>
    <!-- <main class="pt-16">
      <slot />
    </main> -->
  </div>
  <Footer />
</template>


<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
/* Layout styles here */
</style>