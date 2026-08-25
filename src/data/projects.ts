// ============================================
// PROJECT TYPES & INTERFACES
// ============================================

export type ProjectStatus = 'completed' | 'in-progress' | 'wip'
export type ProjectCategory = 'main' | 'side'
export type ProjectType = 'perso' | 'formation'

export interface ProjectLinks {
  repo?: string
  live?: string
  demo?: string
}

export interface Project {
  id: string
  title: string
  description: string // Courte description pour la card
  longDescription?: string // Description détaillée pour page projet
  stack: string[]
  status: ProjectStatus
  category: ProjectCategory // 'main' = sections principales, 'side' = apprentissage/wip
  type: ProjectType
  featured?: boolean // Affiche en avant sur le portfolio
  team?: string // Ex: "3 personnes"
  highlights?: string[] // Points clés du projet
  links?: ProjectLinks
  images?: string[] // Screenshots du projet pour la page détail
}

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
  // ─────────────────────────────────────────
  // MAIN PROJECTS - Featured
  // ─────────────────────────────────────────

  {
    id: 'letmecook',
    title: 'LetMeCook',
    description:
      'Application web de gestion et partage de recettes. Projet full-stack développé en équipe (3 personnes) avec participation au cycle complet : conception, planification agile, développement et code review.',
    longDescription: `Projet réalisé en équipe de 3 dans le cadre de la formation, pour une cliente réelle souhaitant un site de partage de recettes de cuisine.

**Participation à toutes les étapes du développement :**
- **Conception** : UML, MCD/MLD/MPD, maquettes Figma
- **Planification agile** : user stories, répartition de tickets en sprints hebdomadaires
- **Développement** : fonctionnalités front (page d'authentification, formulaires multi-étapes), intégration des appels API, gestion d'état
- **Code review** : assurance qualité et cohérence du code sur l'ensemble du projet, apprentissage continu sur les parties non développées personnellement

**Fonctionnalités clés :**
- Système complet d'authentification (login/inscription)
- Formulaire multi-étapes de création de recettes avec validation côté client et serveur
- Filtres dynamiques par tags et régimes alimentaires
- Gestion optimisée des données côté client (cache serveur)
- Tests e2e et unitaires
- API REST sécurisée avec documentation`,
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'TanStack Query',
      'TanStack Table',
      'Zustand',
      'React Hook Form',
      'Zod',
      'React Router',
      'Axios',
      'NestJS',
      'Prisma',
      'JWT',
      'Argon2',
      'Jest',
      'Cypress',
      'Supertest',
    ],
    status: 'completed',
    category: 'main',
    type: 'formation',
    featured: true,
    team: '3 personnes',
    highlights: [
      'Stack React/TypeScript moderne avec Vite',
      'Gestion d\'état globale (Zustand) et cache serveur (TanStack Query)',
      'Validation de formulaires avec React Hook Form + Zod',
      'Backend NestJS avec ORM Prisma et authentification sécurisée',
      'Tests e2e (Cypress) et unitaires (Jest)',
      'Méthodologie agile en sprints',
      'Code review et apprentissage continu',
    ],
    links: {
      // repo: 'https://gitlab.com/...',
      // live: 'https://...',
    },
    images: [
      // '/projects/letmecook/screenshot-1.jpg',
      // '/projects/letmecook/screenshot-2.jpg',
      // '/projects/letmecook/screenshot-3.jpg',
    ],
  },

  {
    id: 'yt-to-x',
    title: 'YT to X',
    description:
      'Application desktop pour télécharger et convertir des vidéos YouTube au format optimisé Twitter/X, avec support des playlists et historique des téléchargements.',
    longDescription: `Application desktop personnelle développée avec Electron et React, permettant de télécharger et convertir facilement des vidéos YouTube au format vidéo optimisé pour Twitter/X.

**Fonctionnalités :**
- Téléchargement de vidéos YouTube individuelles et de playlists complètes
- Conversion automatique au format et résolution optimisés pour Twitter/X
- Interface réactive et intuitive
- Historique des téléchargements
- Gestion des erreurs robuste
- Notifications visuelles en temps réel

**Stack technique :**
- Electron pour le packaging desktop
- React + Vite pour l'interface
- yt-dlp pour l'extraction vidéo
- FFmpeg pour la conversion vidéo
- Tailwind CSS pour le styling`,
    stack: ['Electron', 'React', 'Vite', 'Tailwind CSS', 'yt-dlp', 'FFmpeg'],
    status: 'completed',
    category: 'main',
    type: 'perso',
    featured: true,
    highlights: [
      'Application desktop avec Electron',
      'Intégration de CLI externes (yt-dlp, FFmpeg)',
      'Gestion d\'état et UI responsive avec React',
      'Conversion vidéo automatique et optimisée',
      'Historique et gestion des téléchargements',
    ],
    links: {
      repo: 'https://github.com/tonusername/yt-to-x',
    },
    images: [
      // '/projects/yt-to-x/screenshot-1.png',
      // '/projects/yt-to-x/screenshot-2.png',
    ],
  },

  // ─────────────────────────────────────────
  // MAIN PROJECTS - Non-featured
  // ─────────────────────────────────────────

  {
    id: 'kids-books-shop',
    title: 'Boutique de livres pour enfants',
    description:
      'Site e-commerce full-stack développé en équipe (3-4 personnes) pour une cliente réelle : catalogue, panier, formulaire de contact, API REST sécurisée et documentée.',
    longDescription: `Projet e-commerce réalisé en équipe de 3-4 personnes dans le cadre de la formation, pour une cliente réelle dans le secteur de la vente de livres pour enfants.

**Fonctionnalités :**
- Catalogue dynamique des produits avec recherche et filtres
- Système de panier persistant
- Formulaire de contact sécurisé
- API REST robuste et documentée avec Swagger
- Authentification sécurisée (JWT)
- Containerisation avec Docker

**Stack :**
- Frontend React avec React Router et Sass
- Backend Node.js/Express
- Base de données MySQL
- Authentification JWT
- Documentation API Swagger
- Tests unitaires Jest`,
    stack: ['React', 'React Router', 'Sass', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'Swagger', 'Jest'],
    status: 'completed',
    category: 'main',
    type: 'formation',
    team: '3-4 personnes',
    highlights: [
      'Site e-commerce complet pour cliente réelle',
      'API REST sécurisée avec documentation Swagger',
      'Authentification JWT et gestion de session',
      'Containerisation Docker',
      'Tests unitaires avec Jest',
      'Travail en équipe agile',
    ],
    images: [
      // '/projects/kids-books-shop/screenshot-1.png',
    ],
  },

  // ─────────────────────────────────────────
  // SIDE PROJECTS - Apprentissage / WIP
  // ─────────────────────────────────────────

  {
    id: 'sudoku-java',
    title: 'Sudoku Java',
    description:
      'Projet personnel d\'apprentissage de Java : grille de Sudoku avec interface graphique Swing (génération et affichage de la grille).',
    longDescription: `Petit projet personnel pour approfondir les compétences en Java et découvrir la programmation d'interface graphique avec Swing.

**État actuel :**
- Génération de grilles de Sudoku valides
- Affichage graphique avec Swing
- Travail en cours sur : résolution, validation, interactivité utilisateur

**Objectifs pédagogiques :**
- Maîtriser les bases de Java (OOP, collections)
- Découvrir Swing et la création d'interfaces desktop
- Implémenter un algorithme de résolution`,
    stack: ['Java', 'Swing'],
    status: 'wip',
    category: 'side',
    type: 'perso',
    highlights: [
      'Apprentissage de Java et POO',
      'Interface graphique avec Swing',
      'Algorithme de génération de grilles',
    ],
    links: {
      repo: 'https://github.com/MustafaTopal28/SudokuJava',
    },
    images: [
      // '/projects/sudoku-java/screenshot-1.png',
    ],
  },
]

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const getFeaturedProjects = () => projects.filter((p) => p.featured)
export const getMainProjects = () => projects.filter((p) => p.category === 'main')
export const getSideProjects = () => projects.filter((p) => p.category === 'side')
export const getProjectsByType = (type: ProjectType) => projects.filter((p) => p.type === type)
export const getProjectById = (id: string) => projects.find((p) => p.id === id)