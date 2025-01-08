<template>
  <div
    class="h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url('${imageUrl}')` }"
  >
   
    <div class="relative z-10 flex items-center justify-center h-full text-white">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-slate-800 ">
          Welcome to Hameem Group
        </h1>
        <p class="text-lg md:text-2xl mb-6 text-slate-800 ">
          Excellence in Textile Manufacturing
        </p>
        <el-button type="primary" plain>Learn More</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive email for newsletter
const email = ref('');

// Background image URL
const backgroundImage = ref('/public/assets/banner_01.jpg');

// Newsletter form handler
const handleSubscribe = () => {
  alert(`Thank you for subscribing with: ${email.value}`);
  email.value = ''; // Reset email field
};

// Button click handler
const handleLearnMore = () => {
  alert('Redirecting to more information...');
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
