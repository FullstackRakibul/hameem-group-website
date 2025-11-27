<template>
  <section class="container mx-auto py-8 md:py-16 overflow-hidden" id="about-us">
    <el-row class="text-center mb-2 justify-center flex flex-col items-center">
      <p class=" text-2xl md:text-5xl font-medium tracking-widest text-secondary py-5 font-writting">Welcome to</p>

      <div v-gsap:whenVisible.to="{
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.3
      }" class="text-primary uppercase font-semibold text-4xl md:text-6xl mb-5 relative">
        <span class="font-normal">Ha-Meem </span>
        <span class="font-bold">Group</span>
        <UISectionUnderline />
      </div>

      <p class="md:text-2xl font-sans md:font-normal text-gray-600 mt-2 text-center max-w-6xl px-4">
        Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
        Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD.
        Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts
        state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
      </p>
    </el-row>

    <el-row :gutter="16" class="px-2 sm:px-4 lg:px-8">
      <!-- Left: main content -->
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16">
          <!-- Circle Icons Section -->
          <div class="py-8 sm:py-10 px-2 md:px-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
              <div v-for="(item, index) in stats" :key="index" @mouseenter="onIconEnter(item, index)"
                @mouseleave="onIconLeave(index)" @click="onIconClick(item, index)"
                :ref="el => setIconRef(el as HTMLElement | null, index)"
                class="flex flex-col items-center group cursor-pointer transition-all duration-300 relative"
                :class="{ 'animate-disabled': !animationsEnabled }" role="button"
                :aria-label="`Show details for ${item.label}`" tabindex="0"
                @keydown.enter.prevent="onIconClick(item, index)">
                <!-- Circle container -->
                <div
                  class="relative rounded-full flex items-center justify-center shadow-sm transition-all duration-300 overflow-visible"
                  :class="iconContainerClasses" :style="{
                    '--float-delay': `${index * 0.4}s`,
                    '--rotation-delay': `${index * 0.15}s`
                  }">
                  <!-- Rotating dashed border -->
                  <div class="absolute inset-0 rounded-full rotating-border"
                    :class="{ paused: hoveredIndex === index }">
                    <div
                      class="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow">
                    </div>
                  </div>

                  <!-- Hover border -->
                  <div
                    class="absolute inset-0 border-2 border-dashed border-transparent group-hover:border-primary rounded-full transition-all duration-300 z-10">
                  </div>

                  <!-- Icon -->
                  <div
                    class="w-3/4 h-3/4 flex items-center justify-center transition-transform duration-500 z-20 relative">
                    <img :src="item.image" :alt="item.label || 'Feature Icon'"
                      class="object-contain max-h-full max-w-full transition-all duration-300" />
                  </div>

                  <!-- Hover overlay -->
                  <div
                    class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full z-10">
                  </div>
                </div>

                <!-- Label -->
                <h3
                  class="text-base sm:text-lg font-medium text-gray-800 mt-3 text-center group-hover:text-primary transition-colors duration-300">
                  {{ item.label }}
                </h3>

                <!-- Tooltip / Preview (desktop: floating; mobile: stacked below) -->
                <div v-if="hoveredItem && hoveredIndex === index" class="absolute z-50"
                  :class="isSmall ? 'left-1/2 -translate-x-1/2 top-full mt-3 w-[92%] max-w-sm' : 'top-2/3 left-2/3 transform -translate-x-1/4 w-80 max-w-sm'">
                  <!-- caret -->
                  <div
                    class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"
                    v-if="!isSmall"></div>

                  <!-- tooltip card -->
                  <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-4 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-3">
                      <h4 class="text-md font-semibold text-gray-900">{{ hoveredItem.label }}</h4>
                      <button class="text-xs text-gray-500 hover:text-gray-700" @click.stop="openModal(hoveredItem)"
                        aria-label="Open details">
                        Details
                      </button>
                    </div>

                    <div class="space-y-3">
                      <div v-for="(previewItem, idx) in getPreviewItems(hoveredItem.label)" :key="idx"
                        class="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <div class="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <div class="flex-1 min-w-0">
                          <h5 class="text-sm font-medium text-gray-900 truncate">{{ previewItem.title }}</h5>
                          <p class="text-xs text-gray-600 line-clamp-2">{{ previewItem.description }}</p>
                        </div>
                      </div>

                      <div class="text-center pt-2 border-t border-gray-100">
                        <span class="text-xs text-gray-500">More details will be added soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <!-- item -->
            </div>
          </div>

          <!-- Animation Toggle -->
          <div class="flex justify-center mb-6">
            <button @click="toggleAnimations"
              class="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-xs font-medium transition-colors duration-200">
              {{ animationsEnabled ? 'Disable' : 'Enable' }} Animations
            </button>
          </div>

          <p class="text-base md:text-lg text-gray-600 mt-4 text-justify px-2 sm:px-0">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments
            designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends,
            we've got something special for every occasion. Thank you for choosing us — your satisfaction is our
            priority!
          </p>
        </div>
      </el-col>

      <!-- Right: side hero with bg image and year -->
      <el-col :xs="24" :md="8" class="md:relative mt-8 md:mt-0">
        <div class="relative rounded-md overflow-hidden w-full h-auto md:h-full flex items-center justify-center"
          :style="{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }">
          <div class="flex flex-col items-center justify-center text-center space-y-4 p-6 md:p-0">
            <div v-gsap:whenVisible.from="{ x: -120, opacity: 0, duration: 1.1, ease: 'power2.out' }"
              class="text-gray-900 font-normal text-5xl sm:text-6xl md:text-7xl font-writtingOne leading-tight">
              Leading Industry
            </div>

            <div class="flex flex-col items-center space-y-2">
              <div v-gsap:whenVisible.from="{ x: 120, opacity: 0, duration: 1.1, delay: 0.2, ease: 'power2.out' }"
                class="text-white text-base sm:text-lg md:text-xl font-medium px-4 py-3 rounded-full shadow-inner bg-primary backdrop-blur-sm">
                since
              </div>

              <div v-gsap:whenVisible.from="{ x: 150, opacity: 0, duration: 1.1, delay: 0.4, ease: 'power2.out' }"
                class="text-secondary text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold font-writtingOne leading-none">
                1984
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- AboutServiceList modal remains unchanged - invoked from tooltip details -->
    <AboutServiceList v-if="showModal" :content="modalContent" @close="showModal = false" />
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import AboutServiceList from '~/components/ui/AboutServiceList.vue';
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue';

