<template>
  <div class="bg-white min-h-screen font-inter">
    <!-- Floating Translation Button -->
    <div class="fixed top-4 right-4 z-50 flex flex-row items-end space-x-1">
      <a href="https://360vr.hameemgroup.com" target="_blank" rel="noopener noreferrer"
        class="bg-white text-primary p-3 shadow-lg transition-all duration-300 hover:scale-110 group flex items-center justify-center border border-primary rounded-full"
        title="View 360° Virtual Tour">
        <img src="/assets/profile/360-Degree-Virtual-Tour-1.png" class="h-6 w-6" alt="360 VR Tour" />
      </a>
      <button @click="toggleLanguage"
        class="text-white bg-white border border-primary rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        :title="
          language === 'en'
            ? 'Switch to Chinese'
            : language === 'zh'
            ? '日本語に切り替え'
            : 'Switch to English'
        ">
        <img :src="getLanguageIcon()" class="h-12 w-12 sm:h-12 sm:w-12" :alt="`${language.toUpperCase()} Language`" />
      </button>
    </div>

    <!-- Header Section -->
    <div class="bg-white py-6 sm:py-6 px-4 sm:px-6 shadow-sm rounded-b-lg">
      <div class="max-w-screen-2xl mx-auto">
        <!-- Company Logo and Title Container -->
        <div class="flex flex-col md:flex-row items-center justify-center md:gap-8 md:mb-2">
          <!-- Logo Container -->
          <div class="rounded-lg border border-gray-200 bg-white shadow-sm mb-3 md:mb-1">
            <img src="https://textilepages.com/public/profile/1593836298-img1-logo.png" alt="Ha-Meem Group"
              class="h-16 sm:h-20 w-auto rounded" />
          </div>
          <!-- Title Container -->
          <div class="w-full md:w-auto text-center">
            <h1
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight transition-all duration-500">
              {{ getTranslation("companyTitle") }}
            </h1>
            <!-- Minimalist bottom border for the title -->
            <div class="w-full mx-auto h-0.5 bg-[#1857a3] mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="max-w-screen-2xl mx-auto px-4 py-4">
      <div class="grid lg:grid-cols-5 gap-6 items-start">
        <!-- Left Side - Statistics Grid (3/5 width) -->
        <div class="lg:col-span-3">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-2">
            <!-- Statistics Cards -->
            <div v-for="(stat, index) in translatedStatisticsData" :key="index"
              class="bg-white border-2 border-primary/20 rounded-md p-2 flex items-center hover:shadow-xl transition-shadow md:p-3 hover:scale-105">
              <div class="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-2 flex items-center justify-center flex-shrink-0">
                <img :src="stat.icon" :alt="stat.label"
                  class="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 object-contain" />
              </div>
              <div class="flex-1 min-w-0">
                <div
                  class="text-lg text-center md:text-xl lg:text-xl font-bold text-[#1857a3] truncate transition-all duration-500"
                  v-html="stat.value"></div>
                <div
                  class="text-xs text-center font-semibold text-gray-600 uppercase leading-tight transition-all duration-500">
                  {{ stat.label }}
                </div>
              </div>
            </div>
            <div
              class="card-border-gradient rounded-md p-0.5 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <a href="https://360vr.hameemgroup.com" target="_blank" rel="noopener noreferrer">
                <div class="relative w-full h-full rounded-lg bg-white">
                  <img src="/assets/profile/360-Degree-Virtual-Tour-2.jpg" alt="Ha-Meem Group Logo"
                    class="w-full h-full rounded-md object-cover" />
                </div>
              </a>
            </div>
            <!-- Virtual Tour Card -->
            <div class="flex flex-row items-center justify-center p-4 transition bg-white">
              <img src="/assets/profile/icons/hand-indicator.png" alt="Hand Icon" class="w-10 h-10 mb-2" />

              <p class="text-center text-primary text-xs font-bold">
                TAKE A VIRTUAL TOUR OF HA-MEEM GROUP
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side - Main Slider (2/5 width) -->
        <div class="lg:col-span-2">
          <div class="relative bg-white rounded-xl overflow-hidden">
            <!-- Element Plus Carousel -->
            <el-carousel :interval="2500" arrow="always" indicator-position="none" height="380px" class="rounded-md">
              <el-carousel-item v-for="(slide, index) in mainSliderImages" :key="index"
                class="flex items-center justify-center bg-gray-100">
                <img loading="lazy" :src="slide.src" :alt="slide.alt"
                  class="w-full h-full aspect-auto rounded-xl" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Section -->
    <div class="bg-gray-50 py-6 sm:py-8 md:py-8 rounded-t-lg mx-auto overflow-x-hidden">
      <div class="max-w-screen-2xl mx-auto sm:px-4">
        <div class="grid md:grid-cols-2 gap-8 md:gap-10 md:divide-x md:divide-gray-300">

          <!-- Our Customers Carousel -->
          <div class="relative px-4 sm:px-8 md:px-12 lg:px-16">
            <h2
              class="section-title text-lg sm:text-xl md:text-2xl font-bold text-[#1857a3] text-center mb-4 md:mb-6 transition-all duration-500">
              {{ getTranslation("ourCustomer") }}
            </h2>
            <div class="relative overflow-hidden">
              <div class="flex animate-marquee duration-500 ease-in-out items-center w-full"
                :style="{ transform: `translateX(-${currentCustomerSlide * 100}%)` }">
                <div v-for="(customerGroup, groupIndex) in customerGroups" :key="groupIndex"
                  class="min-w-full flex-shrink-0 flex justify-center items-center gap-3 sm:gap-4 md:gap-4">
                  <div v-for="cus in customerGroup" :key="cus.name" @click="openCertificateModal(cus)"
                    class="cursor-pointer flex-shrink-0 hover:scale-105 transition-transform">
                    <img loading="lazy" :src="cus.src" :alt="cus.name"
                      class="h-12 sm:h-16 w-auto object-contain bg-white rounded-md border border-gray-200 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications Carousel -->
          <div class="relative px-4 sm:px-8 md:px-12 lg:px-16">
            <h2
              class="section-title text-lg sm:text-xl md:text-2xl font-bold text-[#1857a3] text-center mb-4 md:mb-6 transition-all duration-500">
              {{ getTranslation("accreditation") }}
            </h2>
            <div class="relative overflow-hidden">
              <div class="flex transition-transform animate-marquee duration-500 ease-in-out items-center w-full"
                :style="{ transform: `translateX(-${currentCertificateSlide * 100}%)` }">
                <div v-for="(certificateGroup, groupIndex) in certificateGroups" :key="groupIndex"
                  class="min-w-full flex-shrink-0 flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
                  <div v-for="cert in certificateGroup" :key="cert.name" @click="openCertificateModal(cert)"
                    class="cursor-pointer flex-shrink-0 hover:scale-105 transition-transform">
                    <img loading="lazy" :src="cert.src" :alt="cert.name"
                      class="h-10 sm:h-12 md:h-16 w-auto object-contain bg-white rounded-md border border-gray-200 p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    

    <!-- Certificate Modal -->
    <div v-if="selectedCertificate" @click="closeCertificateModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur">
      <div class="relative max-w-4xl max-h-full p-6" @click.stop>
        <!-- Prevent modal closing when clicking on the image -->
        <img loading="lazy" :src="selectedCertificate.src" :alt="selectedCertificate.name"
          class="max-w-full max-h-full bg-white p-6 object-contain rounded-lg shadow-xl" />
        <button @click="closeCertificateModal"
          class="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors shadow-md">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { definePageMeta } from "#imports";
