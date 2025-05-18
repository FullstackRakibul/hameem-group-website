<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <!-- Video Background -->
    <video 
      autoplay
      muted
      loop
      playsinline
      class="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
    >
      <source :src="videoSrc" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto">
      <div class="max-w-4xl bg-slate-100 bg-opacity-10 rounded-lg p-4">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate__animated animate__fadeInLeft">
          Digital Transformation
        </h1>
        
        <div class="space-y-4">
          <p class="text-xl md:text-2xl text-white opacity-90 animate__animated animate__fadeInLeft animate__delay-1s">
            Since 1980
          </p>
          <p class="text-3xl md:text-4xl text-white text-primary-300 font-semibold animate__animated animate__fadeInLeft animate__delay-2s">
            Premium Denim Manufacturing
          </p>
        </div>

        <!-- CTA Button -->
        <div class="mt-12 animate__animated animate__fadeInUp animate__delay-3s">
          <button class=" bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 hover:animate__pulse">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  videoSrc: {
    type: String,
    required: true,
    default: "/assets/v2/video/RFIDDIGITALVIDEO.mp4"
  }
});
</script>

<style scoped>
/* Custom animation delays */
.animate__delay-1s {
  --animate-delay: 0.5s;
}
.animate__delay-2s {
  --animate-delay: 1s;
}
.animate__delay-3s {
  --animate-delay: 1.5s;
}
</style>