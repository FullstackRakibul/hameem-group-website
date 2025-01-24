<template>
  <div class="relative">
    <!-- Search Icon Button -->
    <button
      @click="toggleSearch"
      class="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white text-black hover:bg-gray-200"
    >
      <el-icon>
        <search />
      </el-icon>
    </button>

    <!-- Popup Search Box in Bottom-Right -->
    <div
      v-if="isSearchOpen"
      class="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50 w-80"
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
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
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

const isSearchOpen = ref(false); // Toggle for search popup
const searchQuery = ref(''); // User's search input

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value; // Open/close the search popup
};

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value); // Perform search action
  toggleSearch(); // Close the popup after search
  searchQuery.value = ''; // Clear the search input
};
</script>

<style scoped>
/* Custom styles for search bar and button */
.el-icon {
  font-size: 1.2rem;
}

button:hover {
  background-color: #f5f5f5;
}

/* Smooth transitions for the popup */
.fixed {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
</style>
