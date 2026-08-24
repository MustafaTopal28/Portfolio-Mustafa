import type { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
}

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 p-6 max-w-7xl mx-auto">
      {children}
    </div>
  )
}