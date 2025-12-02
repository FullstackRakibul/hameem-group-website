export interface ContentSection {
  id: string
  title: string
  description: string
  details?: string
  type: "about" | "mission" | "vision" | "values" | "capabilities"
  image?: string
  metadata?: Record<string, any>
  updatedAt: Date
}

export interface ContentResponse {
  status: "success" | "error"
  data?: ContentSection | ContentSection[]
  message?: string
  error?: string
}
