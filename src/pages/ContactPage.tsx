// pages/ContactPage.tsx
import { Link } from 'react-router-dom'
import { Contact } from '../components/sections/Contact'

export const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Back link */}
      <div className="pt-6 px-6 max-w-2xl mx-auto">
        <Link 
          to="/" 
          className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          ← Accueil
        </Link>
      </div>

      {/* Contact form */}
      <Contact />
    </div>
  )
}