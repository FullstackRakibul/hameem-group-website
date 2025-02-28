<script lang="ts" setup>
import DenimSlider01 from '~/components/v2/index/sliders/DenimSlider01.vue';
import HameemAtaGlance from '~/components/denim/HameemAtaGlance.vue';
import DenimStickySection from '~/components/v2/ui/DenimStickySection.vue';
import RFIDPromoVideoSection from '~/components/denim/RFIDPromoVideoSection.vue';
import OurClientSection from '~/components/v2/index/OurClientSection.vue';
</script>
<template>
  <section>
    <DenimSlider01 />
    <HameemAtaGlance />
    <RFIDPromoVideoSection/>
    <DenimStickySection
      bgImage="https://api.hameemgroup.com:9012/Resources/hameem-group-website/denim-stickyBanner-hameem-group.jpeg"
      mainText="Our Denim Journey"
      subText="WHO DON'T HAVE TO TRY TOO HARD"
    />
    <OurClientSection/>
  </section>
</template>