"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { useLanguage } from "@/lib/language-context";

const projects = [
  {
    id: 1,
    title: "Financiana — Financial Analysis Platform",
    description:
      "World-class financial analysis platform enabling businesses to analyze financial health, study performance indicators, and compare metrics with sector companies. Features automatic Word report generation with calculated KPIs and expert recommendations.",
    image: "/photo/financiana.png",
    videoUrl: "/video/financiana.mp4",
    technologies: [
      "Next.js",
      "Laravel",
      "Python",
      "OCR",
      "MySQL",
      "VPS",
      "Nginx",
    ],
    date: "06/2025 - 09/2025",
    role: "Full-Stack Developer (Freelance)",
    isVideo: true,
  },
  {
    id: 2,
    title: "Recruite — Recruitment Platform",
    description:
      "End-to-end recruitment management platform with unified workflow from applications to interviews. Features automated assessments, role-based access, real-time analytics, CV builder, and career coaching services.",
    image: "/photo/recruite.png",
    videoUrl: "/video/recruite.mp4",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "MySQL",
      "WebSockets",
      "JWT",
      "VPS",
    ],
    date: "06/2025 - 11/2025",
    role: "Technical Lead + Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 3,
    title: "ArtiShare — Social Blogging Platform",
    description:
      "Medium-inspired blogging platform allowing users to create, publish, and discover articles. Built with modern UI and complete user authentication system in just two weeks.",
    image: "/photo/artishare.png",
    videoUrl: "/video/artishare.mp4",
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    date: "Academic Project",
    role: "Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 4,
    title: "Fast Dev - Low Code Solution",
    description:
      "A low-code platform that enables rapid web application development through a visual interface. Users can design, customize, and deploy applications quickly without extensive coding knowledge. Ideal for startups and businesses seeking efficient development solutions .",
    image: "/photo/fastdev.png",
    videoUrl: "/video/fastdev.mp4",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Gemini 3.5 API",
      "Spring Security",
      "Quartz",
      "Git and Docker SDK integration",
      "MySQL",
    ],
    date: "10/2024 - 11/2024",
    role: "Full-Stack Developer",
    isVideo: true,
  },
  {
    id: 5,
    title: "AutoGradeAI — Automated Exam Correction",
    description:
      "Presented at AGIOS ENSAM, this system automates the full exam correction workflow. Features automatic exam generation, OCR-based question extraction, LLM model answer generation, and semantic similarity scoring.",
    image: "/photo/autogradeai.png",
    videoUrl: "/video/autogradeai.mp4",
    technologies: [
      "Django REST",
      "OCR/Tesseract",
      "OpenAI API",
      "Sentence Transformers",
      "SQLite",
    ],
    date: "Academic Project",
    role: "AI Engineer + Full-Stack Developer",
    isVideo: true,
  },
];

export function SoftwareDevelopment() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section
      id="software"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("software.title")}{" "}
            <span className="text-primary">{t("software.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("software.description")}
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-primary to-secondary rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={selectedProject === project.id}
              onSelect={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
