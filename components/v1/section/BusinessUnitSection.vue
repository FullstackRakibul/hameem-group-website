<template>
  <section id="business-unit" class="business-unit-section pb-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
    <div class="px-24 mx-auto">
      <!-- Section Header -->
      <div class="md:mb-10 text-center">
        <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Business <span class="text-primary font-medium">Units</span>
        </h2>

        <UISectionUnderline />
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our vertically integrated business units work in harmony to deliver exceptional quality and efficiency across
          the entire production chain.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Tabs Navigation -->
        <div class="lg:col-span-3">
          <div class="custom-tabs bg-primary h-full rounded-lg shadow-md overflow-hidden">
            <div v-for="(unit, key) in businessUnits" :key="key" class="tab-item">
              <button @click="handleManualTabChange(key as keyof typeof tabImages)"
                :aria-label="`Switch to ${unit.title} tab`" :class="[
                  'tab-button w-full text-left px-6 py-4 transition-all duration-500 m-1 rounded-s-full tracking-widest',
                  activeTab === key
                    ? 'active-tab bg-white border-pink-900 text-primary mx-6 font-semibold transform scale-105'
                    : 'border-transparent hover:bg-gray-50 text-white hover:text-gray-800 hover:transform hover:scale-102'
                ]">
                <div class="flex items-center">
                  <div class="tab-icon-container mr-3">
                    <Icon :name="unit.icon || 'mdi:factory'" class="text-xl transition-transform duration-300" />
                  </div>
                  <span class="block text-xl uppercase tracking-wider">{{ unit.title }}</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="lg:col-span-9">
          <div class="tab-content-container bg-white rounded-xl shadow-sm overflow-hidden" ref="contentContainer">
            <div>
              <!-- Unit Info -->
              <div class="p-6 border-b border-gray-100">
                <h3 class="text-4xl font-bold text-gray-800 mb-2 transition-all duration-500">{{ businessUnits[activeTab].title }}</h3>
                <p class="text-gray-600 text-2xl mb-4 transition-all duration-500">{{ businessUnits[activeTab].description }}</p>
                <div class="inline-flex items-center px-3 py-1 bg-primary/70 rounded-full transition-all duration-500">
                  <span class="text-xl uppercase tracking-wider text-white mr-2">Capacity:</span>
                  <span class="font-medium text-xl text-white">{{ businessUnits[activeTab].capacity }}</span>
                </div>
              </div>

              <!-- Enhanced Carousel with Infinite Auto-Advance -->
              <div class="carousel-container relative">
                <el-carousel 
                  ref="carouselRef"
                  :key="`${activeTab}-${carouselKey}`"
                  :interval="0"
                  height="500px" 
                  arrow="hover" 
                  indicator-position="outside"
                  class="custom-carousel"
                  :autoplay="false"
                >
                  <el-carousel-item v-for="(image, index) in tabImages[activeTab]" :key="index" class="carousel-item">
                    <div class="relative h-full w-full overflow-hidden group">
                      <!-- Image overlay gradient -->
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10">
                      </div>

                      <!-- Image -->
                      <el-image
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        :src="image" fit="cover" :alt="`${activeTab} Image ${index + 1}`">
                        <template #placeholder>
                          <div class="flex justify-center items-center h-full w-full bg-gray-100">
                            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                          </div>
                        </template>
                        <template #error>
                          <div class="flex flex-col justify-center items-center h-full w-full bg-gray-100">
                            <Icon name="mdi:image-off" class="text-4xl text-gray-400" />
                            <p class="text-gray-500 mt-2">Image not available</p>
                          </div>
                        </template>
                      </el-image>

                      <!-- Image counter -->
                      <div class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20 transition-all duration-300">
                        {{ currentSlideIndex + 1 }} / {{ tabImages[activeTab].length }}
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>

                <!-- Auto-advance controls and indicators -->
                <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
                  <div class="flex items-center space-x-2">
                    <div :class="['w-2 h-2 rounded-full transition-all duration-300', 
                                 isRunning ? 'bg-green-400 animate-pulse' : 'bg-red-400']"></div>
                    <span>{{ isRunning ? 'Auto-cycling' : 'Paused' }}</span>
                    <button @click="toggleAutoAdvance" class="ml-2 text-xs hover:text-yellow-300 transition-colors">
                      {{ isRunning ? '⏸️' : '▶️' }}
                    </button>
                  </div>
                </div>

                <!-- Progress bar for current slide -->
                <div class="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
                  <div 
                    class="h-full bg-primary transition-all duration-300 ease-linear"
                    :style="{ width: `${slideProgress}%` }"
                  ></div>
                </div>

                <!-- Tab progress indicator -->
                <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
                  <div class="flex items-center space-x-2">
                    <span>Tab {{ currentTabIndex + 1 }} / {{ tabKeys.length }}</span>
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
import type { TabsInstance } from 'element-plus'
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import gsap from 'gsap'
import type UISectionUnderline from '~/components/ui/UISectionUnderline.vue'