const language = ref<"en" | "zh" | "jp">("en");

definePageMeta({
  layout: false,
});

let customerAutoPlayInterval: ReturnType<typeof setInterval> | null = null;
let certificateAutoPlayInterval: ReturnType<typeof setInterval> | null = null;

const stopAllAutoPlay = () => {
  stopAutoPlay(); // main slider
  clearInterval(customerAutoPlayInterval!);
  clearInterval(certificateAutoPlayInterval!);
};

onUnmounted(() => {
  stopAllAutoPlay();
  document.body.style.overflow = "auto";
});

// Translation system
const isChineseMode = ref(false);
const isJapaneeseMode = ref(false);

const translations = {
  companyTitle: {
    en: "LEADING WHOLESALE CLOTHING MANUFACTURER IN BANGLADESH",
    zh: "孟加拉国领先的服装批发制造商",
    jp: "バングラデシュの大手衣料品卸売メーカー",
  },
  dataNote: {
    en: "These data have been provided on an annual basis.",
    zh: "这些数据是按年度提供的。",
    jp: "これらのデータは年間ベースで提供されています。",
  },
  ourCustomer: {
    en: "OUR CUSTOMER",
    zh: "主要客户",
    jp: "主な取引先",
  },
  accreditation: {
    en: "ACCREDITATIONS & CERTIFICATIONS",
    zh: "认可和认证",
    jp: "認定と認証",
  },
};

