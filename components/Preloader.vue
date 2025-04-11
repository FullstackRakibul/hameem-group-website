<template>
  <div class="preloader">
    <img src="/assets/proloader.gif" alt="Loading..." />
  </div>
</template>

<script setup>
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>
