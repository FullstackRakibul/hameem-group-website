<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { definePageMeta } from '#imports'
import type { ContentSection } from '~/types/content'
import { ElMessage, ElMessageBox } from 'element-plus'
import { companyData } from '~/data/company'
import { useContentStore } from '~/stores/content'
definePageMeta({ layout: 'admin' })

// Reactive state
const newTag = ref("")
const editingId = ref<string | null>(null)
const editForm = ref<Partial<ContentSection>>({})
const showForm = ref(false)
const formTitle = ref('Add New Section')
const activeTab = ref<'basic' | 'panel' | 'details' | 'meta'>('basic')

const aboutSection = ref<Partial<ContentSection> | null>(null)
const editingAbout = ref(false)

// Store initialization
let contentStore: any = useContentStore()
const sections = computed(() => contentStore?.sections || [])
const loading = computed(() => contentStore?.loading || false)

onMounted(async () => {
  const { useContentStore } = await import('#build/imports')
  contentStore = useContentStore()
  await contentStore.fetchSections()

  const existingAbout = sections.value.find((s: ContentSection) => s.type === 'about')
  if (existingAbout) {
    aboutSection.value = existingAbout
  } else {
    aboutSection.value = {
      id: 'about-section',
      type: 'about',
      ...companyData,
      updatedAt: new Date()
    }
  }
})

const addTag = () => {
  if (!newTag.value.trim()) return
  if (!editForm.value.tags) editForm.value.tags = []
  editForm.value.tags.push(newTag.value.trim())
  newTag.value = ""
}

const removeTag = (index: number) => {
  editForm.value.tags?.splice(index, 1)
}

const addStat = () => {
  if (!editForm.value.stats) editForm.value.stats = []
  editForm.value.stats.push({ label: "", value: "" })
}

const removeStat = (index: number) => {
  editForm.value.stats?.splice(index, 1)
}

const addFactory = () => {
  if (!editForm.value.factories) editForm.value.factories = []
  editForm.value.factories.push({ name: "", count: "" })
}

const removeFactory = (index: number) => {
  editForm.value.factories?.splice(index, 1)
}

const importCompanyData = () => {
  editingId.value = null
  editForm.value = {
    ...companyData,
    id: `section-${Date.now()}`,
    updatedAt: new Date()
  }
  formTitle.value = 'Import Company Data'
  activeTab.value = 'basic'
  showForm.value = true
}

const editAboutSection = () => {
  editForm.value = { ...aboutSection.value }
  editingAbout.value = true
  editingId.value = 'about-section'
  formTitle.value = 'Edit: About Section'
  activeTab.value = 'basic'
  showForm.value = true
}

const editSection = async (section: ContentSection) => {
  editingId.value = section.id
  editForm.value = { ...section }
  formTitle.value = `Edit: ${section.title}`
  activeTab.value = 'basic'
  showForm.value = true
}

const saveSection = async () => {
  try {
    if (!editForm.value.title?.trim()) {
      ElMessage.error('Title is required')
      return
    }

    if (editingAbout.value) {
      // persist to the local Pinia store (also persisted to localStorage by the store)
      contentStore.setAbout({
        ...editForm.value,
        id: aboutSection.value?.id ?? 'about-section',
        updatedAt: new Date().toISOString()
      })
      // sync local copy used in page
      aboutSection.value = { ...contentStore.about }
      ElMessage.success('About section updated and saved locally')
      editingAbout.value = false
    } else if (editingId.value) {
      // existing sections in contentStore or API
      await contentStore.updateSection?.(editingId.value, editForm.value) // keep existing behavior if store has these
      ElMessage.success('Content updated successfully')
    } else {
      // add new section (existing logic)
      await contentStore.addSection?.({
        id: `section-${Date.now()}`,
        title: editForm.value.title || '',
        description: editForm.value.description || '',
        type: editForm.value.type || 'about',
        updatedAt: new Date(),
        ...editForm.value
      })
      ElMessage.success('Content added successfully')
    }
    closeForm()
  } catch (err: any) {
    ElMessage.error(err.message || 'Error saving content')
  }
}

const deleteSection = async (id: string, title: string) => {
  try {
    await ElMessageBox.confirm(
      `Are you sure you want to delete "${title}"?`,
      'Confirm Delete',
      {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }
    )
    await contentStore.deleteSection(id)
    ElMessage.success('Content deleted successfully')
  } catch (err: any) {
    if (err.message !== 'cancel') {
      ElMessage.error('Error deleting content')
    }
  }
}

const closeForm = () => {
  showForm.value = false
  editingId.value = null
  editForm.value = {}
  activeTab.value = 'basic'
  editingAbout.value = false
}

