<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  // middleware: 'auth' // Add auth middleware if needed
})
</script>

<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 class="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav class="space-y-4">
        <NuxtLink to="/panel/content-management" class="block px-4 py-2 rounded hover:bg-slate-800 transition">
          Content Management
        </NuxtLink>
        <NuxtLink to="/" class="block px-4 py-2 rounded hover:bg-slate-800 transition">
          Back to Site
        </NuxtLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>