import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { ProjectsHeader } from '../components/sections/ProjectsHeader'
import BentoGrid from '../components/bento/BentoGrid'
import { ProjectCard } from '../components/bento/ProjectCard'
import { ContactCard } from '../components/bento/ContactCard'
import { projects } from '../data/projects'

export const HomePage = () => {
  const mainProjects = projects.filter((p) => p.category === 'main').slice(0, 2)

  return (
    <div className="bg-black dark:bg-black min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ProjectsHeader />
      
      <BentoGrid>
        {mainProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured={true} />
        ))}
        <ContactCard />
      </BentoGrid>

      <Footer />
    </div>
  )
}