const addNewSection = () => {
  editingId.value = null
  editForm.value = {}
  formTitle.value = 'Add New Section'
  activeTab.value = 'basic'
  showForm.value = true
}
</script>

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

    <!-- Modal Form -->
    <teleport to="body">
      <div v-if="showForm"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
        <div
          class="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">

          <!-- Modal Header -->
          <div
            class="sticky top-0 bg-gradient-to-r from-slate-50 to-slate-100/50 border-b border-slate-200 px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center min-h-[56px]">
            <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 truncate pr-2">{{ formTitle }}</h2>
            <button @click="closeForm" class="text-slate-400 hover:text-slate-600 text-2xl leading-none flex-shrink-0">
              ×
            </button>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-slate-200 overflow-x-auto">
            <button v-for="tab in ['basic', 'panel', 'details', 'meta']" :key="tab" @click="activeTab = tab as any"
              :class="[
                'px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2',
                activeTab === tab
                  ? 'border-blue-600 text-blue-600 bg-blue-50/30'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              ]">
              {{ tab === 'basic'
                ? '📝 Basic'
                : tab === 'panel'
                  ? '📌 Panel'
                  : tab === 'details'
                    ? '📖 Details'
                    : '🔧 Meta'
              }}

            </button>
          </div>

          <!-- Form Content -->
          <div class="overflow-y-auto flex-1">
            <div class="p-3 sm:p-6 space-y-4 sm:space-y-6">

              <!-- Basic Tab -->
              <div v-show="activeTab === 'basic'" class="space-y-4 sm:space-y-5">
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Badge</label>
                  <input v-model="editForm.badge" type="text"
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., About Us" />
                </div>

                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Title *</label>
                  <input v-model="editForm.title" type="text" required
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Section title" />
                </div>

                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Description</label>
                  <textarea v-model="editForm.description" rows="3"
                    class="w-full px-3 sm:px-3.5 py-2 border min-h-[100px] border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Main section description"></textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Icon</label>
                    <input v-model="editForm.icon" type="text"
                      class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl sm:text-2xl"
                      placeholder="🏭" />
                  </div>
                  <div>
                    <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Type</label>
                    <select v-model="editForm.type"
                      class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                      <option value="about">About</option>
                      <option value="mission">Mission</option>
                      <option value="vision">Vision</option>
                      <option value="values">Values</option>
                      <option value="capabilities">Capabilities</option>
                    </select>
                  </div>
                </div>

                <!-- Tags Section -->
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2 sm:mb-3">Tags</label>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="(tag, i) in editForm.tags" :key="i"
                      class="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                      {{ tag }}
                      <button @click="removeTag(i)" class="text-blue-500 hover:text-blue-700 font-bold">×</button>
                    </span>
                  </div>
                  <div class="flex gap-2">
                    <input v-model="newTag" type="text"
                      class="flex-1 px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Add a tag" @keyup.enter="addTag" />
                    <button @click="addTag"
                      class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-xs sm:text-sm whitespace-nowrap">
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <!-- Panel Tab -->
              <div v-show="activeTab === 'panel'" class="space-y-4 sm:space-y-5">
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Panel Title</label>
                  <input v-model="editForm.panelTitle" type="text"
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., Our Commitment" />
                </div>

                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Panel Description</label>
                  <textarea v-model="editForm.panelDescription" rows="3"
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 min-h-[100px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Panel description"></textarea>
                </div>

                <!-- Stats Section -->
                <div>
                  <div class="flex items-center justify-between mb-2 sm:mb-3">
                    <label class="block text-xs sm:text-sm font-semibold text-slate-900">Statistics</label>
                    <span class="text-xs text-slate-600">{{ editForm.stats?.length || 0 }} items</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="(stat, i) in editForm.stats" :key="i"
                      class="p-3 sm:p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3">
                        <input v-model="stat.label" type="text"
                          class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Label (e.g., Employees)" />
                        <input v-model="stat.value" type="text"
                          class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Value (e.g., 75K+)" />
                      </div>
                      <button @click="removeStat(i)"
                        class="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium">
                        Remove Stat
                      </button>
                    </div>
                  </div>
                  <button @click="addStat"
                    class="mt-2 sm:mt-3 w-full px-3 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-xs sm:text-sm">
                    + Add Statistic
                  </button>
                </div>
              </div>

              <!-- Details Tab -->
              <div v-show="activeTab === 'details'" class="space-y-4 sm:space-y-5">
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Expanded Details</label>
                  <textarea v-model="editForm.expandedDetails" rows="5"
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Detailed information about this section"></textarea>
                </div>

                <!-- Factories Section -->
                <div>
                  <div class="flex items-center justify-between mb-2 sm:mb-3">
                    <label class="block text-xs sm:text-sm font-semibold text-slate-900">Facilities/Factories</label>
                    <span class="text-xs text-slate-600">{{ editForm.factories?.length || 0 }} items</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="(factory, i) in editForm.factories" :key="i"
                      class="p-3 sm:p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3">
                        <input v-model="factory.name" type="text"
                          class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Facility name" />
                        <input v-model="factory.count" type="text"
                          class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Count or capacity" />
                      </div>
                      <button @click="removeFactory(i)"
                        class="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium">
                        Remove Facility
                      </button>
                    </div>
                  </div>
                  <button @click="addFactory"
                    class="mt-2 sm:mt-3 w-full px-3 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-xs sm:text-sm">
                    + Add Facility
                  </button>
                </div>
              </div>

              <!-- Meta Tab -->
              <div v-show="activeTab === 'meta'" class="space-y-4 sm:space-y-5">
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Image URL</label>
                  <input v-model="editForm.image" type="text"
                    class="w-full px-3 sm:px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="https://example.com/image.jpg" />
                </div>
                <div>
                  <label class="block text-xs sm:text-sm font-semibold text-slate-900 mb-2">Additional Metadata</label>

                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="sticky bottom-0 bg-slate-50/50 border-t border-slate-200 px-3 sm:px-6 py-3 sm:py-4 flex gap-2 sm:gap-3 justify-end flex-wrap">
            <button @click="closeForm"
              class="px-4 sm:px-6 py-2 text-xs sm:text-sm border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition font-medium">
              Cancel
            </button>
            <button @click="saveSection"
              class="px-4 sm:px-6 py-2 text-xs sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </teleport>
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