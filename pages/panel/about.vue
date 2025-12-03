<script setup>
definePageMeta({ layout: 'admin' })
import { useCompanyDataStore } from "~/stores/companyData";
const store = useCompanyDataStore();

const form = ref(JSON.parse(JSON.stringify(store.aboutSection)));

const saveChanges = () => {
  store.updateAbout(form.value);
  ElMessage.success('About section updated successfully');
};
</script>

<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Edit About Section</h1>

    <div class="space-y-4">
      <label class="block">
        <span class="text-sm font-medium">Title</span>
        <input v-model="form.title" class="input" />
      </label>

      <label class="block">
        <span class="text-sm font-medium">Company Name</span>
        <input v-model="form.companyName" class="input" />
      </label>

      <label class="block">
        <span class="text-sm font-medium">Suffix</span>
        <input v-model="form.companySuffix" class="input" />
      </label>
      <label class="block">
        <span class="text-sm font-medium">Year</span>
        <input v-model="form.year" class="input" />
      </label>

      <label class="block">
        <span class="text-sm font-medium">Description</span>
        <textarea v-model="form.description" class="input" />
      </label>

      <h2 class="text-lg font-semibold mt-6">Stats</h2>

      <div v-for="(item, i) in form.stats" :key="i" class="border p-4 rounded-md space-y-2">
        <input v-model="item.label" class="input" placeholder="Label" />
        <!-- <input v-model="item.image" class="input" placeholder="Image URL" /> -->
      </div>

      <button @click="saveChanges" class="bg-primary text-white px-4 py-2 rounded-md mt-4">
        Save
      </button>
    </div>
  </div>
</template>

<style>
.input {
  @apply w-full mt-1 p-2 border rounded-md;
}
</style>