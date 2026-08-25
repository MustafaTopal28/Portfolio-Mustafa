// pages/HomePage.tsx
// import { Header } from '../components/layout/Header'
// import { Footer } from '../components/layout/Footer'
// pages/HomePage.tsx
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Projects } from '../components/sections/Projects'

export const HomePage = () => {
  return (
    <div className="bg-black dark:bg-black min-h-screen flex flex-col">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}