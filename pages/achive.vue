<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pt-20 pb-20">
    <!-- Hero Background -->
    <div class="absolute inset-0 z-0 opacity-30"
      style="background-image: url('/assets/v1/section/achievement-bg.jpg'); background-attachment: fixed; background-size: cover;">
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
          Our Achievements
        </h1>
        <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto text-balance">
          Celebrating years of excellence, innovation, and recognition in the global textile and apparel industry.
        </p>
      </div>

      <!-- Timeline Component -->
      <!-- <AchievementsTimeline :awards="awardsData" :initial-index="0" :enable-keyboard-nav="true" :lazy-load-images="true"
        @select="handleAwardSelect" @navigate="handleNavigation" @imageError="handleImageError" /> -->

      <!-- Stats Section (Optional) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-20">
        <div v-for="(stat, index) in stats" :key="index"
          class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-colors duration-300">
          <div class="text-2xl md:text-4xl font-bold text-white mb-2">{{ stat.value }}</div>
          <div class="text-xs md:text-sm text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { awardsData } from '~/data/awards'
import AchievementsTimeline from '~/components/v1/section/AchievementsTimeline.vue'

const stats = [
  { value: '5+', label: 'Awards Won' },
  { value: '40+', label: 'Years Active' },
  { value: '26', label: 'Factories' },
  { value: '75K+', label: 'Employees' },
]

function handleAwardSelect(award: any, index: number) {
  console.log('[v0] Award selected:', award, 'Index:', index)
}

function handleNavigation(direction: string) {
  console.log('[v0] Navigating:', direction)
}

function handleImageError(award: any, error: Error) {
  console.error('[v0] Image error for award:', award.title, error)
}
</script>