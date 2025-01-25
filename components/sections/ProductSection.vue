<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-6xl mx-auto text-center px-4">
      <!-- Subheading and Line -->
      <div class="mb-4">
        <h5 class="text-sm text-gray-500 uppercase tracking-wider">
          Our Expertise
        </h5>
        <div class="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
      </div>
      <!-- Main Heading -->
      <h2 class="text-3xl font-bold text-gray-800">
        We specialize in creating a diverse range of Garments, a TV news Channel, and a Newspaper and Tea State.
      </h2>
    </div>

    <!-- Gallery Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-4"
    >
      <!-- Card 1 -->
      <div
        v-for="item in galleryItems"
        :key="item.id"
        class="relative group overflow-hidden rounded-lg shadow-lg"
      >
        <!-- Background Image -->
        <div
          :style="{ backgroundImage: `url(${item.image})` }"
          class="bg-cover bg-center h-72 transition-transform duration-300 group-hover:scale-105"
        ></div>
        <!-- Overlay Content -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <h3 class="text-white text-lg font-semibold mb-2">{{ item.title }}</h3>
          <NuxtLink
            :to="item.link"
            class="bg-blue-600 text-white px-4 py-2 rounded-full hover:rounded-md hover:px-6 transition-all duration-300 text-sm"
          >
            Explore
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const galleryItems = [
  {
    id: 1,
    title: "Channel 24 - News Channel",
    image: "https://via.placeholder.com/400x300",
    link: "https://www.channel24bd.tv/",
  },
  {
    id: 2,
    title: "Samakal - National Newspaper",
    image: "https://via.placeholder.com/400x300",
    link: "https://samakal.com/",
  },
  {
    id: 3,
    title: "Garment Manufacturing",
    image: "https://via.placeholder.com/400x300",
    link: "/garments",
  },
  {
    id: 4,
    title: "Tea Estates",
    image: "https://via.placeholder.com/400x300",
    link: "/tea-estates",
  },
];
</script>

<style scoped>
/* Optional Styles for Smooth Animation */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.group:hover .group-hover\:rounded-md {
  border-radius: 0.375rem;
}
</style>
