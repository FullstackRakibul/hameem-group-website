<template>
  <div class="relative inline-block">
    <!-- Search Icon Button -->
    <button
      @click="toggleSearch"
      class="inline-flex items-center justify-center w-10 h-10 rounded-full   text-black "
    >
    
      <!-- <el-icon class="text-bold">
        <search class="text-bold" />
      </el-icon> -->
      <Icon name="hugeicons:search-02" class="text-xl text-bold"/>
    </button>

    <!-- Popup Search Box (below the icon) -->
    <div
      v-if="isSearchOpen"
      class="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-full z-50 w-80 transition-transform duration-300 ease-in-out "
    >
      <el-input
        v-model="searchQuery"
        placeholder="Search here..."
        clearable
        size="large"
        class="w-full"
        @keyup.enter="handleSearch"
      >
        <template #prefix>
          <el-icon>
            <search />
          </el-icon>
        </template>
      </el-input>

      <!-- Close Button -->
      <button
        @click="toggleSearch"
        class="absolute top-1 right-1 text-gray-500 hover:text-gray-800"
      >
        <el-icon>
          <close />
        </el-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Close } from '@element-plus/icons-vue';

// Reactive states for the search popup and query
const isSearchOpen = ref(false); // Toggle search popup visibility
const searchQuery = ref(''); // Store the search input

// Open/Close search popup
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

// Perform search action
const handleSearch = () => {
  console.log('Searching for:', searchQuery.value);
  toggleSearch(); // Close popup after search
  searchQuery.value = ''; // Clear search input
};
</script>

<style scoped>
/* Icon Button Hover Effects */
button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}
button:hover {
  transform: scale(1.1); /* Slight scale-up effect */
}


</style>