// props
const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/v1/raise-chart.gif"
  }
});

// state
const animationsEnabled = ref(true);
const iconRefs = ref<(HTMLElement | null)[]>([]);
const floatingTimelines = ref<gsap.core.Timeline[]>([]);

// modal & tooltip
const showModal = ref(false);
const modalContent = ref({});
type LabelType = 'Vertical Capacity' | 'Automation' | 'Digitalization' | 'In-House Facilities' | 'Joint Ventures' | 'Enriching Service';

type StatItem = {
  image: string;
  count?: string;
  label: LabelType;
};

const hoveredItem = ref<StatItem | null>(null);
const hoveredIndex = ref(-1);

// small-screen helper
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);
const isSmall = computed(() => width.value <= 768);

const iconContainerClasses = computed(() => ['icon-container', 'icon-large']);

// stats
const stats: StatItem[] = [
  { image: '/assets/v1/section/about/garmentys.png', count: '4+', label: 'Vertical Capacity' },
  { image: '/assets/v1/section/about/AUTOMATION.png', count: '8+', label: 'Automation' },
  { image: '/assets/v1/section/about/Digitalization-.png', count: '6+', label: 'Digitalization' },
  { image: '/assets/v1/section/about/in-house.png', count: '75,000+', label: 'In-House Facilities' },
  { image: '/assets/v1/section/about/join.png', count: '1,50 Lakh+', label: 'Joint Ventures' },
  { image: '/assets/v1/section/about/RO.png', count: '1,50 Lakh+', label: 'Enriching Service' }
];

// refs
const setIconRef = (el: HTMLElement | null, index: number) => {
  iconRefs.value[index] = el;
};

// floating animations
const initFloatingAnimations = () => {
  // kill any existing timelines
  floatingTimelines.value.forEach(tl => tl?.kill());
  floatingTimelines.value = [];

  iconRefs.value.forEach((iconRef, index) => {
    if (!iconRef || !animationsEnabled.value) return;
    const container = iconRef.querySelector('.icon-container') as HTMLElement | null;
    if (!container) return;

    const dur = Math.max(1.6, 2.6 - (isSmall.value ? 0.6 : 0) - index * 0.05);
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(container, { y: -8, duration: dur, ease: 'power2.inOut', delay: index * 0.12 });
    floatingTimelines.value[index] = tl;
  });
};