const statisticsTranslations = {
  establishment: {
    en: "Establishment",
    zh: "成立于1984年",
    jp: "1984年設立",
  },
  factories: {
    en: "Factories",
    zh: "26 工厂",
    jp: "26工場",
  },
  employees: {
    en: "Employees",
    zh: "七万五人工",
    jp: "従業員数 75,000 人以上",
  },
  yearlyRevenue: {
    en: "Yearly Revenue",
    zh: "10亿美元营业额",
    jp: "年間収益10億ドル",
  },
  readymadeGarments: {
    en: "Readymade Garments",
    zh: "1.2亿/年 服装",
    jp: "年間1億2,000万枚の既製服を生産",
  },
  sweater: {
    en: "Sweater",
    zh: "600万/年 毛衣",
    jp: "年間600万枚のセーターを生産",
  },
  jacket: {
    en: "Jacket",
    zh: "50万夹克",
    jp: "年間500万枚のジャケットを製造",
  },
  textileMill: {
    en: "",
    zh: "牛仔布与纺织厂",
    jp: "繊維・デニム工場",
  },
  spinning: {
    en: "Spinning",
    zh: "纺纱100 公吨",
    jp: "日産100トンの紡績工場",
  },
  wash: {
    en: "Wash Capacity",
    zh: "洗涤厂 1.42亿/年",
    jp: "年間1億4,200万枚の洗い加工可能",
  },
  recycleFiber: {
    en: "Fiber Recycling",
    zh: "回收纤维 1560公吨/年",
    jp: "年間1,560万トンのリサイクル繊維を使用",
  },
  waterRecycle: {
    en: "Water Recycling",
    zh: "回收63%水",
    jp: "63%の水をリサイクル",
  },
  solarCapacity: {
    en: "Solar Capacity",
    zh: "太阳能电池板 – 15兆瓦",
    jp: "太陽光発電容量は15MW",
  },
  accessories: {
    en: "100% In House Accessories",
    zh: "100%内部配件",
    jp: "付属材料は100%自社手配です",
  },
  laserMachine: {
    en: "Laser Machines",
    zh: "激光机 120 台",
    jp: "120 台のレーザー加工機を所有",
  },
  coGeneration: {
    en: "Power Co-Generation",
    zh: "80% 热电联产",
    jp: "コージェネレーション（熱電供給）の総合効率は 80%",
  },
  ozoneMachine: {
    en: "Ozone Machines",
    zh: "26 臭氧机",
    jp: "26台のオゾンマシンを所有",
  },
  laboratory: {
    en: "In House Accredited Laboratory",
    zh: "内部实验室",
    jp: "インハウスラボを設置",
  },
};

const getTranslation = (key: string) => {
  const translation = translations[key as keyof typeof translations];
  return translation ? translation[language.value] || translation["en"] : key;
};

// Language icon mapping
const getLanguageIcon = () => {
  const icons = {
    en: "/assets/profile/translate/en-logo.png",
    zh: "/assets/profile/translate/CH-logo.png", // Add Chinese flag/icon
    jp: "/assets/profile/translate/JP-logo.png", // Add Japanese flag/icon
  };
  return icons[language.value];
};

const toggleLanguage = () => {
  if (language.value === "en") language.value = "zh";
  else if (language.value === "zh") language.value = "jp";
  else language.value = "en";
};

