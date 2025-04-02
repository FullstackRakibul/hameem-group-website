<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

defineProps({
  videoSrc: {
    type: String,
    required: true,
    default: "/assets/v2/video/RFIDDIGITALVIDEO.mp4"
  }
})

const sectionRef = ref<HTMLElement | null>(null)
const videoContainerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const secondaryContentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  setupScrollAnimations()
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

const setupScrollAnimations = () => {
  // Ensure ScrollTrigger is cleared on re-mount
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Sticky video effect
  gsap.to(videoContainerRef.value, {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top top",
      end: "bottom center",
      scrub: 0.5,
      pin: true, // Keeps video fixed
      anticipatePin: 1
    }
  });

  // Fade out left content
  gsap.to(contentRef.value, {
    opacity: 0,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top center",
      end: "center center",
      scrub: 0.5
    }
  });

  // Move video to the left
  gsap.to(videoContainerRef.value, {
    left: "0%",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top center",
      end: "center center",
      scrub: 0.5
    }
  });

  // Make sure secondary content fades in at the right time
  gsap.fromTo(secondaryContentRef.value,
    { opacity: 0, x: "100%" },  // Start from right
    {
      opacity: 1, x: "0%", duration: 1.5, ease: "power2.out",
      scrollTrigger: {
        trigger: secondaryContentRef.value,
        start: "center center",
        end: "bottom center",
        scrub: 0.5
      }
    }
  );

  // Unpin the video at the right moment
  ScrollTrigger.create({
    trigger: secondaryContentRef.value,
    start: "bottom bottom",
    onEnter: () => {
      ScrollTrigger.getById("videoPin")?.kill(); // Unpin when done
    }
  });
};
</script>

<template>
  <section ref="sectionRef" class="relative h-[200vh] w-full overflow-hidden">
    <!-- Sticky Video Container -->
    <div ref="videoContainerRef" class="absolute top-0 h-screen w-1/2 right-0 will-change-transform">
      <video class="w-full h-full object-cover" autoplay muted loop playsinline>
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Initial Content -->
    <div ref="contentRef" class="absolute top-0 h-screen w-1/2 left-0 flex items-center pr-10 z-10">
      <div class="pl-20">
        <h3 class="text-6xl pb-2 font-semibold font-helvetica text-[#454242] tracking-tight">
          HA MEEM
        </h3>
        <p class="tracking-widest text-black font-titillium font-medium mb-8">
          THE ART OF DESIGN
        </p>

        <div class="content-section">
          <h4 class="text-2xl font-semibold text-[#454242] font-helvetica mb-4">
            Welcome !
          </h4>
          <p class="text-justify text-sm text-black mb-8">
            We're delighted to have you here. Explore our carefully crafted collection...
          </p>
          <button class="bg-[#454242] text-white px-8 py-3 hover:bg-opacity-90 transition-all">
            About Us
          </button>
        </div>
      </div>
    </div>

    <!-- Secondary Content -->
    <div ref="secondaryContentRef" class="absolute top-0 h-screen w-1/2 right-0 flex items-center pl-10 opacity-0">
      <div class="pr-20">
        <!-- Add your secondary content here -->
        <slot name="secondary-content">

        </slot>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
section {
  isolation: isolate;
}

video {
  transform: translateZ(0);
}

.content-section {
  transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Scrollbar styling for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .absolute.top-0 {
    width: 100% !important;
    padding: 0 1rem;
  }

  .pl-20 {
    padding-left: 2rem;
  }

  .pr-20 {
    padding-right: 2rem;
  }

  h3 {
    font-size: 3rem;
  }
}
</style>