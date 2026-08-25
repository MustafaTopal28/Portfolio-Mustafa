// components/bento/ProjectCard.tsx
import type { Project } from '../../data/projects'
import { Link } from 'react-router-dom'
import { TechBadge } from '../ui/TechBadge'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

const statusConfig: Record<Project['status'], { label: string; color: string }> = {
  completed: { label: '✓ terminé', color: 'text-emerald-400 border-emerald-400/40' },
  'in-progress': { label: '⟳ en cours', color: 'text-amber-400 border-amber-400/40' },
  wip: { label: '⚡ wip', color: 'text-cyan-400 border-cyan-400/40' },
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const status = statusConfig[project.status]
  const stackLimit = featured ? 6 : 4

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative h-full flex flex-col gap-3 rounded-sm border-2 border-slate-800 bg-slate-950/50 p-5 transition-all duration-300 hover:border-cyan-400/60 cursor-pointer overflow-hidden"
    >
      {/* Background effect au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-cyan-400/0 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        {/* Title + Status */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <span
            className={`shrink-0 px-2 py-0.5 text-xs font-mono border rounded-sm whitespace-nowrap ${status.color}`}
          >
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Team info if exists */}
        {project.team && (
          <p className="text-xs text-slate-500 italic">Équipe : {project.team}</p>
        )}
      </div>

      {/* Stack badges */}
      <div className="relative z-10 flex flex-wrap gap-1.5 mt-1">
        {project.stack.slice(0, stackLimit).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.stack.length > stackLimit && (
          <span className="text-xs font-mono px-2 py-1 text-slate-500">
            +{project.stack.length - stackLimit}
          </span>
        )}
      </div>
    </Link>
  )
}