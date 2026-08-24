// components/bento/ProjectCard.tsx
import type { Project } from '../../data/projects'
import { Link } from 'react-router-dom'
import { TechBadge } from '../ui/TechBadge'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const sizeClass = featured ? 'col-span-2 row-span-1' : 'col-span-1'

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`group relative ${sizeClass} flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 cursor-pointer overflow-hidden`}
    >
      {/* Background effect au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/0 to-slate-800/0 group-hover:from-slate-800/20 group-hover:to-slate-800/10 transition-all duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 flex-1">
        {/* Title + Status */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 px-2 py-1 text-xs font-mono text-slate-400 border border-slate-700 rounded">
            {project.status === 'completed' && 'Terminé'}
            {project.status === 'in-progress' && 'En cours'}
            {project.status === 'wip' && 'WIP'}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 line-clamp-3 group-hover:text-slate-300 transition-colors">
          {project.description}
        </p>

        {/* Team info if exists */}
        {project.team && (
          <p className="text-xs text-slate-500 italic">Équipe : {project.team}</p>
        )}
      </div>

      {/* Stack badges */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.stack.slice(0, featured ? 8 : 4).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.stack.length > (featured ? 8 : 4) && (
          <span className="text-xs px-2 py-1 text-slate-500">
            +{project.stack.length - (featured ? 8 : 4)}
          </span>
        )}
      </div>
    </Link>
  )
}