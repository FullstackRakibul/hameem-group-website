<script lang="ts" setup>
import MainPageSlider01 from '~/components/v1/banner/MainPageSlider01.vue';
import WelcomeSection from '~/components/v1/section/WelcomeSection.vue';

import MissionVissionSection from '~/components/v1/section/MissionVissionSection.vue';
import SustainabilitySection from '~/components/v1/section/SustainabilitySection.vue';

import OurBuyersSection from '~/components/sections/OurBuyersSection.vue'
import BoardofDirectorsSection from '~/components/v1/section/BoardofDirectorsSection.vue';
import BusinessUnitSection from '~/components/v1/section/BusinessUnitSection.vue';
</script>

<template>
  <section>
    <MainPageSlider01 />
    <WelcomeSection />
    <MissionVissionSection id="mission-vision" />
    <BusinessUnitSection id="business-unit" />
    <SustainabilitySection id="sustainability" />
    <OurBuyersSection id="clients" />
    <BoardofDirectorsSection />

  </section>
</template>