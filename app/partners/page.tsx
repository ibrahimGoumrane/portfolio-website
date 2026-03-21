"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Clock,
  ShieldCheck,
  Mail,
  Linkedin,
  ArrowLeft,
  ArrowRight,
  Code2,
  Cpu,
  BarChart3,
  Cloud,
  CheckCircle2,
  Search,
  Smartphone,
  Bot,
  Workflow,
  Server,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LanguageProvider, useLanguage } from "@/lib/language-context";

/* ── Easy-to-update constants ──────────────────────────────── */
const AVAILABILITY_DATE = "April 2026";
const LINKEDIN_URL = "https://www.linkedin.com/in/ibrahim-goumrane";
const EMAIL = "ibrahimgoumrane01@gmail.com";

/* ── Tech stack logos (devicons CDN) ───────────────────────── */
const TECH_STACK = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

/* ── Stats ─────────────────────────────────────────────────── */
const STATS_DATA = [
  { value: 5, suffix: "+", labelKey: "partners.stats.clients" },
  { value: 8, suffix: "+", labelKey: "partners.stats.projects" },
  { value: 3, suffix: "+", labelKey: "partners.stats.years" },
  { value: 4, suffix: "", labelKey: "partners.stats.stacks" },
  { value: 100, suffix: "%", labelKey: "partners.stats.whitelabel" },
];

/* ── Domain expertise ──────────────────────────────────────── */
const DOMAINS_DATA = [
  { icon: Search, titleKey: "partners.domains.webscraping", descKey: "partners.domains.webscraping.desc" },
  { icon: Smartphone, titleKey: "partners.domains.webmobile", descKey: "partners.domains.webmobile.desc" },
  { icon: Bot, titleKey: "partners.domains.aiml", descKey: "partners.domains.aiml.desc" },
  { icon: Workflow, titleKey: "partners.domains.automation", descKey: "partners.domains.automation.desc" },
  { icon: Cloud, titleKey: "partners.domains.cloud", descKey: "partners.domains.cloud.desc" },
  { icon: Server, titleKey: "partners.domains.systems", descKey: "partners.domains.systems.desc" },
];

/* ── Capability keys ───────────────────────────────────────── */
const CAPABILITIES_DATA = [
  { icon: Code2, titleKey: "partners.capabilities.fullstack", itemKeys: ["partners.capabilities.fullstack.1", "partners.capabilities.fullstack.2", "partners.capabilities.fullstack.3", "partners.capabilities.fullstack.4"] },
  { icon: Cpu, titleKey: "partners.capabilities.ai", itemKeys: ["partners.capabilities.ai.1", "partners.capabilities.ai.2", "partners.capabilities.ai.3", "partners.capabilities.ai.4"] },
  { icon: BarChart3, titleKey: "partners.capabilities.data", itemKeys: ["partners.capabilities.data.1", "partners.capabilities.data.2", "partners.capabilities.data.3", "partners.capabilities.data.4"] },
  { icon: Cloud, titleKey: "partners.capabilities.devops", itemKeys: ["partners.capabilities.devops.1", "partners.capabilities.devops.2", "partners.capabilities.devops.3", "partners.capabilities.devops.4"] },
];

/* ── Scroll-reveal hook ────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, className: `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}` };
}

/* ── Static stat display ───────────────────────────────────── */
function StatValue({ value, suffix }: { value: number; suffix: string }) {
  return <span>{value}{suffix}</span>;
}

