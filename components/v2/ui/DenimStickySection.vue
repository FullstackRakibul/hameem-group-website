<!-- DenimStickySection.vue -->
<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "https://api.hameemgroup.com:9012/Resources/hameem-group-website/denim-stickyBanner-hameem-group.jpeg",
  },
  mainText: {
    type: String,
    default: "",
  },
  subText: {
    type: String,
    default: "",
  },
});

import StickySectionTimelineView from './StickySectionTimelineView.vue';
</script>

<template>
  <section
    class="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <!-- Content -->
    <div class="relative z-10 px-6 container py-20 ">
      <h1 class="text-4xl md:text-6xl font-extrabold uppercase ">
        {{ mainText }}
      </h1>
      <p class="text-lg md:text-2xl font-light mt-4 tracking-wider animate__animated animate__fadeIn animate__delay-1s">
        {{ subText }}
      </p>
      <StickySectionTimelineView/>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  section {
    background-attachment: scroll !important;
  }
}
</style>