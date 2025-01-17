<template>
  <section class="py-16 bg-gray-100">
    <div class="max-w-6xl mx-auto text-center px-4">
      <!-- Subheading and Line -->
      <div class="mb-4">
        <h5 class="text-sm text-gray-500 uppercase tracking-wider">
          Our Gallery
        </h5>
        <div class="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
      </div>
      <!-- Main Heading -->
      <h2 class="text-3xl font-bold text-gray-800">
        Experience our diverse business units in pictures.
      </h2>
    </div>

    <!-- Masonry Gallery -->
    <div class="container mx-auto mt-12 px-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 masonry-grid">
        <!-- Gallery Images -->
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="relative overflow-hidden rounded-lg group"
        >
          <!-- Image -->
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <p class="text-white text-lg font-semibold">{{ image.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const galleryImages = [
  {
    src: "https://www.hameemgroup.net/images/accessories/007.jpg",
    alt: "Accessories",
    title: "Accessories",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/C511BAQFTryKe996KHg/company-background_10000/company-background_10000/0/1584260827049/ha_meem_group24_cover?e=2147483647&v=beta&t=FmggH4fpYSN3100dclDN1BswczVaGfncxruJEfwkkuM",
    alt: "Woven",
    title: "Woven",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOstr5-RA4_x3uc_IPz3--U4q8K4tQ4W7ukbhTuijWfbCOuzn0fPCySFmzfgXq7SPi_MU&usqp=CAU",
    alt: "Garment Manufacturing Unit",
    title: "Garments",
  },
  {
    src: "https://media.licdn.com/dms/image/sync/v2/D5627AQFOL3iPd96xsg/articleshare-shrink_800/articleshare-shrink_800/0/1726509656107?e=2147483647&v=beta&t=XRSzd_pYaDD505q0Tn_lC0rAmn24EW86FL9JJmO6YAU",
    alt: "Tea Estates",
    title: "Tea Estates",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQG2pePlfxPnEg/feedshare-shrink_800/feedshare-shrink_800/0/1731924657766?e=2147483647&v=beta&t=O1OOt0jhxYUF2oP_pxCMAGu0WREfP1YSCBoduNhU5oQ",
    alt: "Washing and Dyeing Unit",
    title: "Washing Unit",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQFIMvcxxWlwUw/feedshare-shrink_800/B56ZPy0CXNGsAg-/0/1734945549842?e=2147483647&v=beta&t=HmX1vQAk3NSKMkTBrWR1idRM0J4j_eKG0-guejRZpbo",
    alt: "Jute Mill Production",
    title: "Jute Mills",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D5622AQE70w4G9LdE5Q/feedshare-shrink_800/B56ZQwhZdbG8Ag-/0/1735980854953?e=2147483647&v=beta&t=nRNUkKO0QmEla0d-GJ0-n_UAlfodwHKSBmsZSPZNass",
    alt: "Fashion Showroom",
    title: "Fashion Showroom",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/C5622AQG2PCH0e-wLEA/feedshare-shrink_800/feedshare-shrink_800/0/1669171904117?e=2147483647&v=beta&t=E88EPJkl9laq5mAL4WOl5J2Fy_-44LFn5f9XJMr4tkA",
    alt: "Textile Zone",
    title: "Textile Zone",
  },
];
</script>

<style scoped>
/* Custom Masonry Grid Styling */
.masonry-grid {
  column-gap: 1rem;
  column-count: 2;

  /* Adjust column count for responsive breakpoints */
  @media (min-width: 640px) {
    column-count: 3;
  }
  @media (min-width: 1024px) {
    column-count: 4;
  }
}

.masonry-grid > div {
  display: inline-block;
  margin-bottom: 1rem;
}
</style>
