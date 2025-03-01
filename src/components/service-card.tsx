import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border bg-background p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="mb-2 text-lg sm:text-xl font-bold">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </div>
  )
}

