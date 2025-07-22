<template>
  <section
    class="container mx-auto relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Geometric Background -->
      <div
        class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl">
      </div>
      <div
        class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl">
      </div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.02]"
        style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>
    <p class="py-2 md:text-3xl font-normal tracking-widest text-secondary text-center font-writtingOne">Company
      Profiles </p>
    <div class="relative z-10 container mx-auto px-4 md:px-2 ">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Our Vision & <span class="text-primary font-medium">Mission</span>
        </h1>
        <SectionUnderline />
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {{ missionVisionData.description }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <!-- Left: Company Image & Stats -->
        <div class="space-y-8">
          <!-- Hero Image -->
          <div class="relative group">
            <div
              class="absolute bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <div class="relative  bg-white rounded-3xl p-2 max-w-fit mx-auto transition-transform duration-500 group-hover:scale-105">
              <img src="~/assets/missionvission-sectionImage.png" alt="Ha-Meem Group Mission Vision"
                class="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          <!-- Company Stats - Updated with new minimalist design -->
          <div class="
            flex flex-col sm:flex-row items-stretch justify-between w-full
            bg-gray-100 rounded-xl p-3 shadow-inner border border-gray-200
            space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8
          ">
            <!-- Segment 1: TOP -->
            <div class="
              relative group flex-1
              flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 md:gap-5
              py-2 px-4 sm:py-0
            ">
              <div class="text-lg sm:text-xl font-bold text-gray-800 uppercase">
                TOP
              </div>
              <div class="text-xl sm:text-2xl font-medium text-indigo-600">
                20%
              </div>
              <div class="absolute right-0 top-8 -translate-y-1/2 w-0.5 h-full bg-primary hidden sm:block"></div>
              <div class="
                absolute bottom-0 left-0 w-full h-0.5
                bg-gradient-to-r from-indigo-500 to-purple-600
                transform translate-y-full group-hover:translate-y-0
                transition-transform duration-200 ease-out
              "></div>
            </div>

            <!-- Segment 2: BOTTOM -->
            <div class="
              relative group flex-1
              flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 md:gap-5
              py-2 px-4 sm:py-0
            ">
              <div class="text-lg sm:text-xl font-bold text-gray-800 uppercase">
                BOTTOM
              </div>
              <div class="text-xl sm:text-2xl font-medium text-sky-600">
                80%
              </div>
              <div class="
                absolute bottom-0 left-0 w-full h-0.5
                bg-gradient-to-r from-sky-500 to-cyan-600
                transform translate-y-full group-hover:translate-y-0
                transition-transform duration-200 ease-out
              "></div>
            </div>

            <!-- Segment 3: KIDS -->
            <!-- <div class="
              relative group flex-1
              flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 md:gap-5
              py-2 px-4 sm:py-0
            ">
              <div class="text-lg sm:text-xl font-bold text-gray-800 uppercase">
                KIDS
              </div>
              <div class="text-xl sm:text-2xl font-medium text-rose-600">
                5%
              </div>
              <div class="
                absolute bottom-0 left-0 w-full h-0.5
                bg-gradient-to-r from-rose-500 to-red-600
                transform translate-y-full group-hover:translate-y-0
                transition-transform duration-200 ease-out
              "></div>
            </div> -->
          </div>
        </div>

        <!-- Right: Mission & Vision Carousel -->
        <div class="w-full">
          <div class="relative mx-auto">
            <!-- Main Slider Container -->
            <div class="relative aspect-video bg-white rounded-xl overflow-hidden group">
              <!-- Slides -->
              <div v-for="(image, index) in carouselImages" :key="index" :class="[
                'absolute inset-0 transition-all duration-700 ease-in-out ',
                currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              ]">
                <img :src="image.src" :alt="image.alt"
                  class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105" />
              </div>

              <!-- Navigation Arrows -->
              <button @click="previousSlide"
                class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group/btn z-20 opacity-0 group-hover:opacity-100">
                <svg class="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button @click="nextSlide"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group/btn z-20 opacity-0 group-hover:opacity-100">
                <svg class="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <!-- Slide Counter -->
              <div
                class="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                {{ currentSlide + 1 }} / {{ carouselImages.length }}
              </div>
            </div>

            <!-- Indicators -->
            <div class="flex justify-center mt-6 space-x-3">
              <button v-for="(image, index) in carouselImages" :key="index" @click="goToSlide(index)" :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index
                  ? 'bg-primary scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              ]"></button>
            </div>

            <!-- Thumbnail Navigation -->
            <div class="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
              <button v-for="(image, index) in carouselImages" :key="index" @click="goToSlide(index)" :class="[
                'flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 relative group/thumb',
                currentSlide === index
                  ? 'border-primary shadow-lg scale-110'
                  : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
              ]">
                <img :src="image.src" :alt="image.alt"
                  class="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300" />
                <div v-if="currentSlide === index" class="absolute inset-0 bg-primary/20"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Values Showcase -->
      <div class="bg-white rounded-xl p-8 md:p-4 ">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Core Values <span class="text-primary font-medium">In Action</span>
          </h2>

          <SectionUnderline />
          <!-- <p class="text-gray-600 max-w-2xl mx-auto">
            Hover over each value to see how we implement it in our daily operations
          </p> -->
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(point, index) in missionVisionData.points" :key="point.id" class="group relative text-center ">
            <!-- Animated Icon Container -->
            <div class="relative mx-auto w-44 h-44 mb-6">
              <!-- Static Icon -->
              <div
                class="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <img :src="point.icon" :alt="point.title" class="w-32 h-32 object-contain" />
              </div>

              <!-- Animated Icon (appears on hover) -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <img :src="point.animatedImage" :alt="point.title"
                  class="w-32 h-32 object-contain brightness-0 invert" />
              </div>

              <!-- Pulse Effect -->
              <div
                class="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping flex justify-center items-center ">
                {{ point.title }}</div>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <div
                class="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-white group-hover:bg-primary group-hover:text-white rounded-full text-md font-medium transition-all duration-300">
                <span>{{ point.category === 'mission' ? 'Mission' : 'Vision' }}</span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {{ point.title }}
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {{ point.description }}
              </p>
            </div>

            <!-- Connecting Line (for larger screens) -->
            <div v-if="index < missionVisionData.points.length - 1"
              class="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-200 group-hover:bg-primary transition-colors duration-300">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import SectionUnderline from '~/components/ui/UISectionUnderline.vue';

