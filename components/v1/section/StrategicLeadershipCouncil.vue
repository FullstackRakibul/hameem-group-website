<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 sm:mb-6 tracking-tight">
            Strategic <span class="text-primary font-medium">Leadership Council</span>
          </h2>
          <UISectionUnderline />
          <p class="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto ">
            Meet the visionary leaders driving innovation and excellence across Ha-Meem Group
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto mt-10">
      <!-- On mobile we want the profile first (so user sees the focused person), on large screens keep side-by-side -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

        <!-- LEFT: Tree Hierarchy (on mobile becomes second) -->
        <div class="flex flex-col items-center justify-start order-2 lg:order-1">
          <div class="w-full max-w-md">
            <!-- make the tree horizontally scrollable on small screens so layout doesn't break -->
            <div class="mobile-tree overflow-x-auto w-full -mx-4 px-4 ">
              <div class="flex flex-col items-center space-y-3">
                <!-- Level 1: MD -->
                <div class="flex justify-center">
                  <div v-for="(member, idx) in leaders.slice(0, 1)" :key="`level1-${idx}`"
                    @mouseenter="selectedMember = member" @click="selectedMember = member" role="button" tabindex="0"
                    @keydown.enter="selectedMember = member"
                    class="transform transition-all duration-200 active:scale-98 cursor-pointer group flex flex-col items-center">
                    <div class="flex flex-col items-center">
                      <div :class="['rounded-full overflow-hidden border-2 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white',
                        mobileAvatarSize.md]">
                        <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                      </div>
                      <div class="text-center mt-2">
                        <p class="font-semibold text-slate-900 text-sm sm:text-base">{{ member.name }}</p>
                        <p class="text-xs text-blue-600 font-medium">{{ member.designation }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Level 2: DMDs -->
                <div class="flex justify-center gap-4 sm:gap-6">
                  <div v-for="(member, idx) in leaders.slice(1, 3)" :key="`level2-${idx}`"
                    @mouseenter="selectedMember = member" @click="selectedMember = member" role="button" tabindex="0"
                    @keydown.enter="selectedMember = member"
                    class="transform transition-all duration-200 active:scale-98 cursor-pointer group flex flex-col items-center">
                    <div
                      :class="['rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300 bg-white', mobileAvatarSize.sm]">
                      <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                    </div>
                    <div class="text-center mt-2">
                      <p class="font-semibold text-slate-900 text-xs sm:text-sm">{{ member.name }}</p>
                      <p class="text-xs text-emerald-600 font-medium">{{ member.designation }}</p>
                    </div>
                  </div>
                </div>

                <!-- Level 3: Directors -->
                <div class="flex justify-center gap-28 sm:gap-36">
                  <div v-for="(member, idx) in leaders.slice(3, 5)" :key="`level3-${idx}`"
                    @mouseenter="selectedMember = member" @click="selectedMember = member" role="button" tabindex="0"
                    @keydown.enter="selectedMember = member"
                    class="transform transition-all duration-200 active:scale-98 cursor-pointer group flex flex-col items-center">
                    <div
                      :class="['rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300 bg-white', mobileAvatarSize.sm]">
                      <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                    </div>
                    <div class="text-center mt-2">
                      <p class="font-semibold text-slate-900 text-xs sm:text-sm">{{ member.name }}</p>
                      <p class="text-xs text-amber-600 font-medium">Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> <!-- /mobile-tree -->
          </div>
        </div>

        <!-- RIGHT: Profile Display (on mobile becomes first) -->
        <div class="flex flex-col items-center justify-start order-1 lg:order-2">
          <transition enter-active-class="transition-all duration-500 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95" :key="selectedMember?.name">
            <div class="w-full max-w-sm">
              <!-- Profile Image -->
              <div class="relative mb-6 sm:mb-8">
                <div
                  class="w-full aspect-square rounded-full p-4 sm:p-6 overflow-hidden shadow-2xl bg-white border-6 border-slate-200 hover:border-blue-300 transition-colors duration-300"
                  :class="profileAvatarSize">
                  <img :src="selectedMember.image" :alt="selectedMember.name" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent"></div>
                </div>

                <!-- Decorative Corner Elements -->
                <div
                  class="absolute -top-3 -left-3 w-7 h-7 border-t-4 border-l-4 border-blue-600 rounded-tl-lg hidden sm:block">
                </div>
                <div
                  class="absolute -bottom-3 -right-3 w-7 h-7 border-b-4 border-r-4 border-blue-600 rounded-br-lg hidden sm:block">
                </div>
              </div>

              <!-- Profile Information -->
              <div class="text-center mb-4 sm:mb-6 px-2">
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 truncate">{{
                  selectedMember.name }}</h2>
                <p class="text-base sm:text-lg font-semibold text-blue-600 mb-3 truncate">{{ selectedMember.designation
                }}</p>
                <p class="text-slate-600 leading-relaxed italic text-sm sm:text-base">"{{ selectedMember.quote }}"</p>
              </div>

              <!-- Contact Links -->
              <div class="flex justify-center gap-4 pt-5 border-t border-slate-200 px-4">
                <a href="#"
                  class="p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
                  title="LinkedIn" aria-label="LinkedIn">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#"
                  class="p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600 hover:from-slate-100 hover:to-slate-200 transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
                  title="Email" aria-label="Email">
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
import { ref, computed } from 'vue'
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

/**
 * Utility classes used in template to keep responsive sizing tidy.
 * Using computed gives clear central control if you want to tweak sizes later.
 */
const mobileAvatarSize = {
  sm: 'w-20 h-20 sm:w-20 sm:h-20 md:w-32 md:h-32',
  md: 'w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32'
}

const profileAvatarSize = computed(() => {
  // return different wrapper sizes as classes; easier to maintain
  return 'sm:p-6 p-4 rounded-full';
})
</script>

<style scoped>
/* Keep :deep for any global utilities you want to affect. */

/* Make the small-screen tree padding feel natural and allow horizontal scrolling */
.mobile-tree::-webkit-overflow-scrolling {
  touch-action: pan-x;
  -webkit-overflow-scrolling: touch;
}

/* touch-target improvements */
[role="button"] {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.06);
  outline: none;
}

/* Ensure long names don't break layout */
h2.truncate,
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Fine tuning for smallest devices */
@media (max-width: 420px) {
  .mobile-tree {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Slightly smaller header on very small screens */
@media (max-width: 360px) {
  h2.text-3xl {
    font-size: 1.4rem;
  }
}
</style>