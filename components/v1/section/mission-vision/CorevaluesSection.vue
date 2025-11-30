<template>
  <section class="relative w-full bg-gradient-to-br from-primary-200 via-gray-800 to-black overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-white-600/10 rounded-full blur-2xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s;"></div>
    </div>

    <div class="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <!-- Section header -->
      <div class="mb-16 md:mb-20" ref="headerRef" >
        <div
          class="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
          <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
          <span class="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">Our Foundation</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Core Values
        </h2>

        <p class="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
          Our core values define who we are, guiding every decision and action across our organization to drive
          excellence and positive impact.
        </p>
      </div>

      <!-- Values grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(value, index) in coreValues" :key="index" class="group relative h-full"
          :ref="el => valueCardsRefs[index] = el" :style="valueCardStyles[index]">
          <!-- Card container with hover effects -->
          <div
            class="relative h-full p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-white/10">
            <!-- Animated gradient background on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon -->
              <div class="mb-6 flex items-center justify-between">
                <div
                  class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-white/30">
                  {{ value.icon }}
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white font-bold text-xs border border-white/10">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {{ value.name }}
              </h3>

              <!-- Description -->
              <p
                class="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {{ value.description }}
              </p>

              <!-- Details list on hover -->
              <ul
                class="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                <li v-for="(detail, idx) in value.details" :key="idx"
                  class="flex items-start space-x-2 text-gray-300 text-sm">
                  <span class="text-blue-400 font-bold">→</span>
                  <span>{{ detail }}</span>
                </li>
              </ul>

              <!-- Hover indicator arrow -->
              <!-- <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg class="w-6 h-6 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </div> -->
            </div>

            <!-- Border animation -->
            <div
              class="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style="padding: 1px;"></div>
          </div>
        </div>
      </div>

      <!-- Additional info section -->
      <div
        class="mt-20 md:mt-28 p-8 md:p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500"
        ref="infoRef" :style="infoAnimStyle">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-start space-y-3">
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/50">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white">Driven by Purpose</h4>
            <p class="text-gray-400 text-sm">Every action aligned with our fundamental values and mission</p>
          </div>

          <div class="flex flex-col items-start space-y-3">
            <div
              class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/50">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white">Continuously Evolving</h4>
            <p class="text-gray-400 text-sm">Adapting and improving to meet global standards and expectations</p>
          </div>

          <div class="flex flex-col items-start space-y-3">
            <div
              class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/50">
              <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-white">Creating Value</h4>
            <p class="text-gray-400 text-sm">Delivering sustainable benefits to all stakeholders</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const headerRef = ref<HTMLElement | null>(null)
const valueCardsRefs = ref<Array<Element | ComponentPublicInstance | null>>([])
const infoRef = ref<HTMLElement | null>(null)

const headerAnimStyle = ref<Record<string, any>>({})
const infoAnimStyle = ref<Record<string, any>>({})

// Data
const coreValues = [
  {
    name: 'Innovation',
    icon: '💡',
    description: 'Driving continuous improvement and creative solutions through research and development',
    details: ['R&D Excellence', 'Technology Integration', 'Process Optimization']
  },
  {
    name: 'Quality',
    icon: '✓',
    description: 'Maintaining highest standards in all operations and deliverables',
    details: ['Quality Assurance', 'Process Control', 'Continuous Monitoring']
  },
  {
    name: 'Integrity',
    icon: '🤝',
    description: 'Building trust through honest and ethical practices in all business dealings',
    details: ['Transparency', 'Ethical Standards', 'Accountability']
  },
  {
    name: 'Excellence',
    icon: '⭐',
    description: 'Pursuing perfection in everything we do across all departments',
    details: ['Best Practices', 'Performance Metrics', 'Continuous Learning']
  },
  {
    name: 'Sustainability',
    icon: '🌍',
    description: 'Creating positive environmental and social impact in our operations',
    details: ['Green Initiatives', 'Community Care', 'Resource Efficiency']
  },
  {
    name: 'Collaboration',
    icon: '🔗',
    description: 'Working together as one team to achieve shared goals and vision',
    details: ['Team Spirit', 'Open Communication', 'Collective Success']
  },
  {
    name: 'Customer Focus',
    icon: '🎯',
    description: 'Putting customer needs at the center of our strategies and actions',
    details: ['Customer Satisfaction', 'Tailored Solutions', 'Proactive Support']
  },
  {
    name: 'Safety',
    icon: '🛡️',
    description: 'Ensuring a safe and healthy environment for all employees and stakeholders',
    details: ['Workplace Safety', 'Health Programs', 'Risk Management']
  }
]

// Create a reactive style object per card so we can update them later


const valueCardStyles = ref(
  coreValues.map(() => ({
    opacity: '0',
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease'
  }))
)

onMounted(() => {
  // Header animation
  headerAnimStyle.value = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease'
  }
  setTimeout(() => {
    headerAnimStyle.value = {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    }
  }, 100)

  infoAnimStyle.value = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease'
  }
  setTimeout(() => {
    infoAnimStyle.value = {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    }
  }, 500)

  // Stagger reveal for value cards
  valueCardStyles.value.forEach((_, i) => {
    const delay = i * 100 + 300 // ms
    setTimeout(() => {
      valueCardStyles.value[i] = {
        opacity: '1',
        transform: 'translateY(0)',
        transition: `opacity 0.6s ease ${delay / 1000}s, transform 0.6s ease ${delay / 1000}s`
      }
    }, delay)
  })
});
</script>