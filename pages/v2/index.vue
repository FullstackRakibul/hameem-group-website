<script setup>
import PillNav from '~/components/v2/modern/PillNav.vue';
import HeroSection from '~/components/v2/modern/HeroSection.vue';
import BentoGlance from '~/components/v2/modern/BentoGlance.vue';
import CapabilitiesBento from '~/components/v2/modern/CapabilitiesBento.vue';
import ProcessTracker from '~/components/v2/modern/ProcessTracker.vue';
import SustainabilityData from '~/components/v2/modern/SustainabilityData.vue';
import ClientsMarquee from '~/components/v2/modern/ClientsMarquee.vue';
import ProductsGallery from '~/components/v2/modern/ProductsGallery.vue';
import NewsBento from '~/components/v2/modern/NewsBento.vue';
import ContactFooter from '~/components/v2/modern/ContactFooter.vue';

// Own chrome (pill nav + dark footer); also skips Preloader2, which clears GSAP's global timeline
definePageMeta({ layout: false });

useHead({
  title: 'Ha-Meem Group — Fibre to finished garment',
  htmlAttrs: { class: 'bg-ink-950' },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-ink-950 font-sans text-white antialiased selection:bg-coral selection:text-ink-950">
    <PillNav />
    <main>
      <HeroSection />
      <BentoGlance />
      <CapabilitiesBento />
      <ProcessTracker />
      <SustainabilityData />
      <ClientsMarquee />
      <ProductsGallery />
      <NewsBento />
    </main>
    <ContactFooter />
  </div>
</template>
