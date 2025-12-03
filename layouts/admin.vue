<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen bg-slate-50 overflow-hidden">
    <!-- Sidebar -->
    <div class="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 flex flex-col shadow-lg hidden sm:flex">
      <!-- Logo -->
      <div class="px-6 py-6 border-b border-slate-700/50">
        <h1 class="text-xl font-bold text-primary tracking-tight">Panel</h1>
        <p class="text-xs text-slate-700 mt-1">Management System</p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <NuxtLink to="/panel/content-management"
          class="block px-4 py-3 rounded-lg text-slate-800 bg-orange-100 border border-slate-400 hover:bg-slate-700/50 hover:text-slate-50 transition font-medium text-sm">
          📝 Content Management
        </NuxtLink>
        <NuxtLink to="/"
          class="block px-4 py-3 rounded-lg text-slate-800 hover:bg-slate-700/50 border border-slate-400 hover:text-slate-50 transition font-medium text-sm">
          🏠 Back to Site
        </NuxtLink>
      </nav>

      <!-- Footer -->
      <div class="px-6 py-4 border-t border-slate-700/50 text-xs text-slate-400">
        <p>Last updated: {{ new Date().toLocaleDateString() }}</p>
      </div>
    </div>

    <!-- Mobile Menu Button & Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Mobile Header -->
      <div class="sm:hidden bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between">
        <h1 class="font-bold text-slate-900">Admin</h1>
        <NuxtLink to="/" class="text-blue-600 hover:text-blue-700 font-medium text-sm">← Site</NuxtLink>
      </div>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Smooth scrolling for main content */
main {
  scroll-behavior: smooth;
}
</style>