// Reactive state
const activeTab = ref<keyof typeof tabImages>('knit')
const carouselRef = ref()
const contentContainer = ref()
const currentSlideIndex = ref(0)
const carouselKey = ref(0)
const isRunning = ref(true)
const slideProgress = ref(1)

// Timing configuration
const SLIDE_DURATION = 4000 // 4 seconds per slide
const TAB_TRANSITION_DURATION = 1000 // 1 second for tab transition
const SLIDE_TRANSITION_DURATION = 500 // 0.5 seconds for slide transition

// Auto-advance control
let slideTimer: NodeJS.Timeout | null = null
let progressTimer: NodeJS.Timeout | null = null
let tabTransitionTimer: NodeJS.Timeout | null = null

// Business unit descriptions and details
const businessUnits = {
  knit: {
    title: 'Knit Manufacturing',
    description: 'State-of-the-art knitting facilities producing high-quality fabrics with precision and efficiency.',
    icon: 'unjs:knitwork',
    capacity: '120,000 pieces/day'
  },
  woven: {
    title: 'Woven Excellence',
    description: 'Advanced woven production lines creating premium fabrics for global fashion brands.',
    icon: 'logos:fabric',
    capacity: '80,000 pieces/day'
  },
  printing: {
    title: 'Printing & Embroidery',
    description: 'Cutting-edge printing and embroidery technologies delivering intricate designs and patterns.',
    icon: 'fluent-color:design-ideas-20',
    capacity: '50,000 pieces/day'
  },
  dyeing: {
    title: 'Dyeing & Finishing',
    description: 'Eco-friendly dyeing processes ensuring vibrant, consistent colors and superior finishing.',
    icon: 'noto:artist-palette',
    capacity: '60,000 yards/day'
  },
  washing: {
    title: 'Washing Solutions',
    description: 'Innovative washing techniques that enhance fabric quality and aesthetic appeal.',
    icon: 'icon-park:washing-machine-one',
    capacity: '70,000 pieces/day'
  },
  packaging: {
    title: 'Packaging Excellence',
    description: 'Sustainable packaging solutions that protect products while minimizing environmental impact.',
    icon: 'noto:package',
    capacity: '100,000 units/day'
  },
  transport: {
    title: 'Logistics & Transport',
    description: 'Efficient logistics network ensuring timely delivery to global destinations.',
    icon: 'fxemoji:deliverytruck',
    capacity: '200+ shipments/month'
  },
  teaGarden: {
    title: 'Tea Garden Division',
    description: 'A lush and productive tea estate cultivating premium quality tea, contributing to both local consumption and global export.',
    icon: 'fluent-emoji-flat:leaf-fluttering-in-wind',
    capacity: 'Spanning acres of curated plantations with expert harvesting'
  },
  newspaper: {
    title: 'Samakal Newspaper',
    description: 'Samakal is a popular and widely circulated national daily newspaper in Bangladesh, committed to delivering credible news and insightful journalism.',
    icon: 'streamline-emojis:newspaper',
    capacity: 'Leading national daily circulation'
  },
  newsChannel: {
    title: 'Channel 24 News',
    description: 'Channel 24 is a leading and very popular news television channel, providing comprehensive and timely news coverage across Bangladesh and beyond.',
    icon: 'emojione-v1:video-camera',
    capacity: 'Extensive nationwide viewership'
  }
}

