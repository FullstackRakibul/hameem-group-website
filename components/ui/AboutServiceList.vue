<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
    <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex  justify-between items-start mb-6">
          <h2 class="text-2xl font-bold">{{ content.title }}</h2>
          <button @click="$emit('close')" class="text-gray-500 border text-md border-primary px-2 rounded-full hover:text-white hover:bg-primary transition-all duration-300">
            &times;
          </button>
        </div>
        
        <!-- No Data State -->
        <div v-if="!content.sections || content.sections.length === 0" class="text-center py-12">
          <div class="mb-4">
            <Icon name="carbon:warning-alt" class="w-16 h-16 text-yellow-500 mx-auto" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Data Not Available</h3>
          <p class="text-gray-600">
            Sorry for the inconvenience. Our records are currently being updated.<br>
            Please check back soon for the latest information.
          </p>
        </div>
        <!-- Content Sections -->
        <div v-if="content.sections && content.sections.length > 0" class="space-y-8">

        <div v-for="(section, index) in content.sections" :key="index" class="mb-8">
          <h3 class="text-lg font-semibold mb-4">{{ section.title }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(item, itemIndex) in section.items" :key="itemIndex" class="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg">
              <img :src="item.image" class="w-12 h-12 object-cover rounded-full" alt="">
              <div>
                <h4 class="font-medium mb-2 line-clamp-1 hover:line-clamp-none transition-all duration-900">{{ item.title }}</h4>
                <p class="text-gray-600 text-sm line-clamp-1 hover:line-clamp-none transition-all duration-900">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  content: {
    type: Object,
    default: () => ({
      title: 'Information',
      sections: []
    })
  }
});

defineEmits(['close']);
</script>