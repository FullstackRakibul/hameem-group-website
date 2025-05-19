<template>
  <section class="min-h-screen bg-fixed bg-cover bg-center relative" :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>
<!-- Title -->
      <h2 class="text-6xl relative  z-20 font-bold py-16 text-white text-center">
        Our Achievements
      </h2>

    <!-- Content Container -->
    <div class="relative z-20 mx-auto px-24 py-16 text-white flex flex-col items-center space-y-12">
      <!-- Main Display Section -->
      <div class="flex flex-col md:flex-row items-center justify-between w-full bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg space-y-8 md:space-y-0">
        <!-- Left: Text Section -->
        <div class="md:w-1/2 text-center md:text-left space-y-4">
          <h2 class="text-3xl md:text-5xl font-bold">{{ selectedAward?.title || 'Select an Award' }}</h2>
          <p class="text-gray-300">
            {{ selectedAward?.description || 'Click on an award below to see the details.' }}
          </p>
          <p class="text-gray-400 font-semibold" v-if="selectedAward?.issuer">
            Issued By: {{ selectedAward.issuer }}
          </p>
        </div>

        <!-- Right: Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img
            v-if="selectedAward?.image"
            :src="selectedAward.image"
            :alt="selectedAward.title || 'Award Image'"
            class="w-60 md:w-80 rounded-lg border border-gray-300 shadow-md"
          />
          <div v-else class="w-60 md:w-80 h-60 flex items-center justify-center text-gray-400 border border-gray-300 rounded-lg">
            No Image Selected
          </div>
        </div>
      </div>

      <!-- Carousel Section -->
      <div class="w-full justify-center items-center  overflow-x-auto flex space-x-24 p-4  bg-white/10 backdrop-blur-md rounded-lg shadow-inner ">
        <div
          v-for="(award, index) in awards"
          :key="index"
          @click="selectAward(award)"
          class="min-w-[200px] flex flex-col items-center justify-center bg-white/20 border border-transparent hover:border-primary hover:bg-primary/10 p-4 rounded-lg cursor-pointer transition-all duration-300"
        >
          <img
            :src="award.image"
            :alt="award.title"
            class="w-24 h-24 object-cover rounded-full mb-3 border border-gray-200"
          />
          <h3 class="text-lg font-semibold text-center">{{ award.year }}</h3>
          <p class="text-sm text-center text-gray-300">{{ award.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface Award {
  year: string;
  title: string;
  description?: string;
  issuer?: string;
  image?: string;
}

const awards = ref<Award[]>([
  {
    year: "2021 - 2022",
    title: "BANGABANDHU SHEIKH MUJIB EXPORT TROPHY",
    description: "The winning exporters received Gold, Silver, and Bronze awards. Some 28 firms were conferred Gold Awards, 27 Silver and 21 Bronze awards.",
    issuer: "State Minister for Commerce",
    image: "/assets/achivements/2021-2022/BSMET-21-22.JPG",
  },
  {
    year: "2020 - 2021",
    title: "NATIONAL EXPORT TROPHY GOLD",
    description: "Honored for outstanding contribution to the national export economy.",
    image: "/assets/achivements/2020-2021/NETG-20-21.JPG",
  },
  {
    year: "2019 - 2020",
    title: "NATIONAL EXPORT TROPHY",
    description: "Recognized for highest export earnings in the apparel sector.",
    image: "/assets/achivements/2019-2020/NET-19-20.JPG",
  },
  {
    year: "2018 - 2019",
    title: "NATIONAL EXPORT TROPHY",
    description: "A testament to persistent growth and global trust.",
    image: "/assets/achivements/2018-2019/NET-18-19.JPG",
  },
  {
    year: "2017",
    title: "KOHL'S GREATNESS AWARD 2017",
    description: "Recognized for exceptional product excellence and global collaboration.",
    issuer: "KOHL'S",
    image: "/assets/achivements/2017/KHOLS-2017.png",
  }
]);

const selectedAward = ref<Award | null>(null);

function selectAward(award: Award): void {
  selectedAward.value = award;
}

onMounted(() => {
  // Safely set the first award on load
  selectedAward.value = awards.value.length > 0 ? awards.value[0] : null;
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
