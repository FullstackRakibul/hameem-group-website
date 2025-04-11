<template>
  <div>
    <h1>About Us</h1>
    <p>Welcome to the about page.</p>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'slide',
    mode: 'out-in',
  },
});
</script>

<style>
/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
