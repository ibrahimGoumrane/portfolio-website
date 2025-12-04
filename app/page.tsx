"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { SoftwareDevelopment } from "@/components/software-development"
import { AIEngineering } from "@/components/ai-engineering"
import { DataScience } from "@/components/data-science"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <SoftwareDevelopment />
          <AIEngineering />
          <DataScience />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
