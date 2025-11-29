<template>
  <div class="achievements-timeline w-full">
    <!-- Main Display Card -->
    <div v-if="awards.length > 0"
      class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in-up">
      <div class="flex flex-col lg:flex-row">
        <!-- Text Section -->
        <div class="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
          <!-- Year Badge -->
          <div
            class="inline-block px-4 py-2 bg-white/10 hover:bg-white/15 rounded-full text-xs md:text-sm text-gray-300 w-fit mb-4 md:mb-6 transition-colors duration-300">
            {{ selectedAward.year }}
          </div>

          <!-- Title -->
          <h3
            class="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance transition-all duration-500">
            {{ selectedAward.title }}
          </h3>

          <!-- Description -->
          <p v-if="selectedAward.description"
            class="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 transition-all duration-500">
            {{ selectedAward.description }}
          </p>

          <!-- Issuer -->
          <div v-if="selectedAward.issuer"
            class="flex items-center space-x-3 text-gray-400 transition-all duration-500">
            <div class="w-2 h-2 bg-white/50 rounded-full"></div>
            <span class="text-xs md:text-sm font-medium">{{ selectedAward.issuer }}</span>
          </div>
        </div>

        <!-- Image Section -->
        <div class="lg:w-1/2 p-4 md:p-6 lg:p-10 flex items-center justify-center order-1 lg:order-2">
          <div class="relative group w-full max-w-sm lg:max-w-md">
            <!-- Image Loading State -->
            <div v-if="imageLoading"
              class="w-full aspect-video flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 animate-pulse">
              <div class="w-12 h-12 border-4 border-white/20 border-t-white/50 rounded-full animate-spin"></div>
            </div>

            <!-- Image Display -->
            <img v-show="!imageLoading" :key="selectedAward.year"
              :src="selectedAward.image || '/placeholder.svg?height=400&width=500'" :alt="selectedAward.title"
              :loading="lazyLoadImages ? 'lazy' : 'eager'" decoding="async"
              class="w-full aspect-video rounded-2xl shadow-2xl border border-white/20 object-cover group-hover:scale-105 transition-transform duration-500"
              @load="imageLoading = false" @error="handleImageError" />

            <!-- Image Error State -->
            <div v-if="imageError"
              class="absolute inset-0 w-full aspect-video flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10">
              <svg class="w-16 h-16 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-sm text-gray-400">Image Not Available</p>
            </div>

            <!-- Hover Glow Effect -->
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-16 text-center">
      <p class="text-gray-400 text-lg">No achievements to display yet.</p>
    </div>

    <!-- Carousel Section -->
    <div v-if="awards.length > 0"
      class="mt-6 md:mt-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 md:p-6">
      <div role="listbox" :aria-activedescendant="`award-${selectedIndex}`" tabindex="0"
        class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3 md:gap-4 pb-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-xl"
        @keydown="handleKeyboardNav" @keydown.left="selectPrevious" @keydown.right="selectNext"
        @keydown.home="selectFirst" @keydown.end="selectLast">
        <div v-for="(award, index) in awards" :key="index" :id="`award-${index}`" role="option"
          :aria-selected="selectedIndex === index" :aria-label="`${award.year} - ${award.title}`"
          class="group min-w-max focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
          @click="selectAward(index)" @keydown.enter="selectAward(index)" @keydown.space.prevent="selectAward(index)">
          <div :class="[
            'relative px-3 md:px-4 py-3 md:py-4 rounded-2xl cursor-pointer transition-all duration-300 transform',
            selectedIndex === index
              ? 'bg-white/15 border border-white/30 shadow-xl scale-105'
              : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
          ]">
            <!-- Thumbnail Image -->
            <img :src="award.image || '/placeholder.svg?height=96&width=120'" :alt="award.title" loading="lazy"
              decoding="async"
              class="h-20 md:h-24 rounded-lg object-cover mb-2 transition-transform duration-300 group-hover:scale-110" />

            <!-- Year Label -->
            <p class="text-xs md:text-sm text-white font-semibold text-center line-clamp-2 leading-tight">
              {{ award.year }}
            </p>

            <!-- Selection Indicator -->
            <div v-if="selectedIndex === index"
              class="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg animate-scale-in">
              <svg class="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Navigation Hint (Mobile) -->
      <p class="text-xs text-gray-500 text-center mt-3 md:hidden">
        Swipe or tap to navigate
      </p>
    </div>

    <!-- Keyboard Navigation Hint -->
    <p class="text-xs text-gray-500 text-center mt-4 hidden md:block">
      Use arrow keys to navigate • Enter to select
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

interface Award {
  year: string
  title: string
  description?: string
  issuer?: string
  image?: string
}

interface AchievementsTimelineProps {
  awards: Award[]
  initialIndex?: number
  imgSizes?: { small: number; medium: number; large: number }
  contrast?: 'light' | 'dark'
  enableKeyboardNav?: boolean
  animationDuration?: number
  lazyLoadImages?: boolean
}

const props = withDefaults(defineProps<AchievementsTimelineProps>(), {
  initialIndex: 0,
  contrast: 'dark',
  enableKeyboardNav: true,
  animationDuration: 500,
  lazyLoadImages: true,
})

const emit = defineEmits<{
  select: [award: Award, index: number]
  navigate: [direction: 'left' | 'right']
  imageError: [award: Award, error: Error]
}>()

// State
const selectedIndex = ref(props.initialIndex)
const imageLoading = ref(false)
const imageError = ref(false)

// Computed
const selectedAward = computed(() => props.awards[selectedIndex.value] || props.awards[0])

// Methods
function selectAward(index: number) {
  if (index >= 0 && index < props.awards.length) {
    selectedIndex.value = index
    imageLoading.value = true
    imageError.value = false
    emit('select', props.awards[index], index)
  }
}

function selectNext() {
  const nextIndex = selectedIndex.value + 1
  if (nextIndex < props.awards.length) {
    selectAward(nextIndex)
    emit('navigate', 'right')
  }
}

function selectPrevious() {
  const prevIndex = selectedIndex.value - 1
  if (prevIndex >= 0) {
    selectAward(prevIndex)
    emit('navigate', 'left')
  }
}

function selectFirst() {
  selectAward(0)
}

function selectLast() {
  selectAward(props.awards.length - 1)
}

function handleKeyboardNav(event: KeyboardEvent) {
  if (!props.enableKeyboardNav) return

  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      selectPrevious()
      break
    case 'ArrowRight':
      event.preventDefault()
      selectNext()
      break
    case 'Home':
      event.preventDefault()
      selectFirst()
      break
    case 'End':
      event.preventDefault()
      selectLast()
      break
  }
}

function handleImageError(error: Event) {
  imageError.value = true
  imageLoading.value = false
  const errorObj = new Error('Image failed to load')
  emit('imageError', selectedAward.value, errorObj)
}

// Watch for prop changes
watch(() => props.awards, () => {
  if (props.awards.length > 0 && selectedIndex.value >= props.awards.length) {
    selectedIndex.value = 0
  }
})

// Lifecycle
onMounted(() => {
  if (props.awards.length > 0) {
    selectAward(props.initialIndex)
  }
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Smooth scroll snap */
.snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}
</style>