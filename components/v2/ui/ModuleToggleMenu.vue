<template>
  <div class="relative">
    <!-- Modern Card Container with Element Plus Design -->
    <div
      class="w-full max-w-sm bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">

      <!-- Menu Grid -->
      <div class="p-6">
        <div class="grid grid-cols-3 gap-3">
          <!-- Menu Item Card -->
          <a v-for="(item, index) in menuItems" :key="index" :href="item.link" target="_blank" rel="noopener noreferrer"
            class="group flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:shadow-md">
            <!-- Icon Container -->
            <div class="relative mb-3">
              <div
                class="absolute inset-0 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-10 blur transition-opacity duration-300">
              </div>
              <Icon :name="item.icon" size="32"
                class="text-blue-600 group-hover:text-blue-700 transition-colors duration-300 relative z-10" />
            </div>

            <!-- Label -->
            <span
              class="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-center leading-tight">
              {{ item.label }}
            </span>
          </a>
        </div>
      </div>

      <!-- Footer Section -->
      <div class="border-t border-gray-100 bg-gray-50 px-6 py-3">
        <p class="text-xs text-gray-500 text-center">Access all important resources and services</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const menuItems = [
  { label: 'LinkedIn', icon: 'hugeicons:linkedin-01', link: 'https://www.linkedin.com/company/ha-meem-group24' },
  { label: 'Portal', icon: 'hugeicons:web-design-01', link: 'https://portal.hameemgroup.com' },
  { label: 'Career', icon: 'hugeicons:job-search', link: 'https://career.hameemgroup.net' },
  { label: 'Map', icon: 'hugeicons:location-user-04', link: '#' },
  { label: 'Help', icon: 'hugeicons:question', link: 'tel:01700000001' },
  { label: 'CSR', icon: 'hugeicons:corporate', link: '#' },
  { label: 'SiteMap', icon: 'hugeicons:navigation-01', link: '#' }
];
</script>

<style scoped>
/* Smooth transitions for all hover effects */
a {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>