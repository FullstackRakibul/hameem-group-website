
<template>
  <Header />
  <div class="container mx-auto px-4 pt-16 font-sans">
    <main class="">
      <slot />
    </main>
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
