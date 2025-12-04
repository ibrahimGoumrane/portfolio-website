"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      title: "Development & Software Engineering",
      color: "primary",
      skills: [
        {
          name: "JavaScript",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          level: 92,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        { name: "Java", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "PHP", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "C", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        {
          name: "React",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Laravel",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Spring Boot",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "Django",
          level: 75,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Express.js",
          level: 88,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Machine Learning & AI",
      color: "secondary",
      skills: [
        {
          name: "PyTorch",
          level: 88,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Scikit-learn",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
        },
        {
          name: "Pandas",
          level: 92,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
          name: "NumPy",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        { name: "YOLO", level: 80, logo: "/yolo-object-detection-logo.jpg" },
        { name: "Face Recognition", level: 85, logo: "/face-recognition-ai-logo.jpg" },
        { name: "NLP", level: 82, logo: "/nlp-natural-language-processing.jpg" },
        { name: "Computer Vision", level: 85, logo: "/computer-vision-ai.jpg" },
        { name: "CNN/LSTM", level: 80, logo: "/neural-network-deep-learning.jpg" },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      color: "accent",
      skills: [
        {
          name: "MySQL",
          level: 92,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          level: 88,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        {
          name: "BigQuery",
          level: 78,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
        { name: "Power BI", level: 75, logo: "/power-bi-microsoft-logo.jpg" },
        {
          name: "Apache Airflow",
          level: 78,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
        },
        {
          name: "Matplotlib",
          level: 88,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        },
        {
          name: "Selenium",
          level: 82,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        },
        { name: "FAISS", level: 75, logo: "/faiss-vector-database.jpg" },
        { name: "ETL Pipelines", level: 85, logo: "/etl-data-pipeline-logo.jpg" },
      ],
    },
    {
      title: "DevOps & Cloud Infrastructure",
      color: "chart-4",
      skills: [
        { name: "Git", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        {
          name: "GitHub",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Ubuntu/Linux",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
        },
        {
          name: "Alma Linux VPS",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "AWS EC2",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "AWS EKS",
          level: 75,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
        },
        {
          name: "GCP",
          level: 78,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
        {
          name: "DigitalOcean",
          level: 82,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
        },
        {
          name: "Nginx",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        { name: "CI/CD Pipelines", level: 82, logo: "/ci-cd-pipeline.png" },
      ],
    },
  ]

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % skillCategories.length)
  }

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; bar: string }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", bar: "bg-gradient-to-r from-primary to-primary/70" },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        bar: "bg-gradient-to-r from-secondary to-secondary/70",
      },
      accent: { bg: "bg-accent/10", text: "text-accent", bar: "bg-gradient-to-r from-accent to-accent/70" },
      "chart-4": { bg: "bg-chart-4/10", text: "text-chart-4", bar: "bg-gradient-to-r from-chart-4 to-chart-4/70" },
    }
    return colorMap[color] || colorMap.primary
  }

  const category = skillCategories[activeCategory]
  const colors = getColorClasses(category.color)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
      </div>

      {/* Category Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevCategory}
          className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                idx === activeCategory
                  ? `${getColorClasses(cat.color).bg} ${getColorClasses(cat.color).text} border-2 border-current`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <button
          onClick={nextCategory}
          className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Skills List with Sliding Animation */}
      <div className="bg-card border border-border rounded-2xl p-8 overflow-hidden">
        <h3 className={`text-2xl font-bold mb-6 ${colors.text}`}>{category.title}</h3>

        <div className="space-y-4 transition-all duration-500 ease-in-out" style={{ transform: `translateX(0)` }}>
          {category.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Logo */}
              <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Skill Name */}
              <span className="font-semibold w-32 flex-shrink-0">{skill.name}</span>

              {/* Progress Bar */}
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Level Percentage */}
              <span className={`font-bold w-12 text-right ${colors.text}`}>{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {skillCategories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeCategory ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
