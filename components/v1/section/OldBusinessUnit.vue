<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'

const tabPosition = ref<TabsInstance['tabPosition']>('left')

// Sample image data for each tab
const tabImages = {
  knit: [
    './assets/v1/section/knit/IMG_9619.JPG',
    './assets/v1/section/knit/IMG_9632.JPG',
    './assets/v1/section/knit/IMG_9636.JPG',
    './assets/v1/section/knit/IMG_9639.JPG',
    './assets/v1/section/knit/IMG_9644.JPG',
  ],
  woven: [
    './assets/v1/section/woven/IMG_9649.JPG',
    './assets/v1/section/woven/IMG_9666.JPG',
  ],
  printing: [
    './assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 01.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Accessories Unit 04.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 01.png',
    './assets/v1/section/PRINTING & EMBROIDARY/Embroidery Unit 02.png',
  ],
  dyeing: [
    './assets/v1/section/DYING & FINISHING/IMG_7307.JPG',
  ],
  washing: [
    './assets/v1/section/WASHING/wash.JPG',
  ],
  packaging: [
    './assets/v1/section/PAKAGING/01 (1).jpg',
  ],
  transport: [
    './assets/v1/section/TRANSPORT/hsbc-bangladesh-introduced-sustainability-linked-loan-for-ha-meem-group-banner-image.jpg',
  ]
}
</script>

<template>
  <div class="overflow-hidden px-10 py-10">
    <el-row :gutter="20">
      <!-- Business Units Title -->
      <el-col :span="8">
        <div class="flex flex-col justify-center items-center h-full">
          <h3 class="text-5xl text-[#727070] font-titillium text-center font-bold">BUSINESS UNITS</h3>
        </div>
      </el-col>

      <!-- Tabs Section -->
      <el-col :span="16">
        <el-tabs :tab-position="tabPosition" class="demo-tabs" :stretch="true" style="height: 400px">
          <!-- KNIT Tab -->
          <el-tab-pane label="KNIT">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.knit" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Knitting Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- WOVEN Tab -->
          <el-tab-pane label="WOVEN">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.woven" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Woven Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- PRINTING & EMBROIDERY Tab -->
          <el-tab-pane label="PRINTING & EMBROIDERY">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.printing" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Printing Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- DYEING & FINISHING Tab -->
          <el-tab-pane label="DYEING & FINISHING">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.dyeing" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Dyeing Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- WASHING Tab -->
          <el-tab-pane label="WASHING">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.washing" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Washing Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- PACKAGING Tab -->
          <el-tab-pane label="PACKAGING">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.packaging" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Packaging Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- TRANSPORT Tab -->
          <el-tab-pane label="TRANSPORT">
            <el-carousel :interval="5000" height="400px" arrow="always" indicator-position="outside">
              <el-carousel-item v-for="(image, index) in tabImages.transport" :key="index">
                <el-image class="w-full h-full" :src="image" fit="cover" :alt="`Transport Image ${index + 1}`" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.demo-tabs>.el-tabs__content {
  padding: 15px;
  color: #727070;
  font-size: 32px;
  font-weight: 700;
}

.el-tabs__item {
  font-size: 1.4rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #727070;
  padding-bottom: 20px
}

.el-tabs__item:hover {
  color: #000;
}

.el-tabs__active-bar {
  background-color: #000 !important;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #727070 !important;
}

/* Carousel styling */
:deep(.el-carousel) {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.el-carousel__arrow) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20px;
  width: 48px;
  height: 48px;
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(0, 0, 0, 0.8);
}

:deep(.el-carousel__indicator) {
  padding: 8px 4px;
}

:deep(.el-carousel__button) {
  height: 3px;
  width: 24px;
  border-radius: 2px;
  background-color: #727070;
}

:deep(.el-carousel__indicator.is-active .el-carousel__button) {
  background-color: #000;
}
</style>