<template>
  <section class="container mx-auto py-8 md:py-16" id="about-us">
    <el-row class="text-center mb-8 justify-center flex flex-col items-center">
      <p class="md:text-5xl font-medium tracking-widest text-secondary py-5 font-writting">Welcome to</p>
      
      <div v-gsap:whenVisible.to="{
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.3
      }" class="text-primary uppercase font-semibold md:text-6xl mb-5 relative">
        <span class="font-normal">Ha-Meem </span>
        <span class="font-bold">Group</span>
        <UISectionUnderline/>
      </div>

      <!-- Alternative: CSS-only decorative line -->
      <div class="alternative-underline hidden">
        <div class="w-64 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6 relative">
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
        </div>
      </div>

      <p class="md:text-2xl font-sans md:font-normal text-gray-600 mt-12 text-center">
        Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
        Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD.
        Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts
        state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
      </p>
    </el-row>

    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16">
          <!-- Circle Icons Section with Enhanced Animations -->
          <div class="py-10 px-2 md:px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-8xl mx-auto">
              <div 
                v-for="(item, index) in stats" 
                :key="index" 
                @mouseenter="showTooltip(item, index)"
                @mouseleave="hideTooltip"
                :ref="el => setIconRef(el as HTMLElement | null, index)"
                class="flex flex-col items-center group cursor-pointer transition-all duration-300 relative"
                :class="{ 'animate-disabled': !animationsEnabled }"
              >
                <!-- Enhanced Circle Container with Floating & Rotating Border -->
                <div
                  class="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/20 hover:bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 overflow-visible icon-container"
                  :style="{ 
                    '--float-delay': `${index * 0.5}s`,
                    '--rotation-delay': `${index * 0.2}s`
                  }"
                >
                  <!-- Rotating Dashed Border -->
                  <div 
                    class="absolute inset-0 rounded-full rotating-border"
                    :class="{ 'paused': hoveredIndex === index }"
                  >
                    <div class="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                  </div>

                  <!-- Hover Border Effect -->
                  <div
                    class="absolute inset-0 border-2 border-dashed border-transparent group-hover:border-primary rounded-full transition-all duration-300 z-10">
                  </div>

                  <!-- Icon Content -->
                  <div class="w-3/4 h-3/4 flex items-center justify-center transition-transform duration-500 z-20 relative">
                    <img :src="item.image" :alt="item.label || 'Feature Icon'"
                      class="object-contain max-h-full max-w-full transition-all duration-300" />
                  </div>

                  <!-- Hover Overlay -->
                  <div
                    class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full z-10">
                  </div>
                </div>

                <!-- Label -->
                <h3
                  class="text-lg font-medium text-gray-800 mt-4 text-center group-hover:text-primary transition-colors duration-300">
                  {{ item.label }}
                </h3>

                <!-- Hover Tooltip -->
                <div v-if="hoveredItem && hoveredIndex === index"
                  class="absolute top-2/3 mt-4 left-2/3 transform -translate-x-1/4 z-50 w-80 max-w-sm">
                  <div
                    class="absolute -top-2 right-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200">
                  </div>

                  <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-4">
                      <h4 class="text-lg font-semibold text-gray-900">{{ hoveredItem.label }}</h4>
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
              </div>
            </div>
          </div>

          <!-- Animation Toggle Button (for A/B testing) -->
          <div class="flex justify-center mb-6">
            <button 
              @click="toggleAnimations"
              class="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-xs font-medium transition-colors duration-200"
            >
              {{ animationsEnabled ? 'Disable' : 'Enable' }} Animations
            </button>
          </div>

          <p class="text-base md:text-lg text-gray-600 mt-4 text-justify">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments
            designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends,
            we've got something special for every occasion. Thank you for choosing us — your satisfaction is our
            priority!
          </p>
        </div>
      </el-col>
      
      <el-col :xs="24" :md="8" class="md:relative">
        <div
          class="bg-transparent md:p-2 flex justify-center items-center rounded-sm md:h-full md:absolute md:inset-0 md:w-[calc(100%+32px)] md:left-[-16px] bg-cover bg-center"
          :style="{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }">
          <div class="flex flex-col items-center justify-center text-center space-y-4">
            <!-- Leading Industry - animates from left -->
            <div v-gsap:whenVisible.from="{ x: -150, opacity: 0, duration: 1.2, ease: 'power2.out' }"
              class="text-gray-900 font-normal text-7xl font-writtingOne leading-tight">
              Leading Industry
            </div>

            <!-- Date section - animates from right -->
            <div class="flex flex-col items-center space-y-2">
              <div v-gsap:whenVisible.from="{ x: 150, opacity: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }"
                class="text-white text-lg md:text-2xl font-medium p-3 py-6 rounded-full shadow-inner cursor-wait shadow-white/40 bg-primary backdrop-blur-sm">
                since
              </div>
              <div v-gsap:whenVisible.from="{ x: 200, opacity: 0, duration: 1.2, delay: 0.6, ease: 'power2.out' }"
                class="text-secondary text-6xl md:text-8xl lg:text-9xl font-extrabold font-writtingOne leading-none">
                1984
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>

  <AboutServiceList v-if="showModal" :content="modalContent" @close="showModal = false" />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import AboutServiceList from '~/components/ui/AboutServiceList.vue';
