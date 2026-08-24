// lib/skills.ts
export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 'advanced' },
  { name: 'TypeScript', category: 'Frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'advanced' },
  { name: 'Vite', category: 'Frontend', level: 'intermediate' },
  { name: 'Vue.js', category: 'Frontend', level: 'intermediate' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'intermediate' },
  { name: 'Express', category: 'Backend', level: 'intermediate' },
  { name: 'MongoDB', category: 'Backend', level: 'intermediate' },
  { name: 'PostgreSQL', category: 'Backend', level: 'beginner' },

  // Tools & Dev
  { name: 'Git', category: 'Tools', level: 'advanced' },
  { name: 'GitHub', category: 'Tools', level: 'advanced' },
  { name: 'Docker', category: 'Tools', level: 'beginner' },
  { name: 'Linux', category: 'Tools', level: 'intermediate' },

  // Soft Skills
  { name: 'Communication', category: 'Soft Skills', level: 'advanced' },
  { name: 'Problem Solving', category: 'Soft Skills', level: 'advanced' },
  { name: 'Collaboration', category: 'Soft Skills', level: 'advanced' },
  { name: 'Apprentissage', category: 'Soft Skills', level: 'expert' },
]

export const skillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category)
}

export const categories = ['Frontend', 'Backend', 'Tools', 'Soft Skills']

export const levelLabels = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
  expert: 'Expert',
}