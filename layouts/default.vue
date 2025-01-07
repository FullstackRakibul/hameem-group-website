<template>
<div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
/* Layout styles here */
</style>
