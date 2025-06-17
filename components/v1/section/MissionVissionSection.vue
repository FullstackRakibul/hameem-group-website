<template>
  <section class="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <!-- Geometric Background -->
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 md:px-2 py-16">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center space-x-3 mb-6">
          <div class="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <span class="text-sm font-semibold text-primary uppercase tracking-wider">Company Profile</span>
          <div class="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Our Vision & <span class="text-primary font-medium">Mission</span>
        </h1>
        
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {{ missionVisionData.description }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <!-- Left: Company Image & Stats -->
        <div class="space-y-8">
          <!-- Hero Image -->
          <div class="relative group">
            <div class="absolute  bg-gradient-to-r  from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-white rounded-3xl p-8  ">
              <img 
                src="~/assets/missionvission-sectionImage.png"
                alt="Ha-Meem Group Mission Vision"
                class="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <!-- Company Stats -->
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div class="text-3xl font-bold text-primary mb-2">25+</div>
              <div class="text-sm text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div class="bg-primary rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div class="text-3xl font-bold text-white mb-2">90K+</div>
              <div class="text-sm text-white font-medium">Employees Worldwide</div>
            </div>
          </div>
        </div>

        <!-- Right: Mission & Vision Cards -->
        <div class="space-y-12">
          <!-- Mission Section -->
          <div>
            <div class="flex items-center space-x-3 mb-8">
              <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <!-- Modern Minimalist Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                v-for="point in missionPoints" 
                :key="point.id"
                class="group relative bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-700 cursor-pointer overflow-hidden min-h-[200px] flex flex-col"
              >
                <!-- Subtle Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <!-- Top Icon Section -->
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 mx-auto">
                    <img 
                      :src="point.icon" 
                      :alt="point.title"
                      class="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </div>
                </div>
                
                <!-- Content Section -->
                <div class="relative text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-500">
                      {{ point.title }}
                    </h3>
                    <p class="text-gray-600 text-sm text-start line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      {{ point.description }}
                    </p>
                  </div>
                  
                  <!-- Bottom Action Indicator -->
                  <div class="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div class="inline-flex items-center space-x-2 text-primary text-sm font-medium">
                      <span>Learn More</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Corner Accent -->
                <div class="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          <!-- Vision Section -->
          <div>
            <div class="flex items-center space-x-3 mb-8">
              <div class="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            
            <!-- Modern Minimalist Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                v-for="point in visionPoints" 
                :key="point.id"
                class="group relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-secondary/20 transition-all duration-700 cursor-pointer overflow-hidden min-h-[200px] flex flex-col"
              >
                <!-- Subtle Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <!-- Top Icon Section -->
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-500 mx-auto">
                    <img 
                      :src="point.icon" 
                      :alt="point.title"
                      class="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </div>
                </div>
                
                <!-- Content Section -->
                <div class="relative text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-500">
                      {{ point.title }}
                    </h3>
                    <p class="text-gray-600 text-sm text-start line-clamp-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                      {{ point.description }}
                    </p>
                  </div>
                  
                  <!-- Bottom Action Indicator -->
                  <div class="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div class="inline-flex items-center space-x-2 text-secondary text-sm font-medium">
                      <span>Learn More</span>
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Corner Accent -->
                <div class="absolute top-4 right-4 w-3 h-3 bg-secondary/20 rounded-full group-hover:bg-secondary group-hover:scale-150 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Values Showcase -->
      <div class="bg-white rounded-xl p-8 md:p-4 ">
        <div class="text-center mb-12">
          <h2 class="text-primary uppercase font-light md:text-6xl mb-4">Core Values in Action</h2>
          <div class=" w-1/3 h-1 bg-primary mx-auto my-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Hover over each value to see how we implement it in our daily operations
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(point, index) in missionVisionData.points" 
            :key="point.id"
            class="group relative text-center"
          >
            <!-- Animated Icon Container -->
            <div class="relative mx-auto w-44 h-44 mb-6">
              <!-- Static Icon -->
              <div class="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <img 
                  :src="point.icon" 
                  :alt="point.title"
                  class="w-32 h-32 object-contain"
                />
              </div>
              
              <!-- Animated Icon (appears on hover) -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                <img 
                  :src="point.animatedImage" 
                  :alt="point.title"
                  class="w-32 h-32 object-contain brightness-0 invert"
                />
              </div>
              
              <!-- Pulse Effect -->
              <div class="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <div class="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-white group-hover:bg-primary group-hover:text-white rounded-full text-xs font-medium transition-all duration-300">
                <span>{{ point.category === 'mission' ? 'Mission' : 'Vision' }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {{ point.title }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {{ point.description }}
              </p>
            </div>

            <!-- Connecting Line (for larger screens) -->
            <div v-if="index < missionVisionData.points.length - 1" class="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-200 group-hover:bg-primary transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  bgImage: {
    type: String,
    default: "/assets/missionvissionsectionbg-abstruct.jpg",
  },
});

// Mission and Vision data
const missionVisionData = {
  title: "Our Vision & Mission",
  description: "Ha-Meem Group's mission is to provide quality products on time, while also aiming to eliminate poverty and promote industrialization, with a vision of becoming a leading wholesale clothing manufacturer in Bangladesh and globally.",
  points: [
    {
      id: 1,
      title: "Quality Products",
      description: "We deliver high-quality products on time, ensuring customer satisfaction and building long-term relationships with our clients worldwide.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-01.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/Quality-Products.gif" 
    },
    {
      id: 2,
      title: "Eliminate Poverty",
      description: "We're committed to creating employment opportunities and economic growth that helps eliminate poverty in our communities.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-02.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/poverty-animation.gif"
    },
    {
      id: 3,
      title: "Industrialization",
      description: "We strive to further industrialization through innovation, technology adoption, and sustainable manufacturing practices.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-03.png",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/industry-animation.gif"
    },
    {
      id: 4,
      title: "Leading Manufacturer",
      description: "Our vision is to be recognized as the leading clothing manufacturer in Bangladesh and a respected global player in the industry.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-04.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/Manufacturer-animation.gif"
    },
    {
      id: 5,
      title: "Industry Breakthrough",
      description: "We aim to achieve breakthrough innovations in the textile industry through research, development, and creative solutions.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-05.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/target-animation.gif"
    },
    {
      id: 6,
      title: "Employee Welfare",
      description: "We're dedicated to ensuring the educational advancement, financial security, and overall wellbeing of our employees.",
      icon: "assets/v1/section/mission-vision/hameem-group-mission-vission-img-06.png",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/education-animation.gif"
    }
  ]
};

// Computed properties to separate mission and vision points
const missionPoints = computed(() => 
  missionVisionData.points.filter(point => point.category === 'mission')
);

const visionPoints = computed(() => 
  missionVisionData.points.filter(point => point.category === 'vision')
);
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 1rem;
  }
}
</style>