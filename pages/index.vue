<script lang="ts" setup >
import MainPageSlider01 from '~/components/v1/banner/MainPageSlider01.vue';
import WelcomeSection from '~/components/v1/section/WelcomeSection.vue';

import MissionVissionSection from '~/components/sections/MissionVissionSection.vue';
import SustainabilitySection from '~/components/sections/SustainabilitySection.vue';
import AchievementsSection from '~/components/sections/AchievementsSection.vue';
import IndustriesSection from '~/components/sections/IndustriesSection.vue';
import ProductSection from '~/components/sections/ProductSection.vue';
import BusinessUnitSection from '~/components/sections/BusinessUnitSection.vue';
</script>

<template>
<section>
  <MainPageSlider01/>
  <WelcomeSection/>
  <MissionVissionSection id="mission-vision" />
    <ProductSection id="gallary" />
    <IndustriesSection id="industries" />
    <SustainabilitySection id="sustainability" />
    <BusinessUnitSection id="business-units" />
    <OurBuyersSection id="clients" />
</section>
</template>