<template>
  <section id="index-contact">
    <div class="lg:px-16 md:px-14 px-4 mx-auto my-10">
      <div class="flex flex-col md:flex-row items-start gap-10">
        
        <!-- Image Column -->
        <div class="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
          <img
            src="/assets/v1/HAMEEMGROUP00003.png"
            alt="Why Employees Stay with Us - Ha-Meem Group"
            class="w-[300px] max-w-xs md:max-w-sm rounded-md"
          />
        </div>

        <!-- Contact & Map Grid -->
        <div class="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 bg-primary text-white rounded-md border border-white p-8 gap-8">
          
          <!-- Contact Info Column -->
          <div class="space-y-6">
            <h2 class="uppercase font-light text-3xl md:text-4xl mb-2">Contact Us</h2>
            <div class="w-1/3 h-0.5 bg-white my-4"></div>

            <!-- Office Address -->
            <div class="flex items-start space-x-4">
              <div class="mt-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold mb-2">Head Office</p>
                <address class="not-italic">
                  Ha-Meem Group<br />
                  387 (South), Tejgaon Industrial Area<br />
                  Dhaka-1208, Bangladesh
                </address>
              </div>
            </div>

            <!-- Contact Numbers -->
            <div class="flex items-start space-x-4">
              <div class="mt-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold">Contact Numbers</p>
                <p class="mt-2">Phone: +880-2-8878703-8<br />Fax: +880-2-8878703-8</p>
                <p class="mt-2">Email: <a href="mailto:info@hameemgroup.net" class="underline">info@hameemgroup.net</a></p>
              </div>
            </div>
          </div>

          <!-- Map Column -->
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.836073151204!2d90.397174!3d23.759068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f36ebcbcdb%3A0x6363e2a5709dee2d!2sTML%20Building%20(Ha-Meem%20Group)!5e0!3m2!1sen!2sus!4v1738689429885!5m2!1sen!2sus"
              width="100%" height="300"
              style="border:0; border-radius: 6px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Initialize map here
});
</script>

<style scoped>
.contact-us-map-section {
  padding: 20px;
  text-align: center;
}

#map {
  width: 100%;
  height: 400px;
  background-color: #e5e5e5;
}
</style>