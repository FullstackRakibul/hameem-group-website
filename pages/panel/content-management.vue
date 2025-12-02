<script setup lang="ts">
// All composables called first without any wrapper
import { computed, ref, onMounted } from 'vue'

import { useContentStore } from '#build/imports'
import type { ContentSection } from '~/types/content'
import { ElMessage, ElMessageBox } from 'element-plus'

definePageMeta({ layout: 'admin' })
const contentStore = useContentStore()
onMounted(async () => {
  await contentStore.fetchSections()
})


const newTag = ref("")

const addTag = () => {
  if (!newTag.value) return
  if (!editForm.value.tags) editForm.value.tags = []
  editForm.value.tags.push(newTag.value)
  newTag.value = ""
}

const addStat = () => {
  if (!editForm.value.stats) editForm.value.stats = []
  editForm.value.stats.push({ label: "", value: "" })
}

const addFactory = () => {
  if (!editForm.value.factories) editForm.value.factories = []
  editForm.value.factories.push({ name: "", count: "" })
}


// Now reactive state
const sections = computed(() => contentStore.sections)
const loading = computed(() => contentStore.loading)
const editingId = ref<string | null>(null)
const editForm = ref<Partial<ContentSection>>({})
const showForm = ref(false)
const formTitle = ref('Add New Section')

// Methods below
const editSection = async (section: ContentSection) => {
  editingId.value = section.id
  editForm.value = { ...section }
  formTitle.value = `Edit: ${section.title}`
  showForm.value = true
}

const saveSection = async () => {
  try {
    if (editingId.value) {
      await contentStore.updateSection(editingId.value, editForm.value)
      ElMessage.success('Content updated successfully')
    } else {
      await contentStore.addSection({
        id: `section-${Date.now()}`,
        title: editForm.value.title || '',
        description: editForm.value.description || '',
        type: editForm.value.type || 'about',
        updatedAt: new Date()
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
      'Warning',
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
}

const addNewSection = () => {
  editingId.value = null
  editForm.value = {}
  formTitle.value = 'Add New Section'
  showForm.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
    <div class="max-w-6xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-slate-900 mb-2">Content Management</h1>
        <p class="text-slate-600">Manage website sections and content</p>
      </div>

      <div class="mb-6">
        <button @click="addNewSection"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
          + Add New Section
        </button>
      </div>

      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p class="mt-4 text-slate-600">Loading content...</p>
      </div>

      <div v-else class="bg-white rounded-lg shadow-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-slate-100 border-b border-slate-200">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Title</th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Type</th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Last Updated</th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr v-for="section in sections" :key="section.id" class="hover:bg-slate-50 transition">
              <td class="px-6 py-4">
                <div>
                  <p class="font-medium text-slate-900">{{ section.title }}</p>
                  <p class="text-sm text-slate-500 truncate">{{ section.description }}</p>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {{ section.type }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-slate-600">
                {{ new Date(section.updatedAt).toLocaleDateString() }}
              </td>
              <td class="px-6 py-4 space-x-2">
                <button @click="editSection(section)"
                  class="px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition text-sm font-medium">
                  Edit
                </button>
                <button @click="deleteSection(section.id, section.title)"
                  class="px-4 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition text-sm font-medium">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="sections.length === 0" class="text-center py-12">
          <p class="text-slate-600">No content sections yet</p>
        </div>
      </div>

      <teleport to="body">
        <div v-if="showForm" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-slate-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center">
              <h2 class="text-2xl font-bold text-slate-900">{{ formTitle }}</h2>
              <button @click="closeForm" class="text-slate-500 hover:text-slate-700 text-2xl leading-none">
                ×
              </button>
            </div>

            <div class="p-6 space-y-8">

              <!-- Basic Info -->
              <section class="space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">Basic Information</h3>

                <div>
                  <label class="block text-sm font-medium mb-1">Badge</label>
                  <input v-model="editForm.badge" type="text" class="form-input" placeholder="About Us" />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Title</label>
                  <input v-model="editForm.title" type="text" class="form-input"
                    placeholder="We stitch trust into every seam" />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Description</label>
                  <textarea v-model="editForm.description" rows="4" class="form-input resize-none"
                    placeholder="Main section description"></textarea>
                </div>
              </section>

              <!-- Panel Section -->
              <section class="space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">Panel Content</h3>

                <div>
                  <label class="block text-sm font-medium mb-1">Panel Title</label>
                  <input v-model="editForm.panelTitle" type="text" class="form-input" placeholder="Our Commitment" />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Panel Description</label>
                  <textarea v-model="editForm.panelDescription" rows="3" class="form-input resize-none"
                    placeholder="Panel description here"></textarea>
                </div>
              </section>

              <!-- Icon -->
              <section>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Icon</h3>
                <input v-model="editForm.icon" type="text" class="form-input" placeholder="🏭" />
              </section>

              <!-- Tags -->
              <section class="space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">Tags</h3>

                <div class="flex flex-wrap gap-2">
                  <span v-for="(tag, i) in editForm.tags" :key="i"
                    class="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm flex items-center gap-2">
                    {{ tag }}
                    <button @click="editForm.tags.splice(i, 1)" class="text-red-500 hover:text-red-700">×</button>
                  </span>
                </div>

                <div class="flex gap-2">
                  <input v-model="newTag" type="text" class="form-input" placeholder="Add a tag" />
                  <button @click="addTag"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add</button>
                </div>
              </section>

              <!-- Expanded Section -->
              <section>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">Expanded Details</h3>
                <textarea v-model="editForm.expandedDetails" rows="4" class="form-input resize-none"></textarea>
              </section>

              <!-- Stats -->
              <section class="space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">Stats</h3>

                <div class="space-y-4">
                  <div v-for="(item, i) in editForm.stats" :key="i"
                    class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 border rounded-lg">

                    <input v-model="item.label" type="text" class="form-input" placeholder="Label: Employees" />
                    <input v-model="item.value" type="text" class="form-input" placeholder="Value: 75K+" />

                    <button @click="editForm.stats.splice(i, 1)" class="text-red-600 hover:text-red-700 text-sm mt-2">
                      Remove
                    </button>
                  </div>

                  <button @click="addStat" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                    + Add Stat
                  </button>
                </div>
              </section>

              <!-- Factories -->
              <section class="space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">Factories</h3>

                <div class="space-y-4">
                  <div v-for="(item, i) in editForm.factories" :key="i"
                    class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 border rounded-lg">

                    <input v-model="item.name" type="text" class="form-input" placeholder="Factory Name" />
                    <input v-model="item.count" type="text" class="form-input" placeholder="Count" />

                    <button @click="editForm.factories.splice(i, 1)"
                      class="text-red-600 hover:text-red-700 text-sm mt-2">
                      Remove
                    </button>
                  </div>

                  <button @click="addFactory" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                    + Add Factory
                  </button>
                </div>
              </section>
            </div>


            <div class="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end gap-3">
              <button @click="closeForm"
                class="px-6 py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300 transition font-medium">
                Cancel
              </button>
              <button @click="saveSection" :disabled="loading"
                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition font-medium">
                {{ loading ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

.form-input {
  @apply w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>