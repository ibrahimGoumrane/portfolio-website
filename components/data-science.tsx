"use client"

import { ProjectCard } from "./project-card"
import { useLanguage } from "@/lib/language-context"

const projects = [
  {
    id: 1,
    title: "Data Analysis & Visualization",
    description:
      "Comprehensive data analysis using SQL and Python. Created business intelligence dashboards with Power BI, KPI tracking, and advanced visualizations using Matplotlib and Seaborn.",
    image: "/data-visualization-dashboard.jpg",
    technologies: ["SQL", "Python", "Power BI", "Matplotlib", "Seaborn", "Pandas"],
    isVideo: false,
  },
  {
    id: 2,
    title: "Machine Learning Models",
    description:
      "End-to-end ML pipeline including regression, classification, and model optimization. Expertise in hyperparameter tuning, cross-validation, and performance metrics evaluation.",
    image: "/machine-learning-models.jpg",
    technologies: ["Scikit-learn", "TensorFlow", "PyTorch", "Python", "Pandas"],
    isVideo: false,
  },
  {
    id: 3,
    title: "Data Engineering & ETL",
    description:
      "Robust ETL/ELT pipelines for data extraction, transformation, and loading. Implemented with Apache Airflow for orchestration and BeautifulSoup/Selenium for web scraping.",
    image: "/data-pipeline-architecture.jpg",
    technologies: ["Apache Airflow", "BeautifulSoup", "Selenium", "Python", "SQL"],
    isVideo: false,
  },
]

export function DataScience() {
  const { t } = useLanguage()

  return (
    <section id="data" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("data.title")} <span className="text-accent">{t("data.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("data.description")}</p>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isSelected={false} onSelect={() => {}} />
          ))}
        </div>
      </div>
    </section>
  )
}
