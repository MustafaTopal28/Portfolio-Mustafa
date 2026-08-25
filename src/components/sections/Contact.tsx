// components/sections/Contact.tsx
import { useState, useRef } from 'react'
import type { ContactFormData } from '../../lib/contact'
import { validateForm } from '../../lib/contact'
import { useScrollAnimation } from '../../lib/animation'
import { PageNav } from '../ui/PageNav'

export const Contact = () => {
  const sectionRef = useScrollAnimation()
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validation = validateForm(formData)
    if (!validation.valid) {
      setErrors(validation.errors)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/meajbjla', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setSuccess(true)
      setSuccessMessage('Message envoyé avec succès ! 🎉')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})

      setTimeout(() => {
        setSuccess(false)
        setSuccessMessage('')
      }, 5000)

      formRef.current?.scrollIntoView({ behavior: 'smooth' })
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Une erreur est survenue',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 opacity-0 bg-black relative"
    >
      <PageNav />

      <div className="max-w-2xl w-full font-mono">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Contact</h2>
          <div className="h-1 w-16 bg-cyan-400"></div>
          <p className="text-slate-400 mt-4">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </div>

        {success && (
          <div className="mb-6 p-4 border-2 border-green-500 bg-green-950/30 rounded-sm">
            <p className="text-green-400 font-semibold">{successMessage}</p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-slate-950 text-white focus:outline-none transition-colors duration-200 ${
                errors.name ? 'border-red-500' : 'border-slate-700 focus:border-cyan-400'
              }`}
              placeholder="Votre nom"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-slate-950 text-white focus:outline-none transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-slate-700 focus:border-cyan-400'
              }`}
              placeholder="votre.email@exemple.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-slate-950 text-white focus:outline-none transition-colors duration-200 ${
                errors.subject ? 'border-red-500' : 'border-slate-700 focus:border-cyan-400'
              }`}
              placeholder="Sujet du message"
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-slate-950 text-white focus:outline-none transition-colors duration-200 resize-none ${
                errors.message ? 'border-red-500' : 'border-slate-700 focus:border-cyan-400'
              }`}
              placeholder="Votre message..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {errors.submit && (
            <div className="p-4 border-2 border-red-500 bg-red-950/30 rounded-sm">
              <p className="text-red-400 font-semibold">{errors.submit}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-cyan-400 text-black font-semibold rounded-sm hover:bg-cyan-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t-2 border-slate-800 space-y-4">
          <p className="text-slate-400">Ou contactez-moi directement :</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:mustafatopalpro@gmail.com"
              className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors"
            >
              📧 mustafatopalpro@gmail.com
            </a>
            <a
              href="https://github.com/MustafaTopal28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors"
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-topal-professional"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}