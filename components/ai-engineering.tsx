"use client";

import { ProjectCard } from "./project-card";
import { useLanguage } from "@/lib/language-context";

const projects = [
  {
    id: 1,
    title: "RAG-Engine — Retrieval-Augmented Generation",
    description:
      "Fully modular, scalable RAG system for extracting knowledge from entire websites. Features recursive multi-page scraping with JS rendering, hybrid ranking (semantic + TF-IDF), FAISS vector search, and MCP server integration.",
    image: "/rag-retrieval-augmented-generation-ai-system.jpg",
    technologies: [
      "Python",
      "OpenAI API",
      "FAISS",
      "Sentence Transformers",
      "Playwright",
      "AsyncIO",
    ],
    date: "07/2025 - 08/2025",
    role: "AI Engineer",
    isVideo: false,
    github: "https://github.com/ibrahimGoumrane/DataProject",
  },
  {
    id: 3,
    title: "FaceAttendance.AI",
    description:
      "Automated school attendance tracking using facial recognition. Implements real-time face detection and verification with Redis caching for optimal performance in production environments.",
    image: "/facial-recognition.jpg",
    technologies: [
      "Django",
      "face_recognition",
      "Redis",
      "Next.js",
      "Docker",
      "Tailwind",
    ],
    date: "03/2025 - 06/2025",
    role: "AI Engineer",
    isVideo: false,
    github: "https://github.com/ibrahimGoumrane/classroom_absence_management",
  },
  {
    id: 4,
    title: "OCR Model — Deep Learning Research",
    description:
      "Advanced OCR model specialized in long-sequence text detection using CNN-LSTM architecture. Research focused on CTC loss challenges, alignment strategies, and optimization techniques. Published on Kaggle.",
    image: "/ocr-text-recognition.jpg",
    technologies: ["PyTorch", "CNN-LSTM", "CTC Loss", "ResNet50", "Kaggle"],
    date: "11/2024 - 02/2025",
    role: "ML Researcher",
    isVideo: false,
    kaggle: "https://www.kaggle.com/code/ibrahimgoumrane/notebook30b116eaea",
  },
];

export function AIEngineering() {
  const { t } = useLanguage();

  return (
    <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("ai.title")}{" "}
            <span className="text-secondary">{t("ai.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("ai.description")}
          </p>
          <div className="h-1 w-20 bg-linear-to-r from-secondary to-accent rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={false}
              onSelect={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
