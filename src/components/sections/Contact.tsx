// components/sections/Contact.tsx
import { useState, useRef, useEffect } from 'react'
import type { ContactFormData } from '../../lib/contact'
import { validateForm } from '../../lib/contact'
export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
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
      // Envoyer directement à Formspree
      const response = await fetch('https://formspree.io/f/meajbjla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

      // Reset success message après 5s
      setTimeout(() => {
        setSuccess(false)
        setSuccessMessage('')
      }, 5000)

      // Scroll to top of form
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
      className="min-h-screen flex items-center justify-center px-4 py-20 opacity-0"
    >
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
            Contact
          </h2>
          <div className="h-1 w-16 bg-neutral-900 dark:bg-neutral-100"></div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 border-2 border-green-500 bg-green-50 dark:bg-green-950 rounded-sm">
            <p className="text-green-700 dark:text-green-300 font-semibold">
              {successMessage}
            </p>
          </div>
        )}

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none transition-colors duration-200 ${errors.name
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100'
                }`}
              placeholder="Votre nom"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none transition-colors duration-200 ${errors.email
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100'
                }`}
              placeholder="votre.email@exemple.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none transition-colors duration-200 ${errors.subject
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100'
                }`}
              placeholder="Sujet du message"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 border-2 rounded-sm bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:outline-none transition-colors duration-200 resize-none ${errors.message
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-neutral-100'
                }`}
              placeholder="Votre message..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="p-4 border-2 border-red-500 bg-red-50 dark:bg-red-950 rounded-sm">
              <p className="text-red-700 dark:text-red-300 font-semibold">
                {errors.submit}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-semibold rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>

        {/* Info Links */}
        <div className="mt-12 pt-8 border-t-2 border-neutral-200 dark:border-neutral-800 space-y-4">
          <p className="text-neutral-600 dark:text-neutral-400">Ou contactez-moi directement :</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:your.email@example.com"
              className="text-neutral-900 dark:text-neutral-100 font-semibold hover:underline"
            >
              📧 your.email@example.com
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 font-semibold hover:underline"
            >
              🐙 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 font-semibold hover:underline"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}