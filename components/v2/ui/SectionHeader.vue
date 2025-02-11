<template>
  <div class="flex justify-between items-center mb-8">
    <!-- Section Title -->
    <div>
      <p class="text-sm font-sans tracking-tight md:tracking-wide font-medium  uppercase" :class="subtitleClass">
        {{ subtitle }}
      </p>
      <div class="border-t-4 border-[#40160C] py-2 w-20 mt-2"></div>
      <h2 class="md:text-4xl text-xl font-bold tracking-tight " :class="titleClass">
        {{ title }}
      </h2>
    </div>

    <!-- View All Link -->
    <nuxt-link
      v-if="buttonTextLink"
      :to="buttonTextLink"
      class=" flex items-center space-x-1 font-semibold hover:underline"
      :class="buttonTextLinkColor"
      >
      <span class="md:text-lg text-xs" >{{buttonText}}</span>
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
  buttonText: {
    type: String,
    required: false,
    default: "View All",
  },
  buttonTextLink: {
    type: String,
    required: false,
  },
  buttonTextLinkColor: {
    type: String,
    required: false,
    default: " text-[#40160C]"
  },
  primaryColorClass: {
    type: String,
    default: " border-blue-600",
  },
  arrowIcon: {
    type: String,
    default: "mdi:arrow-top-right",
  },
  subtitleClass: { type: String, default: "text-primary" },
  titleClass: { type: String, default: "text-primary" },
});
</script>
