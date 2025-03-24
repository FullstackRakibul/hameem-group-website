<template>
  <section class="w-full mx-auto px-4 md:px-24 py-4">
    <!-- Section Header -->
    <SectionHeader
      title="Our Core Strengths"
      subtitle="Driving Excellence Through Innovation, Quality, and Sustainable Practices"
      buttonTextLink="/about"
      buttonText="Discover Our Capabilities" 
    />

    <!-- Strengths Section -->
    <div class="my-6">
      <div class="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        <!-- Card 1 -->
        <div class="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-8 text-center">
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div class="absolute inset-0 bg-primary rounded-xl transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-500"></div>
              <Icon name="fluent-mdl2:delivery-truck" class="relative text-white text-3xl z-10" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Advanced Infrastructure</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify">
              Cutting-edge facilities including automated production lines, specialized washing units, and integrated packaging solutions.
            </p>
          </div>
          <div class="px-8 pb-6 text-center">
            <span class="inline-block text-primary font-semibold text-sm tracking-wide group-hover:underline">
              Explore Facilities →
            </span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-8 text-center">
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div class="absolute inset-0 bg-primary rounded-xl transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-500"></div>
              <Icon name="mdi:worker" class="relative text-white text-3xl z-10" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Expert Workforce</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify">
              50,000+ skilled professionals with specialized training in textile manufacturing and quality control.
            </p>
          </div>
          <div class="px-8 pb-6 text-center">
            <span class="inline-block text-primary font-semibold text-sm tracking-wide group-hover:underline">
              Meet Our Team →
            </span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-8 text-center">
            <div class="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <div class="absolute inset-0 bg-primary rounded-xl transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-500"></div>
              <Icon name="material-symbols:eco" class="relative text-white text-3xl z-10" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Sustainable Operations</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify">
              LEED-certified facilities, water recycling systems, and eco-friendly materials reducing environmental impact.
            </p>
          </div>
          <div class="px-8 pb-6 text-center">
            <span class="inline-block text-primary font-semibold text-sm tracking-wide group-hover:underline">
              Our Green Initiatives →
            </span>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="relative group overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="p-8 text-center">
            <div class="relative w-20 h-20 mx-auto flex items-center justify-center ">
              <div class="absolute inset-0  bg-primary rounded-xl transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-500"></div>
              <Icon name="mdi:earth" class="relative text-white text-3xl  z-10" />
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Global Network</h3>
            <p class="text-gray-600 font-medium leading-relaxed text-justify">
              Strategic partnerships with 50+ international brands across North America, Europe, and Asia.
            </p>
          </div>
          <div class="px-8 pb-6 text-center">
            <span class="inline-block text-primary font-semibold text-sm tracking-wide group-hover:underline">
              Our Global Reach →
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '~/components/v2/ui/SectionHeader.vue';
</script>

<style scoped>
/* Enhanced centering for icons */
.relative.w-20.h-20 {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Smooth hover transitions */
.card-hover {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .strength-card {
    padding: 1.5rem;
  }
}
</style>