"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">{t("hero.contact")}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:ibrahimgoumrane01@gmail.com" className="hover:text-primary transition">
                  ibrahimgoumrane01@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+212776209303" className="hover:text-primary transition">
                  +212 776 209 303
                </a>
              </li>
              <li>Casablanca, Morocco</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("nav.skills")}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Full Stack Development</li>
              <li>AI & Machine Learning</li>
              <li>Data Engineering</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Available For</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Freelance Projects</li>
              <li>Full-Time Roles</li>
              <li>Consulting</li>
              <li>Startups</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">© 2025 Ibrahim Goumrane. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/ibrahimgoumrane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ibrahimgoumrane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
