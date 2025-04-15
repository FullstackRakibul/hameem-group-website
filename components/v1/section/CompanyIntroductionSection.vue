<template>
  <section v-gsap.timeline.pinned>
    <div class="Dot" v-gsap.add.to="{ width: '800px' }"></div>
    <h1 v-gsap.add.fromTo="[{ opacity: 0, y: 32 }, { opacity: 1, y: 0 }]" v-gsap.add.to="{ opacity: 0, y: -32 }">New era
      of</h1>
    <h1 v-gsap.add.withPrevious.fromTo="[{ opacity: 0, y: 32 }, { opacity: 1, y: 0 }]"
      v-gsap.add.to="{ opacity: 0, y: -32 }">animation</h1>
  </section>
</template>

<script setup>
// No script logic needed for this demo
</script>

<style scoped>
.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f9f9f9;
  color: #111;
  padding: 2rem;
}

.dot {
  width: 100px;
  height: 8px;
  background: #111;
  margin-bottom: 2rem;
  transition: width 0.5s ease;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 1.5rem 0;
  max-width: 800px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
