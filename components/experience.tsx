import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer & Project Manager",
      company: "Financiana",
      type: "Freelance",
      location: "Remote",
      date: "June 2025 - September 2025",
      color: "primary",
      achievements: [
        "Built complete web platform with Next.js/Laravel integrating AI-powered financial analysis and OCR",
        "Implemented automatic report generation measuring financial quality for companies",
        "Set up CI/CD pipeline via GitHub with MySQL database",
      ],
      technologies: ["Next.js", "Laravel", "MySQL", "AI", "OCR", "GitHub Actions"],
    },
    {
      title: "Full Stack Developer & Project Lead",
      company: "Recruitment Platform - EHC",
      type: "Contract",
      location: "Morocco",
      date: "June 2025 - November 2025",
      color: "secondary",
      achievements: [
        "Developed recruitment web solution with React.js/Spring Boot",
        "Managed VPS deployment and led dynamic development team",
        "Coordinated with client to deliver under tight deadlines",
      ],
      technologies: ["React.js", "Spring Boot", "VPS", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Software Development Intern",
      company: "KanBanPro - Numeric Way",
      type: "Internship",
      location: "Casablanca, Morocco",
      date: "June 2024 - August 2024",
      color: "accent",
      achievements: [
        "Created Jira-like platform for project management with Kanban boards",
        "Implemented real-time collaborative workflow and chat functionality",
        "Developed multi-user management system per project",
      ],
      technologies: ["Express.js", "React", "Material UI", "Tailwind CSS", "WebSockets"],
    },
  ]

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
      primary: {
        border: "border-l-primary",
        bg: "bg-primary/10",
        text: "text-primary",
        badge: "bg-primary text-primary-foreground",
      },
      secondary: {
        border: "border-l-secondary",
        bg: "bg-secondary/10",
        text: "text-secondary",
        badge: "bg-secondary text-secondary-foreground",
      },
      accent: {
        border: "border-l-accent",
        bg: "bg-accent/10",
        text: "text-accent",
        badge: "bg-accent text-accent-foreground",
      },
    }
    return colorMap[color] || colorMap.primary
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-muted/30">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClass(exp.color)
            return (
              <div key={index} className="relative md:pl-20">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full ${colors.badge} border-4 border-background hidden md:block`}
                />

                <div
                  className={`bg-card border-l-4 ${colors.border} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-bold ${colors.text}`}>{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={`mt-2 w-2 h-2 rounded-full ${colors.badge} flex-shrink-0`} />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border border-current/20`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
