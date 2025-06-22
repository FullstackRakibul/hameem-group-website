<template>
  <div class="gallery-page">

  
  <section
    class="-mt-16 relative h-[600px] bg-cover bg-bottom bg-no-repeat flex items-center justify-center text-center"
    style="background-image: url('/assets/v1/gallery/gallary-bg-01.jpg');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <!-- Content -->
    <div class="container flex flex-col justify-start items-start relative z-10 text-white px-4">
      <!-- Section Header -->
      <div class="text-start mb-12">
        <h2 class="text-white uppercase font-light md:text-6xl mb-4">
          Our Gallery
        </h2>
        <div class=" w-1/3 h-1 bg-white mx-auto my-4"></div>
        <p class="text-lg text-white max-w-2xl mx-auto">
          Explore our collection of moments, achievements, and behind-the-scenes glimpses
        </p>
      </div>
    </div>
  </section>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Filter Tabs -->
      <div class="flex justify-center mb-8">
        <div class="flex space-x-1 bg-primary rounded-full p-1 shadow-sm">
          <button v-for="category in categories" :key="category" @click="activeCategory = category" :class="[
            'md:px-12 py-2 rounded-full text-md font-medium transition-all duration-300',
            activeCategory === category
              ? 'bg-white text-secondary font-semibold'
              : 'text-white hover:bg-white hover:text-secondary'
          ]">
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Masonry Gallery Grid -->
      <div class="masonry-grid">
        <div v-for="(image, index) in filteredImages" :key="index" class="masonry-item group cursor-pointer"
          @click="openLightbox(index)">
          <div
            class="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
            <img :src="image.src" :alt="image.alt"
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="mdi:magnify-plus" class="text-white text-3xl" />
              </div>
            </div>

            <!-- Image Info -->
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white font-medium text-sm">{{ image.title }}</h3>
              <p class="text-white/80 text-xs">{{ image.category }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12" v-if="hasMoreImages">
        <button @click="loadMoreImages"
          class="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
          Load More Images
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox">
      <div class="relative max-w-4xl max-h-full">
        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
          <Icon name="mdi:close" class="text-3xl" />
        </button>

        <!-- Navigation Arrows -->
        <button v-if="currentImageIndex > 0" @click.stop="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
          <Icon name="mdi:chevron-left" class="text-4xl" />
        </button>

        <button v-if="currentImageIndex < filteredImages.length - 1" @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
          <Icon name="mdi:chevron-right" class="text-4xl" />
        </button>

        <!-- Image -->
        <img :src="filteredImages[currentImageIndex]?.src" :alt="filteredImages[currentImageIndex]?.alt"
          class="max-w-full max-h-full object-contain" @click.stop />

        <!-- Image Info -->
        <div class="absolute bottom-4 left-4 right-4 text-center text-white">
          <h3 class="text-xl font-medium mb-1">{{ filteredImages[currentImageIndex]?.title }}</h3>
          <p class="text-gray-300">{{ filteredImages[currentImageIndex]?.category }}</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  height?: number;
}

const activeCategory = ref('All');
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const visibleCount = ref(12);

// const categories = ['All', 'Factory', 'Products', 'Team', 'Events'];
const categories = ['Denim', 'Non-Denim', 'Kids','Top', 'Events'];

