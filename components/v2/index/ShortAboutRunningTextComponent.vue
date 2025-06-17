<template>
  <section class="container mx-auto py-8 md:py-16 mt-5" id="about-us">
    <el-row class="text-center mb-8 justify-center flex flex-col items-center">
      <p class="text-xl font-semibold tracking-widest uppercase py-5 font-title">Welcome to</p>
      <div v-gsap:whenVisible.to="{
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.3
          }" class="text-primary uppercase font-semibold md:text-6xl mb-5 ">
        Ha-Meem Group
      </div>
      <div class=" w-1/5 h-1 bg-primary mx-auto my-4"></div>
      <p class="md:text-2xl font-sans md:font-normal text-gray-600 mt-4 text-center">
        Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
        Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD.
        Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts
        state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
      </p>
      <!-- <p class="md:text-2xl font-sans md:font-normal text-gray-600 mt-4 text-center">
  With humble beginnings in the early days of Bangladesh’s garment industry, this enterprise has grown into one of the nation’s largest exporters. Over decades of unwavering commitment, it now stands with a workforce of 75,000 and an annual turnover approaching 925 million USD. Operating 450 production lines with a monthly capacity of 9.5 million garments, it houses cutting-edge facilities in denim, spinning, and woven textiles — delivering excellence to global brands.
</p> -->

    </el-row>
    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16">
          <!-- Circle Icons Section with Hover Tooltips -->
          <div class="py-10 px-2 md:px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-8xl mx-auto">
              <div 
                v-for="(item, index) in stats" 
                :key="index" 
                @mouseenter="showTooltip(item, index)"
                @mouseleave="hideTooltip"
                
                class="flex flex-col items-center  group cursor-pointer transition-all duration-300 relative"
              >
                <!-- Circle Container -->
                <div class="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/20 hover:bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ">
                  <div class="absolute inset-0 border-2 border-dashed border-transparent group-hover:border-primary rounded-full transition-all duration-300"></div>
                  
                  <div class="w-3/4 h-3/4 flex items-center justify-center transition-transform duration-500 ">
                    <img 
                      :src="item.image" 
                      :alt="item.label || 'Feature Icon'"
                      class="object-contain max-h-full max-w-full transition-all duration-300" 
                    />
                  </div>
                  
                  <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <!-- <span class="px-4 py-2 bg-white/90 text-primary text-sm font-medium rounded-full shadow-sm backdrop-blur-sm">
                      Hover for details
                    </span> -->
                  </div>
                </div>

                <!-- Label -->
                <h3 class="text-lg font-medium text-gray-800 mt-4 text-center group-hover:text-primary transition-colors duration-300">
                  {{ item.label }}
                </h3>

                <!-- Hover Tooltip -->
                <div 
                  v-if="hoveredItem && hoveredIndex === index"
                  class="absolute top-2/3 mt-4 left-2/3 transform -translate-x-1/4 z-50 w-80 max-w-sm"
                >
                  <div class="absolute -top-2 right-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                  
                  <div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-4">
                      <h4 class="text-lg font-semibold text-gray-900">{{ hoveredItem.label }}</h4>
                      <!-- <button 
                        @click.stop="openModal(hoveredItem)"
                        class="px-3 py-1 bg-primary text-white text-xs rounded-full hover:bg-primary/80 transition-colors duration-200"
                      >
                        View All
                      </button> -->
                    </div>
                    
                    <div class="space-y-3">
                      <div 
                        v-for="(previewItem, idx) in getPreviewItems(hoveredItem.label)" 
                        :key="idx"
                        class="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                      >
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
        }"
      >
        <div class="flex flex-col items-center justify-center text-center space-y-4">
          <!-- Leading Industry - animates from left -->
          <div 
            v-gsap:whenVisible.from="{ x: -150, opacity: 0, duration: 1.2, ease: 'power2.out' }"
            class="text-gray-900 font-semibold text-2xl md:text-4xl lg:text-5xl font-title leading-tight"
          >
            Leading Industry
          </div>
          
          <!-- Date section - animates from right -->
          <div class="flex flex-col items-center space-y-2">
            <div 
              v-gsap:whenVisible.from="{ x: 150, opacity: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }"
              class="text-secondary text-lg md:text-2xl font-medium font-title"
            >
              since
            </div>
            <div 
              v-gsap:whenVisible.from="{ x: 200, opacity: 0, duration: 1.2, delay: 0.6, ease: 'power2.out' }"
              class="text-secondary text-6xl md:text-7xl lg:text-8xl font-extrabold font-title leading-none"
            >
              1984
            </div>
          </div>
        </div>
      </div>
    </el-col>
      <!-- <el-col :xs="24" :md="8" class="md:relative">
        <div
          class="bg-gray-100 md:p-6 flex justify-center items-center rounded-sm shadow-sm md:h-full md:absolute md:inset-0 md:w-[calc(100%+32px)] md:left-[-16px] bg-cover bg-center"
          :style="{
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }"
        >
          <section>
            <div v-gsap:whenVisible.from="{ x: -250, start: 'top bottom', end: 'bottom top', scrub: 1 }"
              class="text-gray-900 font-semibold text-lg md:text-6xl font-title">
              Leading Industry
            </div>
            <div class="text-secondary text-9xl md:text-10xl lg:text-10xl font-extrabold font-title"
              v-gsap:whenVisible.from="{ x: 250, start: 'top bottom', end: 'bottom top', scrub: 2 }">
              <p class="text-3xl">from</p> 1984
            </div>
          </section>
        </div>
      </el-col> -->
    </el-row>
  </section>
  
  <AboutServiceList v-if="showModal" :content="modalContent" @close="showModal = false" />
</template>

<script lang="ts" setup>
import AboutServiceList from '~/components/ui/AboutServiceList.vue';
import { ref } from 'vue';

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

const stats = [
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

// Tooltip methods
const showTooltip = (item:any, index:any) => {
  hoveredItem.value = item;
  hoveredIndex.value = index;
};

const hideTooltip = () => {
  hoveredItem.value = null;
  hoveredIndex.value = -1;
};

const openModal = (item:any) => {
  hideTooltip();
  modalContent.value = getModalContent(item.label);
  showModal.value = true;
};

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
const getModalContent = (label:any) => {
  // Your existing modal content mapping
  return {};
};
</script>

<style scoped>
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

.group:hover .rounded-full {
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .el-col-md-8 {
    overflow: visible !important;
  }
}
</style>
