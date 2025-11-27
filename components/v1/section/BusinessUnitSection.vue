<template>
  <section id="business-unit"
    class="business-unit-section pb-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
    <div class="mx-auto">
      <!-- Section Header -->
      <div class="md:mb-10 text-center">
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight section-title">
          Business <span class="text-primary font-medium">Units</span>
        </h2>

        <UISectionUnderline />
        <p class="text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
          Our vertically integrated business units work in harmony to deliver exceptional quality and efficiency across
          the entire production chain.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Tabs Navigation (left on desktop, top / scrollable / select on mobile) -->
        <div class="lg:col-span-3">
          <!-- Compact select for very small screens -->
          <div v-if="isVerySmall" class="mb-4">
            <label class="sr-only" for="unit-select">Select business unit</label>
            <select id="unit-select" class="w-full rounded-lg border px-4 py-3 bg-white shadow-sm text-gray-800"
              v-model="activeTab" @change="handleManualTabChange(activeTab)">
              <option v-for="(unit, key) in businessUnits" :key="key" :value="key">{{ unit.title }}</option>
            </select>
          </div>

          <!-- Scrollable tab pills for small & medium -->
          <div v-else class="custom-tabs bg-primary h-full rounded-lg shadow-md overflow-hidden">
            <div class="flex items-start md:flex-col gap-2 md:gap-3 p-2 md:p-3">
              <div v-for="(unit, key) in businessUnits" :key="key" class="tab-item">
                <button @click="handleManualTabChange(key as keyof typeof tabImages)"
                  :aria-label="`Switch to ${unit.title} tab`" :class="[
                    'tab-button inline-flex items-center w-full md:w-auto text-left px-4 py-3 md:px-4 md:py-2 transition-all duration-500 rounded-full tracking-widest',
                    activeTab === key
                      ? 'active-tab bg-white border-pink-900 text-primary font-semibold transform scale-105'
                      : 'border-transparent text-white hover:bg-gray-50 hover:text-gray-800'
                  ]">
                  <div class="flex items-center">
                    <div class="tab-icon-container mr-3">
                      <Icon :name="unit.icon || 'mdi:factory'" class="text-xl transition-transform duration-300" />
                    </div>
                    <span class="block text-sm md:text-md uppercase tracking-wider whitespace-nowrap">{{ unit.title
                    }}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="lg:col-span-9">
          <div class="tab-content-container bg-white rounded-xl shadow-sm overflow-hidden" ref="contentContainer">
            <div>
              <!-- Unit Info -->
              <div class="p-4 sm:p-6 border-b border-gray-100">
                <h3 class="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 transition-all duration-500">
                  {{ businessUnits[activeTab].title }}
                </h3>
                <p class="text-gray-600 text-base sm:text-lg mb-4 transition-all duration-500">
                  {{ businessUnits[activeTab].description }}
                </p>
                <div class="inline-flex items-center px-3 py-2 bg-primary/70 rounded-full transition-all duration-500">
                  <span class="text-sm uppercase tracking-wider text-white mr-2">Capacity:</span>
                  <span class="font-medium text-sm text-white">{{ businessUnits[activeTab].capacity }}</span>
                </div>
              </div>

              <!-- Enhanced Carousel with Infinite Auto-Advance -->
              <div class="carousel-container relative">
                <el-carousel ref="carouselRef" :key="`${activeTab}-${carouselKey}`" :interval="0"
                  :height="carouselHeight" arrow="hover" indicator-position="outside" class="custom-carousel"
                  :autoplay="false" @change="onCarouselChange">
                  <el-carousel-item v-for="(image, index) in tabImages[activeTab]" :key="index" class="carousel-item">
                    <div class="relative h-full w-full overflow-hidden group">
                      <!-- Image overlay gradient -->
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10"
                        :class="{ 'opacity-80': isVerySmall }">
                      </div>

                      <!-- Image -->
                      <el-image loading="lazy"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        :src="image" fit="cover" :alt="`${activeTab} Image ${index + 1}`" @load="onImageLoad"
                        @error="onImageError">
                        <template #placeholder>
                          <div class="flex justify-center items-center h-full w-full bg-gray-100">
                            <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
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
                      <div
                        class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20 transition-all duration-300"
                        :class="{ 'text-xs px-2 py-0.5 bottom-3 right-3': isVerySmall }">
                        {{ currentSlideIndex + 1 }} / {{ tabImages[activeTab].length }}
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>

                <!-- Auto-advance controls and indicators (touch-friendly on mobile) -->
                <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20"
                  :class="{ 'px-2 py-1 text-xs': isVerySmall }">
                  <div class="flex items-center space-x-2">
                    <div :class="['w-2 h-2 rounded-full transition-all duration-300',
                      isRunning ? 'bg-green-400 animate-pulse' : 'bg-red-400']"></div>
                    <span class="whitespace-nowrap">{{ isRunning ? 'Auto-cycling' : 'Paused' }}</span>
                    <button @click="toggleAutoAdvance" class="ml-2 text-xs hover:text-yellow-300 transition-colors"
                      :class="{ 'ml-1': isVerySmall }">
                      {{ isRunning ? '⏸️' : '▶️' }}
                    </button>
                  </div>
                </div>

                <!-- Progress bar for current slide -->
                <div class="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
                  <div class="h-full bg-primary transition-all duration-300 ease-linear"
                    :style="{ width: `${slideProgress}%` }"></div>
                </div>

                <!-- Tab progress indicator -->
                <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20"
                  :class="{ 'px-2 py-1 text-xs': isVerySmall }">
                  <div class="flex items-center space-x-2">
                    <span>Tab {{ currentTabIndex + 1 }} / {{ tabKeys.length }}</span>
                  </div>
                </div>
              </div> <!-- carousel-container -->
            </div>
          </div>
        </div>
      </div> <!-- grid -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'
