<template>
  <!-- AchievementsSection: scroll-animated corporate section -->
  <section class="achievements-section">
    <div class="section-inner">
      <!-- Text Block: Heading and Subtext -->
      <div class="text-block">
        <h2 v-gsap:from="{
          y: 50, opacity: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: '.achievements-section', start: 'top 80%', toggleActions: 'play none none none' }
        }">
          {{ heading }}
        </h2>
        <p v-gsap:from="{
          y: 50, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.15,
          scrollTrigger: { trigger: '.achievements-section', start: 'top 80%', toggleActions: 'play none none none' }
        }">
          {{ subtext }}
        </p>
      </div>

      <!-- Visual Block: Image with parallax scroll effect -->
      <div class="visual" v-gsap:to="{
        y: -50,
        scrollTrigger: { trigger: '.achievements-section', start: 'top bottom', end: 'bottom top', scrub: true }
      }">
        <img :src="imageSrc" :alt="altText" v-gsap:from="{
          y: 20, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.3,
          scrollTrigger: { trigger: '.achievements-section', start: 'top 80%', toggleActions: 'play none none none' }
        }" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Props to make the component reusable for different content
defineProps({
  heading: { type: String, default: 'Our Achievements' },
  subtext: { type: String, default: 'Ha-Meem Group’s journey is marked by innovation and growth in the textile industry.' },
  imageSrc: { type: String, default: 'assets/achievements-visual.jpg' },  // Path to an illustrative image (e.g., factory or product)
  altText: { type: String, default: 'Achievements Visual' }
});
</script>

<style scoped>
.achievements-section {
  padding: 4rem 1rem;
  /* generous padding for spacing */
  background: #fff;
  /* clean white background (could use a brand color or light gray) */
  color: #333;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* space between text and image */
}

.text-block {
  flex: 1 1 50%;
}

.text-block h2 {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.text-block p {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  /* limit width for readability */
}

.visual {
  flex: 1 1 50%;
  /* The .visual container is a flex item. We allow GSAP to move it for parallax. */
}

.visual img {
  width: 100%;
  height: auto;
  display: block;
  /* Consider adding object-fit: cover if you set a fixed height */
}

@media (max-width: 768px) {
  .section-inner {
    flex-direction: column;
    text-align: center;
  }

  .text-block,
  .visual {
    flex: 1 1 auto;
    width: 100%;
  }

  .visual {
    margin-top: 2rem;
  }
}
</style>
