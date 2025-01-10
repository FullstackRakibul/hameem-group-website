<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="0"
    :mousewheel="true"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="h-screen w-screen"
  >
    <swiper-slide>
      <SlideOne />
    </swiper-slide>
    <swiper-slide>
      <SlideTwo />
    </swiper-slide>
    <swiper-slide>
      <SlideThree />
    </swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

// Import your slide components
import SlideOne from '~/components/slides/SlideOne.vue';
import SlideTwo from '~/components/slides/SlideTwo.vue';
import SlideThree from '~/components/slides/SlideThree.vue';

// Provide Swiper modules
const modules = [Mousewheel, Pagination];
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