import { ref, onMounted, onUnmounted, nextTick, computed, watch } from 'vue'
import gsap from 'gsap'
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue'

// --- reactive state & default behavior (kept same) ---
const activeTab = ref<keyof typeof tabImages>('woven')
const carouselRef = ref()
const contentContainer = ref()
const currentSlideIndex = ref(0)
const carouselKey = ref(0)
const isRunning = ref(true)
const slideProgress = ref(0)
const isCarouselReady = ref(false)
const imagesLoaded = ref(0)

// responsive helpers
const width = ref(window.innerWidth)
const isVerySmall = computed(() => width.value <= 420) // phones
const isSmall = computed(() => width.value <= 768) // phones/tablets

const updateSize = () => { width.value = window.innerWidth }
onMounted(() => window.addEventListener('resize', updateSize, { passive: true }))
onUnmounted(() => window.removeEventListener('resize', updateSize))

// timing config (unchanged)
const SLIDE_DURATION = 1500
const TAB_TRANSITION_DURATION = 1500
const SLIDE_TRANSITION_DURATION = 500

// timers
let slideTimer: NodeJS.Timeout | null = null
let progressTimer: NodeJS.Timeout | null = null
let tabTransitionTimer: NodeJS.Timeout | null = null

// businessUnits & tabImages (kept identical to your data)
const businessUnits = {
  garments: {
    title: 'Garments Manufacturing',
    description:
      'A disciplined production floor crafting knit and woven apparel with the precision and rhythm only years of mastery can teach.',
    icon: 'game-icons:sewing-machine',
    capacity: '250,000 pieces/day'
  },
  denim: {
    title: 'Denim & Jeans Division',
    description:
      'Where rugged fabric meets craftsmanship — advanced denim lines shaping jeans, jackets, and workwear with timeless durability.',
    icon: 'noto:jeans',
    capacity: '180,000 pieces/day'
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

const tabImages = {
  garments: [
    '/assets/v1/section/garments/garments-unit-image-00000002.jpg',
    '/assets/v1/section/garments/garments-unit-image-00000001.jpg',
    '/assets/v1/section/garments/garments-unit-image-00000003.jpg',
    '/assets/v1/section/garments/garments-unit-image-00000004.jpg',
    '/assets/v1/section/garments/garments-unit-image-00000005.jpg'
  ],
  denim: [
    '/assets/v1/section/denim/denim-unit-image-00000002.jpg',
    '/assets/v1/section/denim/denim-unit-image-00000001.jpg',
    '/assets/v1/section/denim/denim-unit-image-00000003.jpg',
    '/assets/v1/section/denim/denim-unit-image-00000004.jpg'
  ],
  woven: [
    '/assets/v1/section/woven/IMG_9649.JPG',
    '/assets/v1/section/woven/IMG_9666.JPG',
  ],
  printing: [
    '/assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 01.png',
    '/assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 04.png',
    '/assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 01.png',
    '/assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 02.png',
  ],
  dyeing: [
    '/assets/v1/section/DYING & FINISHING/IMG_7307.JPG',
  ],
  washing: [
    '/assets/v1/section/WASHING/wash.JPG',
  ],
  packaging: [
    '/assets/v1/section/PAKAGING/01 (1).jpg',
  ],
  transport: [
    '/assets/v1/section/TRANSPORT/hsbc-bangladesh-introduced-sustainability-linked-loan-for-ha-meem-group-banner-image.jpg',
  ],
  teaGarden: [
    '/assets/businessUnitImage/tea1.jpg',
    '/assets/businessUnitImage/tea2.jpg',
  ],
  newspaper: [
    '/assets/businessUnitImage/news.png',
    '/assets/businessUnitImage/samakal2.jpg',
  ],
  newsChannel: [
    '/assets/businessUnitImage/c24.png',
  ]
}

// computed & watchers
const tabKeys = computed(() => Object.keys(businessUnits) as (keyof typeof tabImages)[])
const currentTabIndex = computed(() => tabKeys.value.indexOf(activeTab.value))
const currentTabImages = computed(() => tabImages[activeTab.value])

watch(activeTab, () => {
  imagesLoaded.value = 0
  isCarouselReady.value = false
})

// timers management & image handlers (kept same logic)
const clearAllTimers = () => {
  if (slideTimer) { clearTimeout(slideTimer); slideTimer = null }
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null }
  if (tabTransitionTimer) { clearTimeout(tabTransitionTimer); tabTransitionTimer = null }
}

const onImageLoad = () => {
  imagesLoaded.value++
  if (imagesLoaded.value === 1 && !isCarouselReady.value) { checkCarouselReady() }
}
const onImageError = () => {
  console.warn('Image failed to load')
  imagesLoaded.value++
  if (imagesLoaded.value === 1 && !isCarouselReady.value) { checkCarouselReady() }
}

const checkCarouselReady = async () => {
  await nextTick()
  if (carouselRef.value && imagesLoaded.value > 0) {
    setTimeout(() => {
      isCarouselReady.value = true
      if (carouselRef.value && carouselRef.value.setActiveItem) {
        try { carouselRef.value.setActiveItem(0) } catch { }
      }
      currentSlideIndex.value = 0
      if (isRunning.value) setTimeout(() => startSlideTimer(), 500)
    }, 200)
  }
}

const onCarouselChange = (currentIndex: number) => {
  currentSlideIndex.value = currentIndex
}

const startProgressBar = () => {
  slideProgress.value = 0
  const progressStep = 100 / (SLIDE_DURATION / 50)
  progressTimer = setInterval(() => {
    slideProgress.value += progressStep
    if (slideProgress.value >= 100) {
      slideProgress.value = 100
      if (progressTimer) { clearInterval(progressTimer); progressTimer = null }
    }
  }, 50)
}

const getNextTab = (): keyof typeof tabImages => {
  const currentIndex = tabKeys.value.indexOf(activeTab.value)
  const nextIndex = (currentIndex + 1) % tabKeys.value.length
  return tabKeys.value[nextIndex]
}

const advanceToNextTab = async () => {
  if (!isRunning.value) return
  clearAllTimers()
  gsap.to(contentContainer.value, {
    opacity: 0,
    scale: 0.95,
    y: 20,
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      const nextTab = getNextTab()
      activeTab.value = nextTab
      currentSlideIndex.value = 0
      carouselKey.value += 1
      isCarouselReady.value = false
      imagesLoaded.value = 0
      nextTick(() => {
        gsap.to(contentContainer.value, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        })
      })
    }
  })
}

