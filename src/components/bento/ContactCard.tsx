// components/bento/ContactCard.tsx
import { Link } from 'react-router-dom'

export const ContactCard = () => {
  return (
    <Link
      to="/contact"
      className="col-span-1 flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 cursor-pointer overflow-hidden group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/0 to-slate-800/0 group-hover:from-slate-800/20 group-hover:to-slate-800/10 transition-all duration-300" />
      
      <div className="relative z-10 flex flex-col gap-3 justify-center h-full text-center">
        <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
          💬 Vous avez un projet ?
        </h3>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          Contactez-moi !
        </p>
      </div>
    </Link>
  )
}