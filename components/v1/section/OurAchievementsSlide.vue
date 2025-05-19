<template>
  <section class="h-screen bg-fixed bg-cover bg-center relative flex items-center justify-center overflow-hidden" 
    :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-black/80 z-10"></div>

    <div class="container relative z-20 mx-auto px-4">
      <!-- Title -->
      <h2 class="text-4xl md:text-5xl font-bold text-white text-center mb-12">
        Our Achievements
      </h2>

      <div class="flex flex-col items-center justify-center">
        <!-- Achievement Circle Container -->
        <div class="relative w-full max-w-5xl mx-auto">
          <!-- Center Target/Trophy -->
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <div class="w-28 h-28 md:w-36 md:h-36 rounded-full bg-red-500 flex items-center justify-center">
                <div class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-red-600 flex items-center justify-center">
                  <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-700 flex items-center justify-center">
                    <div class="w-4 h-12 md:w-6 md:h-16 bg-yellow-400 rotate-45 absolute"></div>
                    <div class="w-12 h-4 md:w-16 md:h-6 bg-yellow-400 rotate-45 absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Circular Path (dotted line) - hidden but used for positioning -->
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border-2 border-dashed border-gray-400/30 opacity-0"></div>
          
          <!-- Award Nodes - Left Side -->
          <div class="flex flex-col items-end justify-between h-[500px] absolute left-0 top-1/2 transform -translate-y-1/2">
            <template v-for="(award, index) in leftAwards" :key="award.title">
              <div 
                class="relative"
                @click="selectAward(award)"
                @mouseenter="handleMouseEnter(award)"
              >
                <!-- Award Bubble -->
                <div class="flex items-center">
                  <!-- Award Bubble Content -->
                  <div 
                    :class="[
                      'flex items-center rounded-full py-3 px-6 min-w-[280px]',
                      index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100',
                      selectedAward?.title === award.title ? 'ring-2 ring-gray-300' : ''
                    ]"
                  >
                    <!-- Icon Circle -->
                    <div 
                      :class="[
                        'rounded-full p-3 flex-shrink-0 mr-3',
                        index % 2 === 0 ? 'bg-blue-200' : 'bg-green-200'
                      ]"
                    >
                      <img 
                        :src="award.image" 
                        :alt="award.title" 
                        class="w-8 h-8 object-cover rounded-full"
                      />
                    </div>
                    
                    <!-- Text -->
                    <div>
                      <p class="font-bold text-gray-800">{{ award.year }}</p>
                      <p class="text-sm text-gray-600">{{ award.title }}</p>
                    </div>
                  </div>
                  
                  <!-- Connecting Line -->
                  <div class="h-0.5 w-12 bg-gray-300 mx-2"></div>
                  
                  <!-- Node Number -->
                  <div class="text-sm font-bold text-gray-600">{{ leftAwards.length - index < 10 ? '0' + (leftAwards.length - index) : leftAwards.length - index }}</div>
                  
                  <!-- Arrow -->
                  <div class="ml-2">
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5L10 5M10 5L15 1M10 5L15 9" stroke="gray" stroke-width="1"/>
                    </svg>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
          <!-- Award Nodes - Right Side -->
          <div class="flex flex-col items-start justify-between h-[500px] absolute right-0 top-1/2 transform -translate-y-1/2">
            <template v-for="(award, index) in rightAwards" :key="award.title">
              <div 
                class="relative"
                @click="selectAward(award)"
                @mouseenter="handleMouseEnter(award)"
              >
                <!-- Award Bubble -->
                <div class="flex items-center">
                  <!-- Arrow -->
                  <div class="mr-2">
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5L10 5M10 5L5 1M10 5L5 9" stroke="gray" stroke-width="1"/>
                    </svg>
                  </div>
                  
                  <!-- Node Number -->
                  <div class="text-sm font-bold text-gray-600">{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</div>
                  
                  <!-- Connecting Line -->
                  <div class="h-0.5 w-12 bg-gray-300 mx-2"></div>
                  
                  <!-- Award Bubble Content -->
                  <div 
                    :class="[
                      'flex items-center rounded-full py-3 px-6 min-w-[280px]',
                      index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100',
                      selectedAward?.title === award.title ? 'ring-2 ring-gray-300' : ''
                    ]"
                  >
                    <!-- Icon Circle -->
                    <div 
                      :class="[
                        'rounded-full p-3 flex-shrink-0 mr-3',
                        index % 2 === 0 ? 'bg-blue-200' : 'bg-green-200'
                      ]"
                    >
                      <img 
                        :src="award.image" 
                        :alt="award.title" 
                        class="w-8 h-8 object-cover rounded-full"
                      />
                    </div>
                    
                    <!-- Text -->
                    <div>
                      <p class="font-bold text-gray-800">{{ award.year }}</p>
                      <p class="text-sm text-gray-600">{{ award.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        
        <!-- Award Details -->
        <div class="mt-12 w-full max-w-2xl" v-if="false">
          <transition name="fade-up" mode="out-in">
            <div 
              v-if="selectedAward" 
              :key="selectedAward?.title"
              class="mt-12 w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 class="text-2xl font-bold text-white mb-4">{{ selectedAward?.title }}</h3>
              <p class="text-white/80 mb-4">{{ selectedAward?.description }}</p>
              
              <div v-if="selectedAward?.issuer" class="text-primary text-sm">
                Issued By: {{ selectedAward?.issuer }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

interface Award {
  year: string;
  title: string |'title';
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

// Split awards into left and right sides
const leftAwards = computed(() => {
  const half = Math.ceil(awards.value.length / 2);
  return awards.value.slice(0, half);
});

const rightAwards = computed(() => {
  const half = Math.ceil(awards.value.length / 2);
  return awards.value.slice(half);
});

const selectedAward = ref<Award | null>(null);
const currentIndex = ref(0);
const isAutoplay = ref(true);
let autoplayInterval: number | null = null;
let mouseInteractionTimeout: number | null = null;

function selectAward(award: Award): void {
  selectedAward.value = award;
  const index = awards.value.findIndex(a => a.title === award.title);
  if (index !== -1) {
    currentIndex.value = index;
  }
  
  // Reset autoplay timer when manually selecting
  if (isAutoplay.value) {
    resetAutoplayTimer();
  }
}

function selectAwardByIndex(index: number): void {
  currentIndex.value = index;
  selectedAward.value = awards.value[index];
  
  // Reset autoplay timer when manually selecting
  if (isAutoplay.value) {
    resetAutoplayTimer();
  }
}

function handleMouseEnter(award: Award): void {
  // Temporarily select this award on hover
  selectedAward.value = award;
  const index = awards.value.findIndex(a => a.title === award.title);
  if (index !== -1) {
    currentIndex.value = index;
  }
  
  // Clear any existing timeout
  if (mouseInteractionTimeout) {
    clearTimeout(mouseInteractionTimeout);
  }
  
  // Pause autoplay temporarily
  const wasAutoplay = isAutoplay.value;
  isAutoplay.value = false;
  
  // Resume autoplay after a delay if it was on
  if (wasAutoplay) {
    mouseInteractionTimeout = window.setTimeout(() => {
      isAutoplay.value = true;
      resetAutoplayTimer();
    }, 5000);
  }
}

function startAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
  
  autoplayInterval = window.setInterval(() => {
    if (isAutoplay.value) {
      currentIndex.value = (currentIndex.value + 1) % awards.value.length;
      selectedAward.value = awards.value[currentIndex.value];
    }
  }, 4000); // Change every 4 seconds
}

function resetAutoplayTimer() {
  if (autoplayInterval) clearInterval(autoplayInterval);
  startAutoplay();
}

function toggleAutoplay() {
  isAutoplay.value = !isAutoplay.value;
  if (isAutoplay.value) startAutoplay();
}

onMounted(() => {
  // Set the first award on load
  if (awards.value.length > 0) {
    selectedAward.value = awards.value[0];
    currentIndex.value = 0;
  }
  
  // Start autoplay
  startAutoplay();
});

onBeforeUnmount(() => {
  // Clean up intervals when component is destroyed
  if (autoplayInterval) clearInterval(autoplayInterval);
  if (mouseInteractionTimeout) clearTimeout(mouseInteractionTimeout);
});
</script>

<style scoped>
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
