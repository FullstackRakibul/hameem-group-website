<template>
  <section class="container mx-auto relative w-full min-h-screen overflow-hidden "
    :style="{ backgroundImage: `url('${bgImage}')` }">
    <!-- Background Elements (kept) -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 rounded-full blur-3xl"
        :class="['bg-gradient-to-bl', isSmall ? 'w-40 h-40' : 'w-1/3 h-1/3', 'from-primary/5 to-transparent']"></div>

      <div class="absolute bottom-0 left-0 rounded-full blur-3xl"
        :class="['bg-gradient-to-tr', isSmall ? 'w-32 h-32' : 'w-1/4 h-1/4', 'from-secondary/5 to-transparent']"></div>

      <!-- <div class="absolute inset-0 opacity-[0.02]"
        style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div> -->
    </div>

    <p class="py-2 md:text-3xl font-normal tracking-widest text-secondary text-center font-writtingOne">
      Company Profiles
    </p>

    <div class="relative z-10 container mx-auto px-2 sm:px-4 lg:px-6">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 px-2">
        <h1 class="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6 tracking-tight">
          Our Vision & <span class="text-primary font-medium">Mission</span>
        </h1>

        <SectionUnderline />

        <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 px-2">
          {{ missionVisionData.description }}
        </p>
      </div>

      <!-- Two-column: Left image/stats, Right carousel -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
        <!-- Left -->
        <div class="space-y-8">
          <!-- Hero Image -->
          <div class="relative group max-w-full mx-auto">
            <div
              class="absolute rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 pointer-events-none"
              :class="isSmall ? 'bg-gradient-to-r from-primary/10 to-secondary/10' : 'bg-gradient-to-r from-primary/20 to-secondary/20'">
            </div>

            <div
              class="relative bg-white rounded-3xl p-2 max-w-[400px] mx-auto transition-transform duration-500 group-hover:scale-105"
              :class="isSmall ? 'p-1' : 'p-2'">
              <img src="~/assets/missionvission-sectionImage.png" alt="Ha-Meem Group Mission Vision"
                class="w-full h-auto rounded-2xl object-cover" :class="isSmall ? 'max-h-[400px]' : 'max-h-[3200px]'" />
            </div>
          </div>

          <!-- Company Stats -->
          <div
            class="flex flex-col sm:flex-row items-stretch justify-between w-full bg-gray-100 rounded-xl p-3 shadow-inner border border-gray-200 space-y-4 sm:space-y-0 sm:space-x-4">
            <div
              class="relative group flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 py-2 px-4">
              <div class="text-md sm:text-lg font-bold text-gray-800 uppercase">TOP</div>
              <div class="text-lg sm:text-xl font-medium text-indigo-600">20%</div>
              <!-- <div class="absolute right-0 top-8 hidden sm:block w-0.5 h-full bg-primary"></div> -->
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
              </div>
            </div>

            <div
              class="relative group flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 py-2 px-4">
              <div class="text-md sm:text-lg font-bold text-gray-800 uppercase">BOTTOM</div>
              <div class="text-lg sm:text-xl font-medium text-sky-600">80%</div>
              <div
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-cyan-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
              </div>
            </div>

            <!-- If you want to re-enable the third segment, layout will adapt automatically -->
          </div>
        </div>

        <!-- Right: Carousel -->
        <div class="w-full">
          <div class="relative mx-auto max-w-full">
            <!-- Main Slider -->
            <div class="relative bg-white rounded-xl overflow-hidden group mission-vision-carousel"
              :class="isSmall ? 'shadow-md' : 'shadow-2xl'">
              <!-- Slides: absolutely stacked -->
              <div v-for="(image, index) in carouselImages" :key="index" :class="[
                'absolute inset-0 transition-all duration-700 ease-in-out',
                currentSlide === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
              ]">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-xl"
                  :style="isSmall ? { height: '260px' } : {}" />
              </div>

              <!-- Left / Right small visible controls for keyboard & accessibility -->
              <button @click="previousSlide"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Previous slide">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button @click="nextSlide"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Next slide">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <!-- Counter -->
              <div
                class="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10"
                aria-hidden="true">
                {{ currentSlide + 1 }} / {{ carouselImages.length }}
              </div>
            </div>

            <!-- Indicators (dots) -->
            <!-- <div class="flex justify-center mt-4 space-x-3">
              <button v-for="(image, index) in carouselImages" :key="index" @click="goToSlide(index)"
                :class="['w-3 h-3 rounded-full transition-all duration-300', currentSlide === index ? 'bg-primary scale-125 shadow-lg' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110']"
                :aria-label="`Go to slide ${index + 1}`"></button>
            </div> -->

            <!-- Thumbnails: horizontally scrollable on small -->
            <div class="flex justify-center mt-4">
              <div class="flex gap-2 overflow-x-auto pb-2 px-2 w-full max-w-[760px]">
                <button v-for="(image, index) in carouselImages" :key="`thumb-${index}`" @click="goToSlide(index)"
                  :class="[
                    'flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 relative',
                    currentSlide === index ? 'border-primary shadow-lg scale-110' : 'border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100'
                  ]">
                  <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
                  <div v-if="currentSlide === index" class="absolute inset-0 bg-primary/16 pointer-events-none"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="bg-white rounded-xl p-6 md:p-8 mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Core Values <span class="text-primary font-medium">In Action</span>
          </h2>
          <SectionUnderline />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(point, index) in missionVisionData.points" :key="point.id"
            class="group relative text-center px-4 py-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-50">
            <div class="relative mx-auto w-36 h-36 mb-4 sm:w-44 sm:h-44">
              <!-- static icon -->
              <div
                class="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center transition-opacity duration-300">
                <img :src="point.icon" :alt="point.title" class="w-24 h-24 object-contain" />
              </div>

              <!-- animated (on hover) -->
              <!-- <div
                class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <img :src="point.animatedImage" :alt="point.title"
                  class="w-24 h-24 object-contain brightness-0 invert" />
              </div> -->

              <!-- pulse label on hover -->
              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-ping text-white font-semibold">
                {{ point.title }}
              </div>
            </div>

            <div class="space-y-3">
              <div
                class="inline-flex items-center px-3 py-1 bg-primary text-white rounded-full text-sm font-medium mb-2">
                <span>{{ point.category === 'mission' ? 'Mission' : 'Vision' }}</span>
              </div>

              <h3
                class="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {{ point.title }}
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {{ point.description }}
              </p>
            </div>

            <!-- connecting line only shown on larger screens for visual flow -->
            <div v-if="index < missionVisionData.points.length - 1"
              class="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gray-200 group-hover:bg-primary transition-colors duration-300">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import SectionUnderline from '~/components/ui/UISectionUnderline.vue';

