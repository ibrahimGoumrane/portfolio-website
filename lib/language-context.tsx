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
    "nav.downloadResume.href" : "/resume/Ibrahim_Goumrane_CV_en.pdf",

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

    // Partners page
    "partners.badge": "White-label partner · Casablanca",
    "partners.hero.title1": "White-label",
    "partners.hero.title2": "development partner",
    "partners.hero.subtitle": "Based in Casablanca · React · Laravel · Spring Boot · AI/ML · ±1 h from Paris & London — I embed into your team and ship production-ready code under your brand.",
    "partners.hero.rateCard": "See rate card",
    "partners.hero.getInTouch": "Get in touch",
    "partners.hero.nda": "NDA by default",
    "partners.hero.cicd": "GitHub CI/CD included",
    "partners.hero.testTask": "Paid test task first",
    "partners.back": "Back to portfolio",
    "partners.stats.clients": "Clients served",
    "partners.stats.projects": "Projects delivered",
    "partners.stats.years": "Years of experience",
    "partners.stats.stacks": "Tech stacks mastered",
    "partners.stats.whitelabel": "White-label delivery",
    "partners.domains.title1": "Proven across",
    "partners.domains.title2": "domains",
    "partners.domains.subtitle": "5+ clients served across industries — from consulting firms to startups, always delivering production-ready solutions under NDA.",
    "partners.domains.webscraping": "Web Scraping & Data Extraction",
    "partners.domains.webscraping.desc": "Built automated data collection pipelines with anti-bot strategies and large-scale scraping for multiple private clients.",
    "partners.domains.webmobile": "Web & Mobile Development",
    "partners.domains.webmobile.desc": "Delivered full-stack platforms for clients like EHC (recruitment platform) and Formafast.consulting (Financiana — financial analysis).",
    "partners.domains.aiml": "AI & Machine Learning",
    "partners.domains.aiml.desc": "Shipped computer vision, NLP, LLM integrations, and OCR pipelines for client projects including automated exam correction.",
    "partners.domains.automation": "Automation & Workflows",
    "partners.domains.automation.desc": "Built scripts, agents, and orchestration tools for private clients — from CI/CD pipelines to scheduled business logic and report generation.",
    "partners.domains.cloud": "Cloud Orchestration & Deployment",
    "partners.domains.cloud.desc": "Set up and managed production infrastructure: VPS, Docker, AWS/GCP deployments, Nginx, and monitoring for client systems.",
    "partners.domains.systems": "System Management",
    "partners.domains.systems.desc": "Linux server administration, database management, backup strategies, and infrastructure scaling for production workloads.",
    "partners.whyUs.title1": "Why work with",
    "partners.whyUs.title2": "us",
    "partners.whyUs.card1.title": "French & English",
    "partners.whyUs.card1.desc": "Native Arabic, fluent French, professional English — zero communication friction with your team or end-clients.",
    "partners.whyUs.card2.title": "Same timezone",
    "partners.whyUs.card2.desc": "Casablanca is ±1 h from Paris and London. Daily standups, Slack, GitHub — no async delays, real overlap.",
    "partners.whyUs.card3.title": "NDA-ready delivery",
    "partners.whyUs.card3.desc": "White-label by default. GitHub CI/CD, clean handoff, your client never knows I exist.",
    "partners.capabilities.title1": "What I",
    "partners.capabilities.title2": "deliver",
    "partners.capabilities.fullstack": "Full-Stack Web Development",
    "partners.capabilities.fullstack.1": "React / Next.js frontends",
    "partners.capabilities.fullstack.2": "Laravel & Spring Boot APIs",
    "partners.capabilities.fullstack.3": "Real-time features (WebSockets)",
    "partners.capabilities.fullstack.4": "Responsive, accessible UI",
    "partners.capabilities.ai": "AI & Machine Learning",
    "partners.capabilities.ai.1": "Computer vision (YOLO, CNN)",
    "partners.capabilities.ai.2": "NLP & text analysis",
    "partners.capabilities.ai.3": "LLM integrations (OpenAI, Gemini)",
    "partners.capabilities.ai.4": "OCR & document processing",
    "partners.capabilities.data": "Data Engineering",
    "partners.capabilities.data.1": "ETL pipelines & automation",
    "partners.capabilities.data.2": "MySQL / PostgreSQL / MongoDB",
    "partners.capabilities.data.3": "Analytics dashboards",
    "partners.capabilities.data.4": "Selenium scraping & FAISS",
    "partners.capabilities.devops": "DevOps & Deployment",
    "partners.capabilities.devops.1": "Docker containerisation",
    "partners.capabilities.devops.2": "VPS & cloud hosting (AWS, GCP)",
    "partners.capabilities.devops.3": "CI/CD with GitHub Actions",
    "partners.capabilities.devops.4": "Nginx reverse proxy setup",
    "partners.tech.title1": "Tech",
    "partners.tech.title2": "stack",
    "partners.projects.title1": "Selected",
    "partners.projects.title2": "work",
    "partners.projects.subtitle": "Real projects shipped for clients and academic stakeholders — available as case studies on request.",
    "partners.rate.title1": "Rate",
    "partners.rate.title2": "card",
    "partners.rate.col.engagement": "Engagement",
    "partners.rate.col.rate": "Rate",
    "partners.rate.col.details": "Details",
    "partners.rate.row1.name": "Full-stack development",
    "partners.rate.row1.rate": "280 EUR/day",
    "partners.rate.row1.details": "React, Laravel, Spring Boot",
    "partners.rate.row2.name": "AI & ML integration",
    "partners.rate.row2.rate": "350 EUR/day",
    "partners.rate.row2.details": "PyTorch, scikit-learn, computer vision",
    "partners.rate.row3.name": "Monthly retainer",
    "partners.rate.row3.rate": "On request",
    "partners.rate.row3.details": "Minimum 10 days/month",
    "partners.rate.note": "Rates in EUR, excl. VAT. Test project available before commitment.",
    "partners.how.title1": "How it",
    "partners.how.title2": "works",
    "partners.how.step1": "You reach out",
    "partners.how.step1.desc": "Email or LinkedIn — I respond within 24 h",
    "partners.how.step2": "Paid test task",
    "partners.how.step2.desc": "1–2 day paid trial so we both evaluate fit",
    "partners.how.step3": "NDA + agreement",
    "partners.how.step3.desc": "Sign rate agreement and NDA before kickoff",
    "partners.how.step4": "First project",
    "partners.how.step4.desc": "I embed into your workflow and start shipping",
    "partners.contact.title1": "Let's",
    "partners.contact.title2": "talk",
    "partners.contact.subtitle": "Ready to start? Reach out and I'll get back to you within 24 hours with a tailored proposal.",
    "partners.contact.email": "Email",
    "partners.contact.linkedin": "LinkedIn",
    "partners.contact.available": "Available from",
    "partners.nav": "Partners",
    "partners.portfolio": "Portfolio",
    "partners.project.financiana.title": "Financiana",
    "partners.project.financiana.subtitle": "Financial Analysis Platform",
    "partners.project.financiana.desc": "Web platform with AI-powered financial analysis, OCR document parsing, and automatic report generation for businesses.",
    "partners.project.recruite.title": "Recruite",
    "partners.project.recruite.subtitle": "Recruitment Management Platform",
    "partners.project.recruite.desc": "End-to-end recruitment workflow with automated assessments, real-time analytics, and role-based access control.",
    "partners.project.fastdev.title": "Fast Dev",
    "partners.project.fastdev.subtitle": "Low-Code Solution",
    "partners.project.fastdev.desc": "Visual low-code platform for rapid web application development with AI-assisted code generation and Docker deployments.",
    "partners.project.autogradeai.title": "AutoGradeAI",
    "partners.project.autogradeai.subtitle": "Automated Exam Correction",
    "partners.project.autogradeai.desc": "AI-driven exam correction: OCR extraction, LLM answer generation, and semantic similarity scoring for automated grading.",
  },
  fr: {
    // Header
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.downloadResume": "Télécharger CV",
    "nav.downloadResume.href" : "/resume/Ibrahim_Goumrane_CV_fr.pdf",

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

    // Partners page
    "partners.badge": "Partenaire white-label · Casablanca",
    "partners.hero.title1": "Partenaire",
    "partners.hero.title2": "développement white-label",
    "partners.hero.subtitle": "Basé à Casablanca · React · Laravel · Spring Boot · IA/ML · ±1 h de Paris et Londres — je m'intègre à votre équipe et livre du code prêt pour la production sous votre marque.",
    "partners.hero.rateCard": "Voir les tarifs",
    "partners.hero.getInTouch": "Me contacter",
    "partners.hero.nda": "NDA par défaut",
    "partners.hero.cicd": "CI/CD GitHub inclus",
    "partners.hero.testTask": "Tâche test payée d'abord",
    "partners.back": "Retour au portfolio",
    "partners.stats.clients": "Clients servis",
    "partners.stats.projects": "Projets livrés",
    "partners.stats.years": "Années d'expérience",
    "partners.stats.stacks": "Stacks maîtrisées",
    "partners.stats.whitelabel": "Livraison white-label",
    "partners.domains.title1": "Expérience prouvée dans plusieurs",
    "partners.domains.title2": "domaines",
    "partners.domains.subtitle": "5+ clients servis dans différents secteurs — des cabinets de conseil aux startups, toujours avec des solutions prêtes pour la production sous NDA.",
    "partners.domains.webscraping": "Web Scraping & Extraction de Données",
    "partners.domains.webscraping.desc": "Pipelines de collecte de données automatisés avec stratégies anti-bot et scraping à grande échelle pour plusieurs clients privés.",
    "partners.domains.webmobile": "Développement Web & Mobile",
    "partners.domains.webmobile.desc": "Plateformes full-stack livrées pour des clients comme EHC (plateforme de recrutement) et Formafast.consulting (Financiana — analyse financière).",
    "partners.domains.aiml": "IA & Machine Learning",
    "partners.domains.aiml.desc": "Vision par ordinateur, NLP, intégrations LLM et pipelines OCR livrés pour des projets clients incluant la correction automatisée d'examens.",
    "partners.domains.automation": "Automatisation & Workflows",
    "partners.domains.automation.desc": "Scripts, agents et outils d'orchestration pour des clients privés — des pipelines CI/CD aux tâches planifiées et la génération de rapports.",
    "partners.domains.cloud": "Orchestration Cloud & Déploiement",
    "partners.domains.cloud.desc": "Mise en place et gestion d'infrastructure de production : VPS, Docker, déploiements AWS/GCP, Nginx et monitoring pour les systèmes clients.",
    "partners.domains.systems": "Gestion de Systèmes",
    "partners.domains.systems.desc": "Administration de serveurs Linux, gestion de bases de données, stratégies de sauvegarde et mise à l'échelle d'infrastructure pour charges de production.",
    "partners.whyUs.title1": "Pourquoi travailler avec",
    "partners.whyUs.title2": "nous",
    "partners.whyUs.card1.title": "Français & Anglais",
    "partners.whyUs.card1.desc": "Arabe natif, français courant, anglais professionnel — zéro friction de communication avec votre équipe ou vos clients.",
    "partners.whyUs.card2.title": "Même fuseau horaire",
    "partners.whyUs.card2.desc": "Casablanca est à ±1 h de Paris et Londres. Standups quotidiens, Slack, GitHub — aucun délai asynchrone, un vrai chevauchement.",
    "partners.whyUs.card3.title": "Livraison sous NDA",
    "partners.whyUs.card3.desc": "White-label par défaut. CI/CD GitHub, passage de relais propre, votre client ne sait jamais que j'existe.",
    "partners.capabilities.title1": "Ce que je",
    "partners.capabilities.title2": "livre",
    "partners.capabilities.fullstack": "Développement Web Full-Stack",
    "partners.capabilities.fullstack.1": "Frontends React / Next.js",
    "partners.capabilities.fullstack.2": "APIs Laravel & Spring Boot",
    "partners.capabilities.fullstack.3": "Fonctionnalités temps réel (WebSockets)",
    "partners.capabilities.fullstack.4": "UI responsive et accessible",
    "partners.capabilities.ai": "IA & Machine Learning",
    "partners.capabilities.ai.1": "Vision par ordinateur (YOLO, CNN)",
    "partners.capabilities.ai.2": "NLP & analyse de texte",
    "partners.capabilities.ai.3": "Intégrations LLM (OpenAI, Gemini)",
    "partners.capabilities.ai.4": "OCR & traitement de documents",
    "partners.capabilities.data": "Ingénierie de Données",
    "partners.capabilities.data.1": "Pipelines ETL & automatisation",
    "partners.capabilities.data.2": "MySQL / PostgreSQL / MongoDB",
    "partners.capabilities.data.3": "Tableaux de bord analytiques",
    "partners.capabilities.data.4": "Scraping Selenium & FAISS",
    "partners.capabilities.devops": "DevOps & Déploiement",
    "partners.capabilities.devops.1": "Conteneurisation Docker",
    "partners.capabilities.devops.2": "VPS & hébergement cloud (AWS, GCP)",
    "partners.capabilities.devops.3": "CI/CD avec GitHub Actions",
    "partners.capabilities.devops.4": "Configuration reverse proxy Nginx",
    "partners.tech.title1": "Stack",
    "partners.tech.title2": "technique",
    "partners.projects.title1": "Travaux",
    "partners.projects.title2": "sélectionnés",
    "partners.projects.subtitle": "Projets réels livrés pour des clients et partenaires académiques — études de cas disponibles sur demande.",
    "partners.rate.title1": "Grille",
    "partners.rate.title2": "tarifaire",
    "partners.rate.col.engagement": "Prestation",
    "partners.rate.col.rate": "Tarif",
    "partners.rate.col.details": "Détails",
    "partners.rate.row1.name": "Développement full-stack",
    "partners.rate.row1.rate": "280 EUR/jour",
    "partners.rate.row1.details": "React, Laravel, Spring Boot",
    "partners.rate.row2.name": "Intégration IA & ML",
    "partners.rate.row2.rate": "350 EUR/jour",
    "partners.rate.row2.details": "PyTorch, scikit-learn, vision par ordinateur",
    "partners.rate.row3.name": "Forfait mensuel",
    "partners.rate.row3.rate": "Sur demande",
    "partners.rate.row3.details": "Minimum 10 jours/mois",
    "partners.rate.note": "Tarifs en EUR, hors TVA. Projet test disponible avant engagement.",
    "partners.how.title1": "Comment ça",
    "partners.how.title2": "marche",
    "partners.how.step1": "Vous me contactez",
    "partners.how.step1.desc": "Email ou LinkedIn — je réponds sous 24 h",
    "partners.how.step2": "Tâche test payée",
    "partners.how.step2.desc": "Essai payé de 1 à 2 jours pour évaluer la compatibilité",
    "partners.how.step3": "NDA + accord",
    "partners.how.step3.desc": "Signature du tarif et du NDA avant démarrage",
    "partners.how.step4": "Premier projet",
    "partners.how.step4.desc": "Je m'intègre à votre workflow et commence à livrer",
    "partners.contact.title1": "Parlons",
    "partners.contact.title2": "-en",
    "partners.contact.subtitle": "Prêt à commencer ? Contactez-moi et je vous réponds sous 24 heures avec une proposition sur mesure.",
    "partners.contact.email": "Email",
    "partners.contact.linkedin": "LinkedIn",
    "partners.contact.available": "Disponible à partir de",
    "partners.nav": "Partenaires",
    "partners.portfolio": "Portfolio",
    "partners.project.financiana.title": "Financiana",
    "partners.project.financiana.subtitle": "Plateforme d'Analyse Financière",
    "partners.project.financiana.desc": "Plateforme web avec analyse financière par IA, extraction OCR de documents et génération automatique de rapports pour les entreprises.",
    "partners.project.recruite.title": "Recruite",
    "partners.project.recruite.subtitle": "Plateforme de Recrutement",
    "partners.project.recruite.desc": "Workflow de recrutement de bout en bout avec évaluations automatisées, analytique temps réel et contrôle d'accès par rôle.",
    "partners.project.fastdev.title": "Fast Dev",
    "partners.project.fastdev.subtitle": "Solution Low-Code",
    "partners.project.fastdev.desc": "Plateforme low-code visuelle pour le développement rapide d'applications web avec génération de code assistée par IA et déploiements Docker.",
    "partners.project.autogradeai.title": "AutoGradeAI",
    "partners.project.autogradeai.subtitle": "Correction Automatique d'Examens",
    "partners.project.autogradeai.desc": "Correction d'examens par IA : extraction OCR, génération de réponses par LLM et scoring par similarité sémantique pour la notation automatisée.",
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
