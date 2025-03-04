<script setup>
import { ref } from "vue";

defineProps({
  bgImage: {
    type: String,
    default: "/images/denim-bg.jpg",
  },
  timelineData: {
    type: Array,
    default: () => [
      {
        year: "2021",
        icon: "💡",
        title: "Innovation",
        description: "Launched the latest denim technology with sustainable materials.",
      },
      {
        year: "2020",
        icon: "⚙️",
        title: "Production Boost",
        description: "Expanded production lines to increase efficiency.",
      },
      {
        year: "2019",
        icon: "📈",
        title: "Global Expansion",
        description: "Entered European and North American markets.",
      },
      {
        year: "2018",
        icon: "🌍",
        title: "Eco-Friendly Initiative",
        description: "Started using eco-friendly denim production techniques.",
      },
      {
        year: "2017",
        icon: "🚀",
        title: "Foundation Year",
        description: "Ha-Meem Denim Division was established.",
      },
    ],
  },
});

const timelineRef = ref(null);
</script>

<template>
  <section
    class="relative flex flex-col items-center justify-center text-white text-center bg-cover"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 "></div>

    <!-- Timeline Wrapper -->
    <div
      ref="timelineRef"
      class="relative z-10 w-full max-w-5xl py-10 md:px-16 overflow-hidden"
    >
      <div class="relative mt-12">
        <!-- Timeline Road -->
        <div class="absolute w-1 bg-white bg-opacity-30 left-1/2 transform -translate-x-1/2 h-full"></div>

        <!-- Timeline Items -->
        <div
          v-for="(item, index) in timelineData"
          :key="index"
          class="relative mb-16 flex items-center"
          :class="{ 'flex-row-reverse': index % 2 !== 0 }"
        >
          <!-- Icon -->
          <div class="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mx-6 cursor-pointer transition-transform transform hover:scale-110 animate__animated animate__rubberBand animate__infinite animate-duration-10s ">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <!-- Content Box -->
          <div class="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-64 transition duration-300 hover:bg-opacity-20">
            <h3 class="text-2xl font-bold">{{ item.year }}</h3>
            <h4 class="text-xl font-semibold mt-1">{{ item.title }}</h4>
            <p class="text-sm mt-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sticky effect */
section {
  position: relative;
  overflow: hidden;
}


</style>