/* ── Inner page (needs LanguageProvider) ────────────────────── */
function PartnersContent() {
  const { t, language, setLanguage } = useLanguage();

  const hero = useReveal();
  const whyUs = useReveal();
  const stats = useReveal();
  const domains = useReveal();
  const capabilities = useReveal();
  const techStack = useReveal();
  const rateCard = useReveal();
  const howItWorks = useReveal();
  const contact = useReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            IG
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition text-sm font-medium"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t("partners.back")}</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ─── 1. Hero ──────────────────────────────────────── */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div ref={hero.ref} className={hero.className}>
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
              {/* Left — text content */}
              <div>
                <Badge variant="outline" className="mb-6 text-sm px-4 py-1.5">
                  {t("partners.badge")}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                  {t("partners.hero.title1")}{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {t("partners.hero.title2")}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                  {t("partners.hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="#rate-card"
                    className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition text-center"
                  >
                    {t("partners.hero.rateCard")}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-center inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    {t("partners.hero.getInTouch")}
                  </a>
                </div>
                {/* Quick trust signals */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {t("partners.hero.nda")}
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {t("partners.hero.cicd")}
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {t("partners.hero.testTask")}
                  </span>
                </div>
              </div>

              {/* Right — profile image */}
              <div className="hidden md:block">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                  <Image
                    src="/main.png"
                    alt="Ibrahim Goumrane"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. Stats ─────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div ref={stats.ref} className={`max-w-6xl mx-auto ${stats.className}`}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {STATS_DATA.map((stat) => (
                <div key={stat.labelKey} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <StatValue value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. Why work with us ──────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div ref={whyUs.ref} className={whyUs.className}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.whyUs.title1")} <span className="text-primary">{t("partners.whyUs.title2")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("partners.whyUs.card1.title")}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{t("partners.whyUs.card1.desc")}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("partners.whyUs.card2.title")}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{t("partners.whyUs.card2.desc")}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t("partners.whyUs.card3.title")}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{t("partners.whyUs.card3.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3b. Domain expertise ─────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div ref={domains.ref} className={`max-w-6xl mx-auto ${domains.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.domains.title1")} <span className="text-primary">{t("partners.domains.title2")}</span>
            </h2>
            <p className="text-muted-foreground mb-4 max-w-xl">{t("partners.domains.subtitle")}</p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="grid md:grid-cols-3 gap-6">
              {DOMAINS_DATA.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div key={domain.titleKey} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{t(domain.titleKey)}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{t(domain.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 4. Capabilities ──────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div ref={capabilities.ref} className={`max-w-6xl mx-auto ${capabilities.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.capabilities.title1")} <span className="text-primary">{t("partners.capabilities.title2")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="grid md:grid-cols-2 gap-8">
              {CAPABILITIES_DATA.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.titleKey} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground pt-2">{t(cap.titleKey)}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cap.itemKeys.map((key) => (
                        <li key={key} className="flex items-center gap-3 text-sm text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 5. Tech stack ────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div ref={techStack.ref} className={techStack.className}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.tech.title1")} <span className="text-primary">{t("partners.tech.title2")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-3 hover:border-primary/50 hover:shadow-sm transition"
                >
                  <Image src={tech.logo} alt={tech.name} width={40} height={40} className="object-contain" />
                  <span className="text-xs font-medium text-muted-foreground text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ─── 6. Rate card ─────────────────────────────────── */}
        <section id="rate-card" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div ref={rateCard.ref} className={rateCard.className}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.rate.title1")} <span className="text-primary">{t("partners.rate.title2")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-6 py-4 text-base">{t("partners.rate.col.engagement")}</TableHead>
                    <TableHead className="px-6 py-4 text-base">{t("partners.rate.col.rate")}</TableHead>
                    <TableHead className="px-6 py-4 text-base">{t("partners.rate.col.details")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="px-6 py-4 font-medium">{t("partners.rate.row1.name")}</TableCell>
                    <TableCell className="px-6 py-4">{t("partners.rate.row1.rate")}</TableCell>
                    <TableCell className="px-6 py-4 text-muted-foreground">{t("partners.rate.row1.details")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-6 py-4 font-medium">{t("partners.rate.row2.name")}</TableCell>
                    <TableCell className="px-6 py-4">{t("partners.rate.row2.rate")}</TableCell>
                    <TableCell className="px-6 py-4 text-muted-foreground">{t("partners.rate.row2.details")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-6 py-4 font-medium">{t("partners.rate.row3.name")}</TableCell>
                    <TableCell className="px-6 py-4">{t("partners.rate.row3.rate")}</TableCell>
                    <TableCell className="px-6 py-4 text-muted-foreground">{t("partners.rate.row3.details")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">{t("partners.rate.note")}</p>
          </div>
        </section>

        {/* ─── 7. How it works ──────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div ref={howItWorks.ref} className={`max-w-6xl mx-auto ${howItWorks.className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("partners.how.title1")} <span className="text-primary">{t("partners.how.title2")}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {([
                { step: 1, labelKey: "partners.how.step1", descKey: "partners.how.step1.desc" },
                { step: 2, labelKey: "partners.how.step2", descKey: "partners.how.step2.desc" },
                { step: 3, labelKey: "partners.how.step3", descKey: "partners.how.step3.desc" },
                { step: 4, labelKey: "partners.how.step4", descKey: "partners.how.step4.desc" },
              ] as const).map(({ step, labelKey, descKey }, i) => (
                <div key={step} className="relative flex flex-col items-center text-center">
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] items-center">
                      <div className="flex-1 border-t-2 border-border" />
                      <ArrowRight className="w-4 h-4 text-border -ml-1" />
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                    {step}
                  </div>
                  <p className="mt-3 text-sm font-bold text-foreground max-w-[140px]">{t(labelKey)}</p>
                  <p className="mt-1 text-xs text-muted-foreground max-w-[160px]">{t(descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 8. Contact block ─────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div ref={contact.ref} className={contact.className}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              {t("partners.contact.title1")} <span className="text-primary">{t("partners.contact.title2")}</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("partners.contact.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                <Mail className="w-4 h-4" />
                {t("partners.contact.email")}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
              >
                <Linkedin className="w-4 h-4" />
                {t("partners.contact.linkedin")}
              </a>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-1">
              {t("partners.contact.available")} {AVAILABILITY_DATE}
            </Badge>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ibrahim Goumrane</p>
          <Link href="/" className="hover:text-primary transition">
            {t("partners.portfolio")}
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ── Wrapper with LanguageProvider ──────────────────────────── */
export default function PartnersPage() {
  return (
    <LanguageProvider>
      <PartnersContent />
    </LanguageProvider>
  );
}
