<template>
  <section id="index-client" class=" py-28 overflow-hidden bg-gray-100">
    <div class="container mx-auto">
      <!-- Section Title & Description -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-6xl font-bold text-gray-800">
          Our Clients
        </h2>
        <p class="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Partnering with the world’s most renowned fashion brands, we deliver excellence through premium craftsmanship, sustainable innovation, and a commitment to quality.
        </p>
      </div>
    </div>

    <div class="relative w-full overflow-hidden mt-8">
      <!-- First Row (Left to Right) -->
      <div class="flex space-x-8 animate-slide-right">
        <div v-for="(client, index) in repeatedClients" :key="'top-' + index" class="flex items-center">
          <img :src="client.icon" :alt="client.name || 'Client Logo'" class=" h-32 object-contain" />
        </div>
      </div>

      <!-- Second Row (Right to Left) -->
      <div class="flex space-x-8 animate-slide-left mt-6">
        <div v-for="(client, index) in repeatedClients" :key="'bottom-' + index" class="flex items-center">
          <img :src="client.icon" :alt="client.name || 'Client Logo'" class=" h-44 object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "../ui/SectionHeader.vue";

const clients = [
  { id: 1, icon: "/assets/v2/clients/abercrombie.jpg" },
  { id: 2, icon: "/assets/v2/clients/aeropostale.jpg" },
  { id: 3, icon: "/assets/v2/clients/American Eagle.jpg" },
  { id: 4, icon: "/assets/v2/clients/Banana republic.jpg" },
  { id: 5, icon: "/assets/v2/clients/calvin klein.jpg" },
  { id: 6, icon: "/assets/v2/clients/celio.jpg" },
  { id: 7, icon: "/assets/v2/clients/Dickies.jpg" },
  { id: 8, icon: "/assets/v2/clients/H&M.jpg" },
  { id: 9, icon: "/assets/v2/clients/HOLLISTER.jpg" },
  { id: 10, icon: "/assets/v2/clients/JCPENNEY.jpg" },
  { id: 11, icon: "/assets/v2/clients/Justice.jpg" },
  { id: 12, icon: "/assets/v2/clients/KOHL'S.jpg" },
  { id: 13, icon: "/assets/v2/clients/Levis.jpg" },
  { id: 14, icon: "/assets/v2/clients/NEXT.jpg" },
  { id: 15, icon: "/assets/v2/clients/OLD NAVY.jpg" },
  { id: 16, icon: "/assets/v2/clients/Oshkosh.jpg" },
  { id: 17, icon: "/assets/v2/clients/PVH.jpg" },
  { id: 18, icon: "/assets/v2/clients/Reitmans.jpg" },
  { id: 19, icon: "/assets/v2/clients/The north face.jpg" },
  { id: 20, icon: "/assets/v2/clients/TOMMY HILFIGER.jpg" },
  { id: 21, icon: "/assets/v2/clients/United legwear.jpg" },
  { id: 22, icon: "/assets/v2/clients/VF LOGO .jpg" },
  { id: 23, icon: "/assets/v2/clients/ZARA.jpg" }
];

// Duplicate the list to make the animation seamless
const repeatedClients = [...clients, ...clients, ...clients];
</script>

<style scoped>
/* Right-moving animation */
@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}

/* Left-moving animation */
@keyframes slideLeft {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}

/* Apply animation */
.animate-slide-right {
  display: flex;
  width: max-content;
  animation: slideRight 95s linear infinite;
}

.animate-slide-left {
  display: flex;
  width: max-content;
  animation: slideLeft 95s linear infinite;
}
</style>