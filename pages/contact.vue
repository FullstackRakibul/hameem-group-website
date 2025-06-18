<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Section -->
    <section
      class="-mt-16 relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style="background-image: url('/assets/v1/contact/contact-us-page-cover.jpg');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <!-- Content -->
      <div class="container flex flex-col justify-start items-start relative z-10 text-white px-4">
        <h1 class="md:text-6xl text-4xl font-extrabold mb-2">Contact Us</h1>
        <p class="md:text-xl text-lg max-w-2xl">
          Get in touch with us for inquiries, support, or feedback — we're listening.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16 ">
      <div class="grid lg:grid-cols-2 gap-16">
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-6">
            <!-- Address -->
            <div class="group bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Office Address</h3>
                  <p class="text-gray-600">387 (South), Tejgaon Industrial Area ,Dhaka-1208</p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="group bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Phone Number</h3>
                  <p class="text-gray-600">+880 1234 567890</p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="group bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Email Address</h3>
                  <p class="text-gray-600">info@hameemgroup.com</p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="group bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                  <p class="text-gray-600">Saturday - Thursday: 8:00 AM - 5:00 PM</p>
                  <p class="text-red-600">Friday : <span class="text-gray-600">9:00 AM - 12:00 PM</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-primary mb-2">Send us a Message</h2>
            <p class="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div class="relative">
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter your full name"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Email Field -->
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div class="relative">
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300"
                  placeholder="Enter your email address"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Subject Field -->
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="business">Business Partnership</option>
                <option value="support">Technical Support</option>
                <option value="careers">Career Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message Field -->
            <div class="group">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300 resize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </span>
                <span v-else class="flex items-center justify-center space-x-2">
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mt-16">
        <div class="mb-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Find Us Here</h2>
          <p class="text-gray-600 text-lg">Visit our office for face-to-face consultations</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <!-- <iframe 
            src="https://maps.app.goo.gl/8f3G25RZM6P7WoJb8" 
            class="w-full h-96" 
            allowfullscreen=""
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.836073151204!2d90.397174!3d23.759068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f36ebcbcdb%3A0x6363e2a5709dee2d!2sTML%20Building%20(Ha-Meem%20Group)!5e0!3m2!1sen!2sus!4v1738689429885!5m2!1sen!2sus" width="100%" height="500" style="border:0; border-radius: 6px;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </div>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
          <p class="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <button
            @click="showSuccess = false"
            class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'


// Form model
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// State
const isSubmitting = ref(false)
const showSuccess = ref(false)

// Submit handler
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
  
  isSubmitting.value = false
  showSuccess.value = true
}

// SEO Meta
useHead({
  title: 'Contact Us - Ha-Meem Group',
  meta: [
    { name: 'description', content: 'Get in touch with Ha-Meem Group for inquiries, support, or feedback. We\'re here to help.' }
  ]
})
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Focus states */
input:focus, textarea:focus, select:focus {
  outline: none;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>