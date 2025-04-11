<template>
  <section class="container mx-auto py-8 md:py-16 ">
    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16">
          <!-- <h2 class="text-3xl md:text-6xl font-bold font-denim">
            About <span class="text-secondary">Ha-Meem</span> Group
          </h2> -->
          <p class="text-base md:text-md font-sans md:font-semibold text-gray-600 mt-4 text-justify">
            <span class="text-secondary font-title md:text-6xl ">Ha-Meem Group</span> Started its Journey about 41 years
            back in 1984, Initially with a garment factory and thereafter gradually expanding to backward linkage from
            “Cotton to packed Garments,” Today Ha-Meem has a large workforce of 60,000 spreading over various industries
            and garment factories. Ha-Meem is now one of the leading exporters of the country with annual tournover
            close to a billion US Dollars. Ha-Meem is one of the largest Garment manufacturers in Bangladesh with 450
            Garment lines having capacity of 9 mil pieces of garments per month, On the Textile sector, Ha-Meem Denim,
            established in early 2007, is now one of the largest denim manufacturers in Bangladesh having partnership
            with many of the reputed brands. Ha-Meem Spinning equipped with highly automated and state of the art
            machineries is best known for its quality products of ring. PC/CVC and other special yarns. Ha-Meem Textiles
            (non-denim woven) is the latest addition in the textile hub of Ha-Meem Group with 2.5 million yds per month
            capacity.
          </p>
          <!-- <p class="text-base md:text-lg text-gray-600 mt-4 text-justify">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!
          </p> -->
        </div>
      </el-col>

      <el-col :xs="24" :md="8" class="md:relative">
        <section>
          <div v-gsap.whenVisible.to="{ x: -300, start: 'top bottom', end: 'bottom top', scrub: 1.5 }"
            class="text-gray-900 font-semibold text-lg md:text-xl font-title">Leading Industry
          </div>
          <div class="text-secondary text-6xl md:text-7xl lg:text-8xl font-bold font-title"
            v-gsap.whenVisible.to="{ x: 300, start: 'top bottom', end: 'bottom top', scrub: 1.5 }">from 1984</div>
        </section>
      </el-col>
    </el-row>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>
/* Adjust for Element UI gutter on desktop */
@media (min-width: 768px) {
  .el-col-md-8 {
    overflow: visible !important;
  }
}
</style>