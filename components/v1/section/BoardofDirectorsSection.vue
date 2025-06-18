<template>
  <section class="container w-full min-h-screen relative flex items-center justify-center  bg-container"
    :style="{ backgroundImage: `url('./assets/boardofdirectors-bg-banner.jpg')` }">

    <!-- Overlay for better content visibility -->
    <div class="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

    <div class="relative z-10 w-full max-h-screen mx-auto px-4 md:px-6 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left Section - Dynamic Content -->
        <div class="space-y-8">
          <!-- Header -->
          <div class="text-center lg:text-left">
            <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Board of <span class="text-primary font-medium">Directors</span>
            </h2>

            <UISectionUnderline />

            <p class="text-lg text-gray-800 leading-relaxed max-w-xl">
              Guiding our organization with strategic vision and exceptional leadership, combining decades of
              industry experience with innovative thinking.
            </p>
          </div>

          <!-- Active Member Display -->
          <div class="transition-all duration-500 ">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <!-- Profile Image -->
              <div class="relative group/avatar w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full opacity-75 group-hover/avatar:opacity-100 transition-opacity duration-300">
                </div>
                <img :src="activeMember.image" :alt="activeMember.name"
                  class="relative rounded-full w-64 h-64 md:w-80 md:h-80 flex-shrink-0 object-cover border-4 border-white shadow-xl transition-transform duration-300 group-hover/avatar:scale-105" />
                <!-- Status indicator -->
                <div
                  class="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg">
                </div>
              </div>

              <!-- Member Info -->
              <div class="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {{ activeMember.name }}
                  </h3>
                  <p class="text-primary font-semibold text-lg">
                    {{ activeMember.designation }}
                  </p>
                </div>

                <!-- Quote -->
                <div class="relative">
                  <div class="absolute -left-4 -top-2">
                    <svg class="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 7L8 11H11V17H5V11L7 7H10M18 7L16 11H19V17H13V11L15 7H18Z" />
                    </svg>
                  </div>
                  <blockquote class="text-gray-600 italic text-base md:text-lg leading-relaxed pl-6">
                    "{{ activeMember.quote }}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section - Board Members Grid -->
        <div class="space-y-6">
          <h3 class="text-4xl font-semibold font-writtingOne text-gray-900 text-center lg:text-left mb-8">
            Leadership Team
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(member, index) in boardMembers" :key="index" @mouseenter="setActiveMember(member)"
              @mouseleave="resetActiveMember"
              class="group/card relative bg-primary/5 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-primary/30">
              <!-- Hover Arrow Indicator -->
              <div
                class="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 group-hover/card:-translate-x-2">
                <div class="bg-primary rounded-full p-2 shadow-lg">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              <!-- Card Content -->
              <div class="flex flex-col items-center text-center space-y-4">
                <!-- Profile Image -->
                <div class="relative">
                  <img :src="member.image" :alt="member.name"
                    class="rounded-2xl w-24 h-24 md:w-28 md:h-28 object-cover border-2 border-gray-200 group-hover/card:border-primary/50 transition-all duration-300 group-hover/card:scale-110" />
                  <!-- Hover overlay -->
                  <div
                    class="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  </div>
                </div>

                <!-- Member Details -->
                <div class="space-y-2">
                  <h4
                    class="text-lg font-bold text-gray-900 group-hover/card:text-primary transition-colors duration-300">
                    {{ member.name }}
                  </h4>
                  <p
                    class="text-sm font-medium text-gray-600 group-hover/card:text-gray-800 transition-colors duration-300">
                    {{ member.designation }}
                  </p>
                </div>

                <!-- Interaction Indicator -->
                <div
                  class="flex items-center space-x-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                  <span class="text-xs text-primary font-medium">View Profile</span>
                  <svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              <!-- Card glow effect -->
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Board Composition</h4>
                <p class="text-sm text-gray-600">{{ boardMembers.length }} Executive Members</p>
              </div>
              <div class="flex -space-x-2">
                <div v-for="(member, index) in boardMembers.slice(0, 3)" :key="index"
                  class="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
                </div>
                <div v-if="boardMembers.length > 3"
                  class="w-8 h-8 rounded-full bg-primary text-white text-xs flex items-center justify-center border-2 border-white font-medium">
                  +{{ boardMembers.length - 3 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UISectionUnderline from '~/components/ui/UISectionUnderline.vue';
const activeMember = ref({
  name: "Mr. ______",
  designation: "Chairman & CEO",
  image: "https://cdn-icons-png.flaticon.com/512/700/700674.png",
  quote: "Our commitment to excellence and innovation drives every decision we make, ensuring sustainable growth for our stakeholders and communities we serve."
});

const boardMembers = ref([
  {
    name: "A.K. Azad",
    designation: "Managing Director",
    image: "/assets/boardofdirectors/chairman.png",
    quote: "Leading with vision and strategy to drive organizational success and create lasting value for all stakeholders."
  },
  {
    name: "Delwar Hossain",
    designation: "Deputy Managing Director",
    image: "/assets/boardofdirectors/DMD.png",
    quote: "Building sustainable partnerships and fostering innovation for long-term growth and market leadership."
  },
  {
    name: "Sajid Azad",
    designation: "Director",
    image: "/assets/boardofdirectors/SAJID SIR .jpg",
    quote: "Innovating processes and implementing cutting-edge solutions to achieve operational excellence."
  },
  {
    name: "Sakib Azad",
    designation: "Director",
    image: "/assets/boardofdirectors/Sakib-Azad Director.jpg",
    quote: "Fostering talent development and leadership excellence across all organizational levels."
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
    default: "/assets/boardofdirectors-bg-banner.jpg",
  },
});
</script>

<style scoped>
/* Custom animations */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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

/* Backdrop blur support */
@supports (backdrop-filter: blur(8px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(8px);
  }
}
</style>