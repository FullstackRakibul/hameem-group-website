// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["animate.css/animate.min.css", "animate.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@element-plus/nuxt", "nuxt-swiper", "@nuxt/icon", "nuxt-particles", "v-gsap-nuxt"],
  elementPlus: {
    /** Options */
  },

// vgsap: {
//   debug: true,
//   plugins: ['ScrollTrigger'],
//   composable: true
// },
  // runtimeConfig: {
  //   public: {
  //     apiBase: process.env.API_BASE || "https://api.hameemgroup.com",
  //   },
  // },
  build: {
    transpile: ["element-plus"],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Montserrat&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://media.licdn.com/dms/image/sync/v2/D5627AQH0pPnqW3Ljkw/articleshare-shrink_800/articleshare-shrink_800/0/1724182991295?e=2147483647&v=beta&t=Ep1qjnyjfI9ErabUw6jjkdP_Q3ClJNmvRHh2cu031v0",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Permanent+Marker:ital,wght@0,400;0,700;&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
        
      ],
      style: [
        {
          // al h1 will be font denim
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },
  particles: {
    mode: "full", // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true,
  },
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
  
});