// Main slider data
const mainSliderImages = ref([
  {
    src: "https://hameemgroup.net/assets-profile/1.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 1",
  },
  {
    src: "https://hameemgroup.net/assets-profile/2.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 2",
  },
  {
    src: "https://hameemgroup.net/assets-profile/3.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 3",
  },
  {
    src: "https://hameemgroup.net/assets-profile/4.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 4",
  },
  {
    src: "https://hameemgroup.net/assets-profile/5.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 5",
  },
  {
    src: "https://hameemgroup.net/assets-profile/6.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 6",
  },
  {
    src: "https://hameemgroup.net/assets-profile/7.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 7",
  },
  {
    src: "https://hameemgroup.net/assets-profile/8.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 8",
  },
  {
    src: "https://hameemgroup.net/assets-profile/9.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 9",
  },
  {
    src: "https://hameemgroup.net/assets-profile/10.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 10",
  },
  {
    src: "https://hameemgroup.net/assets-profile/11.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 11",
  },
  {
    src: "https://hameemgroup.net/assets-profile/12.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 12",
  },
  {
    src: "https://hameemgroup.net/assets-profile/13.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 13",
  },
  {
    src: "https://hameemgroup.net/assets-profile/14.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 14",
  },
  {
    src: "https://hameemgroup.net/assets-profile/15.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 15",
  },
  {
    src: "https://hameemgroup.net/assets-profile/16.JPG",
    alt: "Ha-Meem Group Manufacturing Facility 16",
  },
  {
    src: "https://hameemgroup.net/assets-profile/17.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 17",
  },
  {
    src: "https://hameemgroup.net/assets-profile/18.jpg",
    alt: "Ha-Meem Group Manufacturing Facility 18",
  },
]);

// Statistics data
const statisticsData = ref([
  {
    icon: "/assets/profile/icons/Est.png",
    value: "1984",
    label: "establishment",
    labelKey: "establishment",
  },
  {
    icon: "/assets/profile/icons/Factory.png",
    value: "26",
    label: "factories",
    labelKey: "factories",
  },
  {
    icon: "/assets/profile/icons/Workforce.png",
    value: "75K+",
    label: "employees",
    labelKey: "employees",
  },
  {
    icon: "/assets/profile/icons/Yearly-Revew.png",
    value: "$1B",
    label: "yearlyRevenue",
    labelKey: "yearlyRevenue",
  },
  {
    icon: "/assets/profile/icons/Readymade-Garments.png",
    value: "120M/YR",
    label: "readymadeGarments",
    labelKey: "readymadeGarments",
  },
  {
    icon: "/assets/profile/icons/Sweater.png",
    value: "6M/YR",
    label: "sweater",
    labelKey: "sweater",
  },
  {
    icon: "/assets/profile/icons/Jacket.png",
    value: "0.5M/YR",
    label: "jacket",
    labelKey: "jacket",
  },
  {
    icon: "/assets/profile/icons/Textile-Mill.png",
    value:
      '<p class="text-sm text-black">DENIM</p><small class="text-xs"> 5.5 M YDS/Month</small > <br><p class="text-sm text-black">Non-DENIM</p><small class="text-xs">2.5M YDS/Month</small>',
    label: "",
    labelKey: "textileMill",
  },
  {
    icon: "/assets/profile/icons/Spinning.png",
    value: "100MT/DAY",
    label: "spinning",
    labelKey: "spinning",
  },
  {
    icon: "/assets/profile/icons/wash.png",
    value: "142M/YR",
    label: "wash",
    labelKey: "wash",
  },
  // { icon: '/assets/profile/icons/Female-employes.png', value: '80%', label: 'femaleEmployees', labelKey: 'femaleEmployees' },
  {
    icon: "/assets/profile/icons/Recycle-Fiber.png",
    value: "1,560MT/Day",
    label: "recycleFiber",
    labelKey: "recycleFiber",
  },
  {
    icon: "/assets/profile/icons/Water.png",
    value: "63%",
    label: "waterRecycle",
    labelKey: "waterRecycle",
  },
  {
    icon: "/assets/profile/icons/Solar.png",
    value: "15 MW",
    label: "solarCapacity",
    labelKey: "solarCapacity",
  },
  {
    icon: "/assets/profile/icons/Accessories.png",
    value: "",
    label: "accessories",
    labelKey: "accessories",
  },
  {
    icon: "/assets/profile/icons/Lasear.png",
    value: "120",
    label: "laserMachine",
    labelKey: "laserMachine",
  },
  {
    icon: "/assets/profile/icons/co-Genaration.png",
    value: "80%",
    label: "coGeneration",
    labelKey: "coGeneration",
  },
  {
    icon: "/assets/profile/icons/ozone.png",
    value: "26",
    label: "ozoneMachine",
    labelKey: "ozoneMachine",
  },
  {
    icon: "/assets/profile/icons/Chemical-Consumption.png",
    value: "",
    label: "laboratory",
    labelKey: "laboratory",
  },
]);

