// Site copy for HAMEEM // NEXUS that is NOT a figure.
// Every number shown on /v2 comes from data/company.ts; the only exceptions are the
// Roadmap 2030 targets below, carried over verbatim from the existing site section
// (components/v2/sectionComponent/SustainabilityMapSection.vue) and flagged in the report.

const clientFiles = [
  ['abercrombie.jpg', 'Abercrombie & Fitch'],
  ['aeropostale.jpg', 'Aéropostale'],
  ['American Eagle.jpg', 'American Eagle'],
  ['Banana republic.jpg', 'Banana Republic'],
  ['calvin klein.jpg', 'Calvin Klein'],
  ['celio.jpg', 'Celio'],
  ['Dickies.jpg', 'Dickies'],
  ['H&M.jpg', 'H&M'],
  ['HOLLISTER.jpg', 'Hollister'],
  ['JCPENNEY.jpg', 'JCPenney'],
  ['Justice.jpg', 'Justice'],
  ["KOHL'S.jpg", "Kohl's"],
  ['Levis.jpg', "Levi's"],
  ['NEXT.jpg', 'Next'],
  ['OLD NAVY.jpg', 'Old Navy'],
  ['Oshkosh.jpg', 'OshKosh'],
  ['PVH.jpg', 'PVH'],
  ['Reitmans.jpg', 'Reitmans'],
  ['The north face.jpg', 'The North Face'],
  ['TOMMY HILFIGER.jpg', 'Tommy Hilfiger'],
  ['United legwear.jpg', 'United Legwear'],
  ['VF LOGO .jpg', 'VF Corporation'],
  ['ZARA.jpg', 'Zara'],
]
export const clientLogos = clientFiles.map(([file, name]) => ({ file, name }))

// Industries. `to` points at an existing route where one exists; the rest fall back to
// /about until detail pages ship ([TODO: industry pages]). Original card copy that
// contained figures not in company.ts (line counts, acreage, machine counts) is dropped.
export const industries = [
  { title: 'Woven', image: '/assets/industry/industry-image-01.jpg', w: 236, h: 236, text: 'Shirts, bottoms and outerwear.', to: '/about', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Denim Mill', image: '/assets/industry/denim-02.png', w: 360, h: 373, text: 'Vertical denim, yarn to fabric.', to: '/denim', span: 'lg:col-span-2' },
  { title: 'Laundry', image: '/assets/industry/Laundry-01.webp', w: 200, h: 200, text: 'Dry process capability.', to: '/about', span: '' },
  { title: 'Sweater', image: '/assets/industry/Sweater=01.jpeg', w: 194, h: 259, text: 'Jacquard knitwear.', to: '/about', span: 'lg:row-span-2' },
  { title: 'Jute Mill', image: '/assets/industry/JuteMill-01.webp', w: 900, h: 600, text: 'A growing industry.', to: '/about', span: '' },
  { title: 'Design', image: '/assets/industry/design-03.png', w: 683, h: 900, text: 'Experienced designers.', to: '/about', span: 'lg:col-span-2' },
  { title: 'Newspaper', image: '/assets/industry/samakal.jpg', w: 500, h: 639, text: 'Samakal, a popular national daily.', to: '/about', span: 'lg:col-span-2' },
  { title: 'News Channel', image: '/assets/industry/ch24-logog.jpeg', w: 225, h: 225, text: 'Covering news across Bangladesh.', to: '/about', span: 'lg:col-span-2' },
]

export const products = [
  { title: 'Hi-Fashion', image: '/assets/v2/gallary/gallary-image-0002.jpg', w: 1920, h: 1080 },
  { title: 'Denim Jeans', image: '/assets/v2/gallary/gallary-image-0004.jpg', w: 709, h: 350 },
  { title: 'Critical Cargos', image: '/assets/v2/gallary/gallary-image-0003.jpg', w: 1024, h: 1280 },
  { title: 'Jackets', image: '/assets/v2/gallary/gallary-image-0005.jpg', w: 1200, h: 673 },
  { title: '3D Whisker', image: '/assets/v2/gallary/gallary-image-0006.jpg', w: 793, h: 559 },
  { title: "Men's Shirts", image: '/assets/v2/gallary/gallary-image-0007.jpg', w: 500, h: 486 },
]

// Existing site posts. Dates are carried over as-is (all identical → [TODO: confirm post dates]);
// the first post's original "over 4 million meters per month" line conflicts with company.ts and is dropped.
export const posts = [
  { image: '/assets/v2/index/IMG_4252.JPG', w: 6000, h: 3300, date: '12 Jan 2025', title: 'Ha-Meem is vertical in Denim', text: 'From yarn to finished denim, under one group.' },
  { image: '/assets/v2/index/IMG_7244.JPG', w: 3984, h: 2240, date: '12 Jan 2025', title: 'State of the art machineries', text: 'Ha-Meem is equipped with state-of-the-art machineries to keep pace with global brands.' },
  { image: '/assets/v2/index/IMG_7299.JPG', w: 3984, h: 2240, date: '12 Jan 2025', title: "Ha-Meem's accessories unit is developing", text: 'Ha-Meem continues to innovate with its accessories manufacturing processes.' },
]

// Roadmap 2030 — see header note. `value` drives the bar width (% of goal).
export const roadmapTargets = [
  { label: 'Ground water use reduction', value: 70, display: '−70%' },
  { label: 'Renewable energy share', value: 50, display: '50%+' },
  { label: 'Material utilisation (waste < 2%)', value: 98, display: '98%+' },
  { label: 'Sustainable apparel', value: 100, display: '100%' },
  { label: 'Traceable, transparent supply chain', value: 100, display: '100%' },
]
