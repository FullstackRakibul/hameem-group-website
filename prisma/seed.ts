import { PrismaClient, type Prisma } from "~/generated/prisma/client"


async function main() {
  const data = {
    key: 'about',
    badge: 'About Us',
    title: 'We stitch trust into every seam',
    description: 'Starting in 1984 ...', // shorten for seed
    panelTitle: 'Our Commitment',
    panelDescription: 'Delivering consistent quality ...',
    icon: '🏭',
    tags: ['Knit','Woven','Denim','Sustainability','Innovation'],
    expandedDetails: 'We follow strict ...',
    stats: [
      { label: 'Employees', value: '75K+' },
      { label: 'Annual Revenue', value: '$1B+' }
    ],
    factories: [
      { name: 'Garment Factories', count: '26' }
    ],
    type: 'about'
  }

  // delete existing key if any
  await prisma.contentSection.deleteMany({ where: { key: data.key } })
  await prisma.contentSection.create({ data })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
