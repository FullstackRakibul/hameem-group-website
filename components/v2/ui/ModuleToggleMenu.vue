<template>
  <div class="relative">
    <div class="border w-64 text-white p-4 rounded-lg shadow-lg">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(item, index) in menuItems" :key="index"
          class="flex flex-col items-center p-2 hover:bg-primary text-primary hover:text-white rounded-lg cursor-pointer border">
          <NuxtLink :to="item.link" target="_blank" class="flex flex-col items-center">
            <Icon :name="item.icon" size="32" />
            <span class="text-sm mt-2">{{ item.label }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const menuItems = [
  { label: 'LinkedIn', icon: 'hugeicons:linkedin-01', link: 'https://www.linkedin.com/company/ha-meem-group24' },
  { label: 'HRM', icon: 'hugeicons:web-design-01' , link:'https://portal.hameemgroup.com'},
  { label: 'Career', icon: 'hugeicons:job-search', link:'#' },
  { label: 'Map', icon: 'hugeicons:location-user-04', link: '#' },
  { label: 'Help', icon: 'hugeicons:question', link: 'tel:01700000001' },
  { label: 'CSR', icon: 'hugeicons:corporate', link: '#' },
  { label: 'SiteMap', icon: 'hugeicons:navigation-01', link: '#' }
];
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
}
</style>
