<template>
  <section class="bg-white bg-opacity-40 " >
    <div class="grid max-w-screen-xl px-4 md:my-40 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    
    >
      <!-- Left Section -->
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary">
          HA-MEEM AT A GLANCE
        </h1>

        <!-- Statistics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="p-4 bg-gray-200 hover:bg-primary hover:text-white rounded-lg ">
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-500 hover:text-white">48</h3>
            <p class="text-primary hover:text-white">Factories</p>
          </div>
          <div class="p-4 bg-gray-50  hover:bg-primary hover:text-white rounded-lg ">
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-500 hover:text-white">1105</h3>
            <p class="text-primary hover:text-white ">Production Lines</p>
          </div>
          <div class="p-4 bg-gray-50 hover:bg-primary  hover:text-white rounded-lg ">
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-500 hover:text-white">15.5M</h3>
            <p class="text-primary hover:text-white ">Monthly Capacity</p>
          </div>
          <div class="p-4 bg-gray-100 hover:bg-primary  hover:text-white rounded-lg ">
            <h3 class="text-xl font-bold text-primary-700 dark:text-primary-500 hover:text-white">1.2 M</h3>
            <p class="text-primary hover:text-white ">Workforce</p>
          </div>
        </div>

        <!-- Financial Highlights -->
        <!-- <div class="mb-8">
          <h2 class="mb-4 text-2xl font-bold text-primary">Financial Overview</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-primary ">
            <div class="p-3 bg-gray-50 rounded-lg ">
              <p class="font-semibold">Garments</p>
              <p>US $490m+</p>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg ">
              <p class="font-semibold">Denim Mill</p>
              <p>US $150m+</p>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg ">
              <p class="font-semibold">Sweater</p>
              <p>US $20m+</p>
            </div>
          </div>
          <div class="mt-4 p-3 bg-primary-100 rounded-lg dark:bg-primary-900">
            <p class="font-bold text-primary-700 dark:text-primary-200">Total: US $660m+</p>
          </div>
        </div> -->

        <!-- Backward Integration Section -->
        <!-- <h2 class="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl text-primary">
          Progressively Moving Towards Backward Integration
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="p-4 bg-gray-50 rounded-lg ">
            <h3 class="font-semibold mb-2 text-primary">Production Facilities</h3>
            <ul class="space-y-2 text-primary ">
              <li>• 100 Embroidery Machines</li>
              <li>• 9 Sustainable Washing Plants</li>
              <li>• Auto Carton Factory</li>
              <li>• 6-Color Garment Printing</li>
            </ul>
          </div>

          <div class="p-4 bg-gray-50 rounded-lg ">
            <h3 class="font-semibold mb-2 text-primary">Support Infrastructure</h3>
            <ul class="space-y-2 text-primary ">
              <li>• 130 Covered Trucks</li>
              <li>• In-House Power Generation</li>
              <li>• HK/China Sourcing Offices</li>
              <li>• Label & Packaging Units</li>
            </ul>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Download Brochure
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-primary focus:ring-4 focus:ring-gray-100 text-primary hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Request Quotation
          </a>
        </div>
      </div>

      <!-- Right Section -->
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__pulse animate__infinite">
        <img src="/public/assets/v2/denim-pant001.png" alt="factory illustration">
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "https://api.hameemgroup.com:9012/Resources/hameem-group-website/denim-stickyBanner-hameem-group--02.jpeg",
  },
  mainText: {
    type: String,
    default: "FOR MEN",
  },
  subText: {
    type: String,
    default: "WHO DON'T HAVE TO TRY TOO HARD",
  },
});
</script>

<style scoped>
.animate__animated.animate__ruanimate__pulsebberBand {
  --animate-duration: 10s;
}
</style>