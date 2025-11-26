
<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Our Team</h1>
        <p class="text-gray-600">Get in touch with our team members</p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ContactCardUI v-for="contact in contacts" :key="contact.id" :contact="contact" />
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import ContactCardUI from '~/components/ui/ContactCardUI.vue';

definePageMeta({
  layout: false,
});

const contacts = ref([
  {
    id: '1',
    name: 'Sajid Azad',
    designation: 'Director',
    company: 'Ha-Meem Group',
    coverImage: 'https://api.hameemgroup.com:9012/Resources/group-website/bg_image_0002.jpeg',
    profileImage: 'https://api.hameemgroup.com:9012/Resources/group-website/profile_022.png',
    email: 'sajid@hameemgroup.com',
    phone: '+880 1730-716935',
    website: 'https://hameemgroup.net',
    profilePage: 'https://www.hameemgroup.net/profile.html',
    socialLinks: [
      { name: 'Email', icon: 'fa6-solid:envelope', url: 'mailto:sajid@hameemgroup.com' },
      { name: 'LinkedIn', icon: 'fa6-brands:linkedin', url: 'https://www.linkedin.com/in/sajid-azad-1a98ab83' },
      { name: 'Twitter', icon: 'fa6-brands:twitter', url: '#' },
    ]
  },
  {
    id: '2',
    name: 'Rakibul H. Rabbi',
    designation: 'Software Support Engineer',
    company: 'Ha-Meem Group',
    email: 'rakibul.it@hameemgroup.com',
    phone: '+880 1717-599528',
    website: 'https://hameemgroup.net',
    profilePage: 'https://www.hameemgroup.net/profile.html',
    socialLinks: [
      { name: 'Email', icon: 'fa6-solid:envelope', url: 'mailto:sajid@hameemgroup.com' },
      { name: 'LinkedIn', icon: 'fa6-brands:linkedin', url: 'https://www.linkedin.com/in/sajid-azad-1a98ab83' },
      { name: 'Twitter', icon: 'fa6-brands:twitter', url: '#' },
    ]
  }
  // You can add as many contacts as needed
]);

</script>