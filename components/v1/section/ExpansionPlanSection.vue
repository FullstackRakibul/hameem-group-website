<template>
  <section id="expansionPlan" class="w-full px-4 sm:px-6 lg:px-24 py-12">
    <!-- Header Section -->
    <div class="text-center mb-8 justify-center flex flex-col items-center">
      <h2 class="text-4xl md:text-6xl font-light text-gray-900 tracking-tight">
        Expansion <span class="text-primary font-medium">Plan</span>
      </h2>
    </div>

    <UISectionUnderline />

    <!-- Modern Strengths Section - Now Slidable -->
    <div class="mt-16">
      <div class="relative overflow-hidden">

        <!-- Navigation Arrows (hidden on small screens) -->
        <button v-show="!isSmall" @click="slideLeft"
          class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-primary"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }" :disabled="currentSlide === 0"
          aria-label="Slide left">
          <svg class="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button v-show="!isSmall" @click="slideRight"
          class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-primary"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlideIndex }"
          :disabled="currentSlide >= maxSlideIndex" aria-label="Slide right">
          <svg class="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Slider Container -->
        <div class="overflow-hidden mx-2 sm:mx-8">
          <div ref="sliderTrack" class="flex transition-transform duration-500 ease-in-out gap-3 touch-pan-y"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }" @pointerdown="onPointerDown"
            @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="onPointerUp"
            @mouseleave="onPointerUp">
            <!-- Each "page" (slide) will itself contain cardsPerView cards.
                 For simplicity we build a single long list of card elements and use grouped pages by controlling translateX in page widths (100% per page). -->
            <div v-for="(card, index) in strengths" :key="index"
              class="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100/50 overflow-hidden flex flex-col"
              :style="cardStyle">
              <!-- Card Image with Overlay -->
              <div class="relative h-52 overflow-hidden">
                <img :src="card.image" :alt="card.title"
                  class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                <!-- Primary color overlay -->
                <div
                  class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                <!-- Floating Badge -->
                <div class="absolute top-4 left-4">
                  <span
                    class="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary rounded-full border border-white/50 shadow-lg">
                    <div class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    {{ card.badge }}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
                <!-- Title -->
                <h3
                  class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {{ card.title }}
                </h3>

                <!-- Description -->
                <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {{ card.description }}
                </p>

                <!-- Modern CTA Button -->
                <div class="mt-auto">
                  <NuxtLink :to="card.linkTo"
                    class="group/btn relative w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-900 hover:bg-primary text-white rounded-xl font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]">
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out">
                    </div>

                    <span class="relative z-10 text-sm">{{ card.linkText }}</span>
                    <div
                      class="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white/30 transition-colors duration-300">
                      <Icon name="mdi:arrow-right" size="14"
                        class="transform transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <!-- Hover glow effect -->
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              </div>
            </div>
          </div>
        </div>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'"
            :aria-label="`Go to slide ${index + 1}`"></button>
        </div>

        <!-- Slide Counter -->
        <div class="text-center mt-4">
          <span class="text-sm text-gray-600">
            {{ currentSlide + 1 }} / {{ totalSlides }}
            <span class="text-gray-400">•</span>
            Showing {{ visibleCount }} of {{ strengths.length }} projects
          </span>
        </div>
      </div>

      <!-- Modern Products Carousel Section (kept same but responsive) -->
      <ProductionCapabilities/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue';
import ProductionCapabilities from './ProductionCapabilities.vue';

// Slider state
const currentSlide = ref(0);
const sliderTrack = ref<HTMLElement | null>(null);