// Sample image data for each tab
const tabImages = {
  knit: [
    '/assets/v1/section/knit/IMG_9619.JPG',
    '/assets/v1/section/knit/IMG_9632.JPG',
    '/assets/v1/section/knit/IMG_9636.JPG',
    '/assets/v1/section/knit/IMG_9639.JPG',
    '/assets/v1/section/knit/IMG_9644.JPG'
  ],
  woven: [
    './assets/v1/section/woven/IMG_9649.JPG',
    './assets/v1/section/woven/IMG_9666.JPG',
  ],
  printing: [
    './assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 01.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 04.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 01.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 02.png',
  ],
  dyeing: [
    './assets/v1/section/DYING & FINISHING/IMG_7307.JPG',
  ],
  washing: [
    './assets/v1/section/WASHING/wash.JPG',
  ],
  packaging: [
    './assets/v1/section/PAKAGING/01 (1).jpg',
  ],
  transport: [
    './assets/v1/section/TRANSPORT/hsbc-bangladesh-introduced-sustainability-linked-loan-for-ha-meem-group-banner-image.jpg',
  ],
  teaGarden: [
    './assets/businessUnitImage/tea1.jpg',
    './assets/businessUnitImage/tea2.jpg',
  ],
  newspaper: [
    './assets/businessUnitImage/news.png',
    './assets/businessUnitImage/samakal2.jpg',
  ],
  newsChannel: [
    './assets/businessUnitImage/c24.png',
  ]
}

// Computed properties
const tabKeys = computed(() => Object.keys(businessUnits) as (keyof typeof tabImages)[])
const currentTabIndex = computed(() => tabKeys.value.indexOf(activeTab.value))
const currentTabImages = computed(() => tabImages[activeTab.value])

// Clear all timers
const clearAllTimers = () => {
  if (slideTimer) {
    clearTimeout(slideTimer)
    slideTimer = null
  }
  if (progressTimer) {
    clearInterval(progressTimer)
    progressTimer = null
  }
  if (tabTransitionTimer) {
    clearTimeout(tabTransitionTimer)
    tabTransitionTimer = null
  }
}

// Start progress bar animation
const startProgressBar = () => {
  slideProgress.value = 0
  const progressStep = 100 / (SLIDE_DURATION / 50) // Update every 50ms
  
  progressTimer = setInterval(() => {
    slideProgress.value += progressStep
    if (slideProgress.value >= 100) {
      slideProgress.value = 100
      if (progressTimer) {
        clearInterval(progressTimer)
        progressTimer = null
      }
    }
  }, 50)
}

// Advance to next slide
const advanceSlide = async () => {
  if (!isRunning.value || !carouselRef.value) return

  const totalSlides = currentTabImages.value.length
  const nextSlideIndex = currentSlideIndex.value + 1

  if (nextSlideIndex >= totalSlides) {
    // Reached end of carousel, advance to next tab
    await advanceToNextTab()
  } else {
    // Move to next slide
    currentSlideIndex.value = nextSlideIndex
    
    await nextTick()
    
    if (carouselRef.value) {
      carouselRef.value.setActiveItem(currentSlideIndex.value)
    }
    
    // Start next slide timer
    startSlideTimer()
  }
}

// Start slide timer with progress bar
const startSlideTimer = () => {
  if (!isRunning.value) return
  
  clearAllTimers()
  startProgressBar()
  
  slideTimer = setTimeout(() => {
    advanceSlide()
  }, SLIDE_DURATION)
}

// Get next tab in sequence
const getNextTab = (): keyof typeof tabImages => {
  const currentIndex = tabKeys.value.indexOf(activeTab.value)
  const nextIndex = (currentIndex + 1) % tabKeys.value.length
  return tabKeys.value[nextIndex]
}

// Advance to next tab with smooth transition
const advanceToNextTab = async () => {
  if (!isRunning.value) return
  
  clearAllTimers()
  
  // Animate out current content
  gsap.to(contentContainer.value, {
    opacity: 0,
    scale: 0.95,
    y: 20,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      // Change to next tab
      const nextTab = getNextTab()
      activeTab.value = nextTab
      currentSlideIndex.value = 0
      carouselKey.value += 1 // Force carousel re-render

      nextTick().then(() => {
        // Reset carousel to first slide
        if (carouselRef.value) {
          carouselRef.value.setActiveItem(0)
        }

        // Animate in new content
        gsap.to(contentContainer.value, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            // Start the carousel cycle for new tab
            if (isRunning.value) {
              tabTransitionTimer = setTimeout(() => {
                startSlideTimer()
              }, 500) // Small delay to ensure everything is loaded
            }
          }
        })
      })
    }
  })
}

