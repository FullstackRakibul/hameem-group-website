<template>
  <div class="flex justify-between items-center mb-8">
    <!-- Section Title -->
    <div>
      <p class="text-sm font-medium text-primary uppercase">
        {{ subtitle }}
      </p>
      <div class="border-t-4 border-[#40160C] py-2 w-16 my-1'"></div>
      <h2 class="text-4xl font-bold text-gray-900">
        {{ title }}
      </h2>
    </div>

    <!-- View All Link -->
    <nuxt-link
      v-if="viewAllLink"
      :to="viewAllLink"
      class="text-red-600 flex items-center space-x-1 font-semibold hover:underline"
    >
      <span>View All</span>
      <icon :name="arrowIcon" class="w-5 h-5" />
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: "",
  },
  viewAllLink: {
    type: String,
    required: false,
  },
  primaryColorClass: {
    type: String,
    default: " border-blue-600",
  },
  arrowIcon: {
    type: String,
    default: "mdi:arrow-top-right",
  },
});
</script>
