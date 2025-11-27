<template>
  <section class="min-h-screen bg-fixed bg-cover bg-center relative"
    :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>

    <!-- Content Container -->
    <div class="container relative z-20 min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6">
      <!-- Title Section -->
      <div class="text-center mb-6" ref="titleRef">
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-2 tracking-tight">
          Our <span class="text-white font-medium">Achievements</span>
        </h2>

        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-2"></div>
        <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
          Celebrating excellence and recognition in the global textile industry
        </p>
      </div>

      <!-- Main Display Section -->
      <div class="mx-auto mb-6 w-full" ref="mainDisplayRef">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <!-- Desktop: two-column | Mobile: stacked -->
          <div class="flex flex-col lg:flex-row">
            <!-- Left: Text Section (on mobile it sits on top) -->
            <div class="lg:w-1/2 p-4 md:p-6 flex flex-col justify-center">
              <div class="space-y-5">
                <div class="inline-block px-3 py-2 bg-white/10 rounded-full text-sm text-gray-300 font-medium">
                  {{ selectedAward?.year || '2024' }}
                </div>

                <h3 class="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-tight">
                  {{ selectedAward?.title || 'Select an Achievement' }}
                </h3>

                <p class="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {{ selectedAward?.description ||
                    'Click on an achievement below to see the details and celebrate our journey of excellence.' }}
                </p>

                <div v-if="selectedAward?.issuer" class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                  <span class="text-gray-400 font-medium">Issued by {{ selectedAward.issuer }}</span>
                </div>
              </div>
            </div>

            <!-- Right: Image Section (on mobile sits below text) -->
            <div class="lg:w-1/2 max-h-xl mx-auto px-4 md:px-6 my-6 flex items-center justify-center">
              <div class="relative group w-full max-w-md">
                <!-- decorative glow appears on hover (desktop) -->
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                </div>

                <div class="relative">
                  <img v-if="selectedAward?.image" :src="selectedAward.image"
                    :alt="selectedAward.title || 'Award Image'"
                    class="w-full rounded-2xl shadow-2xl border border-white/20 transition-transform duration-500 group-hover:scale-105 object-cover h-64 sm:h-64 md:h-72" />
                  <div v-else
                    class="w-full h-64 sm:h-64 md:h-72 flex items-center justify-center text-gray-400 border border-white/20 rounded-2xl bg-white/5">
                    <div class="text-center px-4">
                      <svg class="w-12 h-12 mx-auto mb-3 text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p class="text-sm sm:text-base">No Image Selected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- end flex -->
        </div>
      </div>

      <!-- Modern Carousel Section -->
      <div class="max-w-4xl mx-auto w-full px-2 sm:px-4" ref="carouselRef">
        <div class="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-3 md:p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-lg sm:text-xl font-semibold text-white">All Achievements</h4>
            <div class="flex space-x-2">
              <button @click="scrollCarousel('left')"
                class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
                aria-label="Scroll left">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button @click="scrollCarousel('right')"
                class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 text-white"
                aria-label="Scroll right">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Carousel: Use native scroll on small screens; snap + drag support -->
          <div class="overflow-hidden">
            <div ref="scrollContainer" class="flex gap-6 md:gap-8 py-3 px-1 md:px-2 overflow-x-auto scrollbar-hidden "
              @pointerdown="onPointerDown" @pointerup="onPointerUp" @pointercancel="onPointerUp"
              @pointermove="onPointerMove" @pointerleave="onPointerUp">
              <div v-for="(award, index) in awards" :key="index" @click="selectAward(award)" :class="[
                'snap-start min-w-[120px] sm:min-w-[120px] md:min-w-[100px] max-w-[120px] py-2 flex-shrink-0 group cursor-pointer transition-all duration-300',
                selectedAward?.year === award.year ? 'transform scale-105' : 'hover:scale-[1.02]'
              ]">
                <div :class="[
                  'relative p-2 rounded-2xl border transition-all duration-300 overflow-hidden',
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
                  <div class="relative mb-3 overflow-hidden rounded-xl">
                    <img :src="award.image" :alt="award.title"
                      class="w-26 h-26 sm:h-36 md:h-32 object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none">
                    </div>
                  </div>

                  <!-- Award Info -->
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs sm:text-sm font-medium text-white bg-white/20 px-2 py-1 rounded-full">
                        {{ award.year }}
                      </span>
                    </div>
                    <h3 class="text-xs sm:text-xs font-semibold text-white line-clamp-2">
                      {{ award.title }}
                    </h3>
                  </div>
                </div>
              </div>
            </div> <!-- end scroll container -->
          </div> <!-- end overflow-hidden -->
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
    description:
      "The winning exporters received Gold, Silver, and Bronze awards. Some 28 firms were conferred Gold Awards, 27 Silver and 21 Bronze awards.",
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
const titleRef = ref<HTMLElement | null>(null);
const mainDisplayRef = ref<HTMLElement | null>(null);
const carouselRef = ref<HTMLElement | null>(null);
const scrollContainer = ref<HTMLElement | null>(null);

