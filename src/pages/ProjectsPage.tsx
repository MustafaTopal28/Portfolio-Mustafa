// pages/ProjectsPage.tsx
import { projects } from '../data/projects'
import { ProjectCard } from '../components/bento/ProjectCard'
import { PageNav } from '../components/ui/PageNav'

export const ProjectsPage = () => {
  const featured = projects.filter((p) => p.featured)
  const main = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-black pt-32 px-6 pb-24">
      <PageNav />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 font-mono text-sm tracking-widest mb-4">
            + TOUS LES PROJETS
          </span>
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">Laboratoire</h1>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            L'ensemble de mes projets, des plus aboutis aux expérimentations personnelles.
          </p>
        </div>

        {featured.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </section>
        )}

        {main.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">Autres projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {main.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}