<template>
  <section class="container mx-auto py-16 ">
    <SectionHeader
      title="Our Clients"
      subtitle="Ha-Meem Group collaborates with some of the world’s leading brands"
    />
    <div class="grid md:py-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 ">
      <div
        v-for="client in clients"
        :key="client.id"
        class="flex flex-col items-center bg-white shadow-md p-4 rounded-md border hover:shadow-lg transition-shadow duration-300">
       <div class="w-24 h-24  flex items-center justify-center rounded-full mb-4">
        <img :src="client.icon" :alt="client.name" class="h-12 object-contain" />
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../ui/SectionHeader.vue';

const clients = [
  {
    id: 1,
    icon: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/07/full/1723041512-571.jpg?im=FeatureCrop,size=(826,465)'
  },
  {
    id: 2,
    icon: 'https://logomakerr.ai/blog/wp-content/uploads/2022/08/2019-to-Present-Zara-logo-design.jpg',
  },
  {
    id: 3,
    name: 'Mango',
    icon: 'https://www.theindustry.fashion/wp-content/uploads/2021/09/mango-logo.jpg',
    description: 'Trendy fashion collections.'
  },
  {
    id: 4,
    name: 'Gap',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4vmcAkP_8kxbT0BUqNw-OHnvMLy45E5gMQ&s',
    description: 'Classic American style clothing.'
  },
  {
    id: 5,
    icon: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/12/esprit-logo-freelogovectors.net_.png'
  },
  {
    id: 6,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2kEDxsbqX4RpegMbffe_S_Fp3wqxDfptxw&s',
  },
  {
    id: 7,
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49XlbGlgNm52eJx1A_UUYl7uKSG0FWivrsw&s',
    description: 'Trendy fashion collections.'
  },
  {
    id: 8,
    icon: 'https://logos-world.net/wp-content/uploads/2020/04/Tommy-Hilfiger-Logo.png'
  }
];
</script>

<style scoped>
/* Custom styles for additional design requirements */
</style>