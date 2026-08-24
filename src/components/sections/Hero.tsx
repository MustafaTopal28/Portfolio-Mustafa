export const Hero = () => {
  return (
    <div className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Dégradé de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black to-black opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl">
        {/* Petit label au-dessus */}
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <span className="text-xs font-mono text-slate-400">// Développeur Créatif</span>
        </div>

        {/* Titre avec typographie forte */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1] dark:text-white">
          Bienvenue<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            sur mon portfolio
          </span>
        </h1>

        {/* Sous-titre avec meilleur spacing */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
          Créatif passionné par le design et le code. Je crée des expériences numériques <span className="text-slate-200">élégantes et performantes</span>.
        </p>

        {/* CTA avec style */}
        <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300 hover:gap-4">
          Voir mes projets
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  )
}   