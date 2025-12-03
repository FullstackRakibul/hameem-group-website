import { useContentStore } from "@/stores/contentStore"
import { computed } from "vue"

export const useContent = () => {
  const contentStore = useContentStore()

  const getSectionContent = async (sectionType: string) => {
    if (contentStore.sections.length === 0) {
      await contentStore.fetchSections()
    }
    return contentStore.sections.find((s) => s.type === sectionType)
  }

  return {
    getSectionContent,
    sections: computed(() => contentStore.sections),
    loading: computed(() => contentStore.loading),
  }
}
