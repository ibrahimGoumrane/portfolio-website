import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Engineering Degree - AI & Computer Science",
      school: "École Nationale Supérieure d'Arts et Métiers (ENSAM)",
      location: "Casablanca, Morocco",
      period: "2021 - 2026",
      description:
        "Integrated preparatory cycle followed by engineering cycle specializing in Artificial Intelligence and Computer Science",
      color: "primary",
    },
    {
      degree: "Baccalauréat - Physical Sciences",
      school: "Groupe Scolaire La Pertinence",
      location: "Morocco",
      period: "2020 - 2021",
      description: "Scientific baccalaureate with focus on Physics and Mathematics",
      color: "secondary",
    },
  ]

  const certifications = [
    { name: "Agile Development & Scrum", issuer: "IBM", color: "primary" },
    { name: "Django Web Framework", issuer: "Meta", color: "secondary" },
    { name: "Back-End Development", issuer: "Meta", color: "accent" },
    { name: "Version Control (Git, GitHub)", issuer: "Meta", color: "primary" },
    { name: "The Complete React Course", issuer: "Udemy", color: "secondary" },
    { name: "Agile Project Management", issuer: "IBM", color: "accent" },
    { name: "Programming in Python", issuer: "Cisco", color: "primary" },
    { name: "GCP Digital Leader", issuer: "Google", color: "secondary" },
    { name: "AWS Academy Cloud Foundations", issuer: "AWS", color: "accent" },
  ]

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
      primary: {
        border: "border-primary",
        bg: "bg-primary/10",
        text: "text-primary",
        badge: "bg-primary text-primary-foreground",
      },
      secondary: {
        border: "border-secondary",
        bg: "bg-secondary/10",
        text: "text-secondary",
        badge: "bg-secondary text-secondary-foreground",
      },
      accent: {
        border: "border-accent",
        bg: "bg-accent/10",
        text: "text-accent",
        badge: "bg-accent text-accent-foreground",
      },
    }
    return colorMap[color] || colorMap.primary
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
      </div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {education.map((edu, index) => {
          const colors = getColorClass(edu.color)
          return (
            <div
              key={index}
              className={`bg-card border-2 ${colors.border} rounded-2xl p-6 hover:shadow-xl transition-all`}
            >
              <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                <GraduationCap className={`w-7 h-7 ${colors.text}`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>{edu.degree}</h3>
              <p className="font-semibold text-foreground mb-2">{edu.school}</p>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-3">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
              </div>
              <p className="text-foreground/70">{edu.description}</p>
            </div>
          )
        })}
      </div>

      {/* Certifications */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Professional Certifications</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const colors = getColorClass(cert.color)
            return (
              <div
                key={index}
                className={`p-4 rounded-xl ${colors.bg} border border-current/10 hover:scale-105 transition-all`}
              >
                <p className={`font-semibold ${colors.text}`}>{cert.name}</p>
                <p className="text-sm text-muted-foreground mt-1">by {cert.issuer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
