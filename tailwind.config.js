/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "serif"],
        title: ["Cardo", "sans-serif"],
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
        padding: "1rem",
      },
      maxWidth: {
        1400: "1400px",
      },
      colors: {
        primary: "#264156",
        secondary: "#40160C",
      },
      backgroundImage: {
        "home-page-banner-bg-01": "url('/assets/HomePageBannerBG-01.jpg')",
      },
    },
  },
  plugins: [],
};
