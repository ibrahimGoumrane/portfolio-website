"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.downloadResume": "Download CV",

    // Hero
    "hero.title1": "Ibrahim",
    "hero.title2": "Goumrane",
    "hero.subtitle":
      "Full Stack Engineer & AI Specialist passionate about building innovative solutions. Expert in software development, AI engineering, and data science.",
    "hero.getInTouch": "Get in Touch",
    "hero.viewWork": "View Work",
    "hero.location": "Location",
    "hero.contact": "Contact",

    // About
    "about.title": "About",
    "about.me": "Me",
    "about.role": "AI Engineer & Full Stack Developer",
    "about.description1":
      "Passionate AI and Software Engineer with strong expertise in full-stack development and AI engineering. Currently pursuing a degree in Artificial Intelligence and Computer Engineering at ENSAM Casablanca, I bring hands-on experience in building scalable applications using modern frameworks and cutting-edge AI technologies.",
    "about.description2":
      "With experience in Laravel, React, Spring Boot, Next.js, and various AI frameworks like PyTorch and TensorFlow, I specialize in creating innovative solutions that combine web development with artificial intelligence. Looking for full-time opportunities starting January 2026 to contribute to innovative projects in a dynamic team.",
    "about.languages": "Languages",
    "about.arabic": "Arabic",
    "about.french": "French",
    "about.english": "English",
    "about.native": "Native",
    "about.fluent": "Fluent",
    "about.professional": "Professional",
    "about.email": "Email",
    "about.phone": "Phone",
    "about.availability": "Age & Availability",
    "about.yearsOld": "21 years old",
    "about.availableFrom": "Available from January 2026",

    // Skills
    "skills.title": "Skills &",
    "skills.technologies": "Technologies",
    "skills.dev": "Development & Software Engineering",
    "skills.ai": "Machine Learning & AI",
    "skills.data": "Data Engineering & Analytics",
    "skills.devops": "DevOps & Cloud Infrastructure",

    // Experience
    "experience.title": "Professional",
    "experience.highlight": "Experience",
    "experience.freelance": "Freelance",
    "experience.contract": "Contract",
    "experience.internship": "Internship",

    // Education
    "education.title": "Education &",
    "education.highlight": "Certifications",
    "education.certifications": "Professional Certifications",

    // Software Development
    "software.title": "Software",
    "software.highlight": "Development",
    "software.description":
      "Full-stack web applications built with modern frameworks and best practices. Click on projects to watch demos.",
    "software.watchDemo": "Click to Watch Preview",

    // AI Engineering
    "ai.title": "AI",
    "ai.highlight": "Engineering",
    "ai.description":
      "Intelligent systems leveraging machine learning, deep learning, and NLP to solve complex real-world problems.",

    // Data Science
    "data.title": "Data",
    "data.highlight": "Science",
    "data.description": "Analytics, visualization, and data-driven insights to power business decisions.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Next.js & Tailwind CSS",
  },
  fr: {
    // Header
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.downloadResume": "Télécharger CV",

    // Hero
    "hero.title1": "Ibrahim",
    "hero.title2": "Goumrane",
    "hero.subtitle":
      "Ingénieur Full Stack & Spécialiste IA passionné par la création de solutions innovantes. Expert en développement logiciel, ingénierie IA et science des données.",
    "hero.getInTouch": "Me Contacter",
    "hero.viewWork": "Voir Mes Travaux",
    "hero.location": "Localisation",
    "hero.contact": "Contact",

    // About
    "about.title": "À",
    "about.me": "Propos",
    "about.role": "Ingénieur IA & Développeur Full Stack",
    "about.description1":
      "Ingénieur IA et Logiciel passionné avec une forte expertise en développement full-stack et ingénierie IA. Actuellement en formation d'Ingénieur en Intelligence Artificielle et Informatique à l'ENSAM Casablanca, j'apporte une expérience pratique dans la création d'applications évolutives utilisant des frameworks modernes et des technologies IA de pointe.",
    "about.description2":
      "Avec une expérience en Laravel, React, Spring Boot, Next.js et divers frameworks IA comme PyTorch et TensorFlow, je me spécialise dans la création de solutions innovantes combinant développement web et intelligence artificielle. À la recherche d'opportunités à temps plein à partir de janvier 2026 pour contribuer à des projets innovants dans une équipe dynamique.",
    "about.languages": "Langues",
    "about.arabic": "Arabe",
    "about.french": "Français",
    "about.english": "Anglais",
    "about.native": "Natif",
    "about.fluent": "Courant",
    "about.professional": "Professionnel",
    "about.email": "Email",
    "about.phone": "Téléphone",
    "about.availability": "Âge & Disponibilité",
    "about.yearsOld": "21 ans",
    "about.availableFrom": "Disponible à partir de janvier 2026",

    // Skills
    "skills.title": "Compétences &",
    "skills.technologies": "Technologies",
    "skills.dev": "Développement & Génie Logiciel",
    "skills.ai": "Machine Learning & IA",
    "skills.data": "Ingénierie de Données & Analytique",
    "skills.devops": "DevOps & Infrastructure Cloud",

    // Experience
    "experience.title": "Expérience",
    "experience.highlight": "Professionnelle",
    "experience.freelance": "Freelance",
    "experience.contract": "Contrat",
    "experience.internship": "Stage",

    // Education
    "education.title": "Formation &",
    "education.highlight": "Certifications",
    "education.certifications": "Certifications Professionnelles",

    // Software Development
    "software.title": "Développement",
    "software.highlight": "Logiciel",
    "software.description":
      "Applications web full-stack construites avec des frameworks modernes et les meilleures pratiques. Cliquez sur les projets pour voir les démos.",
    "software.watchDemo": "Cliquer pour Voir la Démo",

    // AI Engineering
    "ai.title": "Ingénierie",
    "ai.highlight": "IA",
    "ai.description":
      "Systèmes intelligents utilisant le machine learning, le deep learning et le NLP pour résoudre des problèmes complexes du monde réel.",

    // Data Science
    "data.title": "Science des",
    "data.highlight": "Données",
    "data.description":
      "Analytique, visualisation et insights basés sur les données pour alimenter les décisions commerciales.",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.builtWith": "Créé avec Next.js & Tailwind CSS",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
