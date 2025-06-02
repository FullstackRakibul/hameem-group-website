<template>
  <section class="minimal-gallery">
    <div class="gallery-container">
      <h2 v-if="title" class="gallery-title">{{ title }}</h2>
      
      <div class="gallery-grid">
        <div
          v-for="(item, index) in items"
          :key="item.id || index"
          class="gallery-item"
          @click="openLightbox(index)"
        >
          <div class="image-container">
            <img 
              :src="item.src" 
              :alt="item.alt || 'Gallery image'" 
              class="gallery-image"
              loading="lazy"
            />
            <div class="image-overlay">
              <h3 class="overlay-title">{{ item.caption }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox for image viewing -->
    <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">×</button>
      <div class="lightbox-content">
        <button v-if="items.length > 1" class="lightbox-nav prev" @click.stop="prevImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <img 
          :src="currentItem.src" 
          :alt="currentItem.alt || 'Gallery image'" 
          class="lightbox-image"
        />
        <button v-if="items.length > 1" class="lightbox-nav next" @click.stop="nextImage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <div class="lightbox-caption">
        <h3>{{ currentItem.caption }}</h3>
        <p v-if="currentItem.description">{{ currentItem.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// --- Interfaces ---
interface GalleryItem {
  id?: string | number
  src: string
  alt?: string
  caption: string
  description?: string
}

// --- Props ---
interface Props {
  items?: GalleryItem[]
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => defaultGalleryItems,
  title: '— GALLERY',
})

// --- Emits ---
const emit = defineEmits(['item-click'])

// --- Lightbox State ---
const lightboxOpen = ref(false)
const currentIndex = ref(0)
const currentItem = computed(() => props.items[currentIndex.value])

// --- Methods ---
const openLightbox = (index: number) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
  emit('item-click', props.items[index])
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length
}

// Handle keyboard navigation
const handleKeyDown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  
  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      prevImage()
      break
  }
}

// Add and remove event listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

// --- Default Gallery Items ---
const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Tea tasting facility',
    caption: 'Tea tasting',
    description: 'Modern tea house with panoramic views'
  },
  {
    id: 2,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Library and reading space',
    caption: 'Plethora of books',
    description: 'Contemporary library and reading space'
  },
  {
    id: 3,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Agricultural innovation center',
    caption: 'Chrysanthemum farm',
    description: 'Agricultural innovation center'
  },
  {
    id: 4,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Educational farming facilities',
    caption: 'Agricultural workshops',
    description: 'Educational farming facilities'
  },
  {
    id: 5,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Cultural venue',
    caption: 'Performances',
    description: 'Multi-purpose cultural venue'
  },
  {
    id: 6,
    src: '/placeholder.svg?height=300&width=400',
    alt: 'Community development',
    caption: 'A miniature village',
    description: 'Sustainable community development'
  }
]
</script>

<style scoped>
.minimal-gallery {
  width: 100%;
  background-color: #f5f5f5;
  padding: 80px 0;
}

.gallery-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 60px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.image-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 4px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 40px 20px 20px;
  color: white;
}

.overlay-title {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: lowercase;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 40px;
  box-sizing: border-box;
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 80vh;
}

.lightbox-image {
  max-width: 90%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 4px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1001;
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
}

.lightbox-nav.prev {
  left: 20px;
}

.lightbox-nav.next {
  right: 20px;
}

.lightbox-nav:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-caption {
  color: white;
  text-align: center;
  margin-top: 20px;
  max-width: 600px;
}

.lightbox-caption h3 {
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 10px 0;
  letter-spacing: 0.05em;
}

.lightbox-caption p {
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-container {
    padding: 0 30px;
  }
  
  .gallery-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .image-container {
    height: 240px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .minimal-gallery {
    padding: 60px 0;
  }
  
  .gallery-container {
    padding: 0 20px;
  }
  
  .gallery-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .image-container {
    height: 200px;
  }
  
  .overlay-title {
    font-size: 0.9rem;
  }
  
  .lightbox-nav.prev {
    left: 10px;
  }
  
  .lightbox-nav.next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .gallery-title {
    font-size: 1.5rem;
  }
  
  .image-container {
    height: 220px;
  }
  
  .lightbox {
    padding: 20px;
  }
  
  .lightbox-nav {
    width: 40px;
    height: 40px;
  }
}
</style>