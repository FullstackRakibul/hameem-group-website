import { defineEventHandler, getRouterParam, readBody, createError } from "h3"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required",
    })
  }

  if (event.node.req.method === "GET") {
    // Get single content section
    const mockData: Record<string, any> = {
      "about-section": {
        id: "about-section",
        title: "About Ha-Meem Group",
        description: "Starting in 1984...",
        details: "Full details here",
        type: "about",
      },
    }

    return { status: "success", data: mockData[id] }
  }

  if (event.node.req.method === "PUT") {
    // Update content section
    const body = await readBody(event)
    console.log("[v0] Updating content:", id, body)
    return { status: "success", message: "Content updated", data: body }
  }

  if (event.node.req.method === "DELETE") {
    // Delete content section
    return { status: "success", message: "Content deleted" }
  }

  throw createError({ statusCode: 405, statusMessage: "Method not allowed" })
})
