// components/sections/Projects.tsx
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { ProjectCard } from '../bento/ProjectCard'

export const Projects = () => {
  // Afficher les projets "main" seulement (max 2-3 en Featured)
  const mainProjects = projects.filter((p) => p.category === 'main').slice(0, 2)
  
  return (
    <section className="min-h-screen bg-white dark:bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Projets Sélectionnés
          </h2>
          <div className="h-1 w-16 bg-neutral-900 dark:bg-neutral-100"></div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl">
            Découvrez mes projets les plus importants. Explorez tous mes travaux dans la section laboratoire.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Button to all projects */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-semibold rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200"
          >
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  )
}