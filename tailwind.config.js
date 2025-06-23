/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "serif"],
        title: ["Cardo", "sans-serif"],
        writting: ["WindSong", "cursive"],
        writtingOne: ["Great Vibes", "cursive"],
        description: ["Permanent Marker", "cursive"],
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
      },
      backgroundImage: {
        "home-page-banner-bg-01": "url('/assets/HomePageBannerBG-01.jpg')",
      },
    },
  },
  plugins: [],
};
