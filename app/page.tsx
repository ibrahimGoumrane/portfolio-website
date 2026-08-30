"use client";

import { useReveal } from "@/hooks/use-reveal";
import { LanguageProvider, useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/content";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Positioning } from "@/components/positioning";
import { Flagship } from "@/components/flagship";
import { Now } from "@/components/now";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Stack } from "@/components/stack";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

function Page() {
  const { tr } = useLanguage();
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        {tr(ui.skipToContent)}
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="min-h-dvh outline-none">
        <Hero />
        <Positioning />
        <Flagship />
        <Now />
        <Work />
        <Experience />
        <Projects />
        <Stack />
        <Education />
      </main>

      <Footer />
    </>
  );
}
