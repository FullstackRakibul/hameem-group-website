<template>
  <div class="bg-white min-h-screen">
    <!-- Header Section -->
    <div class="bg-white py-8 px-6">
      <div class="max-w-screen-2xl mx-auto">
        <!-- Company Logo and Title -->
        <div class="flex items-center justify-center mb-8">
          <div class="bg-gradient-to-r from-amber-800 to-amber-600 text-white px-6 py-3 rounded-lg mr-4">
            <img src="https://textilepages.com/public/profile/1593836298-img1-logo.png" alt="Ha-Meem Group" height="80"
              class="h-20 w-auto">
          </div>
          <div class="flex-1">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1857a3] tracking-wide">
              LEADING WHOLESALE CLOTHING MANUFACTURER IN THE WORLD
            </h1>
            <div class="w-full h-1 bg-[#1857a3] mt-2 rounded"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="max-w-screen-2xl mx-auto px-4 py-2">
      <div class="grid lg:grid-cols-5 gap-6 items-start">

        <!-- Left Side - Statistics Grid (3/5 width) -->
        <div class="lg:col-span-3">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <!-- Statistics Cards -->
            <div v-for="(stat, index) in statisticsData" :key="index"
              class="bg-white border-2 border-gray-300 rounded-xl p-3 flex items-center hover:shadow-lg transition-shadow">
              <div class="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-3 flex items-center justify-center flex-shrink-0">
                <img :src="stat.icon" :alt="stat.label" class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain">
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-lg md:text-xl lg:text-xl font-bold text-[#1857a3] truncate" v-html="stat.value"></div>
                <div class="text-xs font-semibold text-gray-600 uppercase leading-tight">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="py-3" >
            <P>
              <strong class="text-red-900" >*</strong> These data have been provided on an annual basis.
            </P>
          </div>
        </div>

        <!-- Right Side - Main Slider (2/5 width) -->
        <div class="lg:col-span-2">
          <div class="relative bg-white rounded-xl overflow-hidden shadow-lg">
            <!-- Main Slider -->
            <div class="relative h-64 md:h-80 lg:h-96 overflow-hidden">
              <div class="flex transition-transform duration-500 ease-in-out h-full"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(slide, index) in mainSliderImages" :key="index" class="w-full h-full flex-shrink-0">
                  <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover">
                </div>
              </div>

              <!-- Slider Navigation -->
              <button @click="previousSlide"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button @click="nextSlide"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <!-- Slide Indicators -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button v-for="(slide, index) in mainSliderImages" :key="index" @click="currentSlide = index" :class="['w-3 h-3 rounded-full transition-all',
                  currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50']">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12">

          <!-- Our Customers Carousel -->
          <div class="relative">
            <div class="rounded-xl p-2 md:p-4">
              <h2 class="text-2xl md:text-3xl font-bold text-[#1857a3] text-center mb-8">OUR CUSTOMER</h2>

              <!-- Customer Carousel -->
              <div class="relative overflow-hidden">
                <div class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: `translateX(-${currentCustomerSlide * 100}%)` }">
                  <div v-for="(customerGroup, groupIndex) in customerGroups" :key="groupIndex"
                    class="w-full flex-shrink-0">
                    <div class="flex items-center justify-center space-x-4 md:space-x-8 flex-wrap gap-2">
                      <img v-for="customer in customerGroup" :key="customer.name" :src="customer.src"
                        :alt="customer.name"
                        class="h-8 md:h-12 object-contain hover:grayscale-0 transition-all cursor-pointer" />
                    </div>
                  </div>
                </div>

                <!-- Customer Navigation -->
                <button @click="previousCustomer"
                  class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1857a3] text-white p-2 md:p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button @click="nextCustomer"
                  class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1857a3] text-white p-2 md:p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Certifications Carousel -->
          <div class="relative">
            <div class="rounded-xl p-2 md:p-4">
              <h2 class="text-2xl md:text-3xl font-bold text-[#1857a3] text-center mb-8">ACCREDITATIONS & CERTIFICATIONS
              </h2>

              <!-- Certificate Carousel -->
              <div class="relative overflow-hidden">
                <div class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: `translateX(-${currentCertificateSlide * 100}%)` }">
                  <div v-for="(certGroup, groupIndex) in certificateGroups" :key="groupIndex"
                    class="w-full flex-shrink-0">
                    <div class="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                      <div v-for="cert in certGroup" :key="cert.name" @click="openCertificateModal(cert)"
                        class="bg-gray-100 rounded-lg p-2 md:p-2 hover:shadow-md transition-shadow cursor-pointer">
                        <img :src="cert.src" :alt="cert.name" class="w-full h-12 md:h-20 object-cover rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Certificate Navigation - Outside the card -->
                <button @click="previousCertificate"
                  class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1857a3] text-white p-2 md:p-1 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button @click="nextCertificate"
                  class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1857a3] text-white p-2 md:p-1 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10">
                  <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificate Modal -->
    <div v-if="selectedCertificate" @click="closeCertificateModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div class="relative max-w-4xl max-h-full">
        <img :src="selectedCertificate.src" :alt="selectedCertificate.name"
          class="max-w-full max-h-full object-contain rounded-lg">
        <button @click="closeCertificateModal"
          class="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

