<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- Black Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div
      class="relative grid max-w-screen-xl px-4 md:my-40 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <!-- Left Section -->
      <div class="mr-auto place-self-center lg:col-span-7 text-white">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
        >
          HA-MEEM AT A GLANCE
        </h1>

        <!-- Statistics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div class="p-4 bg-gray-200 bg-opacity-50 hover:bg-primary hover:text-white rounded-lg">
            <h3 class="text-xl font-bold">48</h3>
            <p>Factories</p>
          </div>
          <div class="p-4 bg-gray-50 bg-opacity-50 hover:bg-primary hover:text-white rounded-lg">
            <h3 class="text-xl font-bold">1105</h3>
            <p>Production Lines</p>
          </div>
          <div class="p-4 bg-gray-50 bg-opacity-50 hover:bg-primary hover:text-white rounded-lg">
            <h3 class="text-xl font-bold">15.5M</h3>
            <p>Monthly Capacity</p>
          </div>
          <div class="p-4 bg-gray-100 bg-opacity-50 hover:bg-primary hover:text-white rounded-lg">
            <h3 class="text-xl font-bold">1.2M</h3>
            <p>Workforce</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Download Brochure
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-primary hover:text-white text-white focus:ring-4 focus:ring-gray-100"
          >
            Request Quotation
          </a>
        </div>
      </div>

      <!-- Right Section -->
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__pulse animate__infinite">
        <img src="/assets/v2/denim-pant001.png" alt="factory illustration" class="relative z-10" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "https://api.hameemgroup.com:9012/Resources/hameem-group-website/ataglanceimage.jpeg",
  },
});
</script>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}
</style>
