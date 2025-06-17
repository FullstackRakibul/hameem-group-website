<template>
      <!-- Decorative Underline -->
      <div class=" w-full flex justify-center">
        <svg 
          width="300" 
          height="60" 
          viewBox="0 0 300 60" 
          class="decorative-underline"
          v-gsap:whenVisible.from="{ 
            opacity: 0, 
            scale: 0.5, 
            delay: 1.5, 
            duration: 1.5, 
            ease: 'elastic.out(1, 0.5)' 
          }"
        >
          <!-- Main flowing line -->
          <path 
            d="M20 30 Q75 15 150 30 T280 30" 
            stroke="currentColor" 
            stroke-width="2" 
            fill="none" 
            class="text-primary"
          />
          
          <!-- Decorative swirls -->
          <path 
            d="M15 30 Q10 25 15 20 Q20 25 15 30" 
            stroke="currentColor" 
            stroke-width="1.5" 
            fill="none" 
            class="text-primary/70"
          />
          
          <path 
            d="M285 30 Q290 25 285 20 Q280 25 285 30" 
            stroke="currentColor" 
            stroke-width="1.5" 
            fill="none" 
            class="text-primary/70"
          />
          
          <!-- Small leaves/flourishes -->
          <ellipse cx="60" cy="25" rx="3" ry="6" fill="currentColor" class="text-primary/60" transform="rotate(45 60 25)"/>
          <ellipse cx="240" cy="35" rx="3" ry="6" fill="currentColor" class="text-primary/60" transform="rotate(-45 240 35)"/>
          
          <!-- Center ornament -->
          <circle cx="150" cy="30" r="3" fill="currentColor" class="text-primary"/>
          <path 
            d="M150 25 L155 30 L150 35 L145 30 Z" 
            fill="currentColor" 
            class="text-primary/40"
          />
        </svg>
      </div>
</template>

<script setup>
// Your existing script content
</script>

<style scoped>
.decorative-underline {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Animation for the decorative line drawing effect */
.decorative-underline path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease-in-out forwards;
  animation-delay: 1.5s;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .decorative-underline {
    width: 250px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .decorative-underline {
    width: 200px;
    height: 40px;
  }
}
</style>
