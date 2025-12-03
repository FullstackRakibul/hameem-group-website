// stores/content.ts
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { companyData } from '~/data/company'

export type Stat = { label: string; value: string }
export type Factory = { name: string; count: string }

export type AboutPayload = {
  id?: string
  badge?: string
  title: string
  description?: string
  panelTitle?: string
  panelDescription?: string
  icon?: string
  tags?: string[]
  expandedDetails?: string
  stats?: Stat[]
  factories?: Factory[]
  image?: string
  type?: string
  updatedAt?: string | Date
}

const STORAGE_KEY = 'hm_content_about_v1'

function loadFromStorage(): AboutPayload | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    console.warn('Failed to parse about from storage', e)
    return null
  }
}

function persistToStorage(payload: AboutPayload) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch (e) {
    console.warn('Failed to persist about to storage', e)
  }
}

export const useContentStore = defineStore('content', () => {
  // Reactive state
  const about: Ref<AboutPayload> = ref(loadFromStorage() ?? { ...companyData, updatedAt: new Date().toISOString(), type: 'about' })

  // Actions
  function setAbout(payload: Partial<AboutPayload>) {
    const merged = { ...(about.value || {}), ...payload, updatedAt: new Date().toISOString(), type: 'about' }
    about.value = merged
    persistToStorage(merged)
  }

  function resetAboutToCompanyData() {
    const data = { ...companyData, updatedAt: new Date().toISOString(), type: 'about' }
    about.value = data
    persistToStorage(data)
  }

  function clearAbout() {
    about.value = { title: '', type: 'about', updatedAt: new Date().toISOString() }
    localStorage.removeItem(STORAGE_KEY)
  }

  return { about, setAbout, resetAboutToCompanyData, clearAbout }
})
