<template>
  <div class="w-full py-10 bg-white">
    <el-carousel
      indicator-position="outside"
      height="500px"
      type="card"
      autoplay
      interval="1500"
      loop
      class="custom-carousel"
      motion-blur="true"
    >
      <el-carousel-item
        v-for="(product, index) in products"
        :key="index"
        class="flex items-center justify-center"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="h-full object-cover"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Sample denim products (replace with real API data if needed)
const products = ref([
  {
    name: "Denim Jacket",
    image: "/assets/v2/gallary/gallary-image-0002.jpg",
  },
  {
    name: "Black Leather Outfit",
    image: "/assets/v2/gallary/gallary-image-0002.jpg",
  },
  {
    name: "Brown Hoodie Set",
    image: "/assets/v2/gallary/gallary-image-0002.jpg",
  },
  {
    name: "White Polo Shirt",
    image: "/assets/v2/gallary/gallary-image-0002.jpg",
  },
  {
    name: "Pink Shorts Outfit",
    image: "/assets/v2/gallary/gallary-image-0002.jpg",
  },
]);
</script>

<style scoped>
/* Custom styles for carousel */
.custom-carousel :deep(.el-carousel__item) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-carousel :deep(.el-carousel__container) {
  overflow: hidden;
}
</style>
