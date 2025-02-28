<template>
  <div class="fixed bottom-4 right-4 z-50">
    <el-dropdown trigger="hover" placement="bottom-end">
      <button
        class="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        <span>{{ selectedLanguage }}</span>
        <el-icon class="ml-2">
          <arrow-down />
        </el-icon>
      </button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(lang, code) in languages"
            :key="code"
            @click="changeLanguage(code)"
          >
            {{ lang }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- Google Translate Embed -->
    <div id="google_translate_element" class="hidden"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";

// Available languages
const languages = {
  en: "English",
  fr: "French (Français)",
  es: "Spanish (Español)",
  de: "German (Deutsche)",
  bn: "Bengali (বাংলা)",
  hi: "Hindi (हिंदी)",
  ar: "Arabic (العربية)",
  zh: "Chinese (中文)",
  ja: "Japanese (日本語)",
  ko: "Korean (한국어)",
  ru: "Russian (русский)",

};

// Selected language
const selectedLanguage = ref("English");

// Change language
const changeLanguage = (languageCode) => {
  const iframe = document.querySelector("iframe.goog-te-menu-frame");
  if (!iframe) {
    alert("Google Translate not fully loaded yet. Please wait.");
    return;
  }

  // Open Google Translate dropdown
  const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  const menu = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
  menu.forEach((menuItem) => {
    if (menuItem.innerText === languages[languageCode]) {
      menuItem.click();
    }
  });

  selectedLanguage.value = languages[languageCode];
};

// Load Google Translate script
const loadGoogleTranslate = () => {
  const script = document.createElement("script");
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(script);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: Object.keys(languages).join(",") },
      "google_translate_element"
    );
  };
};

// Initialize Google Translate on mount
onMounted(() => {
  loadGoogleTranslate();
});
</script>

<style scoped>
/* Style for the language switcher */
#google_translate_element .goog-te-combo {
  display: none !important;
}

.goog-te-banner-frame.skiptranslate {
  display: none !important;
}

body {
  top: 0 !important;
}
</style>
