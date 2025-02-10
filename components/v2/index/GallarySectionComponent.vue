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
            <div class="relative group rounded-md overflow-hidden">
              <img src="/assets/v2/gallary/gallary-image-0002.jpg" alt="HI-FASHION" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">HI-FASHION</h1>
            </div>
          </el-col> 
          <el-col :span="12">
            <div class="relative group rounded-md overflow-hidden">
              <img src="/assets/v2/gallary/gallary-image-0004.jpg" alt="DENIM JEANS" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">DENIM JEANS</h1>
            </div>
          </el-col> 
        </el-row> 
        <el-row :gutter="16">
          <el-col :span="8">
            <div class="relative group rounded-md overflow-hidden">
              <img src="/assets/v2/gallary/gallary-image-0005.jpg" alt="JACKETS FACILITY" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">JACKETS FACILITY</h1>
            </div>
          </el-col> 
          <el-col :span="8">
            <div class="relative group rounded-md overflow-hidden">
              <img src="/assets/v2/gallary/gallary-image-0006.jpg" alt="3D WHISKER" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">3D WHISKER</h1>
            </div>
          </el-col> 
          <el-col :span="8">
            <div class="relative group rounded-md overflow-hidden">
              <img src="/assets/v2/gallary/gallary-image-0007.jpg" alt="MENS SHIRTS" class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">MENS SHIRTS</h1>
            </div>
          </el-col> 
        </el-row> 
      </el-col>      
      <el-col :span="8">
         <div class="relative group rounded-md overflow-hidden h-[460px]">
              <img src="/assets/v2/gallary/gallary-image-0003.jpg" alt="CRITICAL CARGOS" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h1 class="absolute bottom-4 left-4 text-white text-lg font-semibold">CRITICAL CARGOS</h1>
            </div>
      </el-col>      
     </el-row>
     <!-- ...gallary grid section... -->
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from '../ui/SectionHeader.vue';

</script>

<style scoped>
.group:hover img {
  transform: scale(1.1);
}
.group:hover .bg-opacity-40 {
  opacity: 1;
}
</style>
