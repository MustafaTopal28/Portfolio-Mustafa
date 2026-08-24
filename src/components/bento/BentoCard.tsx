import type { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  colSpan?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2
}

const colSpanMap = {
  1: 'col-span-4 sm:col-span-2 lg:col-span-1',
  2: 'col-span-4 sm:col-span-4 lg:col-span-2',
  3: 'col-span-4 lg:col-span-3',
  4: 'col-span-4',
}

const rowSpanMap = {
  1: 'row-span-1',
  2: 'row-span-2',
}

export default function BentoCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
}: BentoCardProps) {
  return (
    <div
      className={`
        ${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]}
        bg-bg-surface border border-border-default rounded-2xl p-6
        hover:border-border-hover hover:bg-bg-surface-hover
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  )
}