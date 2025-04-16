<template>
  <section class="md:px-24 mx-auto py-8 md:py-16 mt-5 ">
    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16 ">

          <!-- <h2 class="text-3xl md:text-6xl font-bold font-denim">
            About <span class="text-secondary">Ha-Meem</span> Group
          </h2> -->
          <div v-gsap.whenVisible.to="{
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.3
          }" class="text-secondary uppercase font-bold md:text-6xl mb-5">
            Ha-Meem Group
          </div>


          <p class=" md:text-2xl font-sans md:font-semibold text-gray-600 mt-4 text-justify ">
            Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
            Bangladesh’s largest exporters, with a workforce of 75,000  and an annual turnover nearing 925 million USD.
            Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts
            state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
          </p>
          <el-row :gutter="16">
            <div class="flex flex-wrap justify-around px-6 py-10 w-full someContainer mt-6 ">
              <div v-gsap.draggable.rotation v-for="(item, index) in stats" :key="index"
                class="flex flex-col items-center justify-center space-y-2 w-40 h-40 rounded-full hover:border border-primary border-dashed border hover:border-primary/30 hover:bg-primary/10">
                  <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>

                <Icon :name="item.icon" class=" text-xl w-10 h-10 " />
                <div class="flex items-center gap-1">
                  <!-- <h3 class="md:text-4xl text-2xl font-bold text-primary tracking-widest">{{ item.count }}</h3> -->
                </div>
                <p class="text-sm text-gray-800 font-semibold text-center uppercase p-3">{{ item.label }}</p>
              </div>
            </div>
          </el-row>
         

          <p class="text-base md:text-lg text-gray-600 mt-4 text-justify">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!
          </p>
        </div>
      </el-col>

      <el-col :xs="24" :md="8" class="md:relative">
        <div
           class="bg-gray-100 md:p-6 flex justify-center items-center rounded-sm shadow-sm md:h-full md:absolute md:inset-0 md:w-[calc(100%+32px)] md:left-[-16px] bg-cover bg-center"
          :style="{ backgroundImage: `url(${bgImage})`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' }">
          <section>
            <div v-gsap.whenVisible.from="{ x: -250, start: 'top bottom', end: 'bottom top', scrub: 1 }"
              class="text-gray-900 font-semibold text-lg md:text-6xl font-title">
              Leading Industry
            </div>
            <div class="text-secondary text-9xl md:text-10xl lg:text-10xl font-extrabold font-title"
              v-gsap.whenVisible.from="{ x: 150, start: 'top bottom', end: 'bottom top', scrub: 2 }">
              <p class="text-3xl">from</p> 1984
            </div>
          </section>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script lang="ts" setup>

const stats = [
  {
    icon: 'icon-park-solid:vertical-timeline',
    count: '4+',
    label: 'Vertical Capacity',
  },
  {
    icon: 'carbon:power-virtual-server-disaster-recovery-automation',
    count: '8+',
    label: 'Automation',
  },
  {
    icon: 'fluent:desktop-sync-24-regular',
    count: '6+',
    label: 'Digitalization',
  },
  {
    icon: 'lsicon:toggle-warehouse-y-filled',
    count: '75,000+',
    label: 'In-House Facilities',
  },
  {
    icon: 'streamline:travel-airport-earth-airplane-travel-plane-trip-airplane-international-adventure-globe-world',
    count: '1,50 Lakh+',
    label: 'Joint Ventures ',
  },
  {
    icon: 'fluent:design-ideas-20-filled',
    count: '1,50 Lakh+',
    label: 'Enriching Service',
  }
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