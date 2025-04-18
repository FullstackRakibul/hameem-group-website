<template>
  <section class="md:px-24 mx-auto py-8 md:py-16 mt-5 ">
    <el-row :gutter="16">
      <el-col :xs="24" :md="16">
        <div class="text-content pr-0 md:pr-16 ">

          <!-- <h2 class="text-3xl md:text-6xl font-bold font-denim">
            About <span class="text-secondary">Ha-Meem</span> Group
          </h2> -->
          <div v-gsap.whenVisible.to="{
            opacity: 1,
            y: 0,
            delay: 0.5,
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.3
          }" class="text-secondary uppercase font-bold md:text-6xl mb-5">
            Ha-Meem Group
          </div>


          <p class=" md:text-2xl font-sans md:font-semibold text-gray-600 mt-4 text-justify ">
            Starts its journey in 1984 with a single garment factory. Over four decades, it has grown into one of
            Bangladesh’s largest exporters, with a workforce of 75,000 and an annual turnover nearing 925 million USD.
            Today, Ha-Meem operates 450 production lines with a monthly capacity of 9.5 million garments, and boasts
            state-of-the-art facilities in denim, spinning, and woven textiles — serving global brands with excellence.
          </p>
          <el-row :gutter="16">
            <div class="flex flex-wrap justify-around px-6 py-10 w-full someContainer mt-6 ">
              <div v-for="(item, index) in stats" :key="index" @click="openModal(item)"
                class="flex flex-col items-center justify-center space-y-2 w-40 h-40 rounded-full hover:border border-primary border-dashed border hover:border-primary/30 hover:bg-primary/10">
                <span class="hover:animate-ping rounded-full hover:bg-sky-400 opacity-50" />

                <Icon :name="item.icon" class=" text-xl w-10 h-10 " />
                <div class="flex items-center gap-1">
                  <!-- <h3 class="md:text-4xl text-2xl font-bold text-primary tracking-widest">{{ item.count }}</h3> -->
                </div>
                <p class="text-sm text-gray-800 font-semibold text-center uppercase p-3">{{ item.label }}</p>
              </div>
            </div>
          </el-row>


          <p class="text-base md:text-lg text-gray-600 mt-4 text-justify">
            We're delighted to have you here. Explore our carefully crafted collection of stylish, high-quality garments
            designed to make you look and feel your best. Whether you're seeking timeless classics or the latest trends,
            we've got something special for every occasion. Thank you for choosing us — your satisfaction is our
            priority!
          </p>
        </div>
      </el-col>

      <el-col :xs="24" :md="8" class="md:relative">
        <div
          class="bg-gray-100 md:p-6 flex justify-center items-center rounded-sm shadow-sm md:h-full md:absolute md:inset-0 md:w-[calc(100%+32px)] md:left-[-16px] bg-cover bg-center"
          :style="{
            backgroundImage: `url(${bgImage})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }">
          <section>
            <div v-gsap.whenVisible.from="{ x: -250, start: 'top bottom', end: 'bottom top', scrub: 1 }"
              class="text-gray-900 font-semibold text-lg md:text-6xl font-title">
              Leading Industry
            </div>
            <div class="text-secondary text-9xl md:text-10xl lg:text-10xl font-extrabold font-title"
              v-gsap.whenVisible.from="{ x: 150, start: 'top bottom', end: 'bottom top', scrub: 2 }">
              <p class="text-3xl">from</p> 1984
            </div>
          </section>
        </div>
      </el-col>
    </el-row>
  </section>
  <AboutServiceList v-if="showModal" :content="modalContent" @close="showModal = false" />
</template>

<script lang="ts" setup>
import AboutServiceList from '~/components/ui/AboutServiceList.vue';

// Add modal state
const showModal = ref(false);
const modalContent = ref({});



const stats = [
  {
    icon: 'icon-park-solid:vertical-timeline',
    count: '4+',
    label: 'Vertical Capacity',
  },
  {
    icon: 'carbon:power-virtual-server-disaster-recovery-automation',
    count: '8+',
    label: 'Automation',
  },
  {
    icon: 'fluent:desktop-sync-24-regular',
    count: '6+',
    label: 'Digitalization',
  },
  {
    icon: 'lsicon:toggle-warehouse-y-filled',
    count: '75,000+',
    label: 'In-House Facilities',
  },
  {
    icon: 'streamline:travel-airport-earth-airplane-travel-plane-trip-airplane-international-adventure-globe-world',
    count: '1,50 Lakh+',
    label: 'Joint Ventures',
  },
  {
    icon: 'fluent:design-ideas-20-filled',
    count: '1,50 Lakh+',
    label: 'Enriching Service',
  }
]

const props = defineProps({
  bgImage: {
    type: String,
    default: "/assets/v1/raise-chart.gif", // Ensure this is correct
  },
});




const openModal = (item: any) => {
  modalContent.value = getModalContent(item.label);
  showModal.value = true;
};

// Add content mapping function
const getModalContent = (label: string) => {
  const contentMap: any = {
    'Vertical Capacity': {
      sections: [
        {
          title: 'Vertical Capacity',
          items: [
            {
              title: 'Denim Fab Mill',
              description: 'Producing 5.5 million yards per month, our denim mill integrates eco-friendly practices with advanced machinery for efficient, sustainable fabric creation.',
              image: 'https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif'
            },
            {
              title: 'Woven Fab Mill',
              description: 'Generating 2.5 million yards monthly, our woven fabric mill combines craftsmanship and automation, ensuring high-quality sustainable textiles.',
              image: 'https://media.giphy.com/media/PI3QGKFN6XZUCMMqJm/giphy.gif'
            },
            {
              title: 'Spinning Mill',
              description: 'With a capacity of 1400 tons per month, our spinning mill converts natural fibers into high-quality yarns, ensuring strength and consistency.',
              image: 'https://media.giphy.com/media/TKpNSNctI4O3SQkzid/giphy.gif'
            },
            {
              title: 'Recycling Plant',
              description: 'Recycling 18 tons of waste daily, our plant transforms discarded textiles into reusable materials, reinforcing our zero-waste commitment.',
              image: 'https://media.giphy.com/media/jVStJ7ttn5VheXhyvS/giphy.gif'
            },
          ]
        }
      ]
    },
    'Automation': {
      sections: [
        {
          title: 'Automation',
          items: [
            {
              title: 'Auto Cutter',
              description: 'High-precision automatic cutters reduce fabric waste while maximizing cutting efficiency, ensuring accuracy in mass production.',
              image: 'https://media.giphy.com/media/3o6fJgVgy5lUuzFQ6E/giphy.gif'
            },
            {
              title: 'Cad Software',
              description: 'Our CAD systems offer virtual prototyping and optimized pattern layouts, minimizing material waste and boosting production speed.',
              image: 'https://media.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy.gif'
            },
            {
              title: 'Auto Pocket Setter',
              description: 'Automation tools like pocket setters ensure uniform stitching and positioning, enhancing product durability and reducing human error.',
              image: 'https://media.giphy.com/media/3ohhwF34cGDoFFhRfy/giphy.gif'
            },
            {
              title: 'APW',
              description: 'Advanced Pocket Welting machines streamline pocket attachment, improving garment aesthetics and reducing manual labor.',
              image: 'https://media.giphy.com/media/Z9WexRkbfcNnRPvJvH/giphy.gif'
            },
            {
              title: 'Auto Loop Attach',
              description: 'Automated loop attachers enhance consistency and production speed, ensuring every piece meets exacting quality standards.',
              image: 'https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif'
            },
            {
              title: 'Pocket Hemming',
              description: 'Pocket hemming machines ensure precision-folded hems, reducing fraying and enhancing durability while saving time.',
              image: 'https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif'
            },
            {
              title: 'J-Stitch',
              description: 'J-stitch automation provides a consistent, secure seam for high-stress garment points, improving longevity and strength.',
              image: 'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif'
            },
            {
              title: 'Auto Pattern Cutting',
              description: 'Automated pattern cutting ensures precision and reduces fabric waste, enabling scalable production with minimal error.',
              image: 'https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif'
            },
          ]
        }
      ]
    },
    'Digitalization': {
      sections: [
        {
          title: 'Digitization',
          items: [
            {
              title: 'SAP / ERP',
              description: 'Our SAP/ERP systems orchestrate every operation from raw material sourcing to delivery, enabling real-time decision-making, resource planning, and seamless cross-department collaboration.',
              image: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
            },
            {
              title: 'GSD Software',
              description: 'With GSD Software, we calculate standard time for garments scientifically — ensuring labor cost optimization, accurate planning, and sustainable productivity growth.',
              image: 'https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif'
            },
            {
              title: 'Higg Index',
              description: 'The Higg Index provides us with a precise, measurable way to benchmark environmental and social impact — guiding our journey toward more responsible manufacturing.',
              image: 'https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif'
            },
            {
              title: 'Fast React Software',
              description: 'Fast React empowers our production floor with advanced scheduling and planning tools, enabling optimized capacity usage and on-time delivery.',
              image: 'https://media.giphy.com/media/3orieUe6ejxSFxYCXe/giphy.gif'
            },
            {
              title: '3D for Design & Sampling',
              description: 'Using 3D design and sampling technology, we accelerate product development while minimizing physical samples — reducing waste, saving time, and enhancing creative freedom.',
              image: 'https://media.giphy.com/media/j3gsT2RsH9K0/giphy.gif'
            },
            {
              title: 'EIM Software for Washes',
              description: 'Our EIM (Environmental Impact Measurement) software for washing processes calculates water, chemical, and energy footprints, promoting eco-conscious denim and garment finishing.',
              image: 'https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif'
            }
          ]
        }
      ]
    },
    'In-House Facilities': {
      sections: [
        {
          title: 'In-House Facilities',
          items: [
            {
              title: '2x Accredited In-House Laboratory',
              description: 'Our dual accredited laboratories ensure unwavering product quality — from raw material to finished goods — with precise, industry-standard testing and validation at every stage.',
              image: 'https://media.giphy.com/media/3ohs7JmHPv2V4QzYf6/giphy.gif'
            },
            {
              title: '42 MW Own Power Generation',
              description: 'Our fully self-sufficient 42-megawatt power generation infrastructure keeps every facility running, ensuring uninterrupted operations and unmatched reliability.',
              image: 'https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif'
            },
            {
              title: 'Cogeneration Capability',
              description: 'Through cogeneration, we maximize energy efficiency — capturing heat and electricity in a single process, reducing waste and lowering our carbon footprint.',
              image: 'https://media.giphy.com/media/l1J9urO9Dv6VdLr3m/giphy.gif'
            },
            {
              title: 'Solar Energy: 300KW',
              description: 'We harness the power of the sun, contributing 300KW of clean energy to our grid — a commitment to sustainable industry, beyond business as usual.',
              image: 'https://media.giphy.com/media/3orieUe6ejxSFxYCXe/giphy.gif'
            },
            {
              title: 'Cargo Transportation Company',
              description: 'Our own cargo transport company ensures reliable, timely delivery of goods all the way to the port — offering seamless control over logistics and lead times.',
              image: 'https://media.giphy.com/media/l2JHPBq1v1X6m/giphy.gif'
            },
            {
              title: '6x Effluent Treatment Plants (ETP) & 1x RO Plant with 50% Water Recycling',
              description: 'With six ETPs and a Reverse Osmosis plant, we recycle up to 50% of our water — safeguarding the environment while championing sustainable garment production.',
              image: 'https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif'
            }
          ]
        }
      ]
    },
    'Joint Ventures': {
      sections: [
        {
          title: 'Joint Venture Outerwear Factory',
          items: [
            {
              title: 'Capacity: 150,000 pcs / Month',
              description: 'Our joint venture outerwear facility proudly delivers precision-crafted garments with a production capacity of 150,000 pieces per month — engineered for scale and quality in every stitch.',
              image: 'https://media.giphy.com/media/3ohhwl8VsQzFKv6Q3O/giphy.gif'
            },
            {
              title: 'In Operation Since: October 2023',
              description: 'Launched in October 2023, this modern facility embodies our commitment to strategic growth and global partnerships, combining expertise and infrastructure for next-level production.',
              image: 'https://media.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif'
            }
          ]
        }
      ]
    },
    'Enriching Service': {
      sections: [
        {
          title: 'Enriching Services',
          items: [
            {
              title: 'DDP Business Structure',
              description: 'Our Delivered Duty Paid (DDP) structure simplifies international trade, ensuring end-to-end delivery responsibility — customs cleared and landed — directly to the buyer’s doorstep.',
              image: 'https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif'
            },
            {
              title: 'New York Office',
              description: 'With a strategic foothold in New York, we maintain a direct pulse on market trends, client collaborations, and real-time creative engagement.',
              image: 'https://media.giphy.com/media/xUOwGcwS8KF98A1Q6s/giphy.gif'
            },
            {
              title: 'Creative Design Team of 30',
              description: 'A seasoned team of 30 inspired designers transforms ideas into tangible fashion statements — ensuring style, fit, and market resonance from concept to creation.',
              image: 'https://media.giphy.com/media/3oz8xBkRsgPTnbKvdK/giphy.gif'
            },
            {
              title: 'TD Certification Grade',
              description: 'We hold the prestigious TD Certification, a mark of excellence that underscores our commitment to technical design precision and manufacturing compliance.',
              image: 'https://media.giphy.com/media/3ov9k8FPLvguFQvRfy/giphy.gif'
            },
            {
              title: 'Certified Colorist x1',
              description: 'A certified colorist on staff guarantees color accuracy and consistency across collections, securing visual harmony that meets global retail standards.',
              image: 'https://media.giphy.com/media/l0MYLkB1kqBd35JFe/giphy.gif'
            }
          ]
        }
      ]
    }



  };
  return contentMap[label] || {};
};


</script>

<style scoped>
/* Adjust for Element UI gutter on desktop */
@media (min-width: 768px) {
  .el-col-md-8 {
    overflow: visible !important;
  }
}
</style>