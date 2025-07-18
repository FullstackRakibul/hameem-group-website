<template>
  <section id="expansionPlan" class="w-full px-4 md:px-24 py-12">
    <!-- Header Section -->
    <div class="text-center mb-8 justify-center flex flex-col items-center">
      <h2 class="text-4xl md:text-6xl font-light text-gray-900 tracking-tight">
        Expansion <span class="text-primary font-medium">Plan</span>
      </h2>
    </div>

    <UISectionUnderline/>

    <!-- Modern Strengths Section - Now Slidable -->
    <div class="mt-16">
      <div class="relative overflow-hidden">
        <!-- Navigation Arrows -->
        <button
          @click="slideLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-primary"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
          :disabled="currentSlide === 0"
        >
          <svg class="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          @click="slideRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-primary"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlides }"
          :disabled="currentSlide >= maxSlides"
        >
          <svg class="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Slider Container -->
        <div class="overflow-hidden mx-8">
          <div 
            class="flex transition-transform duration-500 ease-in-out gap-3"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="(card, index) in strengths" 
              :key="index"
              class="group relative bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100/50 overflow-hidden flex flex-col h-[420px] w-1/5 hover:border-primary/30 hover:-translate-y-2 flex-shrink-0"
              :class="getCardWidthClass"
            >
              <!-- Card Image with Overlay -->
              <div class="relative h-52 overflow-hidden">
                <img 
                  :src="card.image" 
                  :alt="card.title"
                  class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                />
                <!-- Primary color overlay -->
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                <!-- Floating Badge -->
                <div class="absolute top-4 left-4">
                  <span class="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary rounded-full border border-white/50 shadow-lg">
                    <div class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    {{ card.badge }}
                  </span>
                </div>
              </div>
              
              <!-- Card Content -->
              <div class="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50/50">
                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {{ card.title }}
                </h3>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {{ card.description }}
                </p>
                
                <!-- Modern CTA Button -->
                <div class="mt-auto">
                  <NuxtLink 
                    :to="card.linkTo" 
                    class="group/btn relative w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gray-900 hover:bg-primary text-white rounded-xl font-medium transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <!-- Button background animation -->
                    <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-out"></div>
                    
                    <!-- Button content -->
                    <span class="relative z-10 text-sm">{{ card.linkText }}</span>
                    <div class="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white/30 transition-colors duration-300">
                      <Icon 
                        name="mdi:arrow-right" 
                        size="14" 
                        class="transform transition-transform duration-300 group-hover/btn:translate-x-0.5" 
                      />
                    </div>
                  </NuxtLink>
                </div>
              </div>

              <!-- Hover glow effect -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'"
          ></button>
        </div>

        <!-- Slide Counter -->
        <div class="text-center mt-4">
          <span class="text-sm text-gray-600">
            {{ currentSlide + 1 }} / {{ totalSlides }}
            <span class="text-gray-400">•</span>
            Showing {{ Math.min(cardsPerView, strengths.length - currentSlide * cardsPerView) }} of {{ strengths.length }} projects
          </span>
        </div>
      </div>

      <!-- Modern Products Carousel Section -->
      <div class="relative mt-20 mb-10">
        <!-- Section Background -->
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 overflow-hidden">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h3 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Production <span class="text-primary font-medium">Capabilities</span>
            </h3>
            <UISectionUnderline/>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our state-of-the-art manufacturing facilities and cutting-edge technology
            </p>
          </div>

          <!-- Interactive Carousel Container -->
          <div class="relative overflow-hidden">
            <!-- Gradient Overlays -->
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
            
            <!-- Scrolling Products -->
            <div class="flex space-x-6 animate-marquee-modern">
              <div v-for="(product, index) in duplicatedProducts" :key="index"
                class="group flex-shrink-0 transition-all duration-500 cursor-pointer p-4">
                
                <!-- Product Card -->
                <div class="rounded-full md:py-1 md:pl-1 md:pr-6 shadow-md border-primary/20 hover:shadow-sm bg-primary/10 transition-all duration-500 border backdrop-blur-sm min-w-[280px] flex flex-row justify-start items-center gap-10">
                  <!-- Image Container -->
                  <div class="relative overflow-hidden rounded-full bg-gray-50">
                    <div class="aspect-square w-32 max-w-[70px] mx-auto">
                      <div class="relative w-full h-full">
                        <!-- Primary color overlay at 30% opacity -->
                        <div class="absolute inset-0 bg-primary opacity-30 z-10 mix-blend-multiply"></div>
                        <!-- Image -->
                        <img
                          :src="product.image || fallbackImage"
                          :alt="product.name"
                          class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    <!-- Hover Overlay with Pulse Effect -->
                    <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Product Info -->
                  <div class="text-center">
                    <h4 class="text-2xl font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {{ product.name }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive Controls -->
          <div class="flex justify-center mt-10 space-x-4">
            <button 
              @mouseenter="pauseAnimation"
              class="px-6 py-2 bg-white text-primary rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary/50 group"
            >
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6"></path>
                </svg>
                <span class="font-medium group-hover:text-primary/80 transition-colors">Pause</span>
              </div>
            </button>
            <button 
              @mouseenter="resumeAnimation"
              class="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="font-medium">Play</span>
              </div>
            </button>
          </div>

          <!-- Stats Section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary/50">
            <div class="text-center">
              <div class="md:text-3xl font-bold text-gray-900 mb-1">450+</div>
              <div class="md:text-md text-primary">Production Lines</div>
            </div>
            <div class="text-center">
              <div class="md:text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div class="md:text-md text-primary">Operations</div>
            </div>
            <div class="text-center">
              <div class="md:text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div class="md:text-md text-primary">Quality Assured</div>
            </div>
            <div class="text-center">
              <div class="md:text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div class="md:text-md text-primary">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue';

