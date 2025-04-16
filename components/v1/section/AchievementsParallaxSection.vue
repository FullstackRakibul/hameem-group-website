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
              <img :src="achievement.image" :alt="achievement.title"
              class="rounded-full w-12 h-12 md:w-20 md:h-20 p-1 mb-3 md:mb-4 object-cover border-2 border-gray-200" />
            <span class="text-2xl font-bold">{{ achievement.year }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ achievement.title }}</h3>
          <p class="text-gray-300">{{ achievement.issuer }}</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  {
    year: "2021 - 2022",
    title: "BANGABANDHU SHEIKH MUJIB EXPORT TROPHY",
    issuer: "",
    image: "/assets/achivements/2021-2022/BSMET-21-22.JPG",
  },
  {
    year: "2020 - 2021",
    title: "NATIONAL EXPORT TROPHY GOLD",
    issuer: "",
    image: "/assets/achivements/2020-2021/NETG-20-21.jpg",
  },
  {
    year: "2019 - 2020",
    title: "NATIONAL EXPORT TROPHY ",
    issuer: "",
    image: "/assets/achivements/2019-2020/NET-19-20.JPG",
  },
  {
    year: "2018 - 2019",
    title: "NATIONAL EXPORT TROPHY",
    issuer: "",
    image: "/assets/achivements/2018-2019/NET-18-19.JPG",
  },
  {
    year: "2017",
    title: "KOHL'S GREATNESS AWARD 2017",
    issuer: "KOHL'S",
    image: "/assets/achivements/2017/KHOLS-2017.png",
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
