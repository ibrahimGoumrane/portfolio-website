"use client"

import { MapPin, Mail, Phone, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          {t("about.title")} <span className="text-primary">{t("about.me")}</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">{t("about.role")}</h3>
          <p className="text-foreground/80 leading-relaxed mb-6">{t("about.description1")}</p>
          <p className="text-foreground/80 leading-relaxed mb-6">{t("about.description2")}</p>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-foreground mb-4">{t("about.languages")}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div>
                  <p className="font-semibold text-foreground">{t("about.arabic")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.native")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div>
                  <p className="font-semibold text-foreground">{t("about.french")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.fluent")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div>
                  <p className="font-semibold text-foreground">{t("about.english")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.professional")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t("hero.location")}</h4>
                <p className="text-foreground/70">Casablanca, Morocco</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t("about.email")}</h4>
                <a href="mailto:ibrahimgoumrane01@gmail.com" className="text-secondary hover:underline">
                  ibrahimgoumrane01@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t("about.phone")}</h4>
                <a href="tel:+212776209303" className="text-accent hover:underline">
                  +212 776 209 303
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">{t("about.availability")}</h4>
                <p className="text-foreground/70">{t("about.yearsOld")}</p>
                <p className="text-foreground/70">{t("about.availableFrom")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
