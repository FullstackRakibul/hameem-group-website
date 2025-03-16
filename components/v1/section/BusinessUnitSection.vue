<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'
const tabPosition = ref<TabsInstance['tabPosition']>('left')
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
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/knittingSectionImage.JPG"
            alt="Knitting Section Image"
          />
        </el-tab-pane>

        <!-- WOVEN Tab -->
        <el-tab-pane label="WOVEN">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/wovenSectionImage.JPG"
            alt="Woven Section Image"
          />
        </el-tab-pane>

        <!-- PRINTING & EMBROIDERY Tab -->
        <el-tab-pane label="PRINTING & EMBROIDERY">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/printingEmbroiderySectionImage.JPG"
            alt="Printing & Embroidery Section Image"
          />
        </el-tab-pane>

        <!-- DYEING & FINISHING Tab -->
        <el-tab-pane label="DYEING & FINISHING">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/dyeingFinishingSectionImage.JPG"
            alt="Dyeing & Finishing Section Image"
          />
        </el-tab-pane>

        <!-- WASHING Tab -->
        <el-tab-pane label="WASHING">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/washingSectionImage.JPG"
            alt="Washing Section Image"
          />
        </el-tab-pane>

        <!-- PACKAGING Tab -->
        <el-tab-pane label="PACKAGING">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/packagingSectionImage.JPG"
            alt="Packaging Section Image"
          />
        </el-tab-pane>

        <!-- TRANSPORT Tab -->
        <el-tab-pane label="TRANSPORT">
          <el-image
            class="transition-transform duration-300 group-hover:scale-110"
            style="max-width: 900px; width: 100%;"
            src="./assets/transportSectionImage.JPG"
            alt="Transport Section Image"
          />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</div>

</template>
<style scope>
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
</style>