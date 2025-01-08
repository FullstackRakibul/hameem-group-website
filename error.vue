<template>
  <div class="flex items-center justify-center h-screen bg-gray-100 text-gray-800">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-blue-600 mb-4">
        {{ error.statusCode || 404 }}
      </h1>
      <h2 class="text-2xl font-semibold mb-4">
        {{ error.message || "Page Not Found" }}
      </h2>
      <p class="mb-6 text-lg text-gray-600">
        Oops! It seems you've hit a page that doesn't exist.
      </p>
      <NuxtLink
        to="/"
      >
      <el-button type="primary" plain> <NuxtLink
        to="/"
      >
      Go Back Home
    </el-button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Error object is automatically provided in Nuxt's error layouts
defineProps(['error']);
</script>

<style scoped>
/* Additional styling if needed */
</style>
