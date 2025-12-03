import { prisma } from '~/server/utils/prisma'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const key = event.context.params?.key as string
  const section = await prisma.contentSection.findUnique({
    where: { key }
  })
  if (!section) {
    event.res.statusCode = 404
    return { ok: false, error: 'not_found' }
  }
  return { ok: true, data: section }
})
