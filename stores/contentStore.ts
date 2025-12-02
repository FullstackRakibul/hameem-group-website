import { defineStore } from "pinia"
import type { ContentSection, ContentResponse } from "~/types/content"


export const useContentStore = defineStore("content", () => {
  const sections = ref<ContentSection[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch all content sections
  const fetchSections = async () => {
    loading.value = true
    error.value = null
    try {
      const { data } = await $fetch<ContentResponse>("/api/content", { method: "GET" })
      sections.value = data as ContentSection[]
    } catch (err: any) {
      error.value = err.message
      console.error("[v0] Error fetching content:", err)
    } finally {
      loading.value = false
    }
  }

  // Fetch single section
  const fetchSection = async (id: string) => {
    try {
      const { data } = await $fetch<ContentResponse>(`/api/content/${id}`, { method: "GET" })
      return data as ContentSection
    } catch (err: any) {
      error.value = err.message
      throw err
    }
  }

  // Update section
  const updateSection = async (id: string, updates: Partial<ContentSection>) => {
    loading.value = true
    try {
      const { data } = await $fetch<ContentResponse>(`/api/content/${id}`, {
        method: "PUT",
        body: updates,
      })
      const index = sections.value.findIndex((s) => s.id === id)
      if (index > -1 && data) {
        sections.value[index] = { ...sections.value[index], ...(data as ContentSection) }
      }
      return data as ContentSection
    } catch (err: any) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  // Add new section
  const addSection = async (section: ContentSection) => {
    sections.value.push(section)
  }

  // Delete section
  const deleteSection = async (id: string) => {
    try {
      await $fetch(`/api/content/${id}`, { method: "DELETE" })
      sections.value = sections.value.filter((s) => s.id !== id)
    } catch (err: any) {
      error.value = err.message
      throw err
    }
  }

  return {
    sections,
    loading,
    error,
    fetchSections,
    fetchSection,
    updateSection,
    addSection,
    deleteSection,
  }
})
