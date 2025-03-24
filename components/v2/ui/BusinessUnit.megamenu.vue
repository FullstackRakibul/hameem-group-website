<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'
import { ref } from 'vue'

const tabPosition = ref<TabsInstance['tabPosition']>('left')

// Image lists for each section
const images = {
  knit: [
    './assets/knitting1.JPG',
    './assets/knitting2.JPG',
    './assets/knitting3.JPG'
  ],
  woven: [
    './assets/woven1.JPG',
    './assets/woven2.JPG',
    './assets/woven3.JPG'
  ],
  printingEmbroidery: [
    './assets/printing1.JPG',
    './assets/printing2.JPG',
    './assets/printing3.JPG'
  ],
  dyeingFinishing: [
    './assets/dyeing1.JPG',
    './assets/dyeing2.JPG',
    './assets/dyeing3.JPG'
  ],
  washing: [
    './assets/washing1.JPG',
    './assets/washing2.JPG',
    './assets/washing3.JPG'
  ],
  packaging: [
    './assets/packaging1.JPG',
    './assets/packaging2.JPG',
    './assets/packaging3.JPG'
  ],
  transport: [
    './assets/transport1.JPG',
    './assets/transport2.JPG',
    './assets/transport3.JPG'
  ]
}
</script>

<template>
  <div class="overflow-hidden py-10">
    <el-row :gutter="20">
      <!-- Business Units Title -->
      <el-col :span="8">
        <div class="flex flex-col justify-center items-center h-full">
          <h3 class="text-5xl text-[#727070] font-titillium text-center">BUSINESS UNITS</h3>
        </div>
      </el-col>

      <!-- Tabs Section -->
      <el-col :span="16">
        <el-tabs :tab-position="tabPosition" class="demo-tabs" :stretch="true" style="height: 450px">
          
          <!-- KNIT Tab -->
          <el-tab-pane label="KNIT">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.knit" :key="index">
                <el-image :src="img" class="carousel-image" alt="Knitting Section Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- WOVEN Tab -->
          <el-tab-pane label="WOVEN">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.woven" :key="index">
                <el-image :src="img" class="carousel-image" alt="Woven Section Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- PRINTING & EMBROIDERY Tab -->
          <el-tab-pane label="PRINTING & EMBROIDERY">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.printingEmbroidery" :key="index">
                <el-image :src="img" class="carousel-image" alt="Printing & Embroidery Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- DYEING & FINISHING Tab -->
          <el-tab-pane label="DYEING & FINISHING">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.dyeingFinishing" :key="index">
                <el-image :src="img" class="carousel-image" alt="Dyeing & Finishing Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- WASHING Tab -->
          <el-tab-pane label="WASHING">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.washing" :key="index">
                <el-image :src="img" class="carousel-image" alt="Washing Section Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- PACKAGING Tab -->
          <el-tab-pane label="PACKAGING">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.packaging" :key="index">
                <el-image :src="img" class="carousel-image" alt="Packaging Section Image" />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>

          <!-- TRANSPORT Tab -->
          <el-tab-pane label="TRANSPORT">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(img, index) in images.transport" :key="index">
                <el-image :src="img" class="carousel-image" alt="Transport Section Image" />
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
  padding-bottom: 20px;
}

.el-tabs__item:hover {
  color: #000;
}

.el-tabs__active-bar {
  color: #000 !important;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: "#727070" !important;
}

/* Carousel Image Styling */
.carousel-image {
  max-width: 900px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
