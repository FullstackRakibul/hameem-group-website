<!-- ~/pages/admin/content/about.vue -->
<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">About Section Content Management</h1>
        <p class="text-gray-600 mt-2">Edit the content displayed in the About section</p>
      </div>

      <!-- Form -->
      <div class="bg-white rounded-xl shadow-md p-6">
        <el-form :model="formData" label-width="200px" label-position="top">
          <!-- Main Description -->
          <el-form-item label="Main Description" class="mb-8">
            <el-input v-model="formData.description" type="textarea" :rows="5"
              placeholder="Enter the main description text" resize="none" />
            <div class="text-xs text-gray-500 mt-2">
              This text appears under "Welcome to Ha-Meem Group"
            </div>
          </el-form-item>

          <!-- Footer Description -->
          <el-form-item label="Footer Description" class="mb-8">
            <el-input v-model="formData.footerDescription" type="textarea" :rows="4"
              placeholder="Enter the footer description text" resize="none" />
            <div class="text-xs text-gray-500 mt-2">
              This text appears below the circular stats section
            </div>
          </el-form-item>

          <!-- Stats Section -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Statistics Data</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Vertical Capacity -->
              <el-form-item label="Vertical Capacity Count">
                <el-input v-model="formData.verticalCapacity" placeholder="e.g., 4+" />
              </el-form-item>

              <!-- Automation -->
              <el-form-item label="Automation Count">
                <el-input v-model="formData.automation" placeholder="e.g., 8+" />
              </el-form-item>

              <!-- Digitalization -->
              <el-form-item label="Digitalization Count">
                <el-input v-model="formData.digitalization" placeholder="e.g., 6+" />
              </el-form-item>

              <!-- In-House Facilities -->
              <el-form-item label="In-House Facilities Count">
                <el-input v-model="formData.inHouseFacilities" placeholder="e.g., 75,000+" />
              </el-form-item>

              <!-- Joint Ventures -->
              <el-form-item label="Joint Ventures Count">
                <el-input v-model="formData.jointVentures" placeholder="e.g., 1,50 Lakh+" />
              </el-form-item>

              <!-- Enriching Service -->
              <el-form-item label="Enriching Service Count">
                <el-input v-model="formData.enrichingService" placeholder="e.g., 1,50 Lakh+" />
              </el-form-item>
            </div>
          </div>

          <!-- Image Paths Section -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Image Paths</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <el-form-item v-for="(path, key) in formData.imagePaths" :key="key" :label="formatLabel(key)">
                <el-input v-model="formData.imagePaths[key]" placeholder="/assets/path/to/image.png" />
              </el-form-item>

              <!-- Background Image -->
              <el-form-item label="Background Image">
                <el-input v-model="formData.bgImage" placeholder="/assets/v1/raise-chart.gif" />
              </el-form-item>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4 pt-6 border-t">
            <el-button type="primary" size="large" @click="saveContent" :loading="isSaving">
              Save
            </el-button>

            <el-button type="default" size="large" @click="resetToDefaults">
              Reset
            </el-button>

            <el-button type="info" size="large" @click="previewChanges">
              Preview
            </el-button>
          </div>

          <!-- Status Message -->
          <div v-if="message"
            :class="['mt-4 p-4 rounded-md', messageType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700']">
            {{ message }}
          </div>
        </el-form>
      </div>

      <!-- Preview Section -->
      <div v-if="showPreview" class="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Preview</h3>
        <div class="border rounded-lg p-4">
          <!-- Simulate the about section -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold">Main Description:</h4>
            <p class="text-gray-700">{{ formData.description }}</p>

            <h4 class="text-lg font-semibold mt-6">Footer Description:</h4>
            <p class="text-gray-700">{{ formData.footerDescription }}</p>

            <h4 class="text-lg font-semibold mt-6">Stats:</h4>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(stat, key) in statLabels" :key="key" class="bg-gray-50 p-3 rounded">
                <div class="font-medium">{{ stat }}</div>
                <div class="text-primary font-bold">{{ formData[key] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useContentStore } from '~/stores/content'

const contentStore = useContentStore()
const isSaving = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')
const showPreview = ref(false)

// Format label for display
const formatLabel = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

// Stat labels mapping
const statLabels = {
  verticalCapacity: 'Vertical Capacity',
  automation: 'Automation',
  digitalization: 'Digitalization',
  inHouseFacilities: 'In-House Facilities',
  jointVentures: 'Joint Ventures',
  enrichingService: 'Enriching Service'
}

// Form data structure
const formData = reactive({
  description: '',
  footerDescription: '',
  verticalCapacity: '',
  automation: '',
  digitalization: '',
  inHouseFacilities: '',
  jointVentures: '',
  enrichingService: '',
  imagePaths: {
    verticalCapacity: '',
    automation: '',
    digitalization: '',
    inHouseFacilities: '',
    jointVentures: '',
    enrichingService: ''
  },
  bgImage: ''
})

// Load current data from store
const loadCurrentData = () => {
  const currentData = contentStore.about

  // Update form data
  Object.keys(formData).forEach(key => {
    // if (key === 'imagePaths') {
    //   Object.keys(formData.imagePaths).forEach(imgKey => {
    //     formData.imagePaths[imgKey] = currentData.imagePaths?.[imgKey] || ''
    //   })
    // } else {
    //   formData[key] = currentData[key] || ''
    // }
  })
}

// Save content
const saveContent = async () => {
  try {
    isSaving.value = true
    message.value = ''

    // Prepare data for saving
    const dataToSave = { ...formData }

    // Save to store
    contentStore.saveAboutData(dataToSave)

    // Show success message
    message.value = 'Content saved successfully!'
    messageType.value = 'success'
    ElMessage.success('About section content updated')

    // Clear message after 3 seconds
    setTimeout(() => {
      message.value = ''
    }, 3000)

  } catch (error) {
    message.value = 'Error saving content. Please try again.'
    messageType.value = 'error'
    ElMessage.error('Failed to save content')
  } finally {
    isSaving.value = false
  }
}

// Reset to defaults
const resetToDefaults = () => {
  if (confirm('Are you sure you want to reset to default content? This cannot be undone.')) {
    contentStore.resetAboutData()
    loadCurrentData()
    ElMessage.info('Reset to default content')
  }
}

// Preview changes
const previewChanges = () => {
  showPreview.value = !showPreview.value
}

// Load data on component mount
onMounted(() => {
  loadCurrentData()
})
</script>