// Strengths data
const strengths = ref([
  { title: 'Global Apparel Expansion', description: 'Launching a cutting-edge garments factory to enhance production capacity and meet global demand.', icon: 'mdi:earth', linkText: 'New Garments Factory 2024', linkTo: '/#', badge: 'Worldwide', image: '/assets/v1/section/ExpansionPlan/NEWGARMENTS1.jpeg' },
  { title: 'Water Treatment Excellence', description: 'State-of-the-art RO Plant ensuring sustainable water purification and recycling for optimized resource use in manufacturing.', icon: 'mdi:water-outline', linkText: 'RO Plant 2024', linkTo: '/#', badge: 'Worldwide', image: '/assets/v1/section/ExpansionPlan/ROPLANT.jpg' },
  { title: 'Denim Innovation Hub', description: 'A next-generation denim mill focused on sustainable fabrics, efficient dyeing, and smart finishing.', icon: 'fluent-mdl2:delivery-truck', linkText: 'New Denim Mill 2026', linkTo: '/#', badge: 'Innovation', image: '/assets/v1/section/ExpansionPlan/NEWDENIMMILL.webp' },
  { title: 'Precision Yarn Production', description: 'Advanced spinning facilities engineered for high-quality yarns with reduced waste and energy use.', icon: 'mdi:worker', linkText: 'New Spinning Mill 2027', linkTo: '/#', badge: 'Expertise', image: '/assets/v1/section/ExpansionPlan/SpinningMill.jpg' },
  { title: 'Strategic Supply Chain', description: 'Integrated sourcing and warehousing facilities designed for streamlined logistics and distribution.', icon: 'material-symbols:eco', linkText: 'Sourcing & Ware House', linkTo: '/#', badge: 'Eco-Friendly', image: '/assets/v1/section/ExpansionPlan/WareHouse.webp' },
  { title: "Yarn Dye Fabric Plant", description: "Upcoming high-capacity yarn dyeing facility, operational by September 2025. Estimated capacity: 10 tons/day.", icon: "material-symbols:water-drop", linkText: "Yarn Dyeing Unit", linkTo: "/#yarn-dye", badge: "Planned 2025", image: "https://knottednest.com/wp-content/uploads/2020/05/IMG_6567.jpg" },
  { title: "Woven Fabric Mill Printing Unit", description: "Advanced woven fabric printing facility launching by May 2026, expanding in-house textile capabilities.", icon: "material-symbols:print", linkText: "Fabric Printing", linkTo: "/#woven-printing", badge: "Planned 2026", image: "https://static.fibre2fashion.com//articleresources/images/64/6310/SAdobeStock_892797999_Small.jpg" }
]);

// Products data for carousel (kept)
const products = ref([
  { name: 'Garments Factory', image: 'assets/v1/section/capabilities/garments-factory.gif' },
  { name: 'Sweater Factory', image: 'assets/v1/section/capabilities/sweater-factory.gif' },
  { name: 'Washing Plant', image: 'assets/v1/section/capabilities/WashingPlant.webp' },
  { name: 'Automated Machine', image: 'assets/v1/section/capabilities/AutomatedMachine.gif' },
  { name: 'Embroidery', image: 'assets/v1/section/capabilities/Embroidery.gif' },
  { name: 'Printing', image: 'assets/v1/section/capabilities/Printing.gif' },
  { name: 'Re-Cycle Plant', image: 'assets/v1/section/capabilities/Re-CyclePlant.gif' },
  { name: 'Fabric Printing Plant', image: 'assets/v1/section/capabilities/FabricPrintingPlant.gif' },
  { name: 'Laser Machine', image: 'assets/v1/section/capabilities/LaserMachine.gif' },
  { name: 'In-House Accessories', image: 'assets/v1/section/capabilities/In-HouseAccessories.gif' },
  { name: 'Solar Plant', image: 'assets/v1/section/capabilities/SolarPlant.gif' }
]);

const fallbackImage = 'assets/v1/section/capabilities/garments-factory.gif';
const duplicatedProducts = computed(() => [...products.value, ...products.value]);

// responsive helpers
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);
const isSmall = computed(() => width.value <= 768); // hide arrows when <=768
const isVerySmall = computed(() => width.value <= 420);

const updateSize = () => { width.value = window.innerWidth };
onMounted(() => window.addEventListener('resize', updateSize, { passive: true }));
onUnmounted(() => window.removeEventListener('resize', updateSize));

// cards per view responsive
const cardsPerView = computed(() => {
  if (width.value >= 1200) return 4;
  if (width.value >= 1024) return 4;
  if (width.value >= 768) return 3;
  if (width.value >= 640) return 2;
  return 1;
});

// total slides (pages) and limits
const totalSlides = computed(() => Math.ceil(strengths.value.length / cardsPerView.value));
const maxSlideIndex = computed(() => Math.max(0, totalSlides.value - 1));
const visibleCount = computed(() => {
  // number of cards visible on current page
  const start = currentSlide.value * cardsPerView.value;
  return Math.min(cardsPerView.value, Math.max(0, strengths.value.length - start));
});

// cardStyle: flexible width per card (flex-basis)
const cardStyle = computed(() => {
  const percentage = (100 / cardsPerView.value);
  return {
    flex: `0 0 ${percentage}%`,
    maxWidth: `${percentage}%`
  };
});

