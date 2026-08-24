// lib/contact.ts
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export const validateForm = (data: ContactFormData) => {
  const errors: Record<string, string> = {}

  if (!data.name.trim()) {
    errors.name = 'Le nom est requis'
  }

  if (!data.email.trim()) {
    errors.email = 'L\'email est requis'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Email invalide'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Le sujet est requis'
  }

  if (!data.message.trim()) {
    errors.message = 'Le message est requis'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}