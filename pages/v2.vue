<template>
  <Header2/>
  <section class="-mt-16 ">
    <SlideOne/>
    <HomePageBannerTwo />
    <MissionVissionSection id="mission-vision" />
    <ProductSection id="gallary" />
    <IndustriesSection id="industries" />
    <SustainabilitySection id="sustainability" />
    <BusinessUnitSection id="business-units" />
    <OurBuyersSection id="clients" />

  </section>

  <Footer2/>
</template>

<script setup>
import Header2 from '~/components/Header2.vue';
import Footer2 from '~/components/Footer2.vue';
import HomePageBannerTwo from '~/components/banners/HomePageBannerTwo.vue';
import SlideOne from '~/components/sliders/SlideOne.vue';
import MissionVissionSection from '~/components/sections/MissionVissionSection.vue';
import SustainabilitySection from '~/components/sections/SustainabilitySection.vue';
import OurBuyersSection from '~/components/sections/OurBuyersSection.vue'
import AchievementsSection from '~/components/sections/AchievementsSection.vue';
import IndustriesSection from '~/components/sections/IndustriesSection.vue';
import ProductSection from '~/components/sections/ProductSection.vue';
import BusinessUnitSection from '~/components/sections/BusinessUnitSection.vue';
</script>

<style scoped>
/* Home page styles */
</style>