<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="flex items-center justify-between px-4 py-3 md:px-8">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/public/assets/group-logo.png" alt="Hameem Group Logo" class="h-8 md:h-10" />
       
      </div>

      <!-- Hamburger Menu (for Mobile) -->
      <button
        class="md:hidden"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <el-icon>
          <menu />
        </el-icon>
      </button>

      <!-- Menu -->
      <ul
        class="hidden md:flex space-x-4 text-lg font-medium"
        :class="{ 'block absolute bg-white w-full left-0 top-full shadow-md py-4': isMenuOpen }"
      >
        <li>
          <a href="/" class="hover:text-blue-600">Home</a>
        </li>
        <li>
          <a href="/sister-concerns" class="hover:text-blue-600">Sister Concerns</a>
        </li>
        <li>
          <a href="/about" class="hover:text-blue-600">About Us</a>
        </li>
        <li>
          <a href="/contact" class="hover:text-blue-600">Contact Us</a>
        </li>
        <li>
          <a
            href="/brochure.pdf"
            class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            download
          >
            Download Brochure
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Menu } from "@element-plus/icons-vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Add custom styling if needed */
</style>



<!-- <template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="/public/assets/group-logo.png"
        alt="Ha-meem Group"
      />
    </el-menu-item>
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style> -->