import type UISectionUnderline from '~/components/ui/UISectionUnderline.vue';

// Animation control
const animationsEnabled = ref(true);
const iconRefs = ref<(HTMLElement | null)[]>([]);
const floatingTimelines = ref<gsap.core.Timeline[]>([]);

// Modal state
const showModal = ref(false);
const modalContent = ref({});

// Tooltip state
type StatItem = {
  image: string;
  count: string;
  label: LabelType;
};
const hoveredItem = ref<StatItem | null>(null);
const hoveredIndex = ref(-1);

const stats: StatItem[] = [
  {
    image: '/assets/v1/section/about/garmentys.png',
    count: '4+',
    label: 'Vertical Capacity',
  },
  {
    image: '/assets/v1/section/about/AUTOMATION.png',
    count: '8+',
    label: 'Automation',
  },
  {
    image: '/assets/v1/section/about/Digitalization-.png',
    count: '6+',
    label: 'Digitalization',
  },
  {
    image: '/assets/v1/section/about/in-house.png',
    count: '75,000+',
    label: 'In-House Facilities',
  },
  {
    image: '/assets/v1/section/about/join.png',
    count: '1,50 Lakh+',
    label: 'Joint Ventures',
  },
  {
    image: '/assets/v1/section/about/RO.png',
    count: '1,50 Lakh+',
    label: 'Enriching Service',
  }
];

const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/v1/raise-chart.gif",
  },
});

// Ref management
const setIconRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    iconRefs.value[index] = el;
  }
};

// Animation methods
const initFloatingAnimations = () => {
  iconRefs.value.forEach((iconRef, index) => {
    if (iconRef && animationsEnabled.value) {
      const container = iconRef.querySelector('.icon-container') as HTMLElement;
      if (container) {
        // Create floating timeline
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(container, {
          y: -8,
          duration: 2 + (index * 0.2), // Staggered duration
          ease: "power2.inOut",
          delay: index * 0.3, // Staggered start
        });
        
        floatingTimelines.value[index] = tl;
      }
    }
  });
};

const pauseFloatingAnimation = (index: number) => {
  if (typeof floatingTimelines.value[index] !== 'undefined' && floatingTimelines.value[index] !== null) {
    gsap.to(floatingTimelines.value[index], {
      timeScale: 0.1,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};

const resumeFloatingAnimation = (index: number) => {
  if (typeof floatingTimelines.value[index] !== 'undefined' && floatingTimelines.value[index] !== null) {
    gsap.to(floatingTimelines.value[index], {
      timeScale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  }
};

const toggleAnimations = () => {
  animationsEnabled.value = !animationsEnabled.value;
  
  if (animationsEnabled.value) {
    initFloatingAnimations();
  } else {
    // Kill all floating animations
    floatingTimelines.value.forEach(tl => {
      if (tl) tl.kill();
    });
    floatingTimelines.value = [];
    
    // Reset positions
    iconRefs.value.forEach(iconRef => {
      if (iconRef) {
        const container = iconRef.querySelector('.icon-container') as HTMLElement;
        if (container) {
          gsap.set(container, { y: 0 });
        }
      }
    });
  }
};

// Tooltip methods with animation integration
const showTooltip = (item: StatItem, index: number) => {
  hoveredItem.value = item;
  hoveredIndex.value = index;
  
  if (animationsEnabled.value) {
    pauseFloatingAnimation(index);
  }
};

const hideTooltip = () => {
  const prevIndex = hoveredIndex.value;
  hoveredItem.value = null;
  hoveredIndex.value = -1;
  
  if (animationsEnabled.value && prevIndex !== -1) {
    resumeFloatingAnimation(prevIndex);
  }
};

const openModal = (item: any) => {
  hideTooltip();
  modalContent.value = getModalContent(item.label);
  showModal.value = true;
};

// Lifecycle
onMounted(() => {
  // Wait for DOM to be ready
  setTimeout(() => {
    if (animationsEnabled.value) {
      initFloatingAnimations();
    }
  }, 100);
});

onUnmounted(() => {
  // Clean up animations
  floatingTimelines.value.forEach(tl => {
    if (tl) tl.kill();
  });
});

// Get preview items for tooltip
type LabelType = 'Vertical Capacity' | 'Automation' | 'Digitalization' | 'In-House Facilities' | 'Joint Ventures' | 'Enriching Service';

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

// Your existing getModalContent function
const getModalContent = (label: any) => {
  // Your existing modal content mapping
  return {};
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Rotating Dashed Border */
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

/* Slow spin utility */
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

/* Enhanced hover effects */
.group:hover .icon-container {
  transform: translateY(-4px);
  transition: transform 0.3s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .icon-container {
    animation-duration: 2.5s;
  }
  
  .rotating-border {
    animation-duration: 6s;
  }
}

/* Existing styles */
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

@media (min-width: 768px) {
  .el-col-md-8 {
    overflow: visible !important;
  }
}

.decorative-underline {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Animation for the decorative line drawing effect */
.decorative-underline path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease-in-out forwards;
  animation-delay: 1.5s;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .decorative-underline {
    width: 250px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .decorative-underline {
    width: 200px;
    height: 40px;
  }
}
</style>