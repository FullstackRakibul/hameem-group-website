<template>
  <section class="bg-white py-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <!-- Left Section - Icon, Title & Button -->
        <div class="bg-red-600 text-white p-8 rounded-lg">
          <div class="flex items-center mb-4">
            <!-- Icon -->
            <svg class="w-12 h-12 text-white mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 14a1 1 0 102 0v-4a1 1 0 10-2 0v4zm1-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" clip-rule="evenodd"></path>
            </svg>
            <h2 class="text-3xl font-bold">Board of Directors</h2>
          </div>
          <p class="text-lg mb-6">
            Meet our dedicated board members who lead with expertise and vision.
          </p>
          <a href="#" class="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
            Learn More
          </a>
        </div>

        <!-- Right Section - Board Members -->
        <div class="grid gap-8 md:grid-cols-2 ">
          <div v-for="(member, index) in boardMembers" :key="index" class=" bg-[#03233D] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img :src="member.image" :alt="member.designation" class="rounded-full w-32 h-32 mb-4"/>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ member.designation }}</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boardMembers: [
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
      ],
    };
  },
};
</script>

<style scoped>
/* Hover effect */
div.bg-gray-50:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