import { ref, computed, onMounted, onUnmounted } from 'vue';

// Main slider data
const currentSlide = ref(0);
const mainSliderImages = ref([
  { src: '/assets/profile/sliders/profile-slider-(1).jpg', alt: 'Ha-Meem Group Manufacturing Facility 1' },
  { src: '/assets/profile/sliders/profile-slider-(2).jpg', alt: 'Ha-Meem Group Manufacturing Facility 2' },
  { src: '/assets/profile/sliders/profile-slider-(3).jpg', alt: 'Ha-Meem Group Manufacturing Facility 3' },
]);

// Statistics data
const statisticsData = ref([
  { icon: '/assets/profile/icons/Est.png', value: '1984', label: 'Establishment' },
  { icon: '/assets/profile/icons/Factory.png', value: '26', label: 'Factories' },
  { icon: '/assets/profile/icons/Workforce.png', value: '75K+', label: 'Employees' },
  { icon: '/assets/profile/icons/Yearly-Revew.png', value: '$1B', label: 'Yearly Revenue' },
  { icon: '/assets/profile/icons/Readymade-Garments.png', value: '114 M PCS', label: 'Readymade Garments' },
  { icon: '/assets/profile/icons/Sweater.png', value: '6 M PCS', label: 'Sweater' },
  { icon: '/assets/profile/icons/Jacket.png', value: '0.5 M PCS', label: 'Jacket' },
  { icon: '/assets/profile/icons/Textile-Mill.png', value: 'DENIM<br>30 M <small>YARD</small><br>60 M <small>YARD</small>', label: 'Non Denim' },
  { icon: '/assets/profile/icons/Spinning.png', value: 'DENIM<br>60 M <small>YARD</small><br>30 M <small>YARD</small>', label: 'Non Denim' },
  { icon: '/assets/profile/icons/wash.png', value: '142 M PCS', label: 'Wash' },
  { icon: '/assets/profile/icons/Chemical-Consumption.png', value: '9 M KG', label: 'Chemical Consumption' },
  { icon: '/assets/profile/icons/Recycle-cotton.png', value: '1560 TON', label: 'Recycle Cotton' },
  { icon: '/assets/profile/icons/Water.png', value: '63%', label: 'Water Recycle' },
  { icon: '/assets/profile/icons/Solar.png', value: '15 MW', label: 'Solar Capacity' },
  { icon: '/assets/profile/icons/Accessories.png', value: '$37.68 M', label: 'Ha-Meem Accessories' },
]);

// Customer carousel data
const currentCustomerSlide = ref(0);
const customersData = ref([
  { name: 'American Eagle', src: '/assets/profile/buyersLogo/american eagle.png' },
  { name: 'Abercrombie & Fitch', src: '/assets/profile/buyersLogo/Abecrombie & fitchg.png' },
  { name: 'Aeropostale', src: '/assets/profile/buyersLogo/aeropeostale.png' },
  { name: 'Banana Republic', src: '/assets/profile/buyersLogo/banana.png' },
  { name: 'Carters', src: '/assets/profile/buyersLogo/Carters.png' },
  { name: 'Calvin Klein', src: '/assets/profile/buyersLogo/CK.png' },
  { name: 'Dickies', src: '/assets/profile/buyersLogo/Dickies.png' },
  { name: 'GAP', src: '/assets/profile/buyersLogo/GAP.png' },
  { name: 'H&M', src: '/assets/profile/buyersLogo/hm-logo.png' },
  { name: 'JCPenney', src: '/assets/profile/buyersLogo/JCPenney.png' },
  { name: 'Kohls', src: '/assets/profile/buyersLogo/Khols.png' },
  { name: 'Lee', src: '/assets/profile/buyersLogo/Lee.png' },
  { name: 'Levis', src: '/assets/profile/buyersLogo/Levice.png' },
]);