defineProps({
  bgImage: {
    type: String,
    default: "https://coolbackgrounds.imgix.net/4BIP4ge9ontCTkNubiY4lb/48121f9d09134fd83670b1d6e182aa66/white-particles-background.png?w=3840&q=60&auto=format,compress",
  },
});

// carousel data (kept same)
const carouselImages = [
  { src: "/assets/v1/section/mission-vision/mv-slider-01.jpg", alt: "Mission Vision Image 1" },
  { src: "/assets/v1/section/mission-vision/HG-mission-vission-slider-02.jpg", alt: "Mission Vision Image 2" },
  { src: "/assets/v1/section/mission-vision/hg-web-mv-slider-01.jpg", alt: "Mission Vision Image 3" },
  { src: "/assets/v1/section/mission-vision/hg-web-mv-slider-02.jpg", alt: "Mission Vision Image 4" },
  { src: "/assets/v1/section/mission-vision/hg-web-mv-slider-03.jpg", alt: "Mission Vision Image 5" },
  { src: "/assets/v1/section/mission-vision/hg-web-mv-slider-04.jpg", alt: "Mission Vision Image 6" },
  { src: "/assets/v1/section/mission-vision/mv-slider-05.webp", alt: "Mission Vision Image 7" }
];

// slider
const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
  resetAutoPlay();
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? carouselImages.length - 1 : currentSlide.value - 1;
  resetAutoPlay();
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoPlay();
};

