<script setup>
import WelcomeHeroSection from '~/components/v2/index/WelcomeHeroSection.vue';
import SustainabilitySection from '~/components/v1/section/SustainabilitySection.vue';
import OurBuyersSection from '~/components/sections/OurBuyersSection.vue';
import ContactUsMapSectionComponent from '~/components/v2/contact/ContactUsMapSectionComponent.vue';
import IndustriesSectionComponent from '~/components/v2/about/IndustriesSectionComponent.vue';
import TestimonialSectionComponent from '~/components/v2/about/TestimonialSectionComponent.vue';
</script>

<template>
  <section class=" mt-16">
    <WelcomeHeroSection/>
    <IndustriesSectionComponent/>               
    <TestimonialSectionComponent/>
    <SustainabilitySection/>
    <!-- <OurBuyersSection/> -->
    <ContactUsMapSectionComponent/>
  </section>
</template>



<style scoped>
/* Home page styles */
</style>