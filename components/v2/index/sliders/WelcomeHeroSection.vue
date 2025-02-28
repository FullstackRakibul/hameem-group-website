<template>
  <div>
    <section class="welcome-hero-section bg-cover bg-center bg-[url('https://api.hameemgroup.com:9012/Resources/hameem-group-websile/denim-hameem-group-0003.jpeg')] bg-gray-200">
      <!-- Overlay Layer -->
      <div class="overlay"></div>

      <!-- Particle Container -->
      <div class="particles-wrapper relative z-10">
        <NuxtParticles id="tsparticles" :options="options" :@load="onLoad" />
      </div>

      <div class="container text-left text-white relative z-20">
        <h1 class="text-4xl font-title md:text-6xl max-w-4/5 font-bold mb-4">
          Empowering the Future of Fashion Manufacturing
        </h1>
        <p class="text-lg md:text-xl font-sans mb-6">
          From Bangladesh to the World: A Legacy of Excellence in Garments and Textiles
        </p>
        <el-button type="primary" style="background-color: #fff; color: #264156; font-size:larger;" class="bg-primary font-title" size="large">
          Explore Our Industries
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