// slider methods (page-wise)
const slideLeft = () => {
  if (currentSlide.value > 0) currentSlide.value--;
};

const slideRight = () => {
  if (currentSlide.value < maxSlideIndex.value) currentSlide.value++;
};

const goToSlide = (index: number) => {
  if (index >= 0 && index <= maxSlideIndex.value) currentSlide.value = index;
};

// auto-slide
let autoSlide: ReturnType<typeof setInterval> | null = null;
const startAutoSlide = () => {
  stopAutoSlide();
  autoSlide = setInterval(() => {
    if (currentSlide.value >= maxSlideIndex.value) currentSlide.value = 0;
    else slideRight();
  }, 5000);
};
const stopAutoSlide = () => { if (autoSlide) { clearInterval(autoSlide); autoSlide = null; } };

onMounted(() => {
  startAutoSlide();
  // reset slide on resize to avoid out-of-range indexes
  const onR = () => { currentSlide.value = Math.min(currentSlide.value, maxSlideIndex.value); };
  window.addEventListener('resize', onR);
  onUnmounted(() => window.removeEventListener('resize', onR));
});

onUnmounted(() => {
  stopAutoSlide();
});

// touch / drag support for slider: convert pointer delta to page change when released
let pointerActive = false;
let startX = 0;
let lastTranslate = 0;

function onPointerDown(e: PointerEvent) {
  if (!sliderTrack.value) return;
  pointerActive = true;
  sliderTrack.value.setPointerCapture(e.pointerId);
  startX = e.clientX;
  lastTranslate = currentSlide.value * sliderTrackContainerWidth();
  // pause auto slide while dragging
  stopAutoSlide();
}

function onPointerMove(e: PointerEvent) {
  if (!pointerActive || !sliderTrack.value) return;
  e.preventDefault();
  // no direct transform here — we keep page translation controlled; optional: visual drag can be added
}

// Animation controls for products carousel 
const pauseAnimation = () => { const carousel = document.querySelector('.animate-marquee-modern') as HTMLElement | null; if (carousel) { carousel.style.animationPlayState = 'paused'; } };
const resumeAnimation = () => { const carousel = document.querySelector('.animate-marquee-modern') as HTMLElement | null; if (carousel) { carousel.style.animationPlayState = 'running'; } };

function onPointerUp(e: MouseEvent) {
  if (!pointerActive) return;
  pointerActive = false;
  try {
    if (e instanceof PointerEvent) {
      sliderTrack.value?.releasePointerCapture(e.pointerId);
    }
  } catch { }
  const diff = e.clientX - startX;
  const threshold = Math.max(40, width.value * 0.08); // threshold to change page
  if (diff < -threshold && currentSlide.value < maxSlideIndex.value) {
    currentSlide.value++;
  } else if (diff > threshold && currentSlide.value > 0) {
    currentSlide.value--;
  }
  // resume auto slide
  startAutoSlide();
}

function sliderTrackContainerWidth() {
  // used for optional calculations; keep as helper
  return sliderTrack.value ? sliderTrack.value.clientWidth : 0;
}
</script>

<style scoped>
/* Marquee animation for products carousel */
@keyframes marquee-modern {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-modern {
  animation: marquee-modern 20s linear infinite;
  min-width: 200%;
  will-change: transform;
}

@media (max-width: 768px) {
  .animate-marquee-modern {
    animation-duration: 40s;
  }
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Line clamp for description (keeps existing behavior) */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* Smooth transitions for interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover & shadow utilities */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Make arrow buttons slightly smaller on medium screens */
@media (max-width: 1024px) {

  button[aria-label="Slide left"],
  button[aria-label="Slide right"] {
    width: 44px;
    height: 44px;
  }
}

/* On small screens make slider track allow touch gestures and hide heavy effects */
@media (max-width: 768px) {
  .group:hover .group-hover\:scale-105 {
    transform: none;
  }

  /* avoid hover scale on touch */
  .group:hover .group-hover\:bg-primary\/20 {
    background-color: rgba(59, 130, 246, 0.2);
  }

  .line-clamp-3 {
    -webkit-line-clamp: 4;
  }

  /* slightly longer on small devices if single card visible */
}

/* Ensure images responsive */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Improve pointer behaviors for slider */
.touch-pan-y {
  touch-action: pan-y;
}

/* allow vertical scroll but capture horizontal drag gestures */
</style>