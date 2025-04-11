<script setup lang="ts">
const industries = [
  { label: 'Woven', description: 'Our woven factories are equipped with 300 production lines in six different locations.', icon: 'hugeicons:factory' },
  { label: 'Denim Mill', description: 'A dream project of Ha‐Meem group located in a serene surrounding of 100 acres.', icon: 'hugeicons:shirt-01' },
  { label: 'Laundry', description: 'All the washing plants have dry process capability with required equipment.', icon: 'hugeicons:dish-washer' },
  { label: 'Sweater', description: 'Two Sweater Units consisting of 400 Jacquard Stall (German) machines.', icon: 'hugeicons:t-shirt' },
  { label: 'Jute Mill', description: 'M.H. Jute Mills Ltd., one of the growing industry of Ha-Meem Group.', icon: 'hugeicons:leaf-03' },
  { label: 'Design', description: 'Ha‐Meem has a resourceful design team lead by experienced designers.', icon: 'hugeicons:paint-board' },
  { label: 'Newspaper', description: 'Samakal, a popular & widely circulated national daily newspaper in Bangladesh.', icon: 'hugeicons:news-01' },
  { label: 'News Channel', description: 'Channel-24, a very popular news channel covering news all over Bangladesh.', icon: 'hugeicons:tv-01' },
  { label: 'Ancillary', description: 'Embroidery Factory, Printing Factory, Carton Factory, Poly Bag Industry, Label Factory.', icon: 'hugeicons:cpu-settings' }
];
</script>


<template>
  <div id="mega-menu-full-image-dropdown" class="bg-white border-gray-200 shadow-xs border-y">
    <div class="grid container px-4 py-5 mx-auto text-sm gap-5 text-gray-600 md:grid-cols-3 md:px-2">
      <div class="md:col-span-2">
        <p class="text-lg font-bold mb-4">Our Industries</p>
        <p class="text-gray-600 mb-6">Ha-Meem Group has ventured into many industries in Bangladesh after its inception.
          It has become one of the fastest-growing Group of Companies in the country.</p>
        <div class="grid grid-cols-2 gap-6">
          <div v-for="(industry, index) in industries" :key="index"
            class="flex items-start space-x-4 hover:bg-primary hover:text-white rounded-md p-2 transition-colors duration-300 group">
            <Icon :name="industry.icon" class="text-primary w-10 h-10 group-hover:text-white text-2xl" />
            <div>
              <p class="font-semibold text-gray-800 group-hover:text-white">{{ industry.label }}</p>
              <p class="text-sm text-gray-600 group-hover:text-white">{{ industry.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" class="p-8 bg-local bg-gray-200 bg-center bg-no-repeat bg-cover rounded-md bg-blend "
        style="background-image: url(https://api.hameemgroup.com:9012/Resources/hameem-group-website/megamenubackgroundimage01.jpeg)">
        <p class="max-w-xl mb-5 text-xl  font-bold leading-tight tracking-tight text-black">Ha-meem Group Business Units
        </p>
        <button type="button"
          class="bg-primary inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
          Explore More
          <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </a>
    </div>
  </div>
</template>