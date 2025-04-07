<template>
  <section class="relative min-h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>

    <!-- Content Container -->
    <div class="relative z-20 container mx-auto px-4 py-20 text-white">
      <!-- Title Section -->
      <h2 class="text-5xl font-bold mb-16 text-center"
        v-gsap.whenVisible.fromTo="[{ opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }]">
        Our Achievements
      </h2>

      <!-- Achievements Timeline -->
      <section v-gsap.timeline.whenVisible="{ start: 'top center', end: 'bottom center', scrub: 1 }">
        <!-- Achievement Items -->
        <div v-for="(achievement, index) in achievements" :key="index"
          class="mb-12 p-6 border-l-4 border-white/80 bg-white/20 backdrop-blur-sm"
          :class="{ 'ml-auto': index % 2 === 0 }" v-gsap.add.to="{
            x: index % 2 === 0 ? 300 : -300,
            opacity: index % 2 === 0 ? 0 : 1
          }" v-gsap.add.withPrevious.to="{
            x: 0,
            opacity: 1,
            duration: 1.5
          }">
          <div class="flex items-center gap-4 mb-2">
            <div class="w-3 h-3 bg-white rounded-full"></div>
            <span class="text-white font-bold">{{ achievement.year }}</span>
          </div>
          <h3 class="text-2xl font-semibold mb-2">{{ achievement.title }}</h3>
          <p class="text-gray-300">{{ achievement.issuer }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  {
    year: "2010",
    title: "Annual Winner of Strategic Quality Assurance Dept.",
    issuer: "KOHLS"
  },
  {
    year: "2009",
    title: "Technical Performance Award",
    issuer: "JCPenny"
  },
  {
    year: "2011",
    title: "Technical Design Certification",
    issuer: "KOHLS"
  },
  {
    year: "2009",
    title: "Annual Winner of Strategic Quality Assurance Dept.",
    issuer: "KOHLS"
  }
];
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Custom Scroll Trigger Adjustments */
:deep(.gsap-marker-start),
:deep(.gsap-marker-end) {
  visibility: hidden;
}

/* Achievement Item Transitions */
div[class*="mb-12"] {
  transition: all 0.3s ease-in-out;
  max-width: 600px;
}

@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }

  div[class*="mb-12"] {
    max-width: 100%;
  }
}
</style>