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
  },
  {
    title: 'Sustainable Operations',
    description: 'LEED-certified facilities, water recycling systems, and eco-friendly materials reducing environmental impact.',
    icon: 'material-symbols:eco',
    linkText: 'Our Green Initiatives',
  },
  {
    title: 'Global Network',
    description: 'Strategic partnerships with 50+ international brands across North America, Europe, and Asia.',
    icon: 'mdi:earth',
    linkText: 'Our Global Reach',
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
  <section class="w-full mx-auto px-4 md:px-24 py-4">
    <!-- Section Header -->
    <SectionHeader title="Our Core Strengths"
      subtitle="Driving Excellence Through Innovation, Quality, and Sustainable Practices" buttonTextLink="/#"
      buttonText="Discover Our Capabilities" />

    <!-- Strengths Section -->
    <div class="my-6">
      <div class="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        <!-- Cards Loop -->
        <div v-for="(card, index) in strengths" :key="index"
          class="relative group overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 border border-gray-200 min-h-[320px] flex flex-col">

          <!-- Card Content -->
          <div class="p-8 text-center flex-grow">
            <!-- Icon Section -->
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div
                class="absolute inset-0 bg-primary rounded-xl transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-500">
              </div>
              <Icon :name="card.icon"
                class="relative text-white text-3xl z-10 transition-transform duration-500 group-hover:scale-110" />
            </div>

            <!-- Title & Description -->
            <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ card.title }}</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify">
              {{ card.description }}
            </p>
          </div>

          <!-- CTA Section (Fixed at Bottom) -->
          <div
            class="absolute bottom-0 left-0 w-full bg-transparent transition-all duration-500 group-hover:bg-primary group-hover:text-white py-4">
            <NuxtLink :to="card.linkText">
              <div
                class="flex items-center justify-center gap-2 transform transition-all duration-500 group-hover:translate-x-0 group-hover:scale-110">
                <Icon name="mdi:arrow-right"
                  class="text-primary group-hover:text-white text-lg group-hover:text-2xl transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0" />
                <span class="text-secondary font-semibold text-md tracking-wide group-hover:text-white">
                  {{ card.linkText }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Running Carousel -->
      <div class="relative overflow-hidden px-24 py-8">
        <div class="flex space-x-8 animate-marquee">
          <div v-for="(product, index) in duplicatedProducts" :key="index"
            class=" group hover:bg-primary/15 flex-shrink-0 px-8 py-6 backdrop-blur-lg rounded-xl border border-primary/3 transform hover:scale-105  transition-all duration-300 cursor-pointer ">
            <div class="flex items-center gap-4 ">
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


/* Improved corner badge */
.absolute.top-4.-right-10 {
  background-color: var(--primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Smooth transitions */
.group-hover\:translate-y-0 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-marquee {
  animation: marquee 50s linear infinite;
  min-width: 200%;
  will-change: transform;
}

/* Stop animation on hover */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* Smooth hover effect */
.marquee-item {
  transition: transform 0.3s ease-in-out;
}

.marquee-item:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 25s;
  }

  /* Enhanced centering for icons */
  .relative.w-20.h-20 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Smooth hover transitions */
  .card-hover {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}
</style>