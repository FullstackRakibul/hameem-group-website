import { prisma } from '~/server/utils/prisma'
import { defineEventHandler, readBody, getHeader } from 'h3'

const ADMIN_TOKEN = process.env.NUXT_ADMIN_TOKEN || ''

export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'x-admin-token') || ''
  // if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
  //   event.res.statusCode = 401
  //   return { ok: false, error: 'unauthorized' }
  // }

  const key = event.context.params?.key as string
  const body = await readBody(event)

  // basic validation / normalization
  const payload = {
    badge: body.badge ?? null,
    title: body.title ?? '',
    description: body.description ?? null,
    panelTitle: body.panelTitle ?? null,
    panelDescription: body.panelDescription ?? null,
    icon: body.icon ?? null,
    tags: body.tags ?? null,
    expandedDetails: body.expandedDetails ?? null,
    stats: body.stats ?? null,
    factories: body.factories ?? null,
    image: body.image ?? null,
    type: body.type ?? 'about'
  }

  // upsert: create if missing, otherwise update
  const section = await prisma.contentSection.upsert({
    where: { key },
    create: { key, ...payload },
    update: payload
  })

  return { ok: true, data: section }
})
