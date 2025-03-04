<script setup>
import WelcomeHeroSection from '~/components/v2/index/sliders/WelcomeHeroSection.vue';
import SustainabilityMapSection from '~/components/v2/sectionComponent/SustainabilityMapSection.vue';
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
import ClientRunningCarouselComponent from '~/components/v2/sectionComponent/ClientRunningCarouselComponent.vue';
import DenimStickySection from '~/components/v2/ui/DenimStickySection.vue';
import HameemAtaGlance from '~/components/denim/HameemAtaGlance.vue';

</script>

<template>
  <section class=" mt-16">
    <HomePageMainSlider/>
    <!-- <WelcomeHeroSection/> -->
     <HameemAtaGlance/>
    <!-- <ShortDescriptionSectionCoponent/> -->
    <!-- <MajorProductsSection/> -->
    
    <QualityAndStrengthsSection/>
    <TestimonialSectionComponent/>
    <DenimStickySection/>
    <SustainabilityMapSection/>
    <!-- <OurBuyersSection/> -->
    <ClientRunningCarouselComponent/>
    <GallarySectionComponent/>
    <IndustriesSectionComponent/>               
    <NewsAndBlogComponent/>
    <ContactUsMapSectionComponent/>
  </section>
</template>



<style scoped>
/* Home page styles */
</style>