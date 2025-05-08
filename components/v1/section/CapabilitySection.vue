<script setup lang="ts">
import SectionHeader from '~/components/v2/ui/SectionHeader.vue';
import { ref, computed } from 'vue';

const strengths = ref([
  {
    title: 'Global Apparel Expansion',
    description: 'Launching a cutting-edge garments factory to enhance production capacity and meet global demand.',
    icon: 'mdi:earth',
    linkText: 'New Garments Factory 2024',
    badge: 'Worldwide'
  },
  {
    title: 'Water Treatment Excellence',
    description: 'State-of-the-art RO Plant ensuring sustainable water purification and recycling for optimized resource use in manufacturing.',
    icon: 'mdi:water-outline',
    linkText: 'RO Plant 2024',
    badge: 'Worldwide'
  },
  {
    title: 'Denim Innovation Hub',
    description: 'A next-generation denim mill focused on sustainable fabrics, efficient dyeing, and smart finishing.',
    icon: 'fluent-mdl2:delivery-truck',
    linkText: 'New Denim Mill 2026',
    badge: 'Innovation'
  },
  {
    title: 'Precision Yarn Production',
    description: 'Advanced spinning facilities engineered for high-quality yarns with reduced waste and energy use.',
    icon: 'mdi:worker',
    linkText: 'New Spinning Mill 2027',
    badge: 'Expertise'
  },
  {
    title: 'Strategic Supply Chain',
    description: 'Integrated sourcing and warehousing facilities designed for streamlined logistics and distribution.',
    icon: 'material-symbols:eco',
    linkText: 'Sourcing & Ware House',
    badge: 'Eco-Friendly'
  }
]);

// Updated products with images
const products = ref([
  {
    name: 'Garments Factory',
    image: 'assets/v1/section/capabilities/garments-factory.gif'
  },
  {
    name: 'Sweater Factory',
    image: 'assets/v1/section/capabilities/sweater-factory.gif'
  },
  {
    name: 'Washing Plant',
    image: 'assets/v1/section/capabilities/WashingPlant.webp'
  },
  {
    name: 'Automated Machine',
    image: 'assets/v1/section/capabilities/AutomatedMachine.gif'
  },
  {
    name: 'Embroidery',
    image: 'assets/v1/section/capabilities/Embroidery.gif'
  },
  {
    name: 'Printing',
    image: 'assets/v1/section/capabilities/Printing.gif'
  },
  {
    name: 'Re-Cycle Plant',
    image: 'assets/v1/section/capabilities/Re-CyclePlant.gif'
  },
  {
    name: 'Fabric Printing Plant',
    image: 'assets/v1/section/capabilities/FabricPrintingPlant.gif'
  },
  {
    name: 'Laser Machine',
    image: 'assets/v1/section/capabilities/LaserMachine.gif'
  },
  {
    name: 'In-House Accessories',
    image: 'assets/v1/section/capabilities/In-HouseAccessories.gif'
  },
  {
    name: 'Solar Plant',
    image: 'assets/v1/section/capabilities/SolarPlant.gif'
  }
]);

// Fallback image for products that might have missing images
const fallbackImage = 'assets/v1/section/capabilities/garments-factory.gif';

const duplicatedProducts = computed(() => [...products.value, ...products.value]);
</script>

<template>
  <section class="w-full px-4 md:px-24 py-2">
    <SectionHeader 
      title="Expansion Plan"
      subtitle="Driving Excellence Through Innovation, Quality, and Sustainable Practices" 
      buttonTextLink="/#"
      buttonText="Discover Our Capabilities" 
    />

    <!-- Strengths Section -->
    <div class="m-2">
      <div class="flex  justify-center gap-3 ">
        <div v-for="(card, index) in strengths" :key="index"
          class="group relative bg-white rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 border border-primary/15 min-h-320 w-full sm:w-1/2 lg:w-1/5 flex flex-col overflow-hidden">
          
          <!-- Badge - Positioned inside the card with transform -->
          <div class="absolute top-4 right-0 w-32 overflow-hidden">
            <div class="bg-primary text-white text-xs font-bold py-1 text-center transform translate-x-full rotate-45 origin-left group-hover:translate-x-0 transition-transform duration-500 shadow-md">
              {{ card.badge }}
            </div>
          </div>

          <div class="p-6 text-center flex-grow pb-16 group">
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div class="absolute inset-0 border border-primary/30 group-hover:bg-primary rounded-xl group-hover:rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              <Icon :name="card.icon"
                class="relative group-hover:text-white text-primary text-3xl z-10 transition-all duration-500 group-hover:scale-110 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ card.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              {{ card.description }}
            </p>
          </div>

          <div class="absolute bottom-0 left-0 w-full h-14 overflow-hidden bg-primary/15 transition-all duration-500">
            <NuxtLink :to="card.linkText" class="group-hover:mouser-pointer">
              <div class="absolute bottom-0 left-0 w-full h-full bg-primary rounded-b-xl transition-all duration-500 transform origin-bottom translate-y-full group-hover:translate-y-0"></div>
              <div class="relative h-full flex items-center justify-center gap-2 px-4">
                <Icon name="mdi:arrow-right-bold-circle" size="20" class="text-primary group-hover:text-white transform -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out" />
                <span class="text-secondary font-medium text-sm group-hover:text-white transition-all duration-500 delay-100 ease-out whitespace-nowrap">
                  {{ card.linkText }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Products Carousel with Images -->
      <div class="relative overflow-hidden mt-16 mb-8 pb-4">
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">Our Production Capabilities</h3>
        <div class="flex space-x-6 animate-marquee  px-4">
          <div v-for="(product, index) in duplicatedProducts" :key="index"
            class="group flex-shrink-0 rounded-xl border  border-primary/70 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white overflow-hidden">
            <div class="flex flex-row items-center bg-primary/10">
              <!-- Image container with fixed dimensions -->
              <div class=" h-16 overflow-hidden ">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <!-- Product name -->
              <div class="w-full p-4 text-center">
                <span class="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {{ product.name }}
                </span>
              </div>
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
  animation: marquee 20s linear infinite;
  min-width: 200%;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .min-h-320 {
    min-height: 340px;
  }
}

@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 30s;
  }
}
</style>
