<script setup>
import WelcomeHeroSection from '~/components/v2/index/WelcomeHeroSection.vue';
import SustainabilitySectionComponent from '~/components/v2/index/SustainabilitySectionComponent.vue';
import OurBuyersSection from '~/components/sections/OurBuyersSection.vue';
import ContactUsMapSectionComponent from '~/components/v2/index/ContactUsMapSectionComponent.vue';
import IndustriesSectionComponent from '~/components/v2/index/IndustriesSectionComponent.vue';
import TestimonialSectionComponent from '~/components/v2/index/TestimonialSectionComponent.vue';
import MajorProductsSection from '~/components/v2/index/MajorProductsSection.vue';
import ShortDescriptionSectionCoponent from '~/components/v2/index/ShortDescriptionSectionCoponent.vue';
</script>

<template>
  <section class=" mt-16">
    <WelcomeHeroSection/>
    <ShortDescriptionSectionCoponent/>
    <!-- <MajorProductsSection/> -->
    <IndustriesSectionComponent/>               
    <TestimonialSectionComponent/>
    <SustainabilitySectionComponent/>
    <!-- <OurBuyersSection/> -->
    <ContactUsMapSectionComponent/>
  </section>
</template>



<style scoped>
/* Home page styles */
</style>