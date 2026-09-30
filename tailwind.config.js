/** @type {import('tailwindcss').Config} */
import { nexusPalette as nx, hexToRgbTriplet as rgb } from "./composables/nexusTokens.js";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default {
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
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
        display: ['"Space Grotesk"', "Figtree", "sans-serif"],
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
        // v2 HAMEEM // NEXUS denim palette (see composables/nexusTokens.js)
        void: nx.void,
        ink: nx.ink,
        thread: nx.thread,
        bleach: nx.bleach,
      },
      backgroundImage: {
        "home-page-banner-bg-01": "url('/assets/HomePageBannerBG-01.jpg')",
        // NEXUS surfaces
        twill:
          "repeating-linear-gradient(135deg, rgb(255 255 255 / .035) 0 1px, transparent 1px 4px), repeating-linear-gradient(45deg, rgb(0 0 0 / .22) 0 1px, transparent 1px 7px)",
        grain,
        grid: "linear-gradient(rgb(255 255 255 / .04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .04) 1px, transparent 1px)",
        scanlines: "repeating-linear-gradient(0deg, rgb(255 255 255 / .03) 0 1px, transparent 1px 3px)",
        "thread-bleach": `linear-gradient(90deg, ${nx.thread.DEFAULT}, ${nx.bleach.DEFAULT})`,
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      boxShadow: {
        "glow-thread": `0 0 24px rgb(${rgb(nx.thread.DEFAULT)} / .25)`,
        "glow-bleach": `0 0 24px rgb(${rgb(nx.bleach.DEFAULT)} / .25)`,
      },
    },
  },
  plugins: [],
};
