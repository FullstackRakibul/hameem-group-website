<script lang="ts" setup>
import type { TabsInstance } from 'element-plus'
const tabPosition = ref<TabsInstance['tabPosition']>('left')
</script>

<template>
  <div class=" overflow-hidden ">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="flex flex-col justify-center items-center h-full">
          <h3 class="text-5xl text-[#727070] font-titillium text-center">BUSINESS UNITS</h3>
        </div>
      </el-col>
      <el-col :span="16">
        <el-tabs :tab-position="tabPosition" class="demo-tabs" :stretch="true" style="height: 400px">
          <el-tab-pane label="KNIT">
            <el-image class="transition-transform duration-300 group-hover:scale-110"
              style="max-width: 900px; width: 100%;" src="./assets/placeHolder-01.jpg"
              alt="Mission Vision Section banner" />
          </el-tab-pane>
          <el-tab-pane class="text-2xl" label="WOVEN">WOVEN</el-tab-pane>
          <el-tab-pane label="PRINING & EMBROIDARY"> PRINING & EMBROIDARY</el-tab-pane>
          <el-tab-pane label="DYING & FINISHING">DYING & FINISHING</el-tab-pane>
          <el-tab-pane label="WASHING">WASHING</el-tab-pane>
          <el-tab-pane label="PAKAGING"> PAKAGING </el-tab-pane>
          <el-tab-pane label="TRANSPORT">TRANSPORT </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>

</template>
<style scope>
.demo-tabs>.el-tabs__content {
  padding: 32px;
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