<template>
  <NuxtParticles
    id="tsparticles"
    url="/path/to/particles.json"
    @load="onLoad"
  ></NuxtParticles>
  
  <!-- or -->
  
  <NuxtParticles
    id="tsparticles"
    :options="options"
    @load="onLoad"
  ></NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'

const options = {
  // See https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
}

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>
