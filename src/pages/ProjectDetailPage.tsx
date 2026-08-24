// pages/ProjectDetailPage.tsx
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { TechBadge } from '../components/ui/TechBadge'
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react'
export const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Projet non trouvé</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-5xl font-bold text-white font-mono">{project.title}</h1>
            <span className="px-3 py-1 text-sm font-mono text-slate-400 border border-slate-700 rounded whitespace-nowrap">
              {project.status === 'completed' && 'Terminé'}
              {project.status === 'in-progress' && 'En cours'}
              {project.status === 'wip' && 'WIP'}
            </span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <span className="text-slate-500">Type : </span>
              {project.type === 'formation' ? 'Formation' : 'Personnel'}
            </div>
            {project.team && (
              <div>
                <span className="text-slate-500">Équipe : </span>
                {project.team}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          {project.longDescription ? (
            <div className="space-y-4 text-slate-300 leading-relaxed whitespace-pre-wrap">
              {project.longDescription}
            </div>
          ) : (
            <p className="text-slate-400">{project.description}</p>
          )}
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-12 border-l-2 border-blue-600 pl-6">
            <h2 className="text-xl font-bold text-white mb-4 font-mono">Points clés</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-slate-400">
                  • {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack - AVEC COLORATION DYNAMIQUE */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 font-mono">Stack technique</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.links?.repo || project.links?.live || project.links?.demo) && (
          <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-800">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded border border-slate-700 transition-colors"
              >
                <ExternalLink size={18} />
                Voir le repo
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                <Globe size={18} />
                Voir en ligne
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded border border-slate-700 transition-colors"
              >
                <Globe size={18} />
                Démo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}