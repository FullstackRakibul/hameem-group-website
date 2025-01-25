<template>
  <div class="mx-2 h-screen bg-black bg-cover bg-center flex flex-col justify-center items-center text-white"
    :style="{ backgroundImage: `url('./assets/ha-meem-group-denim-banner-0001.jpg')` }">

    <div class=" py-5 w-4/5 rounded-md ">
      <h3 class="py-2 font-sans font- font-bold text-xl text-gray-700 ">WHO WE ARE...</h3>
      <p class=" font-sans font-medium text-gray-700 text-justify ">Ha-Meem Group Started its Journey about 41 years
        back
        in 1984, Initially with a garment factory and thereafter
        gradually expanding to backward linkage from “Cotton to packed Garments,” Today Ha-Meem has a large workforce of
        60,000 spreading over various industries and garment factories. Ha-Meem is now one of the leading exporters of
        the country with annual tournover close to a billion US Dollars. Ha-Meem is one of the largest Garment
        manufacturers in Bangladesh with 450 Garment lines having capacity of 9 mil pieces of garments per month, On the
        Textile sector, Ha-Meem Denim, established in early 2007, is now one of the largest denim manufacturers in
        Bangladesh having partnership with many of the reputed brands. Ha-Meem Spinning equipped with highly automated
        and state of the art machineries is best known for its quality products of ring. PC/CVC and other special yarns.
        Ha-Meem Textiles (non-denim woven) is the latest addition in the textile hub of Ha-Meem Group with 2.5 million
        yds per month capacity. </p>
    </div>

    <!-- Button at the lower center -->
    <div class="flex justify-end items-start w-4/5 h-2/5 mb-8">

      <button
        class="border-2 border-orange-400 bg-transparent text-black px-6 py-2 font-bold flex items-center space-x-2 hover:bg-white hover:text-black transition-all duration-300">
        <Icon name="mdi:arrow-right-thin" class="text-black text-lg" />
        <span class=" pl-6 text-lg font-medium ">SHOW MORE</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>