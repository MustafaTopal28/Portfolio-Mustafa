// pages/ProjectDetailPage.tsx
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { TechBadge } from '../components/ui/TechBadge'
import { ImageCarousel } from '../components/ui/ImageCarousel'
import { parseMarkdownBlocks } from '../utils/parseMarkdown'
import { PageNav } from '../components/ui/PageNav'
import { ExternalLink, Globe } from 'lucide-react'

const statusConfig = {
  completed: { label: '✓ terminé', className: 'text-emerald-400 border-emerald-400/40' },
  'in-progress': { label: '⚡ en cours', className: 'text-amber-400 border-amber-400/40' },
  wip: { label: '⚠ wip', className: 'text-orange-400 border-orange-400/40' },
}

export const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <PageNav />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Projet non trouvé</h1>
          <Link to="/projects" className="text-cyan-400 hover:text-cyan-300">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  const status = statusConfig[project.status]

  return (
    <div className="min-h-screen bg-black pt-32 px-6 pb-20">
      <PageNav backTo={{ label: 'Tous les projets', href: '/projects' }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b-2 border-slate-800 pb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-mono">{project.title}</h1>
            <span
              className={`px-3 py-1 text-xs font-mono border-2 rounded-sm whitespace-nowrap ${status.className}`}
            >
              {status.label}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-mono">
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

        {project.images && project.images.length > 0 && (
          <ImageCarousel images={project.images} alt={project.title} />
        )}

        <div className="mb-12">
          {project.longDescription ? (
            <div>{parseMarkdownBlocks(project.longDescription)}</div>
          ) : (
            <p className="text-slate-400 leading-relaxed">{project.description}</p>
          )}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-12 border-l-2 border-cyan-400 pl-6">
            <h2 className="text-xl font-bold text-white mb-4 font-mono">Points clés</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="text-slate-300 flex gap-2">
                  <span className="text-cyan-400 shrink-0">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 font-mono">Stack technique</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>

        {(project.links?.repo || project.links?.live || project.links?.demo) && (
          <div className="flex flex-wrap gap-4 pt-8 border-t-2 border-slate-800">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:border-cyan-400/60 text-white rounded-sm border-2 border-slate-800 transition-colors font-mono text-sm"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black rounded-sm transition-colors font-mono text-sm font-bold"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:border-cyan-400/60 text-white rounded-sm border-2 border-slate-800 transition-colors font-mono text-sm"
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