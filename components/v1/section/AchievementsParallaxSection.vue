<template>
  <section class=" min-h-screen bg-fixed bg-cover bg-center relative"
    :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>

    <!-- Content Container -->
    <div class="container relative z-20 min-h-screen flex flex-col justify-center py-16">
      <!-- Title Section -->
      <div class="text-center mb-4" ref="titleRef">
        <h2 class="text-4xl md:text-6xl font-light text-white mb-2 tracking-tight">
          Our <span class="text-white font-medium">Achievements</span>
        </h2>


        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-2"></div>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Celebrating excellence and recognition in the global textile industry
        </p>
      </div>
      <!-- Main Display Section -->
      <div class=" mx-auto mb-6" ref="mainDisplayRef">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div class="flex flex-col lg:flex-row">
            <!-- Left: Text Section -->
            <div class="lg:w-1/2 p-4 md:p-6 my-8 flex flex-col justify-center ">
              <div class="space-y-6">
                <div class="inline-block px-2 py-2 bg-white/10 rounded-full text-sm text-gray-300 font-medium">
                  {{ selectedAward?.year || '2024' }}
                </div>

                <h3 class="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {{ selectedAward?.title || 'Select an Achievement' }}
                </h3>

                <p class="text-gray-300 text-lg leading-relaxed">
                  {{ selectedAward?.description || 'Click on an achievement below to see the details and celebrate our journey of excellence.' }}
                </p>

                <div v-if="selectedAward?.issuer" class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                  <span class="text-gray-400 font-medium">Issued by {{ selectedAward.issuer }}</span>
                </div>
              </div>
            </div>

            <!-- Right: Image Section -->
            <div class="max-h-xl mx-auto px-2 md:px-4 my-8 flex items-center justify-center">
              <div class="relative group">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div class="relative">
                  <img v-if="selectedAward?.image" :src="selectedAward.image"
                    :alt="selectedAward.title || 'Award Image'"
                    class="w-full max-w-sm rounded-2xl shadow-2xl border border-white/20 transition-transform duration-500 group-hover:scale-105" />
                  <div v-else
                    class="w-full max-w-sm h-64 flex items-center justify-center text-gray-400 border border-white/20 rounded-2xl bg-white/5">
                    <div class="text-center">
                      <svg class="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                      </svg>
                      <p class="text-sm">No Image Selected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Carousel Section -->
      <div class="max-w-8xl mx-auto px-4 md:px-8" ref="carouselRef">
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-3 md:p-3">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xl font-semibold text-white">All Achievements</h4>
            <div class="flex space-x-2">
              <button @click="scrollCarousel('left')"
                class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button @click="scrollCarousel('right')"
                class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="overflow-hidden" ref="scrollContainer">
            <div class="flex space-x-10 transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${scrollPosition}px)` }">
              <div v-for="(award, index) in awards" :key="index" @click="selectAward(award)" :class="[
                'min-w-[120px] max-w-[150px] py-2 flex-shrink-0 group cursor-pointer transition-all duration-500',
                selectedAward?.year === award.year
                  ? 'transform scale-105'
                  : 'hover:scale-102'
              ]">
                <div :class="[
                  'relative p-2 rounded-2xl border transition-all duration-500',
                  selectedAward?.year === award.year
                    ? 'bg-white/15 border-white/30 shadow-xl'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                ]">
                  <!-- Selection Indicator -->
                  <div v-if="selectedAward?.year === award.year"
                    class="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>

                  <!-- Award Image -->
                  <div class="relative mb-4 overflow-hidden rounded-xl">
                    <img :src="award.image" :alt="award.title"
                      class="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <!-- Award Info -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between ">
                      <span class="text-sm font-medium text-white text-center bg-white/20 px-1 py-1 rounded-full">
                        {{ award.year }}
                      </span>
                    </div>
                    <h3 class="text-sm font-semibold text-white line-clamp-1">
                      {{ award.title }}
                    </h3>
                    <!-- <p class="text-sm text-gray-300 line-clamp-2 ">
                      {{ award.description }}
                    </p> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';

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
const scrollPosition = ref(0);
const titleRef = ref<HTMLElement>();
const mainDisplayRef = ref<HTMLElement>();
const carouselRef = ref<HTMLElement>();
const scrollContainer = ref<HTMLElement>();

function selectAward(award: Award): void {
  selectedAward.value = award;
}

function scrollCarousel(direction: 'left' | 'right'): void {
  const container = scrollContainer.value;
  if (!container) return;

  const scrollAmount = 300;
  const maxScroll = container.scrollWidth - container.clientWidth;

  if (direction === 'left') {
    scrollPosition.value = Math.max(0, scrollPosition.value - scrollAmount);
  } else {
    scrollPosition.value = Math.min(maxScroll, scrollPosition.value + scrollAmount);
  }
}

// Intersection Observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  nextTick(() => {
    if (titleRef.value) observer.observe(titleRef.value);
    if (mainDisplayRef.value) observer.observe(mainDisplayRef.value);
    if (carouselRef.value) observer.observe(carouselRef.value);
  });
};

onMounted(() => {
  selectedAward.value = awards.value.length > 1 ? awards.value[1] : null;
  observeElements();
});
</script>

<style scoped>
/* Scroll Animation Classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Initial state for elements */
[ref="titleRef"],
[ref="mainDisplayRef"],
[ref="carouselRef"] {
  opacity: 0;
  transform: translateY(30px);
}



/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(20px)) {
  .backdrop-blur-xl {
    backdrop-filter: blur(20px);
  }
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>