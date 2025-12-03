// server/utils/prisma.ts
import { PrismaClient } from "~/generated/prisma/client"

declare global {
  // allow global prisma in dev to prevent hot-reload duplication
  var __prisma: PrismaClient | undefined
}

const prismaOptions = {
  // Optional: enable query logging in dev
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error']
}

export const prisma =
  global.__prisma ??
  new PrismaClient({
    accelerateUrl: process.env.PRISMA_ACCELERATE_URL || "http://localhost:51212", // provide your accelerate URL here
    log: ['query'] // optional: remove in production
  })

if (process.env.NODE_ENV !== 'production') global.__prisma = prisma
