<template>
  <section class="container mx-auto py-48">
    <el-row :gutter="20">
      <el-col :span="8"
        class="flex justify-end items-center bg-[url('/assets/side-banner-01.png')] bg-container bg-no-repeat ">
        <!-- <div class="flex justify-start items-center">
          <el-image class="" style="max-width: 300px; width: 100%;" src="/assets/side-banner-01.png"
            alt="Home Banner Image" />
        </div> -->
      </el-col>
      <el-col :span="8" class="">
        <el-space wrap :size="80">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content" />
              <h3 class=" text-6xl font-semibold">HA MEEM</h3>
              <p class="tracking-widest">THE ART OF DESIGN</p>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content ep-bg-purple" />
              <h4 class="text-2xl font-medium ">Welcome !</h4>
              <p class=" text-justify text-sm">Thanks for visiting our website! We have numerous loyal clients all over
                the globe.
                This fact proves that our company takes the leading place among the competitors.
                So don't waste your time and money.buy high quality products from our factory</p>
              <div class="flex justify-end cursor-pointer  items-center py-2 my-4">
                <el-divider content-position="right">About Us</el-divider>
              </div>
            </el-col>
          </el-row>
        </el-space>
      </el-col>
      <el-col :span="8">
        <div class="flex justify-end items-center ">
          <el-image class="" style="max-width: 300px; width: 100%;" src="/assets/denim-jacket-banner-img-01.jpg"
            alt="Home Banner Image" />
        </div>
      </el-col>
    </el-row>
  </section>
</template>