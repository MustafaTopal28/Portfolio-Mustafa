// src/lib/techColors.ts
export const TECH_COLORS: Record<string, TechColor> = {
  // Frontend
  'React': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', hover: 'hover:bg-blue-500/20 hover:border-blue-500/60' },
  'TypeScript': { bg: 'bg-blue-600/10', text: 'text-blue-300', border: 'border-blue-600/30', hover: 'hover:bg-blue-600/20 hover:border-blue-600/60' },
  'Vite': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', hover: 'hover:bg-purple-500/20 hover:border-purple-500/60' },
  'Tailwind CSS': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', hover: 'hover:bg-cyan-500/20 hover:border-cyan-500/60' },
  'React Router': { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', hover: 'hover:bg-red-500/20 hover:border-red-500/60' },
  
  // Backend
  'Node.js': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30', hover: 'hover:bg-green-500/20 hover:border-green-500/60' },
  'Express': { bg: 'bg-green-600/10', text: 'text-green-300', border: 'border-green-600/30', hover: 'hover:bg-green-600/20 hover:border-green-600/60' },
  
  // Databases
  'MySQL': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30', hover: 'hover:bg-yellow-500/20 hover:border-yellow-500/60' },
  'MongoDB': { bg: 'bg-yellow-600/10', text: 'text-yellow-300', border: 'border-yellow-600/30', hover: 'hover:bg-yellow-600/20 hover:border-yellow-600/60' },
  
  // Tools
  'Docker': { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', hover: 'hover:bg-sky-500/20 hover:border-sky-500/60' },
  'Jest': { bg: 'bg-red-600/10', text: 'text-red-300', border: 'border-red-600/30', hover: 'hover:bg-red-600/20 hover:border-red-600/60' },
  'Sass': { bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/30', hover: 'hover:bg-pink-500/20 hover:border-pink-500/60' },
  'Java': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30', hover: 'hover:bg-orange-500/20 hover:border-orange-500/60' },
  'Swagger': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30', hover: 'hover:bg-green-500/20 hover:border-green-500/60' },
  'Electron': { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/30', hover: 'hover:bg-slate-500/20 hover:border-slate-500/60' },
}

interface TechColor {
  bg: string
  text: string
  border: string
  hover: string
}

export const getTechColor = (tech: string): TechColor => {
  return TECH_COLORS[tech] || {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/30',
    hover: 'hover:bg-slate-500/20 hover:border-slate-500/60',
  }
}