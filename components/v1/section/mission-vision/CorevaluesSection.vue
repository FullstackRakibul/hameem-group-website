<template>
  <section class="relative w-full bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
    <!-- Particle Background -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="particles-container">
        <div v-for="i in 30" :key="i" class="particle" :style="particleStyles[i - 1]"></div>
      </div>
    </div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s;"></div>
    </div>

    <div class="z-10 max-w-7xl mx-4 mx-auto sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <!-- Section header -->
      <div class="mb-12 px-6 md:mb-20" ref="headerRef" :style="headerAnimStyle">
        <div
          class="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md px-4 py-2 rounded-full border border-blue-200 shadow-lg mb-6">
          <span class="w-2 h-2 bg-primary rounded-full"></span>
          <span class="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">Our Foundation</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Core Values
        </h2>

        <p class="text-gray-700 text-lg md:text-xl max-w-3xl leading-relaxed">
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
            class="relative h-full p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-200/50">
            <!-- Animated gradient background on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon -->
              <div class="mb-6 flex items-center justify-between">
                <div
                  class="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 border border-blue-200 group-hover:border-blue-300 shadow-md">
                  {{ value.icon }}
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {{ value.name }}
              </h3>

              <!-- Description -->
              <p
                class="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {{ value.description }}
              </p>

              <!-- Details list on hover -->
              <ul
                class="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                <li v-for="(detail, idx) in value.details" :key="idx"
                  class="flex items-start space-x-2 text-gray-700 text-sm">
                  <span class="text-blue-600 font-bold">→</span>
                  <span>{{ detail }}</span>
                </li>
              </ul>


            </div>

            <!-- Border animation -->
            <div
              class="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              style="padding: 1px;"></div>
          </div>
        </div>
      </div>

      <!-- Additional info section -->
      <div
        class="mt-20 m-4 md:mt-28 p-8 md:p-12 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-xl rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-500 shadow-lg"
        ref="infoRef" :style="infoAnimStyle">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-start space-y-3">
            <div
              class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 shadow-md">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-gray-900">Driven by Purpose</h4>
            <p class="text-gray-700 text-sm">Every action aligned with our fundamental values and mission</p>
          </div>

          <div class="flex flex-col items-start space-y-3">
            <div
              class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 shadow-md">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-gray-900">Continuously Evolving</h4>
            <p class="text-gray-700 text-sm">Adapting and improving to meet global standards and expectations</p>
          </div>

          <div class="flex flex-col items-start space-y-3">
            <div
              class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 shadow-md">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-gray-900">Creating Value</h4>
            <p class="text-gray-700 text-sm">Delivering sustainable benefits to all stakeholders</p>
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

// Particle effects
const particleStyles = ref<Array<Record<string, string>>>([])

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

// Generate particle styles
const generateParticles = () => {
  const particles = []
  for (let i = 0; i < 30; i++) {
    particles.push({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 5 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      animationDelay: `${Math.random() * 20}s`,
      opacity: `${Math.random() * 0.8 + 0.1}`
    })
  }
  particleStyles.value = particles
}

onMounted(() => {
  generateParticles()

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

<style scoped>
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: linear-gradient(135deg, #ff0077, #8b5cf6);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.5;
  }

  90% {
    opacity: 0.8;
  }

  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
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

/* Backdrop blur support */
@supports (backdrop-filter: blur(8px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>