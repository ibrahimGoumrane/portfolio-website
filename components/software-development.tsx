"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    title: "Financiana — Financial Analysis Platform",
    description:
      "World-class financial analysis platform enabling businesses to analyze financial health, study performance indicators, and compare metrics with sector companies. Features automatic Word report generation with calculated KPIs and expert recommendations.",
    image: "/financial-dashboard-analytics-platform.jpg",
    videoUrl: "/videos/financiana-demo.mp4",
    technologies: ["Next.js", "Laravel", "Python", "OCR", "MySQL", "VPS", "Nginx"],
    date: "06/2025 - 09/2025",
    role: "Full-Stack Developer (Freelance)",
    isVideo: true,
  },
  {
    id: 2,
    title: "Recruite — Recruitment Platform",
    description:
      "End-to-end recruitment management platform with unified workflow from applications to interviews. Features automated assessments, role-based access, real-time analytics, CV builder, and career coaching services.",
    image: "/recruitment-hiring-platform-dashboard.jpg",
    videoUrl: "/videos/recruite-demo.mp4",
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "WebSockets", "JWT", "VPS"],
    date: "06/2025 - 11/2025",
    role: "Technical Lead + Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 3,
    title: "ArtiShare — Social Blogging Platform",
    description:
      "Medium-inspired blogging platform allowing users to create, publish, and discover articles. Built with modern UI and complete user authentication system in just two weeks.",
    image: "/blog-article-publishing-platform-medium-style.jpg",
    videoUrl: "/videos/artishare-demo.mp4",
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    date: "Academic Project",
    role: "Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 4,
    title: "Rehabilitation Management CMS",
    description:
      "Specialized CMS for rehabilitation agencies inspired by personal scoliosis recovery. Features exercise programs by condition, day-by-day planning by age group, patient self-management dashboard, and initial assessments.",
    image: "/healthcare-patient-management-rehabilitation-syste.jpg",
    videoUrl: "/videos/rehab-cms-demo.mp4",
    technologies: ["React", "TypeScript", "Express.js", "MySQL", "Prisma", "MUI"],
    date: "10/2024 - 11/2024",
    role: "Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 5,
    title: "KanBanPro — Project Management",
    description:
      "Jira-like platform for project and task management with Kanban boards, collaborative workflow, and real-time chat. Supports multi-user management per project.",
    image: "/kanban-project-management-jira-board.jpg",
    videoUrl: "/videos/kanbanpro-demo.mp4",
    technologies: ["React", "Express.js", "Material UI", "Tailwind", "WebSocket"],
    date: "06/2024 - 08/2024",
    role: "Intern Developer",
    isVideo: true,
  },
]

export function SoftwareDevelopment() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="software" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("software.title")} <span className="text-primary">{t("software.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("software.description")}</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject === project.id}
              onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
