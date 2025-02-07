<template>
  <div>
    <section
      class="welcome-hero-section  bg-cover bg-center bg-[url('/public/assets/v2/index/v2Hero-section-banner-hameemgroup-image-000002.jpg')] bg-gray-200">
      <div class="container text-center text-BLACK">
        <h1 class="text-4xl md:text-6xl max-w-4/5 font-bold mb-4">Empowering the Future of Fashion Manufacturing</h1>
        <p class="text-lg md:text-xl mb-6">From Bangladesh to the World: A Legacy of Excellence in Garments and Textiles
        </p>
        <el-button type="primary" class="bg-primary" size="large">Explore Our Industries</el-button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.welcome-hero-section {
  @apply flex items-center justify-center h-screen w-full relative;
}

.welcome-hero-section .overlay {
  @apply absolute inset-0 bg-black opacity-80;
}

.welcome-hero-section .container {
  @apply px-4;
}
</style>