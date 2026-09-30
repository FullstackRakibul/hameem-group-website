<script setup>
import PillNav from '~/components/v2/modern/PillNav.vue';
import HeroSection from '~/components/v2/modern/HeroSection.vue';
import ScrollManifesto from '~/components/v2/nexus/ScrollManifesto.vue';
import BentoGlance from '~/components/v2/modern/BentoGlance.vue';
import CapabilitiesBento from '~/components/v2/modern/CapabilitiesBento.vue';
import ProcessTracker from '~/components/v2/modern/ProcessTracker.vue';
import ProductsGallery from '~/components/v2/modern/ProductsGallery.vue';
import SustainabilityData from '~/components/v2/modern/SustainabilityData.vue';
import ClientsMarquee from '~/components/v2/modern/ClientsMarquee.vue';
import NewsBento from '~/components/v2/modern/NewsBento.vue';
import ContactFooter from '~/components/v2/modern/ContactFooter.vue';
import NexusCanvas from '~/components/v2/nexus/NexusCanvas.vue';
import NexusCursor from '~/components/v2/nexus/NexusCursor.vue';
import DenimBackdrop from '~/components/v2/nexus/DenimBackdrop.vue';

// Own chrome (pill nav + footer); also skips Preloader2, which clears GSAP's global timeline
definePageMeta({ layout: false });

useHead({
  title: 'Ha-Meem Group — HAMEEM // NEXUS',
  htmlAttrs: { class: 'bg-void' },
  // overrides the global viewport (its maximum-scale=1 blocks zoom and fails WCAG 1.4.4)
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
    },
  ],
});

useLenis();
</script>

<template>
  <div class="nexus relative isolate min-h-screen overflow-x-clip bg-void font-sans text-white antialiased selection:bg-bleach selection:text-void">
    <DenimBackdrop />
    <ClientOnly><NexusCanvas /></ClientOnly>
    <ClientOnly><NexusCursor /></ClientOnly>
    <PillNav />
    <main>
      <HeroSection />
      <ScrollManifesto />
      <BentoGlance />
      <CapabilitiesBento />
      <ProcessTracker />
      <ProductsGallery />
      <SustainabilityData />
      <ClientsMarquee />
      <NewsBento />
    </main>
    <ContactFooter />
  </div>
</template>

<style>
/* Lenis drives scroll on /v2; the site-wide `scroll-behavior: smooth` would fight it */
html.lenis {
  scroll-behavior: auto !important;
}
</style>
