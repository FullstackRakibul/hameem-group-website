<template>
  <section class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12 "
    :style="{ backgroundImage: `url(${bgImage})` }">
    <div class=" px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Left Section - Icon, Title & Button -->
        <!-- Left Section - Chairman & Details -->
        <div class="text-black space-y-8">
          <!-- Header -->
          <div class="mb-8">
            <h2 class="text-6xl font-bold text-[#03233D] mb-4">Board of Directors</h2>
            <p class="text-lg text-gray-600">
              Guiding our organization with strategic vision and exceptional leadership, our Board of Directors
              combines decades of industry experience with innovative thinking to drive sustainable growth.
            </p>
          </div>

          <!-- Details Section -->
          <div class="flex flex-col md:flex-row items-center gap-6">
            <!-- Details Image -->
            <div class="flex-shrink-0">
              <img src="https://cdn-icons-png.flaticon.com/512/700/700674.png" alt="Chairman"
                class="rounded-full w-48 h-48 border-4 border-secondary p-1">
            </div>

            <!-- Details Details -->
            <div class="space-y-4">
              <div>
                <h3 class="text-2xl font-bold text-[#03233D]">Mr. ______</h3>
                <p class="text-red-600 font-semibold">Chairman & CEO</p>
              </div>

              <!-- Quote -->
              <div class="relative pl-6 ">
                <svg class="w-8 h-8 text-red-600 absolute -left-4 top-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
                </svg>
                <p class="text-gray-600 italic">
                  "Our commitment to excellence and innovation drives every decision we make,
                  ensuring sustainable growth for our stakeholders and communities we serve."
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section - Board Members -->
        <div class="grid gap-8 md:grid-cols-2 group">
          <div v-for="(member, index) in boardMembers" :key="index"
            class=" hover:border-1 hover:border-primary/10  rounded-md border border-gray-200 p-6 flex flex-col items-center">
            <img :src="member.image" :alt="member.designation" class="rounded-full w-32 h-32 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 ">{{ member.designation }}</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const boardMembers = ref([
  {
    designation: "Managing Director",
    image: "/assets/boardofdirectors/chairman.png",
  },
  {
    designation: "Deputy Managing Director",
    image: "/assets/boardofdirectors/DMD.png",
  },
  {
    designation: "Director",
    image: "/assets/boardofdirectors/SAJID SIR .jpg",
  },
  {
    designation: "Director",
    image: "/assets/boardofdirectors/Sakib-Azad Director.jpg",
  },
]);

const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/boardofdirectors-bg-banner.jpg",
  },
});
</script>

<style scoped>
/* Hover effect */
div.bg-gray-50:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>