const pauseFloatingAnimation = (index: number) => {
  const tl = floatingTimelines.value[index];
  if (tl) gsap.to(tl, { timeScale: 0.05, duration: 0.25, ease: 'power2.out' });
};

const resumeFloatingAnimation = (index: number) => {
  const tl = floatingTimelines.value[index];
  if (tl) gsap.to(tl, { timeScale: 1, duration: 0.25, ease: 'power2.out' });
};

const toggleAnimations = () => {
  animationsEnabled.value = !animationsEnabled.value;
  if (animationsEnabled.value) {
    // restart
    nextTick(() => initFloatingAnimations());
  } else {
    // stop
    floatingTimelines.value.forEach(tl => tl?.kill());
    floatingTimelines.value = [];
    iconRefs.value.forEach(iconRef => {
      if (!iconRef) return;
      const container = iconRef.querySelector('.icon-container') as HTMLElement | null;
      if (container) gsap.set(container, { y: 0 });
    });
  }
};

// Tooltip / hover / click handlers
let mobileTooltipTimeout: number | null = null;

const showTooltip = (item: StatItem, index: number) => {
  hoveredItem.value = item;
  hoveredIndex.value = index;
};

const hideTooltip = () => {
  hoveredItem.value = null;
  hoveredIndex.value = -1;
};

const onIconEnter = (item: StatItem, index: number) => {
  // desktop hover
  if (!isSmall.value) {
    showTooltip(item, index);
    if (animationsEnabled.value) pauseFloatingAnimation(index);
  }
};

const onIconLeave = (index: number) => {
  if (!isSmall.value) {
    hideTooltip();
    if (animationsEnabled.value) resumeFloatingAnimation(index);
  }
};

const onIconClick = (item: StatItem, index: number) => {
  // On small screens, toggle tooltip on tap
  if (isSmall.value) {
    if (hoveredIndex.value === index) {
      hideTooltip();
      if (animationsEnabled.value) resumeFloatingAnimation(index);
      if (mobileTooltipTimeout) { clearTimeout(mobileTooltipTimeout); mobileTooltipTimeout = null; }
      return;
    }

    // show and auto-hide after 6s
    showTooltip(item, index);
    if (animationsEnabled.value) pauseFloatingAnimation(index);
    if (mobileTooltipTimeout) { clearTimeout(mobileTooltipTimeout); mobileTooltipTimeout = null; }
    mobileTooltipTimeout = window.setTimeout(() => {
      hideTooltip();
      if (animationsEnabled.value) resumeFloatingAnimation(index);
      mobileTooltipTimeout = null;
    }, 6000);
  } else {
    // On desktop clicking opens modal details
    openModal(item);
  }
};

const openModal = (item: StatItem) => {
  hideTooltip();
  modalContent.value = getModalContent(item.label);
  showModal.value = true;
};

// lifecycle
onMounted(() => {
  // initial floating animations
  setTimeout(() => {
    if (animationsEnabled.value) initFloatingAnimations();
  }, 120);

  // responsive listener
  const onResize = () => {
    width.value = window.innerWidth;
    // re-initialize animations with updated durations if needed
    if (animationsEnabled.value) {
      // slight debounce
      setTimeout(() => initFloatingAnimations(), 120);
    }
  };

  window.addEventListener('resize', onResize, { passive: true });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
    floatingTimelines.value.forEach(tl => tl?.kill());
    if (mobileTooltipTimeout) { clearTimeout(mobileTooltipTimeout); mobileTooltipTimeout = null; }
  });
});

