// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: false,

    timeline: {
      enabled: true,
    },
  },
  // animate.css was previously loaded three times (two entries here + a CDN link); once is enough
  css: ["animate.css/animate.min.css", "@/assets/css/global.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@element-plus/nuxt", "nuxt-swiper", "@nuxt/icon", "nuxt-particles", "v-gsap-nuxt"],
  elementPlus: {
    /** Options */
  },
  build: {
    transpile: ["element-plus"],
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          // One request for the families the templates use (tailwind.config.js):
          // Figtree = font-sans, Cardo = font-title, WindSong = font-writting, Great Vibes = font-writtingOne.
          // Montserrat, Titillium Web and Permanent Marker were loaded but never used.
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Figtree:ital,wght@0,300..900;1,300..900&family=Great+Vibes&family=WindSong:wght@400;500&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://media.licdn.com/dms/image/sync/v2/D5627AQH0pPnqW3Ljkw/articleshare-shrink_800/articleshare-shrink_800/0/1724182991295?e=2147483647&v=beta&t=Ep1qjnyjfI9ErabUw6jjkdP_Q3ClJNmvRHh2cu031v0",
        },
      ],
      // no maximum-scale: pinch-zoom must stay available (WCAG 1.4.4)
      viewport: "width=device-width, initial-scale=1",
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
  // Global CSS (Tailwind + animate.css + element-plus, ~200 KB) goes into one cacheable
  // stylesheet instead of being inlined into every HTML response.
  features: {
    inlineStyles: false,
  },
  // Serve pre-compressed (gzip + brotli) JS/CSS/assets from the Nitro server.
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    payloadExtraction: false
  }
  ,
  vite: {
    optimizeDeps: {
      exclude: ['#app-manifest']
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
  
});