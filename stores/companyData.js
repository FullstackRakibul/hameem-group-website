// stores/companyData.js
import { defineStore } from "pinia";

export const useCompanyDataStore = defineStore("companyData", {
  state: () => ({
    aboutSection: {
      title: "Welcome to",
      companyName: "Ha-Meem",
      companySuffix: "Group",
      description: "Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of Bangladesh's largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD. Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.",
      year: "1984",
      footerDescription: "We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends, we've got something special for every occasion. Thank you for choosing us — your satisfaction is our priority!",
      stats: [
        { label: "Vertical Capacity", image: "/assets/v1/section/about/garmentys.png" },
        { label: "Automation", image: "/assets/v1/section/about/AUTOMATION.png" },
        { label: "Digitalization", image: "/assets/v1/section/about/Digitalization-.png" },
        { label: "In-House Facilities", image: "/assets/v1/section/about/in-house.png" },
        { label: "Joint Ventures", image: "/assets/v1/section/about/join.png" },
        { label: "Enriching Service", image: "/assets/v1/section/about/RO.png" }
      ]
    }
  }),

  actions: {
    loadFromLocalStorage() {
      if (process.server) return; 

      const saved = localStorage.getItem("companyData");
      if (saved) {
        this.$state = JSON.parse(saved);
      }
    },

    saveToLocalStorage() {
      if (process.server) return;   
      localStorage.setItem("companyData", JSON.stringify(this.$state));
    },

    updateAbout(newData) {
      this.aboutSection = { ...this.aboutSection, ...newData };
      this.saveToLocalStorage();
    }
  }
});
