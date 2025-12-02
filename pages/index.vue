<script lang="ts" setup>
import MainPageSlider01 from '~/components/v1/banner/MainPageSlider01.vue';
import MissionVissionSection from '~/components/v1/section/MissionVissionSection.vue';
import BoardofDirectorsSection from '~/components/v1/section/BoardofDirectorsSection.vue';
import BusinessUnitSection from '~/components/v1/section/BusinessUnitSection.vue';
import ClientRunningCarouselComponent from '~/components/v2/sectionComponent/ClientRunningCarouselComponent.vue';
import ContactUsMapSectionComponent from '~/components/v2/index/ContactUsMapSectionComponent.vue';
import ExpansionPlanSection from '~/components/v1/section/ExpansionPlanSection.vue';
import ShortAboutRunningTextComponent from '~/components/v2/index/ShortAboutRunningTextComponent.vue';
import AchievementsParallaxSection from '~/components/v1/section/AchievementsParallaxSection.vue';
import VideoHeroSectionRFID from '~/components/v2/sectionComponent/VideoHeroSectionRFID.vue';
import SustainabilityMapSection from '~/components/v2/sectionComponent/SustainabilityMapSection.vue';
import HameemGroupAboutSection from '~/components/v1/section/HameemGroupAboutSection.vue';
import UpcommingProjectSection from '~/components/v1/section/UpcommingProjectSection.vue';
import StrategicLeadershipCouncil from '~/components/v1/section/StrategicLeadershipCouncil.vue';
import MissionVisionSection from '~/components/v1/section/mission-vision/MissionVisionSection.vue';
import CorevaluesSection from '~/components/v1/section/mission-vision/CorevaluesSection.vue';
</script>

<template>
  <section class="-mt-16 ">
    <!-- <GSAPHeroSlider /> -->
    <MainPageSlider01 />
    <!-- <CompanyIntroductionSection /> -->
    <ShortAboutRunningTextComponent />
    <!-- <WelcomeSection video-src="/assets/v2/video/RFIDDIGITALVIDEO.mp4">
      <template #secondary-content>
        <div class="secondary-content space-y-12 h-[300vh]">
          <ProductSection />
          <ShortDescriptionSectionCoponent />
          <ShortDescriptionSectionCoponent />
          <ShortDescriptionSectionCoponent />
        </div>
      </template>
</WelcomeSection> -->
    <!-- <MissionVissionSection /> -->
    <CorevaluesSection />
    <MissionVisionSection />
    <ExpansionPlanSection />
    <UpcommingProjectSection />
    <BusinessUnitSection />
    <VideoHeroSectionRFID videoSrc="/assets/v2/video/RFIDDIGITALVIDEO.mp4" />
    <SustainabilityMapSection />
    <ClientRunningCarouselComponent />
    <AchievementsParallaxSection />
    <!-- <OurAchievementsSlide/> -->
    <!-- <BoardofDirectorsSection /> -->
    <StrategicLeadershipCouncil />
    <!-- <GallerySection /> -->
    <ContactUsMapSectionComponent />

  </section>
</template>