// components/sections/Projects.tsx
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../bento/ProjectCard'
import { useScrollAnimation } from '../../lib/animation'

export const Projects = () => {
  const sectionRef = useScrollAnimation()
  const mainProjects = projects.filter((p) => p.category === 'main').slice(0, 2)

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-12 opacity-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header centré */}
        <div className="mb-10 text-center flex flex-col items-center">
          <p className="text-cyan-400 font-mono text-sm mb-2 tracking-wider">
            + PROJETS SÉLECTIONNÉS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-mono">
            Mes meilleurs travaux
          </h2>
          <div className="h-1 w-16 bg-cyan-400 mb-4"></div>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Découvrez mes projets les plus importants. Des applications web modernes
            aux outils créatifs, chaque projet raconte une histoire.
          </p>
        </div>

        {/* Featured Projects Grid - retour au format compact d'origine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {mainProjects[0] && <ProjectCard project={mainProjects[0]} featured />}
          {mainProjects[1] && <ProjectCard project={mainProjects[1]} />}
        </div>

        {/* CTA card, pleine largeur, compacte */}
        <Link
          to="/contact"
          className="group mb-10 rounded-sm border-2 border-slate-800 bg-slate-950/50 px-6 py-5 flex items-center justify-between hover:border-cyan-400/60 transition-colors cursor-pointer"
        >
          <div>
            <p className="text-white font-mono font-bold text-base mb-0.5">
              💬 Vous avez un projet ?
            </p>
            <p className="text-slate-400 text-sm">Contactez-moi !</p>
          </div>
          <span className="text-cyan-400 font-mono text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

        {/* Button to all projects */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono font-semibold rounded-sm hover:bg-cyan-400 hover:text-black transition-colors duration-200"
          >
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  )
}