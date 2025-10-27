<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center">
    <!-- Banner Section -->
    <div class="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
      <img v-if="!isLoading" src="https://api.hameemgroup.com:9012/Resources/group-website/profileBG.jpeg"
        alt="Banner Background" class="w-full h-full object-contain" />
      <div v-else class="animate-pulse bg-gray-300 w-full h-full"></div>

      <!-- Profile Image -->
      <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
          <img v-if="!isLoading" src="https://api.hameemgroup.com:9012/Resources/group-website/sajidAzad.jpeg"
            alt="Profile Photo" class="object-cover w-full h-full" />
          <div v-else class="animate-pulse bg-gray-300 w-full h-full"></div>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="mt-20 text-left px-6 flex flex-col items-start max-w-5xl w-full">
      <!-- Profile Info -->
      <template v-if="!isLoading">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">
          {{ profile.name }}
        </h1>
        <p class="text-gray-700 text-xl font-semibold mt-1">
          {{ profile.designation }}
        </p>
        <p class="text-primary text-xl sm:text-2xl font-semibold">
          {{ profile.company }}
        </p>
      </template>

      <template v-else>
        <div class="w-40 h-6 bg-gray-300 rounded animate-pulse mt-2"></div>
        <div class="w-32 h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
        <div class="w-28 h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
      </template>

      <!-- Contact Info -->
      <div class="mt-8 w-full flex flex-col gap-3">
        <div v-for="(contact, index) in contactItems" :key="index">
          <div v-if="!isLoading"
            class="flex items-center space-x-3 rounded-lg hover:shadow-md transition-all cursor-pointer">
            <div class="p-2 bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white">
              <Icon :name="contact.icon" class="w-6 h-6" />
            </div>
            <a :href="contact.href" class="text-gray-900 font-semibold text-xl sm:text-2xl break-all" target="_blank"
              rel="noopener noreferrer">
              {{ contact.text }}
            </a>
          </div>
          <div v-else class="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { definePageMeta } from "#imports";

definePageMeta({
  layout: false,
});

// Simulate loading delay
const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

// Profile Data
const profile = {
  name: "Sajid Azad",
  designation: "Director",
  company: "Ha-Meem Group",
  email: "sajid@hameemgroup.com",
  phone: "+880 1730-716935",
  website: "https://hameemgroup.net",
};

// Contact Info
const contactItems = [
  {
    icon: "fa6-solid:envelope",
    text: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "fa6-solid:phone",
    text: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: "ic:baseline-web",
    text: profile.website.replace(/^https?:\/\//, ""),
    href: profile.website,
  },
];
</script>

<style scoped>
.text-primary {
  color: #1857a3;
}

.bg-primary {
  background-color: #1857a3;
}

/* Skeleton animations */
@keyframes pulse {
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
