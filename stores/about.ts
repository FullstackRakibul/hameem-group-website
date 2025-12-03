// stores/about.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface AboutSectionData {
  id: string
  type: 'about'
  title: string
  description: string
  badge?: string
  icon?: string
  stats?: Array<{ label: string; value: string }>
  verticalCapacity?: string
  automation?: string
  digitalization?: string
  inHouseFacilities?: string
  jointVentures?: string
  enrichingService?: string
  bgImage?: string
  imagePaths?: {
    verticalCapacity: string
    automation: string
    digitalization: string
    inHouseFacilities: string
    jointVentures: string
    enrichingService: string
  }
  footerDescription?: string
  updatedAt?: string
}

export const useAboutStore = defineStore('about', () => {
  // Try to load from localStorage first
  const initialData: AboutSectionData = {
    id: 'about-section',
    type: 'about',
    title: "Welcome to Ha-Meem Group",
    description: "Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD. Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.",
    badge: "About Us",
    icon: "🏭",
    stats: [
      { label: "Workforce", value: "75,000+" },
      { label: "Annual Turnover", value: "$925M" },
      { label: "Production Lines", value: "450" },
      { label: "Monthly Capacity", value: "9.5M garments" }
    ],
    verticalCapacity: "4+",
    automation: "8+",
    digitalization: "6+",
    inHouseFacilities: "75,000+",
    jointVentures: "1,50 Lakh+",
    enrichingService: "1,50 Lakh+",
    bgImage: "/assets/v1/raise-chart.gif",
    imagePaths: {
      verticalCapacity: "/assets/v1/section/about/garmentys.png",
      automation: "/assets/v1/section/about/AUTOMATION.png",
      digitalization: "/assets/v1/section/about/Digitalization-.png",
      inHouseFacilities: "/assets/v1/section/about/in-house.png",
      jointVentures: "/assets/v1/section/about/join.png",
      enrichingService: "/assets/v1/section/about/RO.png"
    },
    footerDescription: "We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!",
    updatedAt: new Date().toISOString()
  }

  const loadFromStorage = (): AboutSectionData => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('about-section')
      if (stored) {
        try {
          return JSON.parse(stored)
        } catch (e) {
          console.error('Failed to parse stored about section', e)
        }
      }
    }
    return initialData
  }

  const aboutSection = ref<AboutSectionData>(loadFromStorage())

  const saveToStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('about-section', JSON.stringify(aboutSection.value))
    }
  }

  const getAboutSection = computed(() => aboutSection.value)

  const updateAboutSection = (data: Partial<AboutSectionData>) => {
    aboutSection.value = {
      ...aboutSection.value,
      ...data,
      updatedAt: new Date().toISOString()
    }
    saveToStorage()
  }

  const resetAboutSection = () => {
    aboutSection.value = initialData
    saveToStorage()
  }

  return {
    aboutSection,
    getAboutSection,
    updateAboutSection,
    resetAboutSection
  }
})