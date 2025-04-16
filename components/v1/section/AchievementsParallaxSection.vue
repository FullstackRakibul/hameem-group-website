<template>
  <section class="relative min-h-screen bg-fixed bg-cover bg-center"
    :style="{ backgroundImage: `url('/assets/v1/section/achievement-bg.jpg')` }">
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/70 z-10"></div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto px-4 py-24 text-white">
      <!-- Title -->
      <h2 class="text-6xl font-bold mb-20 text-center" v-gsap.whenVisible.fromTo="[
        { opacity: 0, y: -60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      ]">
        Our Achievements
      </h2>

      <!-- Timeline Container -->
      <section class="space-y-16" v-gsap.timeline.whenVisible="{
        start: 'top center',
        end: '+=100%',
        scrub: true,
      }">
        <div v-for="(achievement, index) in achievements" :key="index"
          class="relative p-6 border-l-4 border-white/80 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg max-w-xl"
          :class="{ 'ml-auto text-right': index % 2 === 0 }" v-gsap.add.from="{
            x: index % 2 === 0 ? 200 : -200,
            opacity: 0,
            scale: 0.95,
          }" v-gsap.add.to="{
  x: 0,
  opacity: 1,
  scale: 1,
  duration: 1.2,
  ease: 'power2.out',
}">
          <div class="flex items-center gap-4 mb-3" :class="{ 'justify-end flex-row-reverse': index % 2 === 0 }">
            <Icon name="pepicons-print:trophy-circle" class="w-10 h-10 bg-white rounded-full text-black" />
            <span class="text-2xl font-bold">{{ achievement.year }}</span>
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
    year: "2021-2022",
    title: "BANGABANDHU SHEIKH MUJIB EXPORT TROPHY",
    issuer: "",
  },
  {
    year: "2020-21",
    title: "NATIONAL EXPORT TROPHY GOLD",
    issuer: "",
  },
  {
    year: "2019-2020",
    title: "NATIONAL EXPORT TROPHY ",
    issuer: "",
  },
  {
    year: "2018-2019",
    title: "NATIONAL EXPORT TROPHY",
    issuer: "",
  },
  {
    year: "2017",
    title: "KOHL'S GREATNESS AWARD 2017",
    issuer: "KOHL'S",
  },
];
</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* Hide ScrollTrigger markers if visible */
:deep(.gsap-marker-start),
:deep(.gsap-marker-end) {
  display: none !important;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2.5rem;
  }

  .text-2xl {
    font-size: 1.25rem;
  }
}
</style>
