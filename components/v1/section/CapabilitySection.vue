<script setup lang="ts">
import SectionHeader from '~/components/v2/ui/SectionHeader.vue';
import { ref, computed } from 'vue';

// Strengths Card Data
const strengths = ref([
  {
    title: 'Advanced Infrastructure',
    description: 'Cutting-edge facilities including automated production lines, specialized washing units, and integrated packaging solutions.',
    icon: 'fluent-mdl2:delivery-truck',
    linkText: 'Explore Facilities',
    badge: 'Innovation'
  },
  {
    title: 'Expert Workforce',
    description: '50,000+ skilled professionals with specialized training in textile manufacturing and quality control.',
    icon: 'mdi:worker',
    linkText: 'Meet Our Team',
    badge: 'Expertise'
  },
  {
    title: 'Sustainable Operations',
    description: 'LEED-certified facilities, water recycling systems, and eco-friendly materials reducing environmental impact.',
    icon: 'material-symbols:eco',
    linkText: 'Our Green Initiatives',
    badge: 'Eco-Friendly'
  },
  {
    title: 'Global Network',
    description: 'Strategic partnerships with 50+ international brands across North America, Europe, and Asia.',
    icon: 'mdi:earth',
    linkText: 'Our Global Reach',
    badge: 'Worldwide'
  }
]);

// Carousel Data
const products = ref([
  'ALL TYPES OF BOTTOMS AND TOPS',
  'HI-FASHION DENIM JEANS',
  'CRITICAL CARGOS',
  'BASIC & HIFASHION WASHES',
  'LASER FINISH / 3D WHISKER',
  'OVER DYEING OF GARMENTS',
  'WRINKLE FREE TECHNOLOGY',
  'MENS SHIRTS & DRESS PANTS',
  'OUTWEAR & JACKETS FACILITY',
  'CUSTOM CRITICAL WASHES',
  'PREMIUM DENIM FABRICS',
  'SUSTAINABLE PRODUCTION'
]);

const duplicatedProducts = computed(() => [...products.value, ...products.value]);
</script>

<template>
  <section class="w-full  px-4 md:px-24 py-4">
    <!-- Section Header -->
    <SectionHeader title="Our Core Strengths"
      subtitle="Driving Excellence Through Innovation, Quality, and Sustainable Practices" buttonTextLink="/#"
      buttonText="Discover Our Capabilities" />

    <!-- Strengths Section -->
    <div class="my-6">
      <div class="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        <!-- Cards Loop -->
        <div v-for="(card, index) in strengths" :key="index"
          class="relative group overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 border border-primary/15 min-h-320 flex flex-col">

          <!-- Corner Badge -->
          <div
            class="absolute top-8 -right-32 rounded-b-lg w-32 bg-pink-700 text-white text-sm font-bold py-1 text-center transform rotate-45 shadow-md transition-all duration-500 group-hover:-right-10 delay-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
            {{ card.badge }}
          </div>

          <!-- Card Content -->
          <div class="p-8 text-center flex-grow pb-16 group">
            <!-- Icon Section -->
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div
                class="absolute inset-0 border border-primary/30 group-hover:bg-primary rounded-xl group-hover:rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              <Icon :name="card.icon"
                class="relative group-hover:text-white text-primary text-3xl z-10 transition-all duration-500 group-hover:scale-110 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </div>

            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ card.title }}</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify mb-4">
              {{ card.description }}
            </p>
          </div>

          <!-- CTA Section with Fixed Wave Animation -->
          <div
            class="absolute group bottom-0 left-0 w-full h-16 overflow-hidden bg-primary/5 transition-all duration-500">
            <NuxtLink :to="card.linkText" class="group-hover:mouser-pointer">
              <div
                class="absolute bottom-0 left-0 w-full h-full bg-primary transition-all duration-500 transform origin-bottom translate-y-full group-hover:translate-y-0">
              </div>
              <div class="relative h-full flex items-center justify-center gap-2 px-8">
                <Icon name="mdi-arrow-right-bold-circle" size="26" class="text-primary group-hover:text-white text-lg transform -translate-x-28 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                         transition-all duration-500 delay-100 ease-out" />
                <span class="text-secondary font-semibold text-md group-hover:text-lg group-hover:tracking-widest tracking-wider group-hover:text-white 
                         transition-all duration-500 delay-100 ease-out">
                  {{ card.linkText }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Running Carousel -->
      <div class="relative overflow-hidden px-24 py-8">
        <div class="flex space-x-8 animate-marquee ">
          <div v-for="(product, index) in duplicatedProducts" :key="index"
            class="group flex-shrink-0 px-8 py-6 backdrop-blur-lg rounded-xl border border-primary/3 transform hover:scale-105 hover:bg-primary/15 transition-all duration-300 cursor-pointer bg-gray-50">
            <div class="flex items-center gap-4">
              <Icon name="mdi:star-shooting" class="text-primary group-hover:text-black text-2xl flex-shrink-0" />
              <span class="text-xl font-semibold text-primary group-hover:text-black">{{ product }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 50s linear infinite;
  min-width: 200%;
  will-change: transform;
}

.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* Fixed clip-path syntax for wave animation */
[clip-path] {
  transition-property: clip-path, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}

@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 25s;
  }

  .min-h-320 {
    min-height: 280px;
  }

  .absolute.top-8.-right-32 {
    top: 2rem;
    right: -8rem;
    width: 8rem;
    font-size: 0.75rem;
  }

  .text-2xl {
    font-size: 1.25rem;
  }

  .text-xl {
    font-size: 1rem;
  }
}
</style>