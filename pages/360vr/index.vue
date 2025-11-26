<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
    <!-- Logo Section -->
    <div class="pt-8 md:pt-12 flex justify-center">
      <div class="flex gap-1">
        <div class="rounded-lg border border-gray-200 bg-white shadow-sm mb-3 md:mb-1">
          <img src="https://textilepages.com/public/profile/1593836298-img1-logo.png" alt="Ha-Meem Group"
            class="h-16 sm:h-20 w-auto rounded" />
        </div>
      </div>
    </div>

    <!-- Title Section -->
    <div class="mt-8 md:mt-12 px-4 text-center">
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-[#264156] tracking-wider leading-tight">
        HA-MEEM GROUP
        <span class="text-blue-600 font-extrabold">360°</span> VR TOUR
      </h1>
    </div>

    <!-- Image Cards Section -->
    <div class="mt-12 md:mt-16 px-4 pb-16 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-16">
        <!-- Tongi Zone Card -->
        <div class="flex flex-col items-center">
          <a href="https://360vr.hameemgroup.com/tongi" target="_blank" rel="noopener noreferrer">
            <div
              class="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <img src="https://api.hameemgroup.com:9012/Resources/hameem-group-website/tongizone360vr.png"
                alt="Tongi Zone 360 Virtual Tour"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

              <!-- 360 Badge -->
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://api.hameemgroup.com:9012/Resources/hameem-group-website/icon360vr.png"
                  alt="360 Virtual Tour Icon"
                  class="w-36 h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              <!-- Text Overlay -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <p class="text-white
                                  text-sm
                                  sm:text-base
                                  md:text-lg
                                  lg:text-xl
                                  font-extrabold tracking-wider
                                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" style="-webkit-text-stroke: .5px #000;">
                  SEWING, FINISHING, LAUNDRY, LAB, LASER, OZONE
                </p>
              </div>
            </div>
          </a>
          <!-- Zone Title -->
          <a href="https://360vr.hameemgroup.com/tongi" target="_blank" rel="noopener noreferrer">
            <h3
              class="mt-4 md:mt-6 text-xl md:text-3xl font-extrabold text-gray-800 tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,1,0.4)]">
              TONGI ZONE
            </h3>
          </a>
        </div>

        <!-- Textile Zone Card -->
        <div class="flex flex-col items-center">
          <a href="https://360vr.hameemgroup.com/textile" target="_blank" rel="noopener noreferrer">
            <div
              class="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <img src="https://api.hameemgroup.com:9012/Resources/hameem-group-website/textilezone360vr.png"
                alt="Textile Zone 360 Virtual Tour"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

              <!-- 360 Badge -->
              <div class="absolute inset-0 flex items-center justify-center">
                <img src="https://api.hameemgroup.com:9012/Resources/hameem-group-website/icon360vr.png"
                  alt="360 Virtual Tour Icon"
                  class="w-36 h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              <!-- Text Overlay -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <p class="text-white
         text-sm
         sm:text-base
         md:text-lg
         lg:text-xl
         font-extrabold tracking-wider
         drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]" style="-webkit-text-stroke: .5px #000;">
                  TEXTILE, DENIM, SPINNING, RECYCLE PLANT, YARN DYEING
                </p>
              </div>
            </div>
          </a>

          <!-- Zone Title -->
          <a href="https://360vr.hameemgroup.com/textile" target="_blank" rel="noopener noreferrer">
            <h3
              class="mt-4 md:mt-6 text-xl md:text-3xl font-extrabold text-gray-800 tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,1,0.4)]">
              TEXTILE ZONE
            </h3>
          </a>
        </div>
      </div>
    </div>

    <!-- Call to Action Section (Optional) -->
    <div class="pb-8 text-center">
      <p class="text-gray-300 text-sm md:text-base">
        Click on any zone to explore the 360° virtual tour
      </p>
    </div>
  </div>
</template>



<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
img {
  transition: transform 0.3s ease-in-out;
}

.group:hover img {
  transform: scale(1.05);
}
</style>