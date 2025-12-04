"use client"

import Link from "next/link"
import { Github, Linkedin, Download, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          IG
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-foreground/70 hover:text-primary transition">
            {t("nav.about")}
          </Link>
          <Link href="#skills" className="text-foreground/70 hover:text-primary transition">
            {t("nav.skills")}
          </Link>
          <Link href="#experience" className="text-foreground/70 hover:text-primary transition">
            {t("nav.experience")}
          </Link>
          <Link href="#software" className="text-foreground/70 hover:text-primary transition">
            {t("nav.projects")}
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-primary transition">
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition text-sm font-medium"
            aria-label="Toggle Language"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>
          <a
            href="/resume.pdf"
            download="Ibrahim_Goumrane_CV.pdf"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t("nav.downloadResume")}</span>
          </a>
          <a
            href="https://github.com/ibrahimgoumrane"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ibrahimgoumrane"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
