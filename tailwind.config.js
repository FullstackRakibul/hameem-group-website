/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "serif"],
        title: ["Cardo", "sans-serif"],
        writting: ["WindSong", "cursive"],
        writtingOne: ["Great Vibes", "cursive"],
        description: ["Permanent Marker", "cursive"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        // titillium: ['"Titillium Web"', "sans-serif"],
        // denim: ["Cardo", "serif"],
        fontWeight: {
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
      },
      container: {
        center: true, // Ensures container is always centered
        padding: "1rem", // Adds padding inside the container
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      maxWidth: {
        1400: "1400px",
      },
      colors: {
        primary: "#203f56",
        // primary: "#264156",
        secondary: "#40160C",
        // v2 modern (dark editorial) palette
        ink: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#181818",
          700: "#222222",
          600: "#2e2e2e",
        },
        coral: {
          DEFAULT: "#ff6b4a",
          300: "#ffa48f",
          400: "#ff8566",
          500: "#ff6b4a",
          600: "#e8532f",
        },
      },
      backgroundImage: {
        "home-page-banner-bg-01": "url('/assets/HomePageBannerBG-01.jpg')",
      },
    },
  },
  plugins: [],
};