const advanceSlide = async () => {
  if (!isRunning.value || !carouselRef.value || !isCarouselReady.value) return
  const totalSlides = currentTabImages.value.length
  const nextSlideIndex = currentSlideIndex.value + 1
  if (nextSlideIndex >= totalSlides) {
    await advanceToNextTab()
  } else {
    currentSlideIndex.value = nextSlideIndex
    if (carouselRef.value && carouselRef.value.setActiveItem) {
      try { carouselRef.value.setActiveItem(currentSlideIndex.value) } catch { }
    }
    startSlideTimer()
  }
}

const startSlideTimer = () => {
  if (!isRunning.value || !isCarouselReady.value) return
  clearAllTimers()
  startProgressBar()
  slideTimer = setTimeout(() => { advanceSlide() }, SLIDE_DURATION)
}

const handleManualTabChange = async (tab: keyof typeof tabImages) => {
  if (tab === activeTab.value) return
  const wasRunning = isRunning.value
  isRunning.value = false
  clearAllTimers()
  gsap.to(contentContainer.value, {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    ease: 'power2.inOut',
    onComplete: () => {
      activeTab.value = tab
      currentSlideIndex.value = 0
      carouselKey.value += 1
      isCarouselReady.value = false
      imagesLoaded.value = 0
      nextTick().then(() => {
        gsap.to(contentContainer.value, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => {
            setTimeout(() => {
              isRunning.value = wasRunning
            }, 5000)
          }
        })
      })
    }
  })
}

