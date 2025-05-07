<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const tabPosition = ref<TabsInstance['tabPosition']>('left')
const activeTab = ref('knit')




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
    icon: 'mdi:fabric',
    capacity: '80,000 pieces/day'
  },
  printing: {
    title: 'Printing & Embroidery',
    description: 'Cutting-edge printing and embroidery technologies delivering intricate designs and patterns.',
    icon: 'mdi:printer',
    capacity: '50,000 pieces/day'
  },
  dyeing: {
    title: 'Dyeing & Finishing',
    description: 'Eco-friendly dyeing processes ensuring vibrant, consistent colors and superior finishing.',
    icon: 'mdi:palette',
    capacity: '60,000 yards/day'
  },
  washing: {
    title: 'Washing Solutions',
    description: 'Innovative washing techniques that enhance fabric quality and aesthetic appeal.',
    icon: 'mdi:washing-machine',
    capacity: '70,000 pieces/day'
  },
  packaging: {
    title: 'Packaging Excellence',
    description: 'Sustainable packaging solutions that protect products while minimizing environmental impact.',
    icon: 'mdi:package-variant-closed',
    capacity: '100,000 units/day'
  },
  transport: {
    title: 'Logistics & Transport',
    description: 'Efficient logistics network ensuring timely delivery to global destinations.',
    icon: 'mdi:truck-delivery',
    capacity: '200+ shipments/month'
  }
}

// Sample image data for each tab
const tabImages = {
  knit: [
    './assets/v1/section/knit/IMG_9619.JPG',
    './assets/v1/section/knit/IMG_9632.JPG',
    './assets/v1/section/knit/IMG_9636.JPG',
    './assets/v1/section/knit/IMG_9639.JPG',
    './assets/v1/section/knit/IMG_9644.JPG',
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
  ]
}

// Handle tab change with animation
const handleTabChange = (tab: string) => {
  // Animate out current content
  gsap.to('.tab-content-container', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      // Change tab after fade out
      activeTab.value = tab
      
      // Animate in new content
      gsap.to('.tab-content-container', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1
      })
    }
  })
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
    ease: 'power2.out'
  })
})
</script>

<template>
  <section class="business-unit-section py-16 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white">
    <div class="px-24 mx-auto">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2 class="section-title text-5xl text-[#727070] font-titillium font-bold mb-4">
          BUSINESS UNITS
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our vertically integrated business units work in harmony to deliver exceptional quality and efficiency across the entire production chain.
        </p>
      </div>
      
      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Tabs Navigation -->
        <div class="lg:col-span-3">
          <div class="custom-tabs bg-white rounded-lg shadow-sm overflow-hidden">
            <div 
              v-for="(unit, key) in businessUnits" 
              :key="key"
              class="tab-item"
            >
              <button 
                @click="handleTabChange(key)"
                :class="[
                  'tab-button w-full text-left px-6 py-5 transition-all duration-300 border-l-4',
                  activeTab === key 
                    ? 'active-tab bg-primary/5 border-primary text-primary font-medium' 
                    : 'border-transparent hover:bg-gray-50 text-gray-700'
                ]"
              >
                <div class="flex items-center">
                  <div class="tab-icon-container mr-3">
                    <Icon :name="unit.icon || 'mdi:factory'" class="text-xl" />
                  </div>
                  <span class="block text-sm uppercase tracking-wider">{{ key }}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Content Area -->
        <div class="lg:col-span-9">
          <div class="tab-content-container bg-white rounded-xl shadow-sm overflow-hidden">
            <div v-for="(images, key) in tabImages" :key="key" v-show="activeTab === key">
              <!-- Unit Info -->
              <div class="p-6 border-b border-gray-100">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ businessUnits[key].title }}</h3>
                <p class="text-gray-600 mb-4">{{ businessUnits[key].description }}</p>
                <div class="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                  <span class="text-xs uppercase tracking-wider text-gray-500 mr-2">Capacity:</span>
                  <span class="text-sm font-medium text-primary">{{ businessUnits[key].capacity }}</span>
                </div>
              </div>
              
              <!-- Enhanced Carousel -->
              <div class="carousel-container relative">
                <el-carousel 
                  :interval="5000" 
                  height="450px" 
                  arrow="hover" 
                  indicator-position="outside"
                  class="custom-carousel"
                >
                  <el-carousel-item 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="carousel-item"
                  >
                    <div class="relative h-full w-full overflow-hidden group">
                      <!-- Image overlay gradient -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                      
                      <!-- Image -->
                      <el-image 
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        :src="image" 
                        fit="cover" 
                        :alt="`${key} Image ${index + 1}`"
                      >
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
                      <div class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
                        {{ index + 1 }} / {{ images.length }}
                      </div>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom tab styling */
.custom-tabs {
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-button {
  position: relative;
  overflow: hidden;
}

.tab-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--el-color-primary);
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 0;
}

.tab-button:hover::before {
  opacity: 0.05;
  transform: translateX(0);
}

.tab-button.active-tab::before {
  opacity: 0.1;
  transform: translateX(0);
}

.tab-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}

.active-tab .tab-icon-container {
  transform: scale(1.2);
}

/* Enhanced carousel styling */
.carousel-container {
  overflow: hidden;
}

:deep(.custom-carousel .el-carousel__arrow) {
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  transform: translateY(-50%) scale(0.9);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
}

:deep(.custom-carousel:hover .el-carousel__arrow) {
  opacity: 1;
}

:deep(.custom-carousel .el-carousel__arrow:hover) {
  background-color: white;
  transform: translateY(-50%) scale(1);
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
  transition: all 0.3s ease;
}

:deep(.custom-carousel .el-carousel__indicator.is-active .el-carousel__button) {
  background-color: white;
  width: 40px;
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
    scrollbar-width: none; /* Firefox */
  }
  
  .custom-tabs::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
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
