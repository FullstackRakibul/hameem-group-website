<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center">
    <!-- Banner Section -->
    <div class="relative w-full h-64 sm:h-48 md:h-56 overflow-hidden">
      <img v-if="!isLoading" src="https://api.hameemgroup.com:9012/Resources/group-website/bg_image_0002.jpeg"
        alt="Banner Background" class="w-full h-full object-cover" />
      <div v-else class="animate-pulse bg-gray-300 w-full h-full"></div>
    </div>

    <!-- Info Section -->
    <div class="w-full px-4 sm:px-6 md:px-8 py-8">
      <div class="max-w-2xl mx-auto">
        <!-- Profile Card Container -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
          <!-- Profile Image -->
          <div class="flex-shrink-0 -mt-20 md:-mt-20 z-10">
            <div
              class="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-400 shadow-lg bg-gray-100">
              <img v-if="!isLoading" src="https://api.hameemgroup.com:9012/Resources/group-website/profile_022.png"
                alt="Profile Photo" class="object-cover w-full h-full" />
              <div v-else class="animate-pulse bg-gray-300 w-full h-full"></div>
            </div>
          </div>

          <!-- Profile Info -->
          <div class="flex-1">
            <template v-if="!isLoading">
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {{ profile.name }}
              </h1>
              <p class="text-gray-700 text-lg sm:text-xl font-semibold mt-1">
                {{ profile.designation }}
              </p>
              <p class="text-primary text-lg sm:text-xl md:text-2xl font-semibold mt-1">
                {{ profile.company }}
              </p>
            </template>

            <template v-else>
              <div class="w-40 h-6 bg-gray-300 rounded animate-pulse mt-2"></div>
              <div class="w-32 h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
              <div class="w-28 h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
            </template>

            <!-- Contact Info -->
            <div class="mt-6 sm:mt-8 flex flex-col gap-3">
              <div v-for="(contact, index) in contactItems" :key="index">
                <div v-if="!isLoading" class="flex items-center space-x-3 rounded-lg  transition-all cursor-pointer">
                  <div
                    class="p-2 bg-gray-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white flex-shrink-0">
                    <Icon :name="contact.icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <a :href="contact.href" class="text-gray-900 font-semibold text-base sm:text-lg md:text-xl break-all"
                    target="_blank" rel="noopener noreferrer">
                    {{ contact.text }}
                  </a>
                </div>
                <div v-else class="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
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

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const profile = {
  name: "Sajid Azad",
  designation: "Director",
  company: "Ha-Meem Group",
  email: "sajid@hameemgroup.com",
  phone: "+880 1730-716935",
  website: "https://hameemgroup.net",
  // website: 'https://www.hameemgroup.net/profile.html',
};

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

@keyframes pulse {
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>