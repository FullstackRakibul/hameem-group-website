<template>
  <el-divider></el-divider>
  <section class="container mx-auto">
        <!-- Section Title -->
    <el-row class="mb-10 justify-center">
      <el-col :span="24" class="text-center">
        <h2 class="text-4xl font-bold text-gray-800">Sustainability</h2>
        <p class="text-lg text-gray-600 mt-2">
          Our milestones in excellence and recognition over the years.
        </p>
      </el-col>
    </el-row>
    

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card  class="bg-primary p-4 rounded-sm">
          <p class="text-2xl font-semibold text-white">Fabric Sustainability</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="bg-primary p-4 rounded-sm">
          <p class="text-2xl font-semibold text-white">Wash Sustainability</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="bg-primary p-4 rounded-sm">
          <p class="text-2xl font-semibold text-white">Environment Sustainability</p>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<style scoped >
.el-card.is-always-shadow.bg-primary.p-4.rounded-sm {
  background-color: #264156;
}
</style>