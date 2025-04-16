<template>
  <!-- Slider container -->
   
  <div ref="sliderContainer" class="relative w-full h-screen overflow-hidden">
    <!-- Five full-screen slides -->
    <section 
  v-for="(slide, i) in slides" 
  :key="i"
  class="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-0"
  :style="{ backgroundImage: `url(${slide.image})` }"
>
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <!-- Slide content (heading + description) -->
      <div class="relative z-10 text-center px-4 max-w-2xl">
        <h2
          class="section-heading text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          {{ slide.title }}
        </h2>
        <p class="section-desc text-lg md:text-2xl text-gray-200 p-5">
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
    image: "/assets/v1/section/IMG_7271.JPG"
  },
  {
    title: "Global Presence",
    description: "Delivering quality garments to top brands across five continents.",
    image: "/assets/v1/section/IMG_9487.JPG"
  },
  {
    title: "Denim Excellence",
    description: "Crafting world-class denim and apparel with unmatched expertise.",
    image: "/assets/v1/section/PAKAGING/denim-bannner-main.jpg"
  },
  {
    title: "Quality & Trust",
    description: "Committed to superior quality control and trusted partnerships worldwide.",
    image: "/assets/v1/section/IMG_7234.JPG"
  }
])
onMounted(() => {
  const gsap = useGSAP() // Get GSAP instance from the composable
  gsap.registerPlugin(Observer) // Register the Observer plugin for scroll events

  // Query all slide elements and their sub-elements
  const sectionEls = sliderContainer.value.querySelectorAll('section')
  const headingEls = gsap.utils.toArray('.section-heading', sliderContainer.value)
  const descEls = gsap.utils.toArray('.section-desc', sliderContainer.value)

  // Hide all slides initially
  gsap.set(sectionEls, { autoAlpha: 0 })

  // Helper to wrap index
  const wrapIndex = gsap.utils.wrap(0, sectionEls.length)

  let currentIndex = -1
  let animating = false

  // Go to a particular slide index with given direction (1 for forward/down, -1 for backward/up)
  function gotoSection(index, direction) {
    index = wrapIndex(index)
    animating = true
    const fromTop = direction === -1
    const dFactor = fromTop ? -1 : 1

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => { animating = false }
    })

    if (currentIndex >= 0) {
      // Animate out the old slide
      tl.to(sectionEls[currentIndex], { yPercent: -15 * dFactor, autoAlpha: 0 }, 0)
    }

    // Bring new slide in
    gsap.set(sectionEls[index], { yPercent: 100 * dFactor, autoAlpha: 1, zIndex: 1 })
    tl.fromTo(sectionEls[index],
      { yPercent: 100 * dFactor },
      { yPercent: 0 },
      0
    )
    // Animate heading and description
    tl.from(headingEls[index], { opacity: 0, y: 50 * dFactor }, 0.2)
      .from(descEls[index], { opacity: 0, y: 50 * dFactor }, 0.3)

    currentIndex = index
  }

  // Create a GSAP Observer to listen for scroll events
  Observer.create({
    target: sliderContainer.value,
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: true,
    // onUp: scroll up => normally goes to next slide
    onUp: () => {
      if (!animating) {
        if (currentIndex < sectionEls.length - 1) {
          gotoSection(currentIndex + 1, 1)
        } else {
          // Last slide: animate slider container off-screen
          gsap.to(sliderContainer.value, {
            y: "-100%",
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              // Remove observer so normal scroll resumes
              Observer.getAll().forEach(obs => obs.kill())
            }
          })
        }
      }
    },
    // onDown: scroll down => goes to previous slide
    onDown: () => {
      if (!animating && currentIndex > 0) {
        gotoSection(currentIndex - 1, -1)
      }
    }
  })

  // Initialize the slider by showing the first slide
  gotoSection(0, 1)
})

onBeforeUnmount(() => {
  Observer.getAll().forEach(obs => obs.kill())
})



</script>


<style scoped>
section {
  z-index: 0;
  transition: visibility 0.01s 1.2s; /* Match animation duration */
}
body.lock-scroll {
  overflow: hidden;
}
</style>
