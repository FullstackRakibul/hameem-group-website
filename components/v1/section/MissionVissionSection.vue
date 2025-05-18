<script setup>
defineProps({
  bgImage: {
    type: String,
    default: "/assets/missionvissionsectionbg-abstruct.jpg",
  },
});

// Mission and Vision data as JSON constant
const missionVisionData = {
  title: "Our Vision & Mission",
  description: "Ha-Meem Group's mission is to provide quality products on time, while also aiming to eliminate poverty and promote industrialization, with a vision of becoming a leading wholesale clothing manufacturer in Bangladesh and globally.",
  points: [
    {
      id: 1,
      title: "Quality Products",
      description: "We deliver high-quality products on time, ensuring customer satisfaction and building long-term relationships with our clients worldwide.",
      icon: "arcticons:okta-verify",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/Quality-Products.gif" 
    },
    {
      id: 2,
      title: "Eliminate Poverty",
      description: "We're committed to creating employment opportunities and economic growth that helps eliminate poverty in our communities.",
      icon: "mdi:hand-heart-outline",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/poverty-animation.gif"
    },
    {
      id: 3,
      title: "Industrialization",
      description: "We strive to further industrialization through innovation, technology adoption, and sustainable manufacturing practices.",
      icon: "mdi:factory",
      category: "mission",
      animatedImage: "assets/v1/section/mission-vision/industry-animation.gif"
    },
    {
      id: 4,
      title: "Leading Manufacturer",
      description: "Our vision is to be recognized as the leading clothing manufacturer in Bangladesh and a respected global player in the industry.",
      icon: "mdi:crown-outline",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/Manufacturer-animation.gif"
    },
    {
      id: 5,
      title: "Industry Breakthrough",
      description: "We aim to achieve breakthrough innovations in the textile industry through research, development, and creative solutions.",
      icon: "mdi:lightbulb-on-outline",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/target-animation.gif"
    },
    {
      id: 6,
      title: "Employee Welfare",
      description: "We're dedicated to ensuring the educational advancement, financial security, and overall wellbeing of our employees.",
      icon: "mdi:account-group-outline",
      category: "vision",
      animatedImage: "assets/v1/section/mission-vision/education-animation.gif"
    }
  ]
};
</script>

<template>
  <section
    class="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-24 someContainer"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <!-- Abstract Wave Background -->
    <div class="absolute inset-0 z-0 opacity-10">
      <svg viewBox="0 0 1440 320" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1E90FF" fill-opacity="0.2"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>

    <el-row :gutter="20" class="items-center relative z-10">
      <!-- Image Column -->
      <el-col :xs="24" :md="12">
        <div class="relative overflow-hidden rounded-lg">
          <el-image class="transition-transform duration-300  p-10"
            style="max-width: 600px; width: 100%;" src="./assets/missionvission-sectionImage.png"
            alt="Mission Vision Section banner" />
        </div>
      </el-col>

      <!-- Content Column -->
      <el-col :xs="24" :md="12">
        <!-- Section Title -->
        <div class="text-left py-6">
          <h2 class="text-5xl font-bold text-black animate__animated animate__fadeInUp">
            {{ missionVisionData.title }}
          </h2>
          <p class="text-lg text-gray-600 mt-2 animate__animated animate__fadeInUp animate__delay-1s">
            {{ missionVisionData.description }}
          </p>
        </div>

        <!-- Key Points Section -->
        <div class="mission-grid mt-6">
          <div v-for="(point, index) in missionVisionData.points" :key="point.id" 
            class="mission-card-wrapper">
            <div class="mission-card">
              <!-- Initial minimal state -->
              <div class="card-minimal">
                <Icon :name="point.icon" class="card-icon" />
                <h3 class="card-title-minimal">{{ point.title }}</h3>
                <span class="card-badge">{{ point.category === 'mission' ? 'Mission' : 'Vision' }}</span>
              </div>
              
              <!-- Expanded hover state -->
              <div class="card-expanded">
                <div class="animated-image-container">
                  <img :src="point.animatedImage" :alt="point.title || 'Ha-Meem Group'" class="h-24" />
                </div>
                <div class="expanded-content">
                  <h3 class="card-title-expanded">{{ point.title }}</h3>
                  <p class="card-description">{{ point.description }}</p>
                </div>
              </div>
              
              <!-- Border animation elements -->
              <div class="border-line top"></div>
              <div class="border-line right"></div>
              <div class="border-line bottom"></div>
              <div class="border-line left"></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
/* Hover effect for image */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Mission Grid Layout */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;
}

/* Card Wrapper - Provides space for expansion */
.mission-card-wrapper {
  position: relative;
  min-height: 150px;
}

/* Mission Vision Card Styling */
.mission-card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-color: rgb(238, 238, 238);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  border: 1px solid rgba(16, 56, 97, 0.2);
}

.mission-card:hover {
  height: 280px;
  background-color: #fff ;
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(30, 144, 255, 0.2);
  z-index: 20;
}

/* Minimal card state */
.card-minimal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  padding: 20px;
  transition: opacity 0.3s ease;
}

.mission-card:hover .card-minimal {
  opacity: 0;
  pointer-events: none;
}

.card-icon {
  font-size: 36px;
  color: #374A5D;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.card-title-minimal {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: center;
}

.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  background-color: #404052;
  padding: 2px 8px;
  border-radius: 5px;
}

/* Expanded card state */
.card-expanded {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}

.mission-card:hover .card-expanded {
  opacity: 1;
  transform: translateY(0);
}

.animated-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.expanded-content {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(30, 144, 255, 0.3) transparent;
}

.expanded-content::-webkit-scrollbar {
  width: 4px;
}

.expanded-content::-webkit-scrollbar-track {
  background: transparent;
}

.expanded-content::-webkit-scrollbar-thumb {
  background-color: rgba(30, 144, 255, 0.3);
  border-radius: 6px;
}

.card-title-expanded {
  font-size: 18px;
  font-weight: 600;
  color: #71504B;
  margin-bottom: 10px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease 0.1s;
}

.mission-card:hover .card-title-expanded {
  transform: translateY(0);
  opacity: 1;
}

.card-description {
  font-size: 13px;
  line-height: 1.5;
  color: #666;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease 0.2s;
}

.mission-card:hover .card-description {
  transform: translateY(0);
  opacity: 1;
}

/* Border animation */
.border-line {
  position: absolute;
  background: linear-gradient(90deg, #fc0000, #001aff, #00ff0d, #fffb00);
  background-size: 300% 300%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.mission-card:hover .border-line {
  opacity: 1;
  animation: gradient-animation 2s linear infinite;
}

.top {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.right {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
}

.bottom {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
}

.left {
  bottom: 0;
  left: 0;
  width: 2px;
  height: 100%;
}

@keyframes gradient-animation {
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .mission-card-wrapper {
    min-height: 130px;
  }
  
  .mission-card {
    height: 130px;
  }
  
  .mission-card:hover {
    height: 250px;
  }
  
  .card-minimal {
    height: 130px;
  }
}
</style>
