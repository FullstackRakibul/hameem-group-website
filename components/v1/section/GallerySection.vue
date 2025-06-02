<template>
  <div>
    <UIGalleryGrid 
      :items="awardsItems" 
      title="— GALLERY"
      @item-click="handleItemClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import UIGallaryGrid from 'components/ui/UIGallaryGrid.vue'

// Define your awards and achievements
const awardsItems = ref([
  {
    id: 1,
    src: "https://media.licdn.com/dms/image/v2/C511BAQFTryKe996KHg/company-background_10000/company-background_10000/0/1584260827049/ha_meem_group24_cover?e=2147483647&v=beta&t=FmggH4fpYSN3100dclDN1BswczVaGfncxruJEfwkkuM",
    alt: "Best Garment Exporter Award",
    caption: "Best Garment Exporter Award 2023",
    description: "Recognized for excellence in garment exports and quality manufacturing"
  },
  {
    id: 2,
    src: "https://textilefocus.com/wp-content/uploads/hameem-group-tax.jpg",
    alt: "Sustainability Award",
    caption: "Sustainability Excellence Award",
    description: "For implementing eco-friendly manufacturing processes and reducing carbon footprint"
  },
  {
    id: 3,
    src: "https://textilefocus.com/wp-content/uploads/A.-K-Azad-Chairman-of-Hameem-Group.jpeg",
    alt: "Quality Certification",
    caption: "ISO 9001 Certification",
    description: "International standard for quality management systems in textile manufacturing"
  },
  {
    id: 4,
    src: "https://media.licdn.com/dms/image/v2/C5622AQFHi6wE3Cfs1w/feedshare-shrink_800/feedshare-shrink_800/0/1669193717244?e=2147483647&v=beta&t=z4jXYXSQCXmJm0cR3Rgi7OXbAEEJTaJJSdyutJuALmc",
    alt: "Employee Welfare Award",
    caption: "Best Employer Award 2022",
    description: "Recognized for outstanding employee welfare initiatives and workplace safety"
  },
  {
    id: 5,
    src: "https://media.licdn.com/dms/image/v2/D5622AQFe_lZYjgy24g/feedshare-shrink_800/feedshare-shrink_800/0/1703075852391?e=2147483647&v=beta&t=Y0Lg16yH9cmqitTs1bt0xeppuQ5svw_LpCaRjgOA_qE",
    alt: "Innovation Award",
    caption: "Innovation in Textile Manufacturing",
    description: "For pioneering new techniques in garment production and design excellence"
  },
  {
    id: 6,
    src: "https://media.licdn.com/dms/image/v2/D5622AQHqYc-C_AVHSQ/feedshare-shrink_800/feedshare-shrink_800/0/1703075852249?e=2147483647&v=beta&t=Z4qEDs9Bpz7PZnqwT2_SZFmaE0-quvDfX35bLBMhO1c",
    alt: "Export Achievement",
    caption: "Export Achievement Recognition",
    description: "For exceptional export performance and international market expansion"
  }
])

const handleItemClick = (item: any) => {
  console.log('Clicked on award:', item.caption)
}
</script>