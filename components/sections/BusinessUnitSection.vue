<template>
  <section class="w-full bg-gray-100 py-20">
    <!-- Section Title -->
    <div class="text-center mb-6">
      <p class="text-sm text-primary font-semibold tracking-wide">Our Business Units</p>
      <h2 class="text-4xl font-bold text-gray-800">Explore Our Diverse Business Ventures</h2>
    </div>

    <!-- Carousel Container -->
    <div class="mx-auto px-4">
      <el-carousel
        
        :interval="5000"
        :autoplay="true"
        type="card" 
        height="500px"
        indicator-position="outside"
      >
        <el-carousel-item v-for="(unit, index) in businessUnits" :key="index">
          <div class="flex justify-center items-center p-4 h-full">
            <!-- Business Unit Card -->
            <div
              class="w-full h-full bg-white shadow-md rounded-md overflow-hidden flex flex-col hover:shadow-lg transition duration-300"
            >
              <!-- Background Image -->
              <div
                class="bg-cover bg-center h-2/3"
                :style="{ backgroundImage: `url('${unit.link}')` }"
              ></div>
              <!-- Content -->
              <div class="p-4 flex flex-col justify-between items-center text-center">
                <h3 class="text-lg font-bold text-gray-800">{{ unit.name }}</h3>
                <p class="text-sm text-gray-500">{{ unit.description }}</p>
                <!-- Button with Hover Effect -->
                <button
                  class="mt-3 px-4 py-2 bg-primary text-white font-semibold rounded-full flex items-center group hover:bg-secondary transition-all"
                >
                  <el-icon class="mr-1">
                   <Icon name="teenyicons:eye-outline"/>
                  </el-icon>
                  <span class="">
                    Explore
                  </span>
                </button>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>



<script setup lang="ts">
import { ref } from 'vue';
//import Eye from '@element-plus/icons-vue';


const businessUnits = [
  { name: "Apparel Gallery Ltd.", description: "Garment manufacturing", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Artistic Design Ltd.", description: "Design and creativity", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Bango Engineering Company Ltd.", description: "Engineering solutions", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "Bright Wash Ltd.", description: "Premium washing services", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Creative Collections Ltd.", description: "Fashion collections", link: "/assets/businessUnitImage/BusinessUnitImage--006.jpg" },
  { name: "Creative Wash Ltd.", description: "Innovative garment washing", link: "/assets/businessUnitImage/BusinessUnitImage--005.jpg" },
  { name: "Express Washing & Dyeing Limited", description: "Dyeing and washing", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Fauji Chat Kal Limited", description: "Jute products", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Ha-Meem Apparels Limited", description: "Leading apparel solutions", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "Ha-Meem Design Limited", description: "Design expertise", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Ha-Meem Denim Limited", description: "High-quality denim production", link: "/assets/businessUnitImage/BusinessUnitImage--006.jpg" },
  { name: "M. H. Jute Mills Limited", description: "Jute mill production", link: "/assets/businessUnitImage/BusinessUnitImage--005.jpg" },
  { name: "Modern Cargo Carrier Limited", description: "Logistics and cargo services", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Next Collections Ltd.", description: "Next-gen fashion collections", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Nishat Packaging & Printing Ind. Ltd.", description: "Packaging and printing solutions", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "Refat Garments Ltd.", description: "Garment manufacturing", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Refat Packaging & Printing Industries Ltd.", description: "Custom packaging services", link: "/assets/businessUnitImage/BusinessUnitImage--006.jpg" },
  { name: "Sajid Washing & Dyeing Ltd", description: "Washing and dyeing services", link: "/assets/businessUnitImage/BusinessUnitImage--005.jpg" },
  { name: "Sakib Poly Industries Ltd.", description: "Polymer manufacturing", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Sylhet Planters Ltd.", description: "Tea plantation", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "That's It Fashions Ltd.", description: "Fashion-forward garments", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "That's It Garments Ltd.", description: "Garment production", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "That's It Knit Ltd.", description: "Knitted garments", link: "/assets/businessUnitImage/BusinessUnitImage--006.jpg" },
  { name: "That's It Sports Wear Ltd.", description: "Sportswear manufacturing", link: "/assets/businessUnitImage/BusinessUnitImage--005.jpg" },
  { name: "That's It Sweater Ltd.", description: "Sweater production", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Times Media Ltd.", description: "Media and publishing", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Nishat Jute Mills Ltd.", description: "Jute mill operations", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "Ha-Meem Spinning Mills Limited", description: "Spinning mill expertise", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Modern Washing And Dyeing Ind. Ltd.", description: "Advanced washing and dyeing", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Explore Garments Ltd.", description: "Fashion and garment production", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Shahzaib Washing & Dyeing Limited", description: "Quality washing and dyeing", link: "/assets/businessUnitImage/BusinessUnitImage--006.jpg" },
  { name: "Casual Garments Ltd.", description: "Casual clothing production", link: "/assets/businessUnitImage/BusinessUnitImage--005.jpg" },
  { name: "Ha-Meem Textiles Limited", description: "Textile manufacturing", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Muslim Cotton Mills Limited", description: "Cotton mills", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Humana Apparels (Pvt) Ltd.", description: "Human-centric apparel", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "Nishat Central Project", description: "Centralized textile projects", link: "/assets/businessUnitImage/BusinessUnitImage--001.jpg" },
  { name: "Channel 24", description: "TV news channel", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
  { name: "Rotor Unit", description: "Specialized rotor production", link: "/assets/businessUnitImage/BusinessUnitImage--002.jpg" },
  { name: "That`s It Embroidery And Accessories", description: "Embroidery solutions", link: "/assets/businessUnitImage/BusinessUnitImage--003.jpg" },
  { name: "Ha-Meem Textile Zone", description: "Textile zone excellence", link: "/assets/businessUnitImage/BusinessUnitImage--004.jpg" },
];



// Control the carousel behavior
const alwaysShowArrows = ref(true);

const onExploreClick = (unitName: string) => {
  console.log(`Explore button clicked for: ${unitName}`);
};
</script>
<style scoped>
/* Ensure responsiveness of the carousel slides */
.business-units-carousel .el-carousel__item {
  flex: 0 0 auto; /* Prevent shrinking or expanding */
}

/* Add spacing for desktop and mobile views */
@media (min-width: 768px) {
  .business-units-carousel .el-carousel__item {
    width: calc(100% / 6); /* 6 items per slide */
  }
}

@media (max-width: 768px) {
  .business-units-carousel .el-carousel__item {
    width: calc(100% / 2); /* 2 items per slide */
  }
}
</style>