<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800">Major Products</h2>
      <p class="text-lg text-gray-600 mt-2">
        We specialize in creating a diverse range of garments, including:
      </p>
    </div>

    <!-- Masonry Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="relative overflow-hidden rounded-md group"
      >
        <!-- Image Layer -->
        <img
          :src="product.image"
          alt="Product"
          class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <!-- Overlay Layer -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"
        ></div>
        <!-- Title & Description Layer -->
        <div
          class="absolute bottom-4 left-4 z-10 text-white space-y-1 transition-all"
        >
          <h3 class="text-2xl font-semibold">{{ product.title }}</h3>
          <p class="text-sm">{{ product.description }}</p>
        </div>
      </div>
    </div>

    <!-- Explore Button -->
    <div class="text-center mt-10">
      <button
        class="bg-primary hover:bg-red-700 text-white py-2 px-6 rounded-md transition-colors"
      >
        Explore All
      </button>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    title: "Hi-Fashion Denim Jeans",
    description: "",
    image: "https://www.hameemgroup.net/images/accessories/007.jpg",
  },
  {
    title: "Critical Cargos",
    description: "",
    image: "/assets/products/cargos.jpg",
  },
  {
    title: "Wrinkle Free",
    description: "",
    image: "/assets/products/wrinkle-free.jpg",
  },
  {
    title: "Jackets Facility",
    description: "",
    image: "/assets/products/jackets.jpg",
  },
  {
    title: "3D Whisker",
    description: "",
    image: "/assets/products/whisker.jpg",
  },
  {
    title: "Mens Shirts",
    description: "",
    image: "/assets/products/mens-shirts.jpg",
  },
];
</script>

<style scoped>
.group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
