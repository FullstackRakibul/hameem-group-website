<template>
  <section id="index-contact" class="pt-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl">
      </div>
      <div
        class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl">
      </div>
    </div>
    <div class="container mx-auto px-4 lg:px-6 relative z-10">
      

      <!-- Employee Benefits Section -->
      <div class="mb-16">
        <div class="bg-white   overflow-hidden">
          <div class="grid lg:grid-cols-2 gap-0">
            <!-- Image Section -->
            <div class="relative group flex items-center justify-center h-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAMEEM%20GROUP-GW70wgHw1Qz5GbPDUrpih3xgp59BRc.png"
                alt="Why Employees Stay With Us - Ha-Meem Group Benefits"
                class="w-3/5 object-cover transition-transform duration-500 " />
              <!-- <div
                class="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div> -->
            </div>

            <!-- Benefits Content -->
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <h3 class="md:text-5xl text-2xl font-bold font-writtingOne text-gray-900 mb-6">Why Employees Choose Us</h3>
              <p class="text-gray-600 mb-8 leading-relaxed">
                At Ha-Meem Group, we believe our people are our greatest asset. We've created an environment where
                talent thrives and careers flourish.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(benefit, index) in employeeBenefits" :key="index"
                  class="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-200 cursor-pointer group"
                  @mouseenter="highlightBenefit(index)" @mouseleave="highlightBenefit(null)">
                  <div
                    class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <div
                      class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200">
                    </div>
                  </div>
                  <span class="text-gray-700 font-medium group-hover:text-primary transition-colors duration-200">
                    {{ benefit }}
                  </span>
                </div>
              </div>

              <div class="mt-8 flex space-x-4">
                <button
                  class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                  Join Our Team
                </button>
                <button
                  class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <!-- Call to Action Section -->
    <div
        class="bg-gradient-to-r from-primary to-primary/20 p-8 lg:p-12 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative z-10">
          <h3 class="text-3xl lg:text-4xl font-bold mb-4">Ready to Connect?</h3>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're interested in our services, career opportunities, or partnerships, we'd love to hear from
            you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Schedule a Meeting
            </button>
            <button
              class="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors duration-200 font-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <!-- Full Width Map with Overlay Contact Info -->
      <div class="relative w-full h-[600px]  overflow-hidden ">
        <!-- Google Maps iframe -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.836073151204!2d90.397174!3d23.759068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f36ebcbcdb%3A0x6363e2a5709dee2d!2sTML%20Building%20(Ha-Meem%20Group)!5e0!3m2!1sen!2sus!4v1738689429885!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full object-cover">
        </iframe>

        <!-- Contact Information Overlay - Top Left -->
        <div class="absolute top-2 left-2 bg-primary backdrop-blur-sm rounded-xl p-10 shadow-lg border border-white/20 max-w-lg">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white">Contact Info</h3>
          </div>

          <div class="space-y-4 text-sm">
            <!-- Address -->
            <div>
              <p class="font-semibold text-white mb-1">📍 Head Office</p>
              <address class="text-white/85 not-italic leading-relaxed">
                Ha-Meem Group<br>
                387 (South), Tejgaon Industrial Area<br>
                Dhaka-1208, Bangladesh
              </address>
            </div>

            <!-- Contact -->
            <div>
              <p class="font-semibold text-white mb-1">📞 Contact</p>
              <div class="text-white/85 space-y-1">
                <p>+880-2-8878703-8</p>
                <p>
                  <a href="mailto:info@hameemgroup.net" class="text-primary hover:underline">
                    info@hameemgroup.net
                  </a>
                </p>
              </div>
            </div>

            <!-- Hours -->
            <div>
              <p class="font-semibold text-white mb-1">🕒 Hours</p>
              <div class="text-white/85 space-y-1">
                <p>Sat-Thu: 8AM - 5PM</p>
                
              </div>
            </div>
          </div>

          <!-- Get Directions Button -->
          <button class="w-full mt-4 px-4 py-2 bg-white text-primary rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 text-sm font-medium">
            Get Directions
          </button>
        </div>

        <!-- Map Controls Overlay - Top Right -->
        <div class="absolute top-6 right-6 flex flex-col space-y-2">
          <button class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors duration-200 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </button>
          <button class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors duration-200 flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
          </button>
        </div>

        <!-- Location Pin Indicator -->
        <div class="absolute bottom-60 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm font-medium">Ha-Meem Group HQ</span>
          </div>
        </div>
      </div>
      
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Employee benefits data
const employeeBenefits = ref([
  'Inclusive Work Environment',
  'Training and Development',
  'Recognition and Awards',
  'Work-Life Balance',
  'Growth Opportunities',
  'Flexibility',
  'Competitive Compensation',
  'Empowering Innovation',
  'Challenging Work',
  'Mentorship Programs'
]);

const highlightedBenefit = ref<number | null>(null);

const highlightBenefit = (index: number | null) => {
  highlightedBenefit.value = index;
};
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

  .text-4xl.md\:text-6xl {
    font-size: 2.5rem;
  }
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:bg-primary\/20 {
  background-color: rgba(var(--primary-rgb), 0.2);
}

/* Professional shadow effects */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Gradient text effect */
.bg-gradient-to-r {
  background: linear-gradient(to right, var(--primary-color, #446f92), rgba(var(--primary-rgb, 59, 130, 246), 0.8));
}
</style>