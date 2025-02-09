<template>
  <section class="container mx-auto py-12 px-6">

     <SectionHeader
      title="Stay Updated with Ha-Meem Group"
      subtitle="News & Blog"
      viewAllLink="/blogs"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Blog Cards -->
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
      >
        <img :src="blog.image" :alt="blog.title" class="h-48 w-full object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-500">{{ blog.date }}</p>
          <h3 class="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
            {{ blog.title }}
          </h3>
          <p class="text-gray-600 line-clamp-2 mt-2">{{ blog.description }}</p>
          <nuxt-link
            :to="`/blogs/${blog.slug}`"
            class="text-red-600 font-medium hover:underline mt-2 block"
          >
            Read More
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from "@/components/v2/ui/SectionHeader.vue";
const blogs = [
  {
    id: 1,
    image: "/assets/v2/index/IMG_4252.JPG",
    date: "12 Jan 2025",
    title: "Ha-Meem is vertical in Denim",
    description:
      "Installed capacity of over 4 million meters per month. Ha-Meem produces yarns...",
    slug: "ha-meem-denim-vertical",
  },
  {
    id: 2,
    image: "/assets/v2/index/IMG_7244.JPG",
    date: "12 Jan 2025",
    title: "State of the art machineries",
    description:
      "Ha-Meem is equipped with state-of-the-art machineries to keep pace...",
    slug: "state-of-the-art-machinery",
  },
  {
    id: 3,
    image: "/assets/v2/index/IMG_7299.JPG",
    date: "12 Jan 2025",
    title: "Ha-Meem's accessories unit is developing",
    description:
      "Ha-Meem continues to innovate with its accessories manufacturing processes...",
    slug: "accessories-unit",
  },
];
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
