// components/sections/Skills.tsx
import { useEffect, useRef } from 'react'
import { skills, categories, levelLabels } from '../../lib/skills'
import { getTechColor } from '../../lib/techColors'

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in')
            }, index * 50) // Stagger effect
          }
        })
      },
      { threshold: 0.1 }
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
            Compétences
          </h2>
          <div className="h-1 w-16 bg-neutral-900 dark:bg-neutral-100"></div>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
                {category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => {
                    const techColor = getTechColor(skill.name)

                    return (
                      <div
                        key={skill.name}
                        ref={(el) => {
                          itemsRef.current[index] = el
                        }}
                        className="opacity-0 p-4 border-2 border-neutral-300 dark:border-neutral-700 rounded-sm hover:border-neutral-600 dark:hover:border-neutral-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-neutral-900/50 bg-white dark:bg-neutral-950"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {skill.name}
                          </h4>
                          <div
                            className={`w-3 h-3 rounded-full ${techColor.bg} border ${techColor.border}`}
                          ></div>
                        </div>

                        <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-sm overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${techColor.bg}`}
                            style={{
                              width: `${
                                {
                                  beginner: '25%',
                                  intermediate: '50%',
                                  advanced: '75%',
                                  expert: '100%',
                                }[skill.level]
                              }`,
                            }}
                          ></div>
                        </div>

                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">
                          {levelLabels[skill.level]}
                        </p>
                      </div>
                    )
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}