"use client"

import { useState, useRef } from "react"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    videoUrl?: string
    technologies: string[]
    date?: string
    role?: string
    isVideo?: boolean
    github?: string
    kaggle?: string
  }
  isSelected: boolean
  onSelect: () => void
}

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLanguage()

  const handleClick = () => {
    if (project.isVideo) {
      onSelect()
    } else if (project.kaggle) {
      window.open(project.kaggle, "_blank")
    } else if (project.github) {
      window.open(project.github, "_blank")
    }
  }

  return (
    <>
      <div className="group h-full">
        <div
          className="relative overflow-hidden rounded-xl bg-card border border-border h-full flex flex-col transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              } flex items-center justify-center`}
            >
              {project.isVideo && (
                <div className="text-center transform transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border-2 border-white/40">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-bold">{t("software.watchDemo")}</p>
                  <p className="text-white/80 text-sm mt-1">See the project in action</p>
                </div>
              )}
              {!project.isVideo && project.kaggle && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border-2 border-white/40">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.358z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-bold">View on Kaggle</p>
                </div>
              )}
              {!project.isVideo && !project.kaggle && project.github && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border-2 border-white/40">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-lg font-bold">View on GitHub</p>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition">
              {project.title}
            </h3>
            {project.role && (
              <p className="text-xs text-primary font-medium mb-2 bg-primary/10 px-2 py-1 rounded-full w-fit">
                {project.role}
              </p>
            )}
            {project.date && <p className="text-xs text-muted-foreground mb-3">{project.date}</p>}
            <p className="text-foreground/70 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs rounded-full font-medium border ${
                    index % 3 === 0
                      ? "bg-primary/15 text-primary border-primary/30"
                      : index % 3 === 1
                        ? "bg-secondary/15 text-secondary border-secondary/30"
                        : "bg-accent/15 text-accent border-accent/30"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {project.isVideo && isSelected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 p-4" onClick={onSelect}>
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-primary/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onSelect}
              className="absolute top-4 right-4 z-10 p-3 bg-primary hover:bg-primary/80 rounded-full transition"
            >
              <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video ref={videoRef} src={project.videoUrl} controls autoPlay className="w-full h-full object-contain">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
