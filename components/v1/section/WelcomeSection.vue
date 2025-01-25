<template>
  <!-- <section class="container mx-auto py-48"> -->
  <section class="  mx-auto py-48">

    <div class=" bg-cover bg-center flex flex-col justify-between items-center text-white"
      :style="{ backgroundImage: `url('./assets/welcome-section-banner-0001.png')` }">
      <el-row :gutter="20">
        <el-col :span="12"
          class="flex justify-end items-center bg-[url('/assets/side-banner-01.png')] bg-container bg-no-repeat ">
          <el-row :gutter="20">
            <el-col :span="8">

            </el-col>
            <el-col :span="14" class="p-6">
              <el-space wrap :size="80">
                <el-row :gutter="20">
                  <el-col :span="24">
                    <div class="flex bg-transparent flex-col justify-start p-6 ">
                      <h3 class="text-6xl pb-2 font-semibold font-helvetica text-[#454242] tracking-tight text-left"
                        style="transform: scale(0.65, 1.75); transform-origin: left;">
                        HA MEEM
                      </h3>


                      <p class="tracking-widest text-black font-titillium font-medium"
                        style="transform: scale(1.2, 1.0); transform-origin: left;">
                        THE ART OF DESIGN
                      </p>
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="24">
                    <div class="grid-content ep-bg-purple" />
                    <h4 class="text-2xl font-semibold text-[#454242] font-helvetica"
                      style="transform: scale(0.8, 1.8); transform-origin: left;">Welcome !</h4>
                    <p class="py-2 text-justify text-sm text-black">We're delighted to have you here. Explore our
                      carefully
                      crafted collection of stylish, high-quality garments designed to make you look and feel your best.
                      Whether you're seeking timeless classics or the latest trends, we've got something special for
                      every occasion.

                      Thank you for choosing us-your satisfaction is our priority!

                    </p>
                    <div class="flex justify-end cursor-pointer  items-center mr-10 py-2 my-4">
                      <button class="bg-[#454242] text-white p-1 pl-24">
                        About Us
                      </button>
                    </div>
                  </el-col>
                </el-row>
              </el-space>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="8">
          <div class="bg-conatainer bg-top"
            :style="{ backgroundImage: `url('./assets/welcome-section-banner-0001.png')` }">
            <!-- <el-image class="" style="max-width: 300px; width: 100%;" src="/assets/denim-jacket-banner-img-01.jpg" alt="Home Banner Image" /> -->

          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>