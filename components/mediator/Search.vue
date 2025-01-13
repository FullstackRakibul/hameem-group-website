<template>
  <div class="relative">
    <!-- Search Icon Button -->
    <button
      @click="toggleSearch"
      class="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-[#264156] text-white hover:bg-[#5C2D23]"
    >
      <el-icon>
        <search />
      </el-icon>
    </button>

    <!-- Popup Search Box -->
    <div
      v-if="isSearchOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="relative w-full max-w-lg p-12 bg-transparent bg-opacity-90 rounded-lg shadow-lg">
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
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <el-icon >
            <close  />
          </el-icon >
        </button>
      </div>
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
/* Custom styles for a more professional look */
.el-icon{
  font-size: large;
  color: #fff;
  font-weight: 700;
}
/* Popup background overlay */
.bg-opacity-50 {
  backdrop-filter: blur(5px); /* Add blur effect for the overlay */
}

/* Input hover/focus styles */
.el-input__inner {
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.el-input__inner:focus {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}
</style>