// Handle manual tab change
const handleManualTabChange = async (tab: keyof typeof tabImages) => {
  if (tab === activeTab.value) return
  
  // Temporarily pause auto-advance
  const wasRunning = isRunning.value
  isRunning.value = false
  clearAllTimers()
  
  // Animate transition
  gsap.to(contentContainer.value, {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    ease: 'power2.inOut',
    onComplete: () => {
      activeTab.value = tab
      currentSlideIndex.value = 0
      carouselKey.value += 1
      
      nextTick().then(() => {
        if (carouselRef.value) {
          carouselRef.value.setActiveItem(0)
        }
        
        gsap.to(contentContainer.value, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            // Resume auto-advance after 5 seconds
            setTimeout(() => {
              isRunning.value = wasRunning
              if (isRunning.value) {
                startSlideTimer()
              }
            }, 5000)
          }
        })
      })
    }
  })
}

// Toggle auto-advance
const toggleAutoAdvance = () => {
  isRunning.value = !isRunning.value
  
  if (isRunning.value) {
    startSlideTimer()
  } else {
    clearAllTimers()
    slideProgress.value = 0
  }
}

// Initialize infinite cycle
const startInfiniteCycle = async () => {
  await nextTick()
  
  if (carouselRef.value) {
    carouselRef.value.setActiveItem(0)
  }
  
  if (isRunning.value) {
    setTimeout(() => {
      startSlideTimer()
    }, 1000) // Initial delay
  }
}

// Animation for initial load
onMounted(() => {
  // Animate title
  gsap.from('.section-title', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power2.out'
  })

  // Animate tabs
  gsap.from('.tab-item', {
    opacity: 0,
    x: -30,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.3,
    ease: 'power2.out'
  })

  // Animate content
  gsap.from('.tab-content-container', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    ease: 'power2.out',
    onComplete: () => {
      // Start infinite cycle after initial animations
      startInfiniteCycle()
    }
  })
})

// Cleanup on unmount
onUnmounted(() => {
  clearAllTimers()
})
</script>

<style scoped>
/* Enhanced tab styling with smoother transitions */
.custom-tabs {
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-button {
  position: relative;
  overflow: hidden;
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.tab-button:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.tab-button.active-tab::before {
  opacity: 1;
  transform: translateX(0);
  background: linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
}

.tab-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.active-tab .tab-icon-container {
  transform: scale(1.2) rotate(5deg);
}

.tab-button:hover .tab-icon-container {
  transform: scale(1.1);
}

/* Enhanced carousel styling */
.carousel-container {
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
}

.tab-content-container {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth carousel transitions */
:deep(.custom-carousel .el-carousel__item) {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.custom-carousel .el-carousel__arrow) {
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transform: translateY(-50%) scale(0.9);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

:deep(.custom-carousel:hover .el-carousel__arrow) {
  opacity: 1;
}

:deep(.custom-carousel .el-carousel__arrow:hover) {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
}

:deep(.custom-carousel .el-carousel__arrow--left) {
  left: 20px;
}

:deep(.custom-carousel .el-carousel__arrow--right) {
  right: 20px;
}

:deep(.custom-carousel .el-carousel__indicators) {
  bottom: 20px;
}

:deep(.custom-carousel .el-carousel__indicator) {
  padding: 0 4px;
}

:deep(.custom-carousel .el-carousel__button) {
  width: 30px;
  height: 3px;
  border-radius: 1.5px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.custom-carousel .el-carousel__indicator.is-active .el-carousel__button) {
  background-color: white;
  width: 40px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.5);
}

/* Enhanced animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Hover scale utilities */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

.scale-105 {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .custom-tabs {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0.5rem;
    margin-bottom: 1rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .custom-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-item {
    flex: 0 0 auto;
    margin-right: 0.5rem;
  }

  .tab-button {
    white-space: nowrap;
    border-left: none !important;
    border-bottom: 4px solid transparent;
    border-radius: 0.375rem;
  }

  .tab-button.active-tab {
    border-bottom: 4px solid var(--el-color-primary);
  }
}
</style>