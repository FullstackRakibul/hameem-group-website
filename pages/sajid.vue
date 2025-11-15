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
      <div class="max-w-3xl mx-auto">
        <!-- Profile Card Container -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
          <!-- Profile Image -->
          <div class="flex-shrink-0 -mt-20 md:-mt-24 z-10">
            <div
              class="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-400 shadow-lg bg-gray-100">
              <img v-if="!isLoading" src="https://api.hameemgroup.com:9012/Resources/group-website/profile_022.png"
                alt="Profile Photo" class="object-cover w-full h-full" @click="openImagePopup" />
              <div v-else class="animate-pulse bg-gray-300 w-full h-full"></div>
            </div>
          </div>

          <!-- Profile Info -->
          <div class="flex-1 min-w-full">
            <template v-if="!isLoading">
              <div class="flex items-center justify-between mb-2">
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {{ profile.name }}
                </h1>
                <!-- Save Contact Button -->
                <div class="mt-4">
                  <button @click="saveContact" :disabled="isSavingContact"
                    class="flex items-center gap-2 bg-[#274257] hover:bg-[#5D2E24] text-white font-semibold py-2 px-2 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="fa6-solid:address-card" class="w-5 h-5" />
                    <span v-if="!isSavingContact" class="text-base">Save Contact</span>
                    <span v-else class="flex items-center gap-2">
                      <div
                        class="w-4 h-4 border-2 text-base border-white border-t-transparent rounded-full animate-spin">
                      </div>
                      Saving...
                    </span>
                  </button>
                  <!-- <p v-if="saveContactMessage" class="mt-2 text-sm"
                    :class="saveContactMessage.type === 'success' ? 'text-green-600' : 'text-red-600'">
                    {{ saveContactMessage.text }}
                  </p> -->
                </div>
              </div>

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


  <!-- Popup Modal -->
  <transition name="fade">
    <div v-if="isPopupOpen" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
      @click.self="closeImagePopup">
      <img src="https://api.hameemgroup.com:9012/Resources/group-website/profile_022.png" alt="Popup Banner"
        class="max-h-[85vh] max-w-full rounded-lg shadow-lg object-contain" />
      <!-- Close Button -->
      <button @click="closeImagePopup"
        class="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 transition"
        aria-label="Close">
        ✕
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { definePageMeta } from "#imports";

const saveContactMessage = ref<{ text: string, type: 'success' | 'error' } | null>(null)
const isSavingContact = ref(false)
definePageMeta({
  layout: false,
});

const isPopupOpen = ref(false)

const openImagePopup = () => {
  isPopupOpen.value = true
}

const closeImagePopup = () => {
  isPopupOpen.value = false
}


const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

const profile = {
  name: 'Sajid Azad',
  designation: 'Director',
  company: 'Ha-Meem Group',
  email: 'sajid@hameemgroup.com',
  phone: '+880 1730-716935',
  website: 'https://hameemgroup.net', 
  profilePage: 'https://www.hameemgroup.net/profile.html', 
}

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
    text: profile.website.replace(/^https?:\/\//, ''), 
    href: profile.profilePage,
  },
];

// Save contact function
const saveContact = async () => {
  if (isSavingContact.value) return;

  isSavingContact.value = true;
  saveContactMessage.value = null;

  try {
    // Create vCard content
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${profile.company}
ORG:${profile.name}
TITLE:${profile.designation}
TEL:${profile.phone}
EMAIL:${profile.email}
URL:${profile.profilePage}
END:VCARD`;

    // Create blob and download
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    saveContactMessage.value = {
      text: 'Contact saved successfully! Check your downloads.',
      type: 'success'
    };

  } catch (error) {
    console.error('Error saving contact:', error);
    saveContactMessage.value = {
      text: 'Failed to save contact. Please try again.',
      type: 'error'
    };
  } finally {
    isSavingContact.value = false;

    // Clear message after 5 seconds
    setTimeout(() => {
      saveContactMessage.value = null;
    }, 5000);
  }
};
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>