// Pointer / drag support state for carousel
let isPointerDown = false;
let startX = 0;
let scrollLeft = 0;

function selectAward(award: Award): void {
  selectedAward.value = award;
  // On mobile, try to bring the selected card into view
  nextTick(() => {
    const container = scrollContainer.value;
    if (!container) return;
    const card = Array.from(container.children).find((c: any) =>
      c.innerText.includes(award.title as string)
    ) as HTMLElement | undefined;
    // if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });
}

function scrollCarousel(direction: 'left' | 'right'): void {
  const container = scrollContainer.value;
  if (!container) return;
  const scrollAmount = container.clientWidth * 0.6; // scroll a chunk
  const left = direction === 'left' ? -scrollAmount : scrollAmount;
  container.scrollBy({ left, behavior: 'smooth' });
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
  selectedAward.value = awards.value.length > 1 ? awards.value[1] : awards.value[0] || null;
  observeElements();
});

// Pointer / drag handlers
function onPointerDown(e: PointerEvent) {
  const container = scrollContainer.value;
  if (!container) return;
  isPointerDown = true;
  (e.target as HTMLElement).setPointerCapture(e.pointerId);
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.classList.add('dragging');
}

function onPointerMove(e: PointerEvent) {
  if (!isPointerDown) return;
  const container = scrollContainer.value;
  if (!container) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1; // scroll-fast multiplier
  container.scrollLeft = scrollLeft - walk;
}

function onPointerUp(e: Event) {
  if (!isPointerDown) return;
  isPointerDown = true;
  const container = scrollContainer.value;
  if (!container) return;

  if (e instanceof PointerEvent) {
    try { (e.target as HTMLElement).releasePointerCapture(e.pointerId); } catch { }
  }
  container.classList.remove('dragging');
}
</script>

<style scoped>
/* Scroll Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.75s ease-out forwards;
}

/* initial state for observed refs */
[ref="titleRef"],
[ref="mainDisplayRef"],
[ref="carouselRef"] {
  opacity: 0;
  transform: translateY(24px);
}

/* hide default scrollbar visually but keep it usable */
.scrollbar-hidden::-webkit-scrollbar {
  height: 8px;
}

.scrollbar-hidden::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.14);
  border-radius: 6px;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: thin;
}

/* make carousel snap and feel tactile */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}

/* dragging cursor hint */
.dragging {
  cursor: grabbing !important;
}

/* small screens: reduce heavy background effect for performance */
@media (max-width: 640px) {
  .bg-fixed {
    background-attachment: scroll;
  }

  /* avoid fixed backgrounds on phones */
  section {
    min-height: auto;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .container {
    min-height: auto;
  }
}

/* ensure images keep aspect and are not cropped awkwardly on tiny screens */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Slight accessibility/touch target improvements */
button {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>