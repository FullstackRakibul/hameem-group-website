<template>
  <section class="gallary-section container mx-auto py-6">
    <!-- ...heading section... -->
    <SectionHeader 
      title="We specialize in creating a diverse range of garments, including" 
      subtitle="Major Products & Gallary"
      buttonTextLink="/blogs"
      buttonText="View Our Gallary" 
    />
    <!-- ...heading section... -->

    <!-- ...gallary grid section... -->
     <el-row :gutter="16">
      <el-col :span="16">
        <el-row :gutter="16" class="pb-4">
          <el-col :span="12">
            <div class="p-20 bg-slate-600 rounded-md">
              <h1>Product 1</h1>
            </div>
          </el-col> 
          <el-col :span="12">
            <div class="p-20 bg-slate-600 rounded-md">
              <h1>Product 2</h1>
            </div>
          </el-col> 
        </el-row> 
        <el-row :gutter="16">
          <el-col :span="8">
            <div class="p-20 bg-slate-600 rounded-md">
              <h1>Product 3</h1>
            </div>
          </el-col> 
          <el-col :span="8">
            <div class="p-20 bg-slate-600 rounded-md">
              <h1>Product 4</h1>
            </div>
          </el-col> 
          <el-col :span="8">
            <div class="p-20 bg-slate-600 rounded-md">
              <h1>Product 5</h1>
            </div>
          </el-col> 
        </el-row> 
      </el-col>      
      <el-col :span="8">
         <div class="p-20 bg-slate-600 rounded-md h-full">
              <h1>Product 6</h1>
            </div>
      </el-col>      
     </el-row>
     <!-- ...gallary grid section... -->
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '../ui/SectionHeader.vue';


</script>