// Sample gallery images - replace with your actual images
const allImages = ref<GalleryImage[]>([
  {
    src: 'https://media.licdn.com/dms/image/v2/C511BAQFTryKe996KHg/company-background_10000/company-background_10000/0/1584260827049/ha_meem_group24_cover?e=2147483647&v=beta&t=FmggH4fpYSN3100dclDN1BswczVaGfncxruJEfwkkuM',
    alt: 'Factory Floor',
    title: 'Modern Production Line',
    category: 'Events'
  },
  {
    src: 'https://media.licdn.com/dms/image/sync/v2/D5627AQFOL3iPd96xsg/articleshare-shrink_800/articleshare-shrink_800/0/1726509656107?e=2147483647&v=beta&t=XRSzd_pYaDD505q0Tn_lC0rAmn24EW86FL9JJmO6YAU',
    alt: 'Denim Products',
    title: 'Premium Denim Collection',
    category: 'Events'
  },
  {
    src: 'https://media.licdn.com/dms/image/v2/D5622AQFoIp5Pnsze7g/feedshare-shrink_800/B56ZYizQSOGoAg-/0/1744340589192?e=2147483647&v=beta&t=TE_w-rEqrcLlzgGjwOxKcoYPLc_QWe81m2Ku3hsZj4k',
    alt: 'Team Meeting',
    title: 'Strategic Planning Session',
    category: 'Events'
  },
  {
    src: 'https://textilefocus.com/wp-content/uploads/hameem-group-tax.jpg',
    alt: 'Award Ceremony',
    title: 'Excellence Recognition',
    category: 'Events'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS51jB572_4L7O1UWg0W7-TzKZxNhIa3Gk9Ig_JUYL5ru_R-KRY2RR1GNedgOJ7DCpQ80&usqp=CAU',
    alt: 'Quality Control',
    title: 'Quality Assurance Process',
    category: 'Events'
  },
  {
    src: 'https://static.theceomagazine.net/wp-content/uploads/2023/03/01222848/DelwarHossain_HA-MEEMGROUP_Support2.jpeg',
    alt: 'Fashion Show',
    title: 'Latest Collection Showcase',
    category: 'Events'
  },
  {
    src: 'https://static.theceomagazine.net/wp-content/uploads/2023/03/01222855/DelwarHossain_HA-MEEMGROUP_Support4.jpeg',
    alt: 'Team Building',
    title: 'Annual Team Retreat',
    category: 'Events'
  },
  {
    src: 'https://static.theceomagazine.net/wp-content/uploads/2023/03/01222845/DelwarHossain_HA-MEEMGROUP_Support1-1024x569-1.jpeg',
    alt: 'Export Ceremony',
    title: 'International Trade Event',
    category: 'Events'
  },
  {
    src: 'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/10/22/press_photo-prime_bank_ha-meem_group_sign_payroll_agreement_0.jpg',
    alt: 'Machinery',
    title: 'Advanced Manufacturing Equipment',
    category: 'Events'
  },
  {
    src: 'https://textiletoday.com.bd/storage/uploads/2016/12/DBL-Award-Receiving.jpg',
    alt: 'Fabric Samples',
    title: 'Premium Fabric Selection',
    category: 'Events'
  },
  {
    src: 'https://media.licdn.com/dms/image/v2/D5622AQG62L2WlW7msA/feedshare-shrink_800/B56ZauxoB5GgAs-/0/1746688983004?e=2147483647&v=beta&t=r5IaSXKcJZR8SRJyonx7B4_xH9xgYtquSe-7q9NhZXw',
    alt: 'Leadership Team',
    title: 'Executive Leadership',
    category: 'Events'
  },
  {
    src: 'https://textilefocus.com/wp-content/uploads/2025/02/image-28.png',
    alt: 'Sustainability Event',
    title: 'Green Initiative Launch',
    category: 'Events'
  },




  {
    src: '/assets/v1/section/mission-vision/hg-web-mv-slider-01.jpg',
    alt: 'Sustainability Event',
    title: 'Green Initiative Launch',
    category: 'Top'
  },
  {
    src: '/assets/v1/section/mission-vision/hg-web-mv-slider-02.jpg',
    alt: 'Sustainability Event',
    title: 'Green Initiative Launch',
    category: 'Denim'
  },
  {
    src: '/assets/v1/section/mission-vision/hg-web-mv-slider-03.jpg',
    alt: 'Sustainability Event',
    title: 'Green Initiative Launch',
    category: 'Kids'
  },
  {
    src: '/assets/v1/section/mission-vision/hg-web-mv-slider-04.jpg',
    alt: 'Sustainability Event',
    title: 'Green Initiative Launch',
    category: 'Non-Denim'
  }
  
]);

const filteredImages = computed(() => {
  const filtered = activeCategory.value === 'All'
    ? allImages.value
    : allImages.value.filter(img => img.category === activeCategory.value);

  return filtered.slice(0, visibleCount.value);
});

const hasMoreImages = computed(() => {
  const totalFiltered = activeCategory.value === 'All'
    ? allImages.value.length
    : allImages.value.filter(img => img.category === activeCategory.value).length;

  return visibleCount.value < totalFiltered;
});

function openLightbox(index: number) {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = 'auto';
}

function nextImage() {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++;
  }
}

function previousImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
}

function loadMoreImages() {
  visibleCount.value += 6;
}

// Keyboard navigation for lightbox
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      previousImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };

  document.addEventListener('keydown', handleKeydown);

  return () => {
    document.removeEventListener('keydown', handleKeydown);
  };
});
</script>

<style scoped>
/* Masonry Grid Layout */
.masonry-grid {
  column-count: 2;
  column-gap: 1rem;

  @media (min-width: 768px) {
    column-count: 3;
    column-gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    column-count: 3;
    column-gap: 2rem;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2rem;
  }
}

/* Smooth transitions */
.masonry-item img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for lightbox */
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

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>