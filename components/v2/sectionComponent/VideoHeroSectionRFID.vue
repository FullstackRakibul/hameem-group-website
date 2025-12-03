<template>
  <section class="relative w-full flex items-center mb-6 justify-center overflow-hidden" :class="{
    'min-h-screen': !isSmall,
    'min-h-[75vh] py-12': isSmall
  }">
    <!-- Video Background (kept as-is for desktop & mobile) -->
    <video autoplay muted loop playsinline :poster="posterSrc" class="absolute inset-0 z-0 w-full h-full object-cover">
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Dark Overlay (stronger on mobile for readability) -->
    <div class="absolute inset-0 z-10" :class="isSmall ? 'bg-black/70' : 'bg-black/40'"></div>

    <!-- Content -->
    <div class="container relative z-20 mx-auto px-4 sm:px-6">
      <div class="max-w-4xl bg-slate-100 bg-opacity-10 rounded-lg p-6 sm:p-8 md:p-10">
        <!-- Headline -->
        <h1 class="font-bold text-white mb-6 animate__animated animate__fadeInLeft" :class="{
          'text-2xl leading-tight': isSmall,
          'text-3xl sm:text-5xl md:text-6xl lg:text-7xl': !isSmall
        }">
          Digital Transformation
        </h1>

        <!-- Body -->
        <div class="space-y-4">
          <p class="text-white animate__animated animate__fadeInLeft animate__delay-2s" :class="{
            'text-sm leading-relaxed opacity-95': isSmall,
            'text-lg md:text-xl text-primary-300 opacity-95': !isSmall
          }" style="white-space: pre-line;">
            We are redefining Garment manufacturing with cutting-edge technology and Innovation,
            as part of our value addition initiative. we’ve implemented Eliot — a state-of-the-art
            IT solution designed to enhance efficiency, quality, transparency and traceability across
            our manufacturing processes. Join us on a journey to explore how our advanced systems are
            transforming operations, empowering your supply chain and delivering unparalleled value to your business.
            The system captures every sewing operation details in real time. Imagine a factory that speaks to you!
          </p>
        </div>

        <!-- CTA: full width on mobile, regular on desktop -->
        <div class="mt-8 animate__animated animate__fadeInUp animate__delay-3s">
          <button class="rounded-lg font-semibold transition-colors duration-300 hover:animate__pulse"
            :class="isSmall ? 'w-full py-4 text-base bg-primary text-white' : 'px-8 py-4 text-lg bg-primary text-white'"
            aria-label="Explore Collection">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  videoSrc: {
    type: String,
    required: true,
    default: 'https://api.hameemgroup.com:9012/Resources/hameem-group-website/RFIDDIGITALVIDEO.mp4'
  },
  posterSrc: {
    type: String,
    required: false,
    default: 'https://api.hameemgroup.com:9012/Resources/hameem-group-website/denim-stickyBanner-hameem-group.jpeg'
  }
})

// small device detection (simple, avoids extra libs)
const isSmall = ref(false)

const updateSize = () => {
  // treat widths <= 640px as "mobile" here; you can adjust breakpoint
  isSmall.value = window.innerWidth <= 640
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize, { passive: true })
})
</script>

<style scoped>
/* small animation delay helpers (kept consistent) */
.animate__delay-1s {
  --animate-delay: 0.5s;
}

.animate__delay-2s {
  --animate-delay: 1s;
}

.animate__delay-3s {
  --animate-delay: 1.5s;
}

/* Avoid the video forcing layout shifts on tiny devices */
video {
  display: block;
  max-width: none;
  /* keeps aspect fill and prevents weird letterboxing */
  object-position: center center;
}

/* Improve tap targets and remove highlight on iOS */
button {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Prevent container overflow on small screens */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .max-w-4xl {
    width: 100%;
  }
}

/* optional: slightly reduce animation intensity on mobile for perf */
@media (max-width: 640px) {
  .animate__animated {
    animation-duration: 0.9s;
  }
}

/* accessibility: ensure sufficient contrast for text on small screens */
@media (max-width: 640px) {

  h1,
  p,
  button {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
  }
}
</style>