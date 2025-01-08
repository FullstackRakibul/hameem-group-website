// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  elementPlus: { /** Options */ },
  //css: ['~/assets/styles/main.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://api.hameemgroup.com',
    },
  },
  build: {
    transpile: ['element-plus'],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },

})