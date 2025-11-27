<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <!-- Section Title & Description -->
        <div class="text-center">
          <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Strategic <span class="text-primary font-medium">Leadership Council</span>
          </h2>
          <UISectionUnderline />
          <p class="text-lg text-slate-700 max-w-2xl mx-auto">Meet the visionary leaders driving innovation and
            excellence
            across Ha-Meem Group</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        <!-- Left Side: Tree Hierarchy -->
        <div class="flex flex-col items-center justify-center">
          <div class="w-full max-w-md">
            <!-- Level 1: MD -->
            <div class="flex justify-center">
              <div v-for="(member, idx) in leaders.slice(0, 1)" :key="`level1-${idx}`"
                @mouseenter="selectedMember = member"
                class="transform transition-all duration-300 hover:scale-105 cursor-pointer group">
                <!-- Connecting Line Down -->
                <div class="flex flex-col items-center">
                  <div
                    class="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white">
                    <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                  </div>
                  <div class="text-center mt-3">
                    <p class="font-semibold text-slate-900 text-sm sm:text-base">{{ member.name }}</p>
                    <p class="text-xs text-blue-600 font-medium">{{ member.designation }}</p>
                  </div>
                  <!-- <div class="w-1 h-8 bg-gradient-to-b from-blue-400 to-slate-300 mt-3"></div> -->
                </div>
              </div>
            </div>

            <!-- Level 2: DMDs -->
            <div class="flex justify-center gap-6 sm:gap-8">
              <div v-for="(member, idx) in leaders.slice(1, 3)" :key="`level2-${idx}`"
                @mouseenter="selectedMember = member"
                class="transform transition-all duration-300 hover:scale-105 cursor-pointer group flex flex-col items-center">
                <!-- Connecting Line Up -->
                <div class="w-1 h-6 bg-gradient-to-b from-slate-300 to-slate-400 mb-3"></div>
                <div
                  class="w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                </div>
                <div class="text-center mt-3">
                  <p class="font-semibold text-slate-900 text-xs sm:text-sm">{{ member.name }}</p>
                  <p class="text-xs text-emerald-600 font-medium">{{ member.designation }}</p>
                </div>
              </div>
            </div>

            <!-- Level 3: Directors -->
            <div class="flex justify-center gap-6 sm:gap-64">
              <div v-for="(member, idx) in leaders.slice(3, 5)" :key="`level3-${idx}`"
                @mouseenter="selectedMember = member"
                class="transform transition-all duration-300 hover:scale-105 cursor-pointer group flex flex-col items-center">
                <!-- Connecting Line Up -->
                <div class="w-1 h-6 bg-gradient-to-b from-slate-300 to-slate-400 mb-3"></div>
                <div
                  class="w-18 h-18 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                </div>
                <div class="text-center mt-2">
                  <p class="font-semibold text-slate-900 text-xs">{{ member.name }}</p>
                  <p class="text-xs text-amber-600 font-medium">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Profile Display -->
        <div class="flex flex-col items-center justify-center">
          <transition enter-active-class="transition-all duration-500 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95" :key="selectedMember?.name">
            <div class="w-full max-w-sm">
              <!-- Profile Image -->
              <div class="relative mb-8">
                <div
                  class="w-full aspect-square rounded-full p-6 overflow-hidden shadow-2xl bg-white border-8 border-slate-200 hover:border-blue-300 transition-colors duration-300">
                  <img :src="selectedMember.image" :alt="selectedMember.name" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <!-- Decorative Corner Elements -->
                <div class="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-blue-600 rounded-tl-lg">
                </div>
                <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-blue-600 rounded-br-lg">
                </div>
              </div>

              <!-- Profile Information -->
              <div class="text-center mb-6">
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{{ selectedMember.name }}</h2>
                <p class="text-lg font-semibold text-blue-600 mb-4">{{ selectedMember.designation }}</p>
                <p class="text-slate-600 leading-relaxed italic">"{{ selectedMember.quote }}"</p>
              </div>

              <!-- Contact Links -->
              <div class="flex justify-center gap-6 pt-6 border-t border-slate-200">
                <a href="#"
                  class="p-3 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="LinkedIn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#"
                  class="p-3 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600 hover:from-slate-100 hover:to-slate-200 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Email">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue'

interface LeadershipMember {
  name: string
  designation: string
  image: string
  quote: string
}

const leaders = ref<LeadershipMember[]>([
  {
    name: "A.K. Azad",
    designation: "Managing Director",
    image: "/assets/boardofdirectors/hameem-group-chairman-image-0005.png",
    quote: "Leading with vision and strategy to drive organizational success and create lasting value for all stakeholders."
  },
  {
    name: "Delwar Hossain",
    designation: "Deputy Managing Director",
    image: "/assets/boardofdirectors/DMD.png",
    quote: "Building sustainable partnerships and fostering innovation for long-term growth and market leadership."
  },
  {
    name: "Md. Abdur Razzak Mondal",
    designation: "Deputy Managing Director",
    image: "/assets/boardofdirectors/DMD(Mondol)Sir.jpg",
    quote: "Building sustainable partnerships and fostering innovation for long-term growth and market leadership."
  },
  {
    name: "Sajid Azad",
    designation: "Director",
    image: "https://api.hameemgroup.com:9012/Resources/group-website/profile_022.png",
    quote: "Innovating processes and implementing cutting-edge solutions to achieve operational excellence."
  },
  {
    name: "Sakib Azad",
    designation: "Director",
    image: "/assets/boardofdirectors/Sakib-Azad Director.jpg",
    quote: "Fostering talent development and leadership excellence across all organizational levels."
  }
])

const selectedMember = ref<LeadershipMember>(leaders.value[0])
</script>

<style scoped>
/* Smooth transitions for hover effects */
:deep(.group) {
  @apply transition-all duration-300;
}

/* Enhance touch targets for mobile */
@media (max-width: 640px) {
  :deep(.w-20) {
    @apply w-16;
  }
}
</style>