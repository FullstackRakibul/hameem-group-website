<template>
  <section id="index-sustainability"
    class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-white bg-opacity-80"></div>
    
    <!-- Content Container -->
    <div class="relative z-10 max-w-8xl w-full">
      <!-- Centered Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
          Sustainability <span class="text-primary font-medium">Goals</span>
        </h2>
        <div class="flex justify-center">
          <UISectionUnderline />
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left Side: Goals List -->
        <div class="text-left">
          <h3 class="text-2xl md:text-3xl text-green-600 font-light uppercase tracking-wide mb-6">
            ROADMAP 2030
          </h3>
          <ul class="space-y-3 text-lg text-gray-800">
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Reduce ground water use by 70% and Zero liquid discharge facility
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Net zero GHG emissions
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              More than 50% renewable energy
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Less than 2% wastage of materials
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Ensure employees' living wages
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Ensure gender equality
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Smart Factory 4.0
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              100% sustainable apparel
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              100% traceable and transparent supply-chain
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Chemical Water & Power Saving
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Environment Friendly Wash Chamicals
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Power Saving Machinaries
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Water Saving And Recycling
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Green Dyes
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Natural Fibers
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Sustainable Laundry Machine
            </li>
            <li class="flex items-start">
              <span class="text-green-600 text-xl font-bold mr-2">●</span>
              Laser
            </li>
          </ul>
        </div>

        <!-- Right Side: Description & Visual -->
        <div class="space-y-6">
          <p class="text-gray-700 text-lg">
            Cute Dress is a 100% export-oriented knit garments manufacturing company.
            We have developed a sustainability framework with our core values.
            Cute Dress's milestones are ambitious in terms of 'happiness of our employees' and 'pollution-free nature'.
          </p>
          <p class="text-gray-700 text-lg">
            Our practices are fully committed to keeping environmental & societal
            costs at a minimum. We focus on strength, efficiency, productivity, and innovation
            while upholding product quality. Our plan is to manufacture for premium brands only,
            collaborating with sustainable suppliers.
          </p>

          <!-- Sustainability Icons Section -->
          <div class="flex justify-center space-x-6 mt-6">
            <div class="group flex flex-col items-center">
              <Icon name="hugeicons:turtle-neck" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <span class="mt-2 text-gray-800 font-medium text-center">Fabric Sustainability</span>
            </div>

            <div class="group flex flex-col items-center">
              <Icon name="hugeicons:chart-line-data-01" style="color: black"
                class="text-green-600 text-4xl transition-transform animate-pulse" />
              <span class="mt-2 text-gray-800 font-medium text-center">Wash Sustainability</span>
            </div>

            <div class="group flex flex-col items-center">
              <Icon name="hugeicons:eco-energy" style="color: green"
                class="text-green-600 text-4xl transition-transform" />
              <span class="mt-2 text-gray-800 font-medium text-center">Environment Sustainability</span>
            </div>
          </div>
          
          <!-- Centered Image -->
          <div class="flex justify-center items-center mt-8">
            <img src="/assets/v1/sustain.png"
              class="rounded-full w-32 h-32 md:w-80 md:h-80 p-1 object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>