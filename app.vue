<script setup>
import gsap from 'gsap';


const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 50 });
};

const enter = (el, done) => {
  gsap.to(el, { opacity: 1, y: 0, duration: 0.5, onComplete: done });
};
</script>

<template>
  <NuxtLayout>
    <transition @before-enter="beforeEnter" @enter="enter">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<style scoped>
/* Fade Transition for Layout */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>