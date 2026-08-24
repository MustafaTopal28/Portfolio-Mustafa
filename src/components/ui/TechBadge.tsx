// components/ui/TechBadge.tsx
import { getTechColor } from '../../lib/techColors'

interface TechBadgeProps {
  tech: string
  interactive?: boolean
}

export const TechBadge = ({ tech, interactive = true }: TechBadgeProps) => {
  const { bg, text, border, hover } = getTechColor(tech)

  return (
    <span
      className={`px-3 py-1 rounded text-xs font-mono border transition-all duration-200 ${
        interactive ? 'cursor-pointer hover:scale-105' : ''
      } ${bg} ${text} ${border} ${interactive ? hover : ''}`}
    >
      {tech}
    </span>
  )
}