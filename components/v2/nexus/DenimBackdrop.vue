<template>
  <!-- Procedural indigo denim: soft fabric folds + twill weave + grain. Static, SSR-rendered. -->
  <div class="pointer-events-none fixed inset-0 -z-20 bg-void" aria-hidden="true">
    <div class="denim-folds absolute inset-0"></div>
    <div class="absolute inset-0 bg-twill"></div>
    <div class="absolute inset-0 bg-grain opacity-[0.07] mix-blend-overlay"></div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,theme(colors.void/0.75))]"></div>
  </div>
</template>

<style scoped>
.denim-folds {
  background:
    radial-gradient(60% 45% at 20% 15%, theme('colors.ink.700 / 0.55'), transparent 70%),
    radial-gradient(50% 40% at 85% 35%, theme('colors.ink.600 / 0.35'), transparent 70%),
    radial-gradient(70% 50% at 50% 95%, theme('colors.ink.800 / 0.6'), transparent 70%),
    linear-gradient(160deg, theme('colors.ink.900'), theme('colors.void') 60%);
}
</style>
