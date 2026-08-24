// pages/ProjectsPage.tsx
import { projects } from '../data/projects'
import { ProjectCard } from '../components/bento/ProjectCard'
import BentoGrid from '../components/bento/BentoGrid'

export const ProjectsPage = () => {
  const featured = projects.filter((p) => p.featured)
  const main = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-black pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 font-mono">Laboratoire</h1>

        {/* Featured Section avec BentoGrid */}
        {featured.length > 0 && (
          <section className="mb-12">
            <BentoGrid>
              {featured.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  featured={true} 
                />
              ))}
            </BentoGrid>
          </section>
        )}

        {/* Main Projects avec BentoGrid */}
        {main.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 font-mono">Autres projets</h2>
            <BentoGrid>
              {main.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  featured={false} 
                />
              ))}
            </BentoGrid>
          </section>
        )}
      </div>
    </div>
  )
}