// Certificate carousel data
const currentCertificateSlide = ref(0);
interface Certificate {
  name: string;
  src: string;
}
const selectedCertificate = ref<Certificate | null>(null);
const certificatesData = ref([
  { name: 'FSC Certificate', src: '/assets/profile/certificates/accessories-certificate/FSC-RPPIL-2023.jpg' },
  { name: 'Quality Certificate 1', src: '/assets/profile/certificates/accessories-certificate/Screenshot 2025-06-21 105650.png' },
  { name: 'Quality Certificate 2', src: '/assets/profile/certificates/accessories-certificate/Screenshot 2025-06-21 105726.png' },
  { name: 'Quality Certificate 3', src: '/assets/profile/certificates/accessories-certificate/Screenshot 2025-06-21 105813.png' },
  { name: 'GRS Certificate', src: '/assets/profile/certificates/accessories-certificate/SPIL-GRS-Certificate-2023-2024.jpg' },
  { name: 'A&F Certificate', src: '/assets/profile/certificates/lab-certificated-photo/A&F-Certificate-2024.jpg' },
  { name: 'American Eagle Certificate', src: '/assets/profile/certificates/lab-certificated-photo/Americal Eagle-Certification-2024.jpg' },
  { name: 'BAB Certificate', src: '/assets/profile/certificates/lab-certificated-photo/BAB-Certificate-2023.jpg' },
]);

// Computed properties for grouping
const customerGroups = computed(() => {
  const groups = [];
  const itemsPerGroup = 5;
  for (let i = 0; i < customersData.value.length; i += itemsPerGroup) {
    groups.push(customersData.value.slice(i, i + itemsPerGroup));
  }
  return groups;
});

const certificateGroups = computed(() => {
  const groups = [];
  const itemsPerGroup = 5;
  for (let i = 0; i < certificatesData.value.length; i += itemsPerGroup) {
    groups.push(certificatesData.value.slice(i, i + itemsPerGroup));
  }
  return groups;
});

// Slider functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % mainSliderImages.value.length;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? mainSliderImages.value.length - 1 : currentSlide.value - 1;
};

const nextCustomer = () => {
  currentCustomerSlide.value = (currentCustomerSlide.value + 1) % customerGroups.value.length;
};

const previousCustomer = () => {
  currentCustomerSlide.value = currentCustomerSlide.value === 0 ? customerGroups.value.length - 1 : currentCustomerSlide.value - 1;
};

const nextCertificate = () => {
  currentCertificateSlide.value = (currentCertificateSlide.value + 1) % certificateGroups.value.length;
};

const previousCertificate = () => {
  currentCertificateSlide.value = currentCertificateSlide.value === 0 ? certificateGroups.value.length - 1 : currentCertificateSlide.value - 1;
};

// Certificate modal functions
const openCertificateModal = (certificate: any) => {
  selectedCertificate.value = certificate;
  document.body.style.overflow = 'hidden';
};

const closeCertificateModal = () => {
  selectedCertificate.value = null;
  document.body.style.overflow = 'auto';
};

// Auto-play functionality
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
  document.body.style.overflow = 'auto';
});

// Handle escape key for modal
const handleKeydown = (event: any) => {
  if (event.key === 'Escape' && selectedCertificate.value) {
    closeCertificateModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Custom styles for enhanced visual appeal */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.grayscale {
  filter: grayscale(100%);
}

.grayscale-0 {
  filter: grayscale(0%);
}

/* Smooth transitions for sliders */
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

/* Modal backdrop blur effect */
.backdrop-blur {
  backdrop-filter: blur(4px);
}

/* Responsive text sizing */
@media (max-width: 768px) {
  .text-responsive {
    font-size: 0.875rem;
  }
}

/* Custom scrollbar for modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>