// Computed property for translated statistics
const translatedStatisticsData = computed(() => {
  return statisticsData.value.map((stat) => {
    const translationKey = stat.labelKey as keyof typeof statisticsTranslations;
    const translation = statisticsTranslations[translationKey];

    let translatedValue = stat.value;
    let translatedLabel = stat.label;

    if (translation) {
      if (language.value === "zh") {
        if (translationKey === "textileMill") {
          translatedValue =
            '<p class="text-sm text-black">牛仔</p><small>250万码/年</small> <br><p class="text-sm text-black">不牛仔</p><small>550万码/年</small>';
        }
        translatedLabel = translation.zh;
      } else if (language.value === "jp") {
        if (translationKey === "textileMill") {
          translatedValue =
            '<p class="text-sm text-black">デニム</p><small>250万ヤード/年</small> <br><p class="text-sm text-black">非デニム</p><small>550万ヤード/年</small>';
        }
        translatedLabel = translation.jp;
      } else {
        translatedLabel = translation.en;
      }
    }

    return {
      ...stat,
      value: translatedValue,
      label: translatedLabel,
    };
  });
});

// Customer carousel data
const currentCustomerSlide = ref(0);
const customersData = ref([
  { name: "American Eagle", src: "/assets/profile/buyersLogo/american eagle.png" },
  { name: "Muji", src: "/assets/profile/buyersLogo/Muji-buyer-logo.jpg" },
  {
    name: "Abercrombie & Fitch",
    src: "/assets/profile/buyersLogo/Abecrombie & fitchg.png",
  },
  { name: "Aeropostale", src: "/assets/profile/buyersLogo/aeropeostale.png" },
  { name: "Banana Republic", src: "/assets/profile/buyersLogo/banana.png" },
  { name: "Carters", src: "/assets/profile/buyersLogo/Carters.png" },
  { name: "Dickies", src: "/assets/profile/buyersLogo/Dickies.png" },
  { name: "GAP", src: "/assets/profile/buyersLogo/GAP.png" },
  { name: "Calvin Klein", src: "/assets/profile/buyersLogo/CK.png" },
  { name: "H&M", src: "/assets/profile/buyersLogo/hm-logo.png" },
  { name: "Kohls", src: "/assets/profile/buyersLogo/Khols.png" },
  { name: "Lee", src: "/assets/profile/buyersLogo/Lee.png" },
  { name: "JCPenney", src: "/assets/profile/buyersLogo/JCPenney.png" },
  { name: "Levis", src: "/assets/profile/buyersLogo/Levice.png" },
]);