// Slider state
const currentSlide = ref(0);

// Strengths data
const strengths = ref([
  {
    title: 'Global Apparel Expansion',
    description: 'Launching a cutting-edge garments factory to enhance production capacity and meet global demand.',
    icon: 'mdi:earth',
    linkText: 'New Garments Factory 2024',
    linkTo:'/#',
    badge: 'Worldwide',
    image: '/assets/v1/section/ExpansionPlan/NEWGARMENTS1.jpeg'
  },
  {
    title: 'Water Treatment Excellence',
    description: 'State-of-the-art RO Plant ensuring sustainable water purification and recycling for optimized resource use in manufacturing.',
    icon: 'mdi:water-outline',
    linkText: 'RO Plant 2024',
    linkTo:'/#',
    badge: 'Worldwide',
    image: '/assets/v1/section/ExpansionPlan/ROPLANT.jpg'
  },
  {
    title: 'Denim Innovation Hub',
    description: 'A next-generation denim mill focused on sustainable fabrics, efficient dyeing, and smart finishing.',
    icon: 'fluent-mdl2:delivery-truck',
    linkText: 'New Denim Mill 2026',
    linkTo:'/#',
    badge: 'Innovation',
    image: '/assets/v1/section/ExpansionPlan/NEWDENIMMILL.webp'
  },
  {
    title: 'Precision Yarn Production',
    description: 'Advanced spinning facilities engineered for high-quality yarns with reduced waste and energy use.',
    icon: 'mdi:worker',
    linkText: 'New Spinning Mill 2027',
    linkTo:'/#',
    badge: 'Expertise',
    image: '/assets/v1/section/ExpansionPlan/SpinningMill.jpg'
  },
  {
    title: 'Strategic Supply Chain',
    description: 'Integrated sourcing and warehousing facilities designed for streamlined logistics and distribution.',
    icon: 'material-symbols:eco',
    linkText: 'Sourcing & Ware House',
    linkTo:'/#',
    badge: 'Eco-Friendly',
    image: '/assets/v1/section/ExpansionPlan/WareHouse.webp'
  },
  {
    title: "Yarn Dye Fabric Plant",
    description: "Upcoming high-capacity yarn dyeing facility, operational by September 2025. Estimated capacity: 10 tons/day.",
    icon: "material-symbols:water-drop",
    linkText: "Yarn Dyeing Unit",
    linkTo: "/#yarn-dye",
    badge: "Planned 2025",
    image: "https://knottednest.com/wp-content/uploads/2020/05/IMG_6567.jpg"
  },
  {
    title: "Woven Fabric Mill Printing Unit",
    description: "Advanced woven fabric printing facility launching by May 2026, expanding in-house textile capabilities.",
    icon: "material-symbols:print",
    linkText: "Fabric Printing",
    linkTo: "/#woven-printing",
    badge: "Planned 2026",
    image: "https://static.fibre2fashion.com//articleresources/images/64/6310/SAdobeStock_892797999_Small.jpg"
  }
]);

