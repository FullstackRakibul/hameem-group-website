<template>
  <div>
    <section class="welcome-hero-section bg-cover bg-center bg-[url('/public/assets/v2/index/IMG_7244.JPG')] bg-gray-200">
      <!-- Overlay Layer -->
      <div class="overlay"></div>

      <!-- Particle Container -->
      <div class="particles-wrapper relative z-10">
        <NuxtParticles id="tsparticles" :options="options" :@load="onLoad" />
      </div>

      <div class="container text-center text-white relative z-20">
        <h1 class="text-4xl md:text-6xl max-w-4/5 font-bold mb-4">
           Leading Garment Manufacturer in Bangladesh
        </h1>
        <p class="text-lg md:text-xl mb-6">
           Innovating with quality and precision for global markets.
        </p>
        <el-button type="primary" style="background-color: #06253F; color: #fff; border-color: #fff; padding: 5px 10px; font-size:larger;" class="bg-primary" size="large">
          Learn More About Us Units
        </el-button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Opacity, type Container } from '@tsparticles/engine'

const options = {
  fullScreen: {
    enable: false, // Particles are restricted to the section only
  },
  background: {
    color: {
      value: "transparent", // Transparent background for particles
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      color: "#ffffff",
      value: 0.01,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none" as const,
    },
    number: {
      value: 100,
    },
    opacity: {
      value: 0.4,
    },
    size: {
      value: 2,
    },
  },
}

const onLoad = (container: Container) => {
  container.pause()
  setTimeout(() => container.play(),1000)
}

</script>

<style scoped>
.welcome-hero-section {
  @apply flex items-center justify-center h-screen w-full relative;
  position: relative;
}

.welcome-hero-section .overlay {
  @apply absolute inset-0 bg-black opacity-40;
  z-index: 1;
}

.welcome-hero-section .particles-wrapper {
  @apply absolute inset-0;
  z-index: 10;
  pointer-events: none;
}

.welcome-hero-section .container {
  @apply px-4;
  z-index: 20;
  position: relative;
}
</style>
