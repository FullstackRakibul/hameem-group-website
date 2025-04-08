<template>
  <section class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="px-6 w-full max-w-10xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <!-- Left Section - Dynamic Content -->
        <div class="text-black space-y-8">
          <div class="mb-8">
            <h2 class="text-4xl md:text-6xl font-bold text-[#03233D] mb-4">Board of Directors</h2>
            <p class="text-base md:text-lg text-gray-600">
              Guiding our organization with strategic vision and exceptional leadership, our Board of Directors
              combines decades of industry experience with innovative thinking to drive sustainable growth.
            </p>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-6">
            <div class="flex-shrink-0 relative">
              <img :src="activeMember.image" :alt="activeMember.designation"
                class="rounded-full w-36 h-36 md:w-48 md:h-48 border-4 border-secondary p-1 object-cover">
            </div>

            <div class="space-y-4">
              <div>
                <h3 class="text-xl md:text-2xl font-bold text-[#03233D]">{{ activeMember.name }}</h3>
                <p class="text-red-600 font-semibold text-base md:text-lg">{{ activeMember.designation }}</p>
              </div>

              <div class="relative pl-6">
                <svg class="w-6 h-6 md:w-8 md:h-8 text-red-600 absolute -left-3 top-0" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
                </svg>
                <p class="text-gray-600 italic text-sm md:text-base">
                  "{{ activeMember.quote }}"
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section - Board Members -->
        <div class="grid gap-6 md:gap-8 md:grid-cols-2 group">
          <div v-for="(member, index) in boardMembers" :key="index" @mouseover="setActiveMember(member)"
            @mouseleave="resetActiveMember"
            class="relative p-4 md:p-6 flex flex-col items-center cursor-pointer transition-all hover:bg-gray-50/80 group/item border border-promary/30  shadow-sm rounder-xl">
            <!-- Animated Arrow Connector -->
            <div
              class="absolute hidden md:block -left-[4.5rem] top-1/2 w-[4.5rem] h-0.5 bg-red-900 origin-right transition-all duration-300 opacity-0 group-hover/item:opacity-100">
              <div class="absolute right-0 -top-[3px] w-3 h-3 border-t-2 border-r-2 border-primary transform -rotate-45">
              </div>
            </div>

            <img :src="member.image" :alt="member.designation"
              class="rounded-full w-24 h-24 md:w-32 md:h-32 mb-3 md:mb-4 object-cover border-2 border-gray-200" />
            <h3 class="text-lg md:text-xl font-bold text-gray-900 text-center">{{ member.designation }}</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeMember = ref({
  name: "Mr. ______",
  designation: "Chairman & CEO",
  image: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
  quote: "Our commitment to excellence and innovation drives every decision we make, ensuring sustainable growth for our stakeholders and communities we serve."
});

const boardMembers = ref([
  {
    name: "Abdul Kader Azad",
    designation: "Managing Director",
    image: "/assets/boardofdirectors/chairman.png",
    quote: "Leading with vision and strategy to drive organizational success."
  },
  {
    name: "Delwar Hossain",
    designation: "Deputy Managing Director",
    image: "/assets/boardofdirectors/DMD.png",
    quote: "Building sustainable partnerships for long-term growth."
  },
  {
    name: "Sajid Khan",
    designation: "Director",
    image: "/assets/boardofdirectors/SAJID SIR .jpg",
    quote: "Innovating processes to achieve operational excellence."
  },
  {
    name: "Sakib Azad",
    designation: "Director",
    image: "/assets/boardofdirectors/Sakib-Azad Director.jpg",
    quote: "Fostering talent and leadership across the organization."
  }
]);
const setActiveMember = (member) => {
  activeMember.value = member;
};

const resetActiveMember = () => {
  activeMember.value = {
    name: "Mr. ______",
    designation: "Chairman & CEO",
    image: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
    quote: "Our commitment to excellence and innovation drives every decision we make, ensuring sustainable growth for our stakeholders and communities we serve."
  };
};

const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/boardofdirectors-bg-banner.jpg", // Ensure this is correct
  },
});

</script>
<style scoped>
@keyframes drawLine {
  from {
    transform: scaleX(0);
    opacity: 0;
  }

  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {}
</style>