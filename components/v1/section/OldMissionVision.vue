<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "/assets/missionvissionsectionbg-abstruct.jpg", // Update with actual image path
  },
});
</script>

<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-24 someContainer"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- Abstract Wave Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <svg viewBox="0 0 1440 320" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1E90FF" fill-opacity="0.2"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>

    <el-row :gutter="20" class="items-center relative z-10  ">
      <!-- Image Column -->
      <el-col :xs="24" :md="12">
        <div class="relative overflow-hidden rounded-lg">
          <el-image class="transition-transform duration-300 hover:scale-110 p-10"
            style="max-width: 600px; width: 100%;" src="./assets/missionvission-sectionImage.png"
            alt="Mission Vision Section banner" />
        </div>
      </el-col>

      <!-- Content Column -->
      <el-col :xs="24" :md="12">
        <!-- Section Title -->
        <div class="text-left   py-6 ">
          <h2 class="text-5xl font-bold text-black animate__animated animate__fadeInUp">
            Our Vision & Mission
          </h2>
          <p class="text-lg text-gray-600 mt-2 animate__animated animate__fadeInUp animate__delay-1s">
            Ha-Meem Group's mission is to provide quality products on time, while also aiming to eliminate poverty and
            promote industrialization, with a vision of becoming a leading wholesale clothing manufacturer in Bangladesh
            and globally.
          </p>
        </div>

        <!-- Key Points Section -->
        <el-row :gutter="20" class="mt-6">
          <!-- Mission Points -->
          <el-col :span="12">
            <el-card class="key-point animate__animated animate__zoomIn ">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:quality" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Quality Products</h3>
              <p class="text-gray-600">We deliver high-quality products on time.</p>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="key-point animate__animated animate__zoomIn animate__delay-1s">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:poverty" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Eliminate Poverty</h3>
              <p class="text-gray-600">Remove unemployment and poverty.</p>
            </el-card>
          </el-col>
          <el-col :span="12" class="mt-6">
            <el-card class="key-point animate__animated animate__zoomIn animate__delay-2s">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:industry" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Industrialization</h3>
              <p class="text-gray-600">We strive to further industrialization.</p>
            </el-card>
          </el-col>

          <!-- Vision Points -->
          <el-col :span="12" class="mt-6">
            <el-card class="key-point animate__animated animate__zoomIn animate__delay-3s">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:trophy" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Leading Manufacturer</h3>
              <p class="text-gray-600">Leading clothing manufacturer in BD.</p>
            </el-card>
          </el-col>
          <el-col :span="12" class="mt-6">
            <el-card class="key-point animate__animated animate__zoomIn animate__delay-4s">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:target" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Industry Breakthrough</h3>
              <p class="text-gray-600">To break through in the textile industry.</p>
            </el-card>
          </el-col>
          <el-col :span="12" class="mt-6">
            <el-card class="key-point animate__animated animate__zoomIn animate__delay-5s">
              <span class="absolute inline-flex h-full w-full hover:animate-ping rounded-full hover:bg-sky-400 opacity-50"/>
              <Icon name="hugeicons:education" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <h3 class="text-xl font-semibold text-gray-800 mt-2">Employee Welfare</h3>
              <p class="text-gray-600">Ensure educational and financial security.</p>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>
</template>



<style scoped>
/* Hover effect */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Primary color theme */
.text-primary {
  color: #1E90FF;
  /* Adjust primary color */
}

.bg-primary {
  background-color: #1E90FF;
}

/* Key Point Card Styling */
.key-point {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.key-point:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>