// helpers for modal/preview content
const getPreviewItems = (label: LabelType) => {
  const contentMap: Record<LabelType, { title: string; description: string }[]> = {
    'Vertical Capacity': [
      { title: 'Denim Fab Mill', description: 'Producing 5.5 million yards per month with eco-friendly practices.' },
      { title: 'Woven Fab Mill', description: 'Generating 2.5 million yards monthly with advanced automation.' },
      { title: 'Spinning Mill', description: 'Converting natural fibers into high-quality yarns with 1400 tons capacity.' }
    ],
    'Automation': [
      { title: 'Auto Cutter', description: 'High-precision automatic cutters reducing fabric waste.' },
      { title: 'CAD Software', description: 'Virtual prototyping and optimized pattern layouts.' },
      { title: 'Auto Pocket Setter', description: 'Ensuring uniform stitching and positioning.' }
    ],
    'Digitalization': [
      { title: 'SAP / ERP', description: 'Orchestrating operations from sourcing to delivery.' },
      { title: 'GSD Software', description: 'Scientific calculation of standard time for garments.' },
      { title: 'Higg Index', description: 'Measuring environmental and social impact.' }
    ],
    'In-House Facilities': [
      { title: '2x Accredited Laboratory', description: 'Ensuring unwavering product quality with industry-standard testing.' },
      { title: '42 MW Power Generation', description: 'Self-sufficient power infrastructure for uninterrupted operations.' },
      { title: 'Solar Energy: 300KW', description: 'Contributing clean energy to our sustainable operations.' }
    ],
    'Joint Ventures': [
      { title: 'Outerwear Factory', description: 'Capacity of 150,000 pieces per month with precision crafting.' },
      { title: 'Since October 2023', description: 'Modern facility embodying strategic growth and partnerships.' }
    ],
    'Enriching Service': [
      { title: 'DDP Business Structure', description: 'End-to-end delivery responsibility with customs clearance.' },
      { title: 'New York Office', description: 'Strategic presence for market trends and client collaboration.' },
      { title: 'Design Team of 30', description: 'Transforming ideas into tangible fashion statements.' }
    ]
  };

  return contentMap[label] || [];
};

const getModalContent = (label: LabelType) => {
  // map label to modal content; placeholder - expand as needed
  return { heading: label, details: getPreviewItems(label) };
};
</script>

<style scoped>
/* Floating Animation */
.icon-container {
  animation: float 3s ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
}

.animate-disabled .icon-container {
  animation: none !important;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* Rotating Border */
.rotating-border {
  animation: rotate 8s linear infinite;
  animation-delay: var(--rotation-delay, 0s);
}

.rotating-border.paused {
  animation-play-state: paused;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Slow spin util */
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* default icon container sizes (desktop) */
.icon-container,
.icon-container>div,
.icon-container img {
  /* handled via utility classes in template; keep fallback */
}

/* Responsive icon container classes computed via template classes */
.icon-large {
  width: 12rem;
  height: 12rem;
  /* 48 */
  border-radius: 9999px;
}

.icon-medium {
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
}

.icon-small {
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
}

/* Slow hover transform */
.group:hover .icon-container {
  transform: translateY(-4px);
  transition: transform 0.3s ease-out;
}

/* Tooltip adjustments */
@media (max-width: 768px) {

  /* shorten animation durations for mobile */
  .icon-container {
    animation-duration: 2.4s;
  }

  .rotating-border {
    animation-duration: 6s;
  }

  /* Tooltip becomes stacked full-width-ish under icon */
  .absolute.top-2\/3 {
    position: static;
    transform: none !important;
    margin-top: 0.75rem;
  }

  .absolute.top-3.right-3 {
    right: 1rem;
    top: 0.75rem;
  }
}

/* small spacing tweaks */
@media (max-width: 480px) {
  .icon-large {
    width: 9.5rem;
    height: 9.5rem;
  }

  .icon-medium {
    width: 8.5rem;
    height: 8.5rem;
  }

  .icon-small {
    width: 7rem;
    height: 7rem;
  }
}

/* ensure images fit */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* accessibility focus styles */
[role="button"]:focus {
  outline: 3px solid rgba(59, 130, 246, 0.25);
  outline-offset: 4px;
}

/* preserve existing utilities used in original */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.z-50 {
  z-index: 50;
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* small polish: tooltip card */
.bg-white.rounded-lg.shadow-lg {
  -webkit-backdrop-filter: blur(6px);
}

/* ensure the right column background doesn't overflow on small screens */
.el-col-md-8 {
  overflow: visible !important;
}

/* make pointer interactions mobile-friendly */
button,
[role="button"] {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* reduce heavy shadows on small screens for performance */
@media (max-width: 768px) {

  .shadow-lg,
  .shadow-sm {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
}
</style>