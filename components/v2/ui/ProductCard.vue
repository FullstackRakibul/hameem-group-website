<script setup lang="ts">
defineProps({
  productImage: {
    type: String,
    required: true,
  },
  productImageLink: {
    type: String,
    required: false,
    default: "",
  },
  productTitle: {
    type: String,
    required: false,
    default: "View All",
  },
  productDescription: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg">
    <img :src="productImageLink" :alt="productTitle" class="h-48 w-full object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
        {{ productTitle }}
      </h3>
      <p class="text-gray-600 line-clamp-2 mt-2">{{ productDescription }}</p>
    </div>
  </div>
</template>