<script setup lang="ts">
import SectionHeader from '~/components/v2/ui/SectionHeader.vue';
import { ref, computed } from 'vue';

const strengths = ref([
  {
    title: 'Global Apparel Expansion',
    description: 'Launching a cutting-edge garments factory to enhance production capacity and meet global demand.',
    icon: 'mdi:earth',
    linkText: 'New Garments Factory 2024',
    linkTo:'/#',
    badge: 'Worldwide',
    image: '/assets/v1/section/ExpansionPlan/NEWGARMENTS1.jpeg'
  },
  {
    title: 'Water Treatment Excellence',
    description: 'State-of-the-art RO Plant ensuring sustainable water purification and recycling for optimized resource use in manufacturing.',
    icon: 'mdi:water-outline',
    linkText: 'RO Plant 2024',
    linkTo:'/#',
    badge: 'Worldwide',
    image: '/assets/v1/section/ExpansionPlan/ROPLANT.jpg'
  },
  {
    title: 'Denim Innovation Hub',
    description: 'A next-generation denim mill focused on sustainable fabrics, efficient dyeing, and smart finishing.',
    icon: 'fluent-mdl2:delivery-truck',
    linkText: 'New Denim Mill 2026',
    linkTo:'/#',
    badge: 'Innovation',
    image: '/assets/v1/section/ExpansionPlan/NEWDENIMMILL.webp'
  },
  {
    title: 'Precision Yarn Production',
    description: 'Advanced spinning facilities engineered for high-quality yarns with reduced waste and energy use.',
    icon: 'mdi:worker',
    linkText: 'New Spinning Mill 2027',
    linkTo:'/#',
    badge: 'Expertise',
    image: '/assets/v1/section/ExpansionPlan/SpinningMill.jpg'
  },
  {
    title: 'Strategic Supply Chain',
    description: 'Integrated sourcing and warehousing facilities designed for streamlined logistics and distribution.',
    icon: 'material-symbols:eco',
    linkText: 'Sourcing & Ware House',
    linkTo:'/#',
    badge: 'Eco-Friendly',
    image: '/assets/v1/section/ExpansionPlan/WareHouse.webp'
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
  <section id="expansionPlan" class="w-full px-4 md:px-24 py-12">
    <SectionHeader 
      title="Expansion Plan"
      subtitle="Driving Excellence Through Innovation, Quality, and Sustainable Practices" 
      buttonTextLink="/#"
      buttonText="Discover Our Capabilities" 
    />

    <!-- Strengths Section -->
    <div class="mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="(card, index) in strengths" :key="index"
          class="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 overflow-hidden flex flex-col h-[360px] border-primary/30">
          
          <!-- Card Image -->
          <div class="h-48 overflow-hidden">
            <img 
              :src="card.image" 
              :alt="card.title"
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          
          <!-- Card Content -->
          <div class="p-5 flex flex-col flex-grow">
            <!-- Badge -->
            <span class="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-3 self-start">
              {{ card.badge }}
            </span>
            
            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ card.title }}</h3>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {{ card.description }}
            </p>
            
            <!-- Button -->
            <NuxtLink 
              :to="card.linkTo" 
              class="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium group"
            >
              <span>{{ card.linkText }}</span>
              <Icon 
                name="mdi:arrow-right" 
                size="18" 
                class="transform transition-transform duration-300 group-hover:translate-x-1" 
              />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Products Carousel with Images -->
      <div class="relative overflow-hidden mt-20 mb-10 md:pb-6">
        <h3 class="text-6xl font-bold text-center mb-8 text-gray-800">Our Production Capabilities</h3>
        <div class="flex space-x-8 animate-marquee px-4">
          <div v-for="(product, index) in duplicatedProducts" :key="index"
            class="group flex-shrink-0 transition-all duration-300  cursor-pointer">
            <div class="flex flex-row items-center md:mt-10 bg-slate-600/5 p-2  rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              <div class=" h-20 w-20 md:h-20 md:w-20 overflow-hidden border  border-primary/70 rounded-full transition-all duration-300 group-hover:shadow-lg">
                <img
                  :src="product.image || fallbackImage"
                  :alt="product.name"
                  class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div class="ml-4 text-left">
                <span class="text-2xl md:text-2xl px-10 font-bold text-gray-700 group-hover:text-primary transition-colors duration-300">
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
  animation: marquee 30s linear infinite;
  min-width: 200%;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 40s;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Line clamp for description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
