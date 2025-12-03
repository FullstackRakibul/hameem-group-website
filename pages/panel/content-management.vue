<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { definePageMeta } from '#imports'
import type { ContentSection } from '~/types/content'
import { ElMessage, ElMessageBox } from 'element-plus'
import { companyData } from '~/data/company'

// Hooks must be called first, unconditionally
definePageMeta({ layout: 'admin' })

// Reactive state
const newTag = ref("")
const editingId = ref<string | null>(null)
const editForm = ref<Partial<ContentSection>>({})
const showForm = ref(false)
const formTitle = ref('Add New Section')
const activeTab = ref<'basic' | 'panel' | 'details' | 'meta'>('basic')

// Store initialization
let contentStore: any = null
const sections = computed(() => contentStore?.sections || [])
const loading = computed(() => contentStore?.loading || false)

onMounted(async () => {
  const { useContentStore } = await import('#build/imports')
  contentStore = useContentStore()
  await contentStore.fetchSections()
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

    if (editingId.value) {
      await contentStore.updateSection(editingId.value, editForm.value)
      ElMessage.success('Content updated successfully')
    } else {
      await contentStore.addSection({
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
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
    <!-- Header -->
    <div class="sticky top-0 z-40 border-b border-slate-200/50 bg-white/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-slate-900">Content Management</h1>
            <p class="mt-1 text-sm text-slate-600">Manage your website sections and content</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button @click="importCompanyData"
              class="px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium text-sm border border-blue-200">
              📋 Import Company Data
            </button>
            <button @click="addNewSection"
              class="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm shadow-md hover:shadow-lg">
              + Add Section
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-16">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-10 w-10 border-3 border-blue-200 border-t-blue-600">
          </div>
          <p class="mt-4 text-slate-600 font-medium">Loading content...</p>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="sections.length === 0" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <span class="text-2xl">📝</span>
        </div>
        <h3 class="text-lg font-semibold text-slate-900 mb-2">No content yet</h3>
        <p class="text-slate-600 mb-6">Start by adding your first section or importing company data</p>
        <button @click="addNewSection"
          class="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
          Create Section
        </button>
      </div>

      <!-- Content Table -->
      <div v-else class="overflow-hidden">
        <div class="grid gap-4 md:gap-6">
          <div v-for="section in sections" :key="section.id"
            class="bg-white rounded-lg border border-slate-200/50 hover:border-slate-300/50 hover:shadow-md transition-all overflow-hidden">

            <!-- Card Header -->
            <div class="p-4 sm:p-6 border-b border-slate-200/50">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-2">
                    <span v-if="section.badge"
                      class="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold">
                      {{ section.badge }}
                    </span>
                    <span class="inline-block px-2.5 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      {{ section.type }}
                    </span>
                  </div>
                  <h3 class="text-lg font-bold text-slate-900 truncate">{{ section.title }}</h3>
                  <p class="mt-1 text-sm text-slate-600 line-clamp-2">{{ section.description }}</p>
                </div>
                <span v-if="section.icon" class="text-3xl flex-shrink-0">{{ section.icon }}</span>
              </div>
            </div>

            <!-- Card Meta -->
            <div
              class="px-4 sm:px-6 py-3 bg-slate-50/50 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>Updated {{ new Date(section.updatedAt).toLocaleDateString() }}</span>
              <div v-if="section.stats" class="flex items-center gap-3">
                <span v-for="(stat, i) in section.stats.slice(0, 2)" :key="i" class="font-semibold text-slate-700">
                  {{ stat.label }}: {{ stat.value }}
                </span>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button @click="editSection(section)"
                class="flex-1 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium text-sm border border-blue-200/50">
                ✏️ Edit
              </button>
              <button @click="deleteSection(section.id, section.title)"
                class="flex-1 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition font-medium text-sm border border-red-200/50">
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Form -->
    <teleport to="body">
      <div v-if="showForm"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
        <div class="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">

          <!-- Modal Header -->
          <div
            class="sticky top-0 bg-gradient-to-r from-slate-50 to-slate-100/50 border-b border-slate-200 px-4 sm:px-6 py-4 flex justify-between items-center">
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900">{{ formTitle }}</h2>
            <button @click="closeForm" class="text-slate-400 hover:text-slate-600 text-2xl leading-none">
              ×
            </button>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-slate-200 overflow-x-auto">
            <button v-for="tab in ['basic', 'panel', 'details', 'meta']" :key="tab" @click="activeTab = tab as any"
              :class="[
                'px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2',
                activeTab === tab
                  ? 'border-blue-600 text-blue-600 bg-blue-50/30'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              ]">
              {{ tab === 'basic' ? '📝 Basic' : tab === 'panel' ? '📌 Panel' : tab === 'details' ? '📖 Details' : '🔧 Meta' }}
            </button>
          </div>

          <!-- Form Content -->
          <div class="overflow-y-auto flex-1">
            <div class="p-4 sm:p-6 space-y-6">

              <!-- Basic Tab -->
              <div v-show="activeTab === 'basic'" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Badge</label>
                  <input v-model="editForm.badge" type="text"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., About Us" />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Title *</label>
                  <input v-model="editForm.title" type="text" required
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Section title" />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Description</label>
                  <textarea v-model="editForm.description" rows="4"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Main section description"></textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-slate-900 mb-2">Icon</label>
                    <input v-model="editForm.icon" type="text"
                      class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl"
                      placeholder="🏭" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-slate-900 mb-2">Type</label>
                    <select v-model="editForm.type"
                      class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                  <label class="block text-sm font-semibold text-slate-900 mb-3">Tags</label>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span v-for="(tag, i) in editForm.tags" :key="i"
                      class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {{ tag }}
                      <button @click="removeTag(i)" class="text-blue-500 hover:text-blue-700 font-bold">×</button>
                    </span>
                  </div>
                  <div class="flex gap-2">
                    <input v-model="newTag" type="text"
                      class="flex-1 px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add a tag" @keyup.enter="addTag" />
                    <button @click="addTag"
                      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <!-- Panel Tab -->
              <div v-show="activeTab === 'panel'" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Panel Title</label>
                  <input v-model="editForm.panelTitle" type="text"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Our Commitment" />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Panel Description</label>
                  <textarea v-model="editForm.panelDescription" rows="4"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Panel description"></textarea>
                </div>

                <!-- Stats Section -->
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <label class="block text-sm font-semibold text-slate-900">Statistics</label>
                    <span class="text-xs text-slate-600">{{ editForm.stats?.length || 0 }} items</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="(stat, i) in editForm.stats" :key="i"
                      class="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <input v-model="stat.label" type="text"
                          class="px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Label (e.g., Employees)" />
                        <input v-model="stat.value" type="text"
                          class="px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Value (e.g., 75K+)" />
                      </div>
                      <button @click="removeStat(i)" class="text-red-600 hover:text-red-700 text-sm font-medium">
                        Remove Stat
                      </button>
                    </div>
                  </div>
                  <button @click="addStat"
                    class="mt-3 w-full px-3.5 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm">
                    + Add Statistic
                  </button>
                </div>
              </div>

              <!-- Details Tab -->
              <div v-show="activeTab === 'details'" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Expanded Details</label>
                  <textarea v-model="editForm.expandedDetails" rows="6"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Detailed information about this section"></textarea>
                </div>

                <!-- Factories Section -->
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <label class="block text-sm font-semibold text-slate-900">Facilities/Factories</label>
                    <span class="text-xs text-slate-600">{{ editForm.factories?.length || 0 }} items</span>
                  </div>
                  <div class="space-y-3">
                    <div v-for="(factory, i) in editForm.factories" :key="i"
                      class="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition">
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                        <input v-model="factory.name" type="text"
                          class="px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Facility name" />
                        <input v-model="factory.count" type="text"
                          class="px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Count or capacity" />
                      </div>
                      <button @click="removeFactory(i)" class="text-red-600 hover:text-red-700 text-sm font-medium">
                        Remove Facility
                      </button>
                    </div>
                  </div>
                  <button @click="addFactory"
                    class="mt-3 w-full px-3.5 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium text-sm">
                    + Add Facility
                  </button>
                </div>
              </div>

              <!-- Meta Tab -->
              <div v-show="activeTab === 'meta'" class="space-y-5">
                <div>
                  <label class="block text-sm font-semibold text-slate-900 mb-2">Image URL</label>
                  <input v-model="editForm.image" type="text"
                    class="w-full px-3.5 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg" />
                </div>
                <div>
                  <p class="text-sm text-slate-600 mb-2">Section ID: <span class="font-mono font-semibold">{{
                      editForm.id }}</span></p>
                  <p class="text-sm text-slate-600">Last Updated: <span class="font-semibold">{{ editForm.updatedAt ?
                    new Date(editForm.updatedAt).toLocaleString() : 'New' }}</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 py-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 sm:justify-end">
            <button @click="closeForm"
              class="px-4 py-2.5 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition font-medium text-sm">
              Cancel
            </button>
            <button @click="saveSection" :disabled="loading"
              class="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition font-medium text-sm shadow-md">
              {{ loading ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
/* Smooth transitions for UI elements */
* {
  @apply transition-colors;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>