<template>
  <section class="container mx-auto py-48">

    <div class=" bg-cover bg-center flex flex-col justify-between items-center text-white"
      :style="{ backgroundImage: `url('./assets/welcome-section-banner-0001.png')` }">
      <el-row :gutter="20">
        <el-col :span="6"
          class="flex justify-end items-center bg-[url('/assets/side-banner-01.png')] bg-container bg-no-repeat ">
          <!-- <div class="flex justify-start items-center">
                  <el-image class="" style="max-width: 300px; width: 100%;" src="/assets/side-banner-01.png"
                    alt="Home Banner Image" />
                </div> -->
        </el-col>
        <el-col :span="6" class="">
          <el-space wrap :size="80">
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content p-6 " />
                <h3 class=" text-6xl text-black font-semibold">HA MEEM</h3>
                <p class="tracking-widest text-black">THE ART OF DESIGN</p>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="24" >
                <div class="grid-content ep-bg-purple" />
                <h4 class="text-2xl font-medium text-black">Welcome </h4>
                <p class=" text-justify text-sm text-black">We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion.Thank you for choosing us-your satisfaction is our priority!
                </p>
                <div class="flex justify-end cursor-pointer  items-center py-2 my-4">
                  <el-divider content-position="right">About Us</el-divider>
                </div>
              </el-col>
            </el-row>
          </el-space>
        </el-col>
        <el-col :span="8">
          <div class="bg-cover bg-center"
            :style="{ backgroundImage: `url('./assets/welcome-section-banner-0001.png')` }">
            <!-- <el-image class="" style="max-width: 300px; width: 100%;" src="/assets/denim-jacket-banner-img-01.jpg" alt="Home Banner Image" /> -->

          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>