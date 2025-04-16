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
import QualityAndStrengthsSection from '~/components/v2/index/QualityAndStrengthsSection.vue';
import ShortDescriptionSectionCoponent from '~/components/v2/index/ShortDescriptionSectionCoponent.vue';
import CapabilitySection from '~/components/v1/section/CapabilitySection.vue';
import ShortAboutRunningTextComponent from '~/components/v2/index/ShortAboutRunningTextComponent.vue';
import AchievementsParallaxSection from '~/components/v1/section/AchievementsParallaxSection.vue';
import CompanyIntroductionSection from '~/components/v1/section/CompanyIntroductionSection.vue'
import ProductSection from '~/components/sections/ProductSection.vue';
import GSAPHeroSlider from '~/components/v1/banner/GSAPHeroSlider.vue';
</script>

<template>
  <section class="-mt-16">
    <GSAPHeroSlider />
    <!-- <MainPageSlider01 /> -->
    <!-- <WelcomeSection /> -->
    <ShortAboutRunningTextComponent id="index-about"  />
    <WelcomeSection video-src="/assets/v2/video/RFIDDIGITALVIDEO.mp4">
      <template #secondary-content>
        <div class="secondary-content space-y-12 h-[300vh]">
          <ProductSection />
          <ShortDescriptionSectionCoponent />
          <ShortDescriptionSectionCoponent />
          <ShortDescriptionSectionCoponent />
        </div>
      </template>
</WelcomeSection>

    <MissionVissionSection id="mission-vision" />

    <CapabilitySection />
    <BusinessUnitSection id="business-unit" />
    <SustainabilityMapSection id="index-sustainability" />
    <!-- <OurBuyersSection id="clients" /> -->
    <ClientRunningCarouselComponent id="index-client" />
    <AchievementsParallaxSection />
    <BoardofDirectorsSection />
    <ContactUsMapSectionComponent id="index-contact" />

  </section>
</template>