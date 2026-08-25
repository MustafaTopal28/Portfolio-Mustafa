// components/sections/About.tsx
import { useEffect, useRef } from 'react'

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 opacity-0 bg-black"
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-slate-800 rounded-sm overflow-hidden hover:border-cyan-400/50 transition-colors duration-300">
            <img
              src="/about/Me.png"
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6 font-mono">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              À propos
            </h2>
            <div className="h-1 w-16 bg-cyan-400"></div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed">
            Développeur passionné par la création d'expériences web modernes et performantes. 
            Je combine design épuré et architecture technique solide pour construire des 
            applications qui font la différence.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            Spécialisé en{' '}
            <span className="font-semibold text-cyan-400">
              frontend moderne
            </span>
            , j'aime explorer les dernières technologies tout en gardant un focus sur la 
            performance et l'accessibilité.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            Actuellement en formation pour approfondir mes compétences en full-stack, 
            je travaille sur des projets ambitieux qui me permettent de repousser mes limites.
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-200">📍 Localisation :</span> France
            </p>
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-200">🎓 Formation :</span> ALT (en cours)
            </p>
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-200">💡 Passion :</span> Web 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}