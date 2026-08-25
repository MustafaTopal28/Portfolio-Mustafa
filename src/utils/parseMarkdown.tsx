// utils/parseMarkdown.tsx
import type { ReactNode } from 'react'

const parseBold = (text: string): ReactNode[] => {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

export const parseMarkdownBlocks = (text: string): ReactNode[] => {
  const blocks = text.split('\n\n')

  return blocks.map((block, blockIdx) => {
    const lines = block.split('\n')

    if (lines.every((l) => l.trim().startsWith('-') || l.trim() === '')) {
      const items = lines.filter((l) => l.trim().startsWith('-'))
      return (
        <ul key={blockIdx} className="space-y-2 mb-4">
          {items.map((item, idx) => (
            <li key={idx} className="text-slate-300 flex gap-2">
              <span className="text-cyan-400 shrink-0">▸</span>
              <span>{parseBold(item.replace(/^-\s*/, ''))}</span>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={blockIdx} className="text-slate-300 leading-relaxed mb-4">
        {lines.map((line, lineIdx) => (
          <span key={lineIdx}>
            {parseBold(line)}
            {lineIdx < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    )
  })
}