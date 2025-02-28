<template>
  <section class="bg-gray-100 py-10">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-medium text-[#727070] text-center mb-10">Board of Directors</h2>

      <!-- Chairman Card -->
      <div class="flex justify-center mb-8">
        <el-card
          shadow="hover"
          class="flex flex-col items-center justify-center w-full md:w-2/5"
        >
          <img
            src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
            alt="Chairman"
            class="rounded-full w-32 h-32 mb-4"
          />
          <h3 class="text-xl font-bold">Chairman</h3>
        </el-card>
      </div>

      <!-- Grid Layout for Other Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Managing Director -->
        <el-card shadow="hover" class="flex flex-col items-center">
          <img
            src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
            alt="Managing Director"
            class="rounded-full w-32 h-32 mb-4"
          />
          <h3 class="text-xl font-bold">Managing Director</h3>
        </el-card>

        <!-- Deputy Managing Director -->
        <el-card shadow="hover" class="flex flex-col justify-center items-center text-center">
          <img
            src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
            alt="Deputy Managing Director"
            class="rounded-full w-32 h-32 mb-4"
          />
          <h3 class="text-xl font-bold">Deputy Managing Director</h3>
        </el-card>


        <!-- Director -->
        <el-card shadow="hover" class="flex flex-col items-center">
          <img
            src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
            alt="Director"
            class="rounded-full w-32 h-32 mb-4"
          />
          <h3 class="text-xl font-bold">Director</h3>
        </el-card>

        <!-- Contact Us -->
        <el-card shadow="hover" class="flex flex-col items-center">
          <img
            src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
            alt="Contact Us"
            class="rounded-full w-32 h-32 mb-4"
          />
          <h3 class="text-xl font-bold">Director</h3>
        </el-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional styling for smoother card hover effects */
.el-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.el-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
}

.el-card__body {

    align-items: center !important;
    justify-items: center !important;
}
</style>
