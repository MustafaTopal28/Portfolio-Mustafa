// components/sections/Hero.tsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TERMINAL_LINES = [
    { text: '> whoami', delay: 0 },
    { text: 'Mustafa Topal', delay: 400, className: 'text-cyan-400' },
    { text: '> role', delay: 800 },
    { text: 'Concepteur Développeur d\'Applications', delay: 1200, className: 'text-cyan-400' },
    { text: '> formation', delay: 1600 },
    { text: 'CDA — Bac+4 (en cours)', delay: 2000, className: 'text-cyan-400' },
    { text: '> stack', delay: 2400 },
    { text: 'React · TypeScript · Node.js · NestJS · SQL', delay: 2800, className: 'text-cyan-400' },
    { text: '> status', delay: 3200 },
    { text: 'Disponible pour travailer / Stage', delay: 3600, className: 'text-green-400' },
]

export const Hero = () => {
    const [visibleLines, setVisibleLines] = useState<number>(0)

    useEffect(() => {
        const timers = TERMINAL_LINES.map((_, index) =>
            setTimeout(() => setVisibleLines((prev) => prev + 1), TERMINAL_LINES[index].delay)
        )
        return () => timers.forEach(clearTimeout)
    }, [])

    return (
        <div className="py-12 md:py-16 px-4 md:px-8 relative overflow-hidden min-h-[85vh] flex items-center">
            {/* Dégradé de fond subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-black to-black opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Colonne gauche : texte */}
                <div>
                    {/* Petit label au-dessus */}
                    <div className="inline-block mb-5 px-4 py-1 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
                        <span className="text-xs font-mono text-slate-400">// Concepteur Développeur d'Applications</span>
                    </div>

                    {/* Titre avec typographie forte */}
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.05] dark:text-white">
                        Mustafa<br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Topal
                        </span>
                    </h1>

                    {/* Sous-titre technique */}
                    <p className="text-lg md:text-xl text-slate-400 mb-4 max-w-xl leading-relaxed font-light">
                        Développeur <span className="text-slate-200 font-medium">Full-Stack</span> en formation CDA (Bac+4),
                        je conçois des applications web robustes avec{' '}
                        <span className="text-slate-200 font-medium">React, TypeScript et Node.js</span>.
                    </p>

                    <p className="text-base text-slate-500 mb-8 max-w-xl leading-relaxed">
                        À la recherche d'une alternance pour continuer à monter en compétences et contribuer à des projets concrets.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-all duration-300 hover:gap-4"
                        >
                            Voir mes projets
                            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-900/50 transition-all duration-300"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>

                {/* Colonne droite : terminal ASCII animé */}
                <div className="hidden md:block">
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl">
                        {/* Barre de titre terminal */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-2 text-xs font-mono text-slate-500">mustafa@portfolio: ~</span>
                        </div>

                        {/* Contenu terminal */}
                        <div className="p-6 font-mono text-sm min-h-[320px]">
                            {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 animate-in fade-in slide-in-from-left-2 duration-300 ${line.className ?? 'text-slate-400'
                                        }`}
                                >
                                    {line.text}
                                </div>
                            ))}
                            {visibleLines < TERMINAL_LINES.length && (
                                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                            )}
                            {visibleLines >= TERMINAL_LINES.length && (
                                <div className="flex items-center gap-1 mt-2 text-slate-400">
                                    <span>{'>'}</span>
                                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}