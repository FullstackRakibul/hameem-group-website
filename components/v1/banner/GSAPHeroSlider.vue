<template>
  <!-- Slider container -->
  <div ref="sliderContainer" class="relative w-full h-screen overflow-hidden">
    <!-- Five full-screen slides -->
    <section 
      v-for="(slide, i) in slides" :key="i"
      class="absolute inset-0 flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${slide.image})` }"
      
    >
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <!-- Slide content (heading + description) -->
      <div class="relative z-10 text-center px-4 max-w-2xl">
        <h2 class="section-heading text-4xl md:text-5xl font-bold mb-4 text-white">
          {{ slide.title }}
        </h2>
        <p class="section-desc text-lg md:text-2xl text-gray-200">
          {{ slide.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Observer } from 'gsap/Observer'
const { gsap } = useGSAP() 

const sliderContainer = ref(null)

// Define the slide data (images, titles, descriptions)
const slides = ref([
  {
    title: "Textile Innovation",
    description: "Pioneering advanced fabrics and fashion trends with cutting-edge technology.",
    image: "/assets/home-banner-section-img-01.jpg"
  },
  {
    title: "Sustainable Practices",
    description: "Leading with eco-friendly manufacturing and renewable energy initiatives.",
    image: "/assets/home-banner-section-img-01.jpg"
  },
  {
    title: "Global Presence",
    description: "Delivering quality garments to top brands across five continents.",
    image: "/assets/home-banner-section-img-01.jpg"
  },
  {
    title: "Denim Excellence",
    description: "Crafting world-class denim and apparel with unmatched expertise.",
    image: "/assets/home-banner-section-img-01.jpg"
  },
  {
    title: "Quality & Trust",
    description: "Committed to superior quality control and trusted partnerships worldwide.",
    image: "/assets/home-banner-section-img-01.jpg"
  }
])

onMounted(() => {
  const gsap = useGSAP()           // Get GSAP instance from the composable&#8203;:contentReference[oaicite:3]{index=3}
  gsap.registerPlugin(Observer)    // Register the Observer plugin for scroll events

  // Query all slide elements and their sub-elements
  const sectionEls = sliderContainer.value.querySelectorAll('section')
  const headingEls = gsap.utils.toArray('.section-heading', sliderContainer.value)
  const descEls    = gsap.utils.toArray('.section-desc', sliderContainer.value)

  // Helper to cycle indices within [0, sections.length)
  const wrapIndex = gsap.utils.wrap(0, sectionEls.length)

  let currentIndex = -1
  let animating = false

  // Go to a particular slide index with given direction (1 for forward/down, -1 for backward/up)
  function gotoSection(index, direction) {
    index = wrapIndex(index)               // wrap index to valid range&#8203;:contentReference[oaicite:4]{index=4}
    animating = true
    const fromTop = direction === -1       // if scrolling up, the new section comes from top
    const dFactor = fromTop ? -1 : 1       // direction factor: 1 for down, -1 for up

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => { animating = false }
    })

    if (currentIndex >= 0) {
      // Animate the old (current) slide’s background subtly out of view
      tl.to(sectionEls[currentIndex], { yPercent: -15 * dFactor, autoAlpha: 0 }, 0)
    }

    // Set the new section to visible and on top
    gsap.set(sectionEls[index], { yPercent: 100 * dFactor, autoAlpha: 1, zIndex: 1 })

    // Animate the new section in from the appropriate direction
    tl.fromTo(sectionEls[index], 
      { yPercent: 100 * dFactor },   // start just off-screen (below or above)
      { yPercent: 0 }, 
      0
    )
    // Animate the new slide's heading and description with fade + upward slide
    tl.from(headingEls[index], 
      { opacity: 0, y: 50 * dFactor }, 
      0.2
    ).from(descEls[index], 
      { opacity: 0, y: 50 * dFactor }, 
      0.3
    )

    // Update current index
    currentIndex = index
  }

  // Create a GSAP Observer to listen for scroll (wheel, touch, pointer) and trigger section changes&#8203;:contentReference[oaicite:5]{index=5}
  Observer.create({
    target: sliderContainer.value,    // element to observe (the slider container)
    type: "wheel,touch,pointer",
    wheelSpeed: -1,                   // invert wheel scroll direction to natural feel
    tolerance: 10,
    preventDefault: true,
    onUp:   () => !animating && gotoSection(currentIndex + 1, 1),   // scroll up => next slide
    onDown: () => !animating && gotoSection(currentIndex - 1, -1)   // scroll down => previous slide
  })

  // Initialize the slider by showing the first slide
  gotoSection(0, 1)
})

onBeforeUnmount(() => {
  // Clean up the GSAP Observer on component unload to avoid event listeners leak
  Observer.getAll().forEach(obs => obs.kill())
})
</script>

<style scoped>
/* (Optional custom styles if needed; Tailwind handles most styling) */
</style>
