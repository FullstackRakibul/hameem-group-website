<script setup>
import WelcomeHeroSection from '~/components/v2/index/sliders/WelcomeHeroSection.vue';
import SustainabilitySectionComponent from '~/components/v2/index/SustainabilitySectionComponent.vue';
import OurBuyersSection from '~/components/sections/OurBuyersSection.vue';
import ContactUsMapSectionComponent from '~/components/v2/index/ContactUsMapSectionComponent.vue';
import IndustriesSectionComponent from '~/components/v2/index/IndustriesSectionComponent.vue';
import TestimonialSectionComponent from '~/components/v2/index/TestimonialSectionComponent.vue';
import MajorProductsSection from '~/components/v2/index/MajorProductsSection.vue';
import ShortDescriptionSectionCoponent from '~/components/v2/index/ShortDescriptionSectionCoponent.vue';
import NewsAndBlogComponent from '~/components/v2/index/NewsAndBlogComponent.vue';
import GallarySectionComponent from '~/components/v2/index/GallarySectionComponent.vue';
import HomePageMainSlider from '~/components/v2/index/HomePageMainSlider.vue';
import QualityAndStrengthsSection from '~/components/v2/index/QualityAndStrengthsSection.vue';
import OurClientSection from '~/components/v2/index/OurClientSection.vue';
</script>

<template>
  <section class=" mt-16">
    <HomePageMainSlider/>
    <!-- <WelcomeHeroSection/> -->
    <ShortDescriptionSectionCoponent/>
    <!-- <MajorProductsSection/> -->
    <GallarySectionComponent/>
    <QualityAndStrengthsSection/>
    <IndustriesSectionComponent/>               
    <TestimonialSectionComponent/>
    <SustainabilitySectionComponent/>
    <!-- <OurBuyersSection/> -->
     <OurClientSection/>
     <NewsAndBlogComponent/>
    <ContactUsMapSectionComponent/>
  </section>
</template>



<style scoped>
/* Home page styles */
</style>