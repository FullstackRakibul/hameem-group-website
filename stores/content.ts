// ~/stores/content.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useContentStore = defineStore('content', () => {
  // Load from localStorage or use defaults
  const loadFromStorage = () => {
    if (process.client) {
      const stored = localStorage.getItem('about-content')

      console.log("Stored about-content:", stored)
      if (stored) {
        return JSON.parse(stored)
      }
    }
    return null
  }

  // Default about data
  const defaultAboutData = {
    description: "Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD. Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.",
    footerDescription: "We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!",
    // Stats data
    verticalCapacity: '4+',
    automation: '8+',
    digitalization: '6+',
    inHouseFacilities: '75,000+',
    jointVentures: '1,50 Lakh+',
    enrichingService: '1,50 Lakh+',
    // Image paths
    imagePaths: {
      verticalCapacity: '/assets/v1/section/about/garmentys.png',
      automation: '/assets/v1/section/about/AUTOMATION.png',
      digitalization: '/assets/v1/section/about/Digitalization-.png',
      inHouseFacilities: '/assets/v1/section/about/in-house.png',
      jointVentures: '/assets/v1/section/about/join.png',
      enrichingService: '/assets/v1/section/about/RO.png'
    },
    bgImage: '/assets/v1/raise-chart.gif'
  }

  // Reactive state
  const about = ref(loadFromStorage() || defaultAboutData)

  // Save to localStorage
  const saveAboutData = (data: any) => {
    about.value = { ...about.value, ...data }
    if (process.client) {
      localStorage.setItem('about-content', JSON.stringify(about.value))
    }
  }

  // Reset to defaults
  const resetAboutData = () => {
    about.value = defaultAboutData
    if (process.client) {
      localStorage.removeItem('about-content')
    }
  }

  return {
    about,
    saveAboutData,
    resetAboutData
  }
})