const startAutoPlay = () => {
  stopAutoPlay();
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
  }, 3000);
};

const stopAutoPlay = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

// lifecycle
onMounted(() => {
  startAutoPlay();
  window.addEventListener('visibilitychange', handleVisibility);
  window.addEventListener('resize', updateWidth, { passive: true });
  updateWidth();
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener('visibilitychange', handleVisibility);
  window.removeEventListener('resize', updateWidth);
});

function handleVisibility() {
  if (document.hidden) stopAutoPlay();
  else startAutoPlay();
}

// responsive helpers
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);
function updateWidth() { width.value = window.innerWidth; }
const isSmall = computed(() => width.value <= 768);

// mission/vision data (kept same)
const missionVisionData = {
  title: "Our Vision & Mission",
  description:
    "Ha-Meem Group's mission is to provide quality products on time, while also aiming to eliminate poverty and promote industrialization, with a vision of becoming a leading wholesale clothing manufacturer in Bangladesh and globally.",
  points: [
    {
      id: 1,
      title: "Quality Products",
      description: "We deliver high-quality products on time, ensuring customer satisfaction and building long-term relationships with our clients worldwide.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-01.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/Quality-Products.gif"
    },
    {
      id: 2,
      title: "Eliminate Poverty",
      description: "We're committed to creating employment opportunities and economic growth that helps eliminate poverty in our communities.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-02.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/poverty-animation.gif"
    },
    {
      id: 3,
      title: "Industrialization",
      description: "We strive to further industrialization through innovation, technology adoption, and sustainable manufacturing practices.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-03.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/industry-animation.gif"
    },
    {
      id: 4,
      title: "Leading Manufacturer",
      description: "Our vision is to be recognized as the leading clothing manufacturer in Bangladesh and a respected global player in the industry.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-04.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/Manufacturer-animation.gif"
    },
    {
      id: 5,
      title: "Industry Breakthrough",
      description: "We aim to achieve breakthrough innovations in the textile industry through research, development, and creative solutions.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-05.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/target-animation.gif"
    },
    {
      id: 6,
      title: "Employee Welfare",
      description: "We're dedicated to ensuring the educational advancement, financial security, and overall wellbeing of our employees.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-06.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/education-animation.gif"
    }
  ]
};
</script>

<style scoped>
/* preserve original aesthetic, add responsive niceties */

/* aspect preserving for main slider when not mobile */
.mission-vision-carousel {
  aspect-ratio: 16/9;
  min-height: 260px;
}

/* stacked absolute slides */
.mission-vision-carousel>div {
  will-change: opacity, transform;
}

/* transition helpers */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* small screen tweaks */
@media (max-width: 768px) {
  section.container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .mission-vision-carousel {
    aspect-ratio: auto;
    min-height: 240px;
  }

  .grid {
    gap: 1rem;
  }

  .rounded-3xl {
    border-radius: 1rem;
  }

  /* make thumbnails comfortable to scroll and tap */
  .flex>button {
    min-width: 72px;
  }

  /* stack stats items vertically for readability */
  .flex.flex-col.sm\\:flex-row {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}

/* mid-size screens */
@media (min-width: 769px) and (max-width: 1024px) {
  .mission-vision-carousel {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* desktop retains the original heavy visual */
@media (min-width: 1025px) {
  .mission-vision-carousel {
    max-width: 980px;
    margin: 0 auto;
  }
}

/* smooth hover for animated icon */
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

/* custom scrollbar for thumbnail row */
.flex.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.flex.overflow-x-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, var(--primary-color, #3b82f6), var(--secondary-color, #8b5cf6));
  border-radius: 3px;
}

/* fallback for browsers without backdrop-filter */
@supports not (backdrop-filter: blur(4px)) {
  .backdrop-blur-sm {
    background-color: rgba(255, 255, 255, 0.06);
  }
}

/* subtle ping animation utility (used on icons) */
@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  75% {
    transform: scale(1.25);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* ensure images don't overflow */
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>