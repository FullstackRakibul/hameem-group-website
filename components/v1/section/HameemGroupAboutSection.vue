<template>
  <section class="relative w-full overflow-hidden bg-white">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10 container mx-auto px-6 pt-24 pb-16">
      <div class="flex flex-col items-center justify-center text-center mb-16">
        <!-- Company Intro -->
        <div class="inline-flex items-center space-x-3 mb-4">
          <div class="w-12 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Since 1984</span>
          <div class="w-12 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full"></div>
        </div>
        
        <h1 
          class="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }"
        >
          <span class="text-primary font-medium">Ha-Meem</span> Group
        </h1>
        
        <div 
          class="w-24 h-1 bg-primary mx-auto mb-8"
          v-motion
          :initial="{ opacity: 0, scaleX: 0 }"
          :enter="{ opacity: 1, scaleX: 1, transition: { delay: 0.6, duration: 0.5 } }"
        ></div>
        
        <p 
          class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 0.8, duration: 0.8 } }"
        >
          From a single garment factory in 1984 to one of Bangladesh's largest exporters with 75,000 employees and an annual turnover of 925 million USD. Operating 450 production lines with a monthly capacity of 9.5 million garments, we deliver excellence through state-of-the-art facilities in denim, spinning, and woven textiles.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-5 gap-12 items-start">
        <!-- Left: Company Journey -->
        <div 
          class="lg:col-span-2 order-2 lg:order-1"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 } }"
        >
          <!-- Timeline Journey -->
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
              <div 
                v-for="(milestone, index) in milestones" 
                :key="index"
                class="relative pl-20"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 0.2 * index, duration: 0.6 } }"
              >
                <!-- Timeline Dot -->
                <div class="absolute left-7 top-1 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></div>
                
                <!-- Year Bubble -->
                <div class="absolute left-0 top-0 flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-lg">
                  <span class="text-lg font-bold">{{ milestone.year }}</span>
                </div>
                
                <!-- Content -->
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ milestone.title }}</h3>
                  <p class="text-gray-600">{{ milestone.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Company Values -->
          <div class="mt-16 bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
            
            <div class="space-y-4">
              <div 
                v-for="(value, index) in companyValues" 
                :key="index"
                class="flex items-start space-x-4"
                v-motion
                :initial="{ opacity: 0, x: -20 }"
                :enter="{ opacity: 1, x: 0, transition: { delay: 0.1 * index, duration: 0.5 } }"
              >
                <div class="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <component :is="value.icon" class="w-5 h-5 text-primary" />
                </div>
                
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ value.title }}</h3>
                  <p class="text-sm text-gray-600">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right: Capabilities Showcase -->
        <div 
          class="lg:col-span-3 order-1 lg:order-2"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 } }"
        >
          <!-- Stats Banner -->
          <div class="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 mb-12 text-white shadow-lg">
            <div class="grid grid-cols-3 gap-6">
              <div 
                v-for="(stat, index) in keyStats" 
                :key="index"
                class="text-center"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { delay: 0.2 * index, duration: 0.6 } }"
              >
                <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
                <div class="text-sm font-medium opacity-80">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          
          <!-- Capabilities Grid -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span class="w-8 h-1 bg-primary mr-4"></span>
              Our Capabilities
            </h2>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div 
                v-for="(capability, index) in capabilities" 
                :key="index"
                class="group relative"
                v-motion
                :initial="{ opacity: 0, scale: 0.9 }"
                :enter="{ opacity: 1, scale: 1, transition: { delay: 0.1 * index, duration: 0.5 } }"
              >
                <!-- Card -->
                <div 
                  class="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden"
                  @mouseenter="activeCapability = capability"
                  @mouseleave="activeCapability = null"
                >
                  <!-- Icon Container -->
                  <div class="mb-6 relative">
                    <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <img 
                        :src="capability.image" 
                        :alt="capability.label"
                        class="w-10 h-10 object-contain transition-all duration-300"
                      />
                    </div>
                    
                    <!-- Animated Indicator -->
                    <div class="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
                  </div>
                  
                  <!-- Content -->
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {{ capability.label }}
                    </h3>
                    <p class="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {{ capability.description }}
                    </p>
                  </div>
                  
                  <!-- Hover Details -->
                  <div class="mt-4 pt-4 border-t border-gray-100 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                    <ul class="space-y-2">
                      <li 
                        v-for="(item, idx) in capability.details" 
                        :key="idx"
                        class="flex items-start space-x-2"
                      >
                        <div class="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        </div>
                        <span class="text-xs text-gray-600">{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Banner -->
    <div 
      class="relative mt-16 bg-cover bg-center py-24 text-white"
      :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` }"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1, duration: 1 } }"
    >
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-light mb-6">Leading the Industry <span class="font-bold">Since 1984</span></h2>
        <p class="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          We're committed to excellence, innovation, and sustainability in everything we do.
        </p>
        <button class="px-8 py-3 bg-white text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
          Learn More About Our Journey
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Props
defineProps({
  bgImage: {
    type: String,
    default: "/assets/v1/raise-chart.gif",
  },
});

// Active capability for interactive display
const activeCapability = ref(null);

// Company milestones
const milestones = [
  {
    year: '1984',
    title: 'Humble Beginnings',
    description: 'Started with a single garment factory, laying the foundation for future growth.'
  },
  {
    year: '1995',
    title: 'Expansion Phase',
    description: 'Expanded operations with additional production lines and international partnerships.'
  },
  {
    year: '2005',
    title: 'Vertical Integration',
    description: 'Established denim and textile mills, creating a fully integrated manufacturing ecosystem.'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Reached 925 million USD annual turnover with 75,000 employees and 450 production lines.'
  }
];

// Company values
const companyValues = [
  {
    title: 'Quality Excellence',
    description: 'Unwavering commitment to the highest standards in every product we create.',
    icon: 'svg-star'
  },
  {
    title: 'Sustainable Practices',
    description: 'Environmentally responsible manufacturing with reduced carbon footprint.',
    icon: 'svg-leaf'
  },
  {
    title: 'Innovation Focus',
    description: 'Continuously embracing new technologies and methods to stay ahead.',
    icon: 'svg-lightbulb'
  },
  {
    title: 'Community Impact',
    description: 'Creating opportunities and supporting the communities where we operate.',
    icon: 'svg-users'
  }
];

// Key statistics
const keyStats = [
  { value: '75K+', label: 'Employees' },
  { value: '450', label: 'Production Lines' },
  { value: '9.5M', label: 'Monthly Capacity' }
];

// Company capabilities
const capabilities = [
  {
    image: '/assets/v1/section/about/garmentys.png',
    label: 'Vertical Capacity',
    description: 'Fully integrated manufacturing ecosystem from yarn to finished garments.',
    details: [
      'Denim Mill: 5.5M yards/month',
      'Woven Mill: 2.5M yards/month',
      'Spinning: 1400 tons capacity'
    ]
  },
  {
    image: '/assets/v1/section/about/AUTOMATION.png',
    label: 'Automation',
    description: 'Cutting-edge automated systems for precision, efficiency and quality.',
    details: [
      'Auto Cutters with minimal waste',
      'CAD Software for optimal patterns',
      'Auto Pocket Setters for consistency'
    ]
  },
  {
    image: '/assets/v1/section/about/Digitalization-.png',
    label: 'Digitalization',
    description: 'Digital transformation across all operations for enhanced productivity.',
    details: [
      'SAP/ERP Integration',
      'GSD Software for time standards',
      'Higg Index for sustainability metrics'
    ]
  },
  {
    image: '/assets/v1/section/about/in-house.png',
    label: 'In-House Facilities',
    description: 'Self-sufficient infrastructure ensuring quality control and timely delivery.',
    details: [
      '2 Accredited Testing Labs',
      '42 MW Power Generation',
      '300KW Solar Energy System'
    ]
  },
  {
    image: '/assets/v1/section/about/join.png',
    label: 'Joint Ventures',
    description: 'Strategic partnerships expanding our capabilities and global reach.',
    details: [
      'Outerwear: 150K pieces/month',
      'Established October 2023',
      'International collaborations'
    ]
  },
  {
    image: '/assets/v1/section/about/RO.png',
    label: 'Enriching Service',
    description: 'Comprehensive solutions from design to delivery for global clients.',
    details: [
      'DDP Business Structure',
      'New York Office for client service',
      'Design Team of 30 professionals'
    ]
  }
];
</script>

<script>
// SVG Icon Components
export default {
  components: {
    'svg-star': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      `
    },
    'svg-leaf': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      `
    },
    'svg-lightbulb': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      `
    },
    'svg-users': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `
    }
  }
}
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-none {
  -webkit-line-clamp: unset;
  display: block;
}

/* Animation keyframes */
@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 2;
  }
}
</style>