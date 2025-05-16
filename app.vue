<script setup lang="ts">
import gsap from 'gsap'

const beforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0, y: 50 })
}

const enter = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
    onComplete: done
  })
}
const leave = (el: Element, done: () => void) => {
  gsap.to(el, {
    opacity: 0,
    y: 50,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: done
  })
}


</script>

<template>
  <NuxtLayout>
    <!-- <transition @before-enter="beforeEnter" @enter="enter">
      <NuxtPage />
    </transition> -->
    <NuxtPage :transition="{ onBeforeEnter: beforeEnter, onEnter: enter, onLeave: leave }" />
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