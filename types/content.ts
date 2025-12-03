export interface ContentSection {
  id: string
  badge?: string
  title: string
  description: string
  panelTitle?: string
  panelDescription?: string
  icon?: string
  tags?: string[]
  expandedDetails?: string
  stats?: Array<{ label: string; value: string }>
  factories?: Array<{ name: string; count: string }>
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
