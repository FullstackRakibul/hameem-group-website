import { defineEventHandler, createError } from "h3"

export default defineEventHandler(async (event) => {
  // Get all content sections
  if (event.node.req.method === "GET") {
    // In production, replace with database query
    return {
      status: "success",
      data: [
        {
          id: "about-section",
          title: "About Ha-Meem Group",
          description: "Starting in 1984 with a single garment factory...",
          type: "about",
          updatedAt: new Date(),
        },
        {
          id: "mission-section",
          title: "Our Mission",
          description: "To become a leading global clothing manufacturer...",
          type: "mission",
          updatedAt: new Date(),
        },
        {
          id: "vision-section",
          title: "Our Vision",
          description: "Excellence, innovation, and positive impact...",
          type: "vision",
          updatedAt: new Date(),
        },
      ],
    }
  }

  throw createError({ statusCode: 405, statusMessage: "Method not allowed" })
})
