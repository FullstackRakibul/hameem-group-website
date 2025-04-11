<template>
  <section class="md:px-24 mx-auto py-8 md:py-16 mt-5 ">
    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16 ">

          <!-- <h2 class="text-3xl md:text-6xl font-bold font-denim">
            About <span class="text-secondary">Ha-Meem</span> Group
          </h2> -->
          <div v-gsap.whenVisible.animateText.slow class="text-secondary uppercase font-bold  md:text-6xl mb-5">
            Ha-Meem
            Group </div>
          <p class=" md:text-2xl font-sans md:font-semibold text-gray-600 mt-4 text-justify ">
            starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
            Bangladesh’s largest exporters, with a workforce of 60,000 and an annual turnover nearing one billion USD.
            Today, Ha-Meem operates 450 production lines with a monthly capacity of 9 million garments, and boasts
            state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
          </p>
          <el-row :gutter="16">
            <div class="flex flex-wrap justify-around px-6 py-10 w-full someContainer mt-6 ">
              <div v-gsap.draggable.rotation v-for="(item, index) in stats" :key="index"
                class="flex flex-col items-center justify-center space-y-2 w-60 h-60 rounded-full hover:border border-primary/15 border hover:border-primary/30 hover:bg-primary/10">
                <Icon :name="item.icon" class=" text-xl w-16 h-16" />
                <div class="flex items-center gap-1">
                  <h3 class="md:text-4xl text-2xl font-bold text-primary tracking-widest">{{ item.count }}</h3>
                </div>
                <p class="text-md text-gray-800 font-bold text-center uppercase">{{ item.label }}</p>
              </div>
            </div>
          </el-row>
          <!-- <p class="text-base md:text-lg text-gray-600 mt-4 text-justify">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!
          </p> -->
        </div>
      </el-col>

      <el-col :xs="24" :md="8" class="md:relative">
        <div
          class="bg-gray-100 md:p-6  flex justify-center items-center rounded-sm shadow-sm md:h-full md:absolute md:inset-0 md:w-[calc(100%+32px)] md:left-[-16px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${bgImage})` }">
          <section>
            <div v-gsap.whenVisible.from="{ x: -200, start: 'top bottom', end: 'bottom top', scrub: 1 }"
              class="text-gray-900 font-semibold text-lg md:text-4xl font-title">
              Leading Industry
            </div>
            <div class="text-secondary text-8xl md:text-10xl lg:text-8xl font-bold font-title"
              v-gsap.whenVisible.from="{ x: 150, start: 'top bottom', end: 'bottom top', scrub: 2 }">
              <p class="text-3xl">from</p> 1984
            </div>
          </section>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="16">
      <div class="flex flex-wrap justify-around px-6 py-10 w-full someContainer mt-6">
        <div v-gsap.draggable.bounds="'.someContainer'" v-for="(item, index) in stats" :key="index"
          class="flex flex-col items-center space-y-2 w-50 h-50 rounded-full ">
          <Icon :name="item.icon" class=" text-xl w-24 h-24" />
          <div class="flex items-center gap-1">
            <h3 class="md:text-6xl text-2xl font-bold text-primary">{{ item.count }}</h3>
          </div>
          <p class="text-md text-gray-800 font-bold text-center tracking-widest">{{ item.label }}</p>
        </div>
      </div>
    </el-row> -->
  </section>
</template>

<script lang="ts" setup>

const stats = [
  {
    icon: 'emojione-monotone:factory',
    count: '48+',
    label: 'Factories',
  },
  {
    icon: 'material-symbols:account-tree-outline-rounded',
    count: '540+',
    label: 'Production Lines',
  },
  {
    icon: 'material-symbols:reduce-capacity',
    count: '15.5M+',
    label: 'Capacity',
  },
  {
    icon: 'game-icons:sewing-machine',
    count: '1.4M+',
    label: 'Workforce',
  },
]

const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/v1/raise-chart.gif", // Ensure this is correct
  },
});
</script>

<style scoped>
/* Adjust for Element UI gutter on desktop */
@media (min-width: 768px) {
  .el-col-md-8 {
    overflow: visible !important;
  }
}
</style>