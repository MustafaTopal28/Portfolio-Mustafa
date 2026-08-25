// pages/ContactPage.tsx
import { Link } from 'react-router-dom'
import { Contact } from '../components/sections/Contact'

export const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Back link */}
      <div className="pt-6 px-6 max-w-2xl mx-auto">
        <Link
          to="/"
          className="text-sm font-mono font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          ← Accueil
        </Link>
      </div>

      {/* Contact form */}
      <Contact />
    </div>
  )
}