<template>
  <div
    ref="scrollContainer"
    class="demo-image__lazy horizontal-scroll"
    @mouseenter="pauseScrolling"
    @mouseleave="resumeScrolling"
  >
    <el-image
      v-for="url in urls"
      :key="url"
      :src="url"
      lazy
      class="image-item bg-cover "
      fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const urls = [
  '/assets/businessUnitImage/BusinessUnitImage--001.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--002.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--003.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--004.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--005.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--006.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--002.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--004.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--006.jpg',
  '/assets/businessUnitImage/BusinessUnitImage--004.jpg'
];

// Reference for the scrollable container
const scrollContainer = ref<HTMLElement | null>(null);

// Auto-scroll interval
let autoScrollInterval: number | null = null;

// Speed of the auto-scroll
const scrollSpeed =200; 

// Pause scrolling
const pauseScrolling = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
};

// Resume scrolling
const resumeScrolling = () => {
  if (!autoScrollInterval) {
    autoScrollInterval = window.setInterval(() => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollLeft += scrollSpeed *3; 
      }
    }, 20); 
  }
};
// Add horizontal scrolling on mouse wheel
const handleMouseScroll = (e: WheelEvent) => {
  if (!scrollContainer.value) return;

  e.preventDefault();
  scrollContainer.value.scrollLeft += e.deltaY * 5;
};

// Mount and unmount logic
onMounted(() => {
  // Start auto-scrolling on mount
  resumeScrolling();

  // Add mouse wheel listener for horizontal scrolling
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('wheel', handleMouseScroll, { passive: false });
  }
});

onUnmounted(() => {
  // Clear the auto-scroll interval on unmount
  pauseScrolling();

  // Remove mouse wheel listener
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('wheel', handleMouseScroll);
  }
});
</script>

<style scoped>
/* Horizontal Scroll Container */
.demo-image__lazy.horizontal-scroll {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 10px;
  scroll-behavior: smooth;
  padding: 10px;
  white-space: nowrap;

  /* Hide the scroll bar */
  scrollbar-width: none;
}
.demo-image__lazy.horizontal-scroll::-webkit-scrollbar {
  display: none; 
}

/* Images inside the horizontal scroller */
.demo-image__lazy .image-item {
  min-width: 300px; 
  height: auto;
  flex-shrink: 0; 
  border-radius: 8px; 
  transition: transform 0.10s ease, box-shadow 0.10s ease; 
}

/* Hover Effects */
.demo-image__lazy .image-item:hover {
  transform: scale(1.05); 
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}
</style>
