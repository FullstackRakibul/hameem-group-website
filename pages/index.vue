<script lang="ts" setup>
import MainPageSlider01 from '~/components/v1/banner/MainPageSlider01.vue';
import WelcomeSection from '~/components/v1/section/WelcomeSection.vue';

import MissionVissionSection from '~/components/v1/section/MissionVissionSection.vue';
import SustainabilityMapSection from '~/components/v2/sectionComponent/SustainabilityMapSection.vue';

import OurBuyersSection from '~/components/sections/OurBuyersSection.vue'
import BoardofDirectorsSection from '~/components/v1/section/BoardofDirectorsSection.vue';
import BusinessUnitSection from '~/components/v1/section/BusinessUnitSection.vue';
import ClientRunningCarouselComponent from '~/components/v2/sectionComponent/ClientRunningCarouselComponent.vue';
import ContactUsMapSectionComponent from '~/components/v2/index/ContactUsMapSectionComponent.vue';
</script>

<template>
  <section>
    <MainPageSlider01 />
    <WelcomeSection />
    <MissionVissionSection id="mission-vision" />
    <BusinessUnitSection id="business-unit" />
    <SustainabilityMapSection id="sustainability" />
    <!-- <OurBuyersSection id="clients" /> -->
    <ClientRunningCarouselComponent/>
    <BoardofDirectorsSection />
    <ContactUsMapSectionComponent />

  </section>
</template>