const toggleAutoAdvance = () => {
  isRunning.value = !isRunning.value
  if (isRunning.value && isCarouselReady.value) { startSlideTimer() } else { clearAllTimers(); slideProgress.value = 0 }
}

// responsive carousel height
const carouselHeight = computed(() => {
  if (isVerySmall.value) return '260px'
  if (isSmall.value) return '360px'
  return '450px'
})

// initial animations (kept)
onMounted(() => {
  gsap.from('.section-title', { opacity: 0, y: -30, duration: 0.8, ease: 'power2.out' })
  gsap.from('.tab-item', { opacity: 0, x: -30, stagger: 0.1, duration: 0.5, delay: 0.3, ease: 'power2.out' })
  gsap.from('.tab-content-container', { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power2.out' })
  // set initial selected tab's images
  nextTick(() => { checkCarouselReady() })
})

onUnmounted(() => {
  clearAllTimers()
})
</script>

<style scoped>
/* keep existing visual language; only adjust responsiveness and touch targets */

/* container tweaks already handled by tailwind responsive px classes */

/* tabs style - same look on desktop, becomes scrollable on smaller screens */
.custom-tabs {
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  background: linear-gradient(0deg, rgba(43, 65, 81, 1.5), rgba(129, 170, 216, 0.8));
}

/* tab button polish */
.tab-button {
  position: relative;
  overflow: hidden;
  transform-origin: center;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
  -webkit-tap-highlight-color: transparent;
}

/* subtle sheen */
.tab-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.tab-button:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.tab-button.active-tab::before {
  opacity: 1;
  transform: translateX(0);
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
}

.tab-icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  transition: transform 0.3s;
}

.tab-button.active-tab .tab-icon-container {
  transform: scale(1.15) rotate(3deg);
}

/* carousel container */
.carousel-container {
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
}

/* Element plus overrides (kept) */
:deep(.custom-carousel .el-carousel__item) {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.custom-carousel .el-carousel__arrow) {
  background-color: rgba(255, 255, 255, 0.95);
  color: #333;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transform: translateY(-50%) scale(0.95);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.28s ease;
  opacity: 0;
}

:deep(.custom-carousel:hover .el-carousel__arrow) {
  opacity: 1;
}

:deep(.custom-carousel .el-carousel__arrow:hover) {
  transform: translateY(-50%) scale(1.06);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

:deep(.custom-carousel .el-carousel__arrow--left) {
  left: 12px;
}

:deep(.custom-carousel .el-carousel__arrow--right) {
  right: 12px;
}

:deep(.custom-carousel .el-carousel__indicators) {
  bottom: 12px;
}

:deep(.custom-carousel .el-carousel__indicator) {
  padding: 0 4px;
}

:deep(.custom-carousel .el-carousel__button) {
  width: 30px;
  height: 3px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all .28s;
}

:deep(.custom-carousel .el-carousel__indicator.is-active .el-carousel__button) {
  background-color: white;
  width: 40px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.35);
}

/* animated pulse for running indicator */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
}

/* small-screen behavior */
@media (max-width: 1023px) {
  .custom-tabs {
    display: block;
  }

  .custom-tabs .flex {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0.25rem;
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
    border-radius: 9999px;
  }
}

/* very small phones: reduce some heavy visuals for performance and legibility */
@media (max-width: 420px) {
  .tab-button {
    padding: 0.6rem 0.9rem;
    font-size: 0.82rem;
  }

  .carousel-container {
    border-radius: 0.5rem;
  }

  :deep(.custom-carousel .el-carousel__arrow) {
    width: 36px;
    height: 36px;
    opacity: 0.9;
  }

  :deep(.custom-carousel .el-carousel__indicator.is-active .el-carousel__button) {
    width: 34px;
  }
}

/* small accessibility & touch target improvements */
button,
select {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>