defineProps({
  bgImage: {
    type: String,
    default: "/assets/missionvissionsectionbg-abstruct.jpg",
  },
});

// Carousel images data
const carouselImages = [
  {
    src: "/assets/v1/section/mission-vision/mv-slider-01.jpg",
    alt: "Mission Vision Image 1",
    title: "Quality Manufacturing",
    description: "State-of-the-art production facilities"
  },
  {
    src: "/assets/v1/section/mission-vision/HG-mission-vission-slider-02.jpg",
    alt: "Mission Vision Image 2",
    title: "Global Excellence",
    description: "Serving customers worldwide"
  },
  {
    src: "/assets/v1/section/mission-vision/hg-web-mv-slider-01.jpg",
    alt: "Mission Vision Image 3",
    title: "Innovation Hub",
    description: "Leading technology and innovation"
  },
  {
    src: "/assets/v1/section/mission-vision/hg-web-mv-slider-02.jpg",
    alt: "Mission Vision Image 3",
    title: "Innovation Hub",
    description: "Leading technology and innovation"
  },
  {
    src: "/assets/v1/section/mission-vision/hg-web-mv-slider-03.jpg",
    alt: "Mission Vision Image 3",
    title: "Innovation Hub",
    description: "Leading technology and innovation"
  },
  {
    src: "/assets/v1/section/mission-vision/hg-web-mv-slider-04.jpg",
    alt: "Mission Vision Image 4",
    title: "Sustainable Future",
    description: "Environmental responsibility"
  },
  {
    src: "/assets/v1/section/mission-vision/mv-slider-05.webp",
    alt: "Mission Vision Image 5",
    title: "Team Excellence",
    description: "Dedicated workforce"
  }
];

// Slider state
const currentSlide = ref(0);
let slideInterval = null;

// Slider methods
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
  slideInterval = setInterval(() => {
    nextSlide();
  }, 2000);
};

const resetAutoPlay = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  startAutoPlay();
};

// Lifecycle

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});

// Mission and Vision data
const missionVisionData = {
  title: "Our Vision & Mission",
  description: "Ha-Meem Group's mission is to provide quality products on time, while also aiming to eliminate poverty and promote industrialization, with a vision of becoming a leading wholesale clothing manufacturer in Bangladesh and globally.",
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

// Computed properties to separate mission and vision points
const missionPoints = computed(() =>
  missionVisionData.points.filter(point => point.category === 'mission')
);

const visionPoints = computed(() =>
  missionVisionData.points.filter(point => point.category === 'vision')
);
</script>

<style scoped>
/* Professional Custom Slider Styling */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* Smooth slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Thumbnail scrollbar styling */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Custom animations */
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

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
:deep(::-webkit-scrollbar) {
  width: 6px;
}

:deep(::-webkit-scrollbar-track) {
  background: transparent;
}

:deep(::-webkit-scrollbar-thumb) {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mission-vision-carousel {
    max-width: 100%;
  }

  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  :deep(.el-carousel__container) {
    height: auto;
  }

  .grid {
    gap: 1rem;
  }
}

@media (max-width: 1024px) {
  .mission-vision-carousel {
    max-width: 600px;
  }
}

/* Modern Slider Enhancements */
.group:hover .group-hover\:translate-y-0 {
  transform: translateY(0);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Smooth hover transitions for text overlay */
.group:hover .absolute.inset-0.bg-black\/0 {
  background-color: rgba(0, 0, 0, 0.6);
}

/* Enhanced thumbnail scrollbar */
.overflow-x-auto::-webkit-scrollbar {
  height: 3px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, var(--primary-color, #3b82f6), var(--secondary-color, #8b5cf6));
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, var(--primary-color, #2563eb), var(--secondary-color, #7c3aed));
}

/* Professional shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-sm {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