// Products data for carousel
const products = ref([
  {
    name: 'Garments Factory',
    image: 'assets/v1/section/capabilities/garments-factory.gif'
  },
  {
    name: 'Sweater Factory',
    image: 'assets/v1/section/capabilities/sweater-factory.gif'
  },
  {
    name: 'Washing Plant',
    image: 'assets/v1/section/capabilities/WashingPlant.webp'
  },
  {
    name: 'Automated Machine',
    image: 'assets/v1/section/capabilities/AutomatedMachine.gif'
  },
  {
    name: 'Embroidery',
    image: 'assets/v1/section/capabilities/Embroidery.gif'
  },
  {
    name: 'Printing',
    image: 'assets/v1/section/capabilities/Printing.gif'
  },
  {
    name: 'Re-Cycle Plant',
    image: 'assets/v1/section/capabilities/Re-CyclePlant.gif'
  },
  {
    name: 'Fabric Printing Plant',
    image: 'assets/v1/section/capabilities/FabricPrintingPlant.gif'
  },
  {
    name: 'Laser Machine',
    image: 'assets/v1/section/capabilities/LaserMachine.gif'
  },
  {
    name: 'In-House Accessories',
    image: 'assets/v1/section/capabilities/In-HouseAccessories.gif'
  },
  {
    name: 'Solar Plant',
    image: 'assets/v1/section/capabilities/SolarPlant.gif'
  }
]);

// Fallback image for products
const fallbackImage = 'assets/v1/section/capabilities/garments-factory.gif';

// Duplicated products for seamless scrolling
const duplicatedProducts = computed(() => [...products.value, ...products.value]);

// Responsive cards per view
const cardsPerView = computed(() => {
  if (process.client) {
    if (window.innerWidth >= 1024) return 5; // lg screens - show 4 cards (changed from 5)
    if (window.innerWidth >= 768) return 3;  // md screens - show 3 cards
    if (window.innerWidth >= 640) return 2;  // sm screens - show 2 cards
    return 1; // mobile - show 1 card
  }
  return 4; // default for SSR (changed from 5)
});

// Computed properties for slider
const totalSlides = computed(() => {
  return Math.ceil(strengths.value.length / cardsPerView.value);
});

const maxSlides = computed(() => {
  return totalSlides.value ;
});

const slideWidth = computed(() => {
  return 100 / cardsPerView.value;
});

const getCardWidthClass = computed(() => {
  const cardWidth = 100 / cardsPerView.value;
  return { width: `${cardWidth}%` };
});

// Slider methods
const slideLeft = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const slideRight = () => {
  if (currentSlide.value < maxSlides.value) {
    currentSlide.value++;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// Auto-slide functionality
const autoSlide = ref<NodeJS.Timeout | null>(null);

const startAutoSlide = () => {
  autoSlide.value = setInterval(() => {
    if (currentSlide.value >= maxSlides.value) {
      currentSlide.value = 0;
    } else {
      slideRight();
    }
  }, 5000);
};

const stopAutoSlide = () => {
  if (autoSlide.value) {
    clearInterval(autoSlide.value);
    autoSlide.value = null;
  }
};

// Animation controls for products carousel
const pauseAnimation = () => {
  const carousel = document.querySelector('.animate-marquee-modern') as HTMLElement | null;
  if (carousel) {
    carousel.style.animationPlayState = 'paused';
  }
};

const resumeAnimation = () => {
  const carousel = document.querySelector('.animate-marquee-modern') as HTMLElement | null;
  if (carousel) {
    carousel.style.animationPlayState = 'running';
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoSlide();

  // Handle window resize
  const handleResize = () => {
    currentSlide.value = 0; // Reset to first slide on resize
  };

  window.addEventListener('resize', handleResize);

  // Cleanup resize listener
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});

onUnmounted(() => {
  stopAutoSlide();
});
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

.animate-marquee-modern:hover {
  animation-play-state: paused;
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-marquee-modern {
    animation-duration: 50s;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Line clamp for description */
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

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:bg-primary\/20 {
  background-color: rgba(var(--primary-rgb), 0.2);
}

/* Professional shadow effects */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>