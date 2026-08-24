// components/sections/ProjectsHeader.tsx
export const ProjectsHeader = () => {
  return (
    <div className="px-4 md:px-8 mb-8">
      <div className="max-w-5xl">
        {/* Label mono */}
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          ✦ Projets Sélectionnés
        </span>

        {/* Titre avec underline */}
        <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 dark:text-white">
          Mes meilleurs travaux
        </h2>

        {/* Descriptif */}
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Découvrez mes projets les plus importants. Des applications web modernes aux outils créatifs, chaque projet raconte une histoire.
        </p>

        {/* Ligne déco */}
        <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 mt-6 rounded-full" />
      </div>
    </div>
  )
}