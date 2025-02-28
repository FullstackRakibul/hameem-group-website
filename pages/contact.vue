<template>
  <div>
    <!-- Banner Section -->
    <div class=" inset-0 mt-20 bg-black bg-opacity-50"></div>
    <div class="relative z-10 flex items-center justify-center h-full text-center text-primary px-4">
      <div>
        <h1 class="text-4xl font-bold mb-2">Contact Us</h1>
        <p class="text-lg">
          Get in touch with us for inquiries, support, or feedback.
        </p>
      </div>
    </div>


    <!-- Page Content -->
    <div class="container mx-auto px-4 py-12 max-w-5xl">
      <!-- Contact Form -->
      <div class="mb-12">
        <el-card class="">
          <h2 class="text-2xl font-semibold mb-6">ERP & HRM Apps</h2>
          <el-form :model="form" :rules="rules" ref="contactForm" label-position="top" class="space-y-6">
            <!-- Email Field -->
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" placeholder="Enter your email"></el-input>
            </el-form-item>

            <!-- Message Field -->
            <el-form-item label="Message" prop="message">
              <el-input type="textarea" v-model="form.message" placeholder="Enter your message" rows="6"></el-input>
            </el-form-item>

            <!-- Submit Button -->
            <el-form-item>
              <el-button type="primary" size="large" @click="submitForm">
                Send Message
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>

      <!-- Map Section -->
      <div class="relative">
        <h2 class="text-2xl font-semibold mb-4">Find Us Here</h2>
        <iframe src="https://maps.app.goo.gl/8f3G25RZM6P7WoJb8" class="w-full h-96 border rounded-md" allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";

// Form model
const form = reactive({
  email: "",
  message: "",
});

// Validation rules
const rules = {
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    { type: "email", message: "Invalid email address", trigger: "blur" },
  ],
  message: [
    { required: true, message: "Message is required", trigger: "blur" },
  ],
};

// Form reference
const contactForm = ref(null);

// Submit handler
const submitForm = () => {
  contactForm.value.validate((valid) => {
    if (valid) {
      ElMessage.success("Your message has been sent successfully!");
      // Reset the form after submission
      form.email = "";
      form.message = "";
    } else {
      ElMessage.error("Please fill in all required fields.");
    }
  });
};
</script>

<style scoped>
/* Additional styling if needed */
</style>