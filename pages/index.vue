<script lang="ts" setup>
import MainPageSlider01 from '~/components/v1/banner/MainPageSlider01.vue';
import WelcomeSection from '~/components/v1/section/WelcomeSection.vue';
import OurBuyersSection from '~/components/sections/OurBuyersSection.vue';

import MissionVissionSection from '~/components/sections/MissionVissionSection.vue';
import SustainabilitySection from '~/components/v1/section/SustainabilitySection.vue';
import IndustriesSection from '~/components/sections/IndustriesSection.vue';
import ProductSection from '~/components/sections/ProductSection.vue';
</script>

<template>
  <section>
    <MainPageSlider01 />
    <WelcomeSection />
    <MissionVissionSection id="mission-vision" />
    <ProductSection id="gallary" />
    <IndustriesSection id="industries" />
    <SustainabilitySection id="sustainability" />
    <OurBuyersSection id="clients" />
  </section>
</template>