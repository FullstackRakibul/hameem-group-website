
<template>
  <div class="container mx-auto px-4 font-sans">
      <Header />
    <main class=" pt-12">
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