// Certificate carousel data
const currentCertificateSlide = ref(0);
interface Certificate {
  name: string;
  src: string;
}
const selectedCertificate = ref<Certificate | null>(null);
const certificatesData = ref([
  {
    name: "FSC Certificate",
    src: "https://hameemgroup.net/assets-profile/certificates/1.png",
  },
  {
    name: "Quality Certificate 1",
    src: "https://hameemgroup.net/assets-profile/certificates/2.png",
  },
  {
    name: "Quality Certificate 2",
    src: "https://hameemgroup.net/assets-profile/certificates/3.png",
  },
  {
    name: "Quality Certificate 3",
    src: "https://hameemgroup.net/assets-profile/certificates/4.png",
  },
  {
    name: "GRS Certificate",
    src: "https://hameemgroup.net/assets-profile/certificates/5.png",
  },
  {
    name: "A&F Certificate",
    src: "https://hameemgroup.net/assets-profile/certificates/6.jpg",
  },
  {
    name: "American Eagle Certificate",
    src: "https://hameemgroup.net/assets-profile/certificates/7.png",
  },
  {
    name: "BAB Certificate",
    src: "https://hameemgroup.net/assets-profile/certificates/8.png",
  },
  {
    name: "GAP-Certificate-2024",
    src: "https://hameemgroup.net/assets-profile/certificates/9.png",
  },
  { name: "RSC", src: "https://hameemgroup.net/assets-profile/certificates/10.png" },
  { name: "Regen", src: "https://hameemgroup.net/assets-profile/certificates/11.png" },
  { name: "#", src: "https://hameemgroup.net/assets-profile/certificates/12.jpg" },
  { name: "#", src: "https://hameemgroup.net/assets-profile/certificates/13.jpg" },
  { name: "ics", src: "https://hameemgroup.net/assets-profile/certificates/14.jpg" },
  { name: "RSC", src: "https://hameemgroup.net/assets-profile/certificates/15.jpg" },
  { name: "MGP", src: "https://hameemgroup.net/assets-profile/certificates/16.jpg" },
]);

// Computed properties for grouping
const customerGroups = computed(() => {
  const groups = [];
  const itemsPerGroup = 30;
  for (let i = 0; i < customersData.value.length; i += itemsPerGroup) {
    groups.push(customersData.value.slice(i, i + itemsPerGroup));
  }
  return groups;
});

const certificateGroups = computed(() => {
  const groups = [];
  const itemsPerGroup = 20;
  for (let i = 0; i < certificatesData.value.length; i += itemsPerGroup) {
    groups.push(certificatesData.value.slice(i, i + itemsPerGroup));
  }
  return groups;
});

// Certificate modal functions
const openCertificateModal = (certificate: Certificate) => {
  selectedCertificate.value = certificate;
  document.body.style.overflow = "hidden";
};

const closeCertificateModal = () => {
  selectedCertificate.value = null;
  document.body.style.overflow = "auto";
};

// Auto-play functionality
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

onUnmounted(() => {
  stopAutoPlay();
});

// Handle escape key for modal
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && selectedCertificate.value) {
    closeCertificateModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
/* indicator color changes */

.el-carousel__arrow {
  background-color: red;
}

/* Custom styles for enhanced visual appeal */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Floating button glow effect */
.floating-glow-button {
  position: relative;
  animation: float 3s ease-in-out infinite;
}
.floating-glow-button::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #1857a3, #0cb91d, #0d3b72, #ff5404, #1857a3);
  background-size: 400% 400%;
  border-radius: 50%;
  z-index: -1;
  animation: gradient-glow 2s ease infinite;
  opacity: 0.7;
}

.floating-glow-button:hover {
  animation-play-state: paused;
}

.floating-glow-button:hover::before {
  opacity: 1;
}

/* Disable float animation on mobile */
@media (max-width: 640px) {
  .floating-glow-button {
    animation: none;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.grayscale {
  filter: grayscale(100%);
}

.grayscale-0 {
  filter: grayscale(0%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Smooth transitions for sliders */
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

/* Modal backdrop blur effect */
.backdrop-blur {
  backdrop-filter: blur(4px);
}

/* Responsive text sizing */
@media (max-width: 768px) {
  .text-responsive {
    font-size: 0.875rem;
  }
}

/* Custom scrollbar for modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Floating button animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }
}

.fixed button {
  animation: float 3s ease-in-out infinite;
}

.fixed button:hover {
  animation-play-state: paused;
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: all 0.8s ease;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.card-border-gradient {
  position: relative;
  /* Required for the pseudo-element */
  background: linear-gradient(90deg, #1857a3, #0cb91d, #0d3b72, #ff5404);
  background-size: 400% 400%;
  animation: gradient-border-animation 2s ease infinite;
}

/* The keyframes for the background animation */
@keyframes gradient-border-animation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
