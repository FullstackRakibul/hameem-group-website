


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: [
  //   'ant-design-vue/dist/antd.css'
  // ],
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@element-plus/nuxt', 'nuxt-swiper'],
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
        { rel: 'icon', type: 'image/x-icon', href: 'https://media.licdn.com/dms/image/sync/v2/D5627AQH0pPnqW3Ljkw/articleshare-shrink_800/articleshare-shrink_800/0/1724182991295?e=2147483647&v=beta&t=Ep1qjnyjfI9ErabUw6jjkdP_Q3ClJNmvRHh2cu031v0' },
      ],
    },

    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },

  },
  ssr: true,

})