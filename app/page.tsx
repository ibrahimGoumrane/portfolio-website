"use client";

import { LanguageProvider, useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/content";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Toolbox } from "@/components/stack";
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

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-cobalt px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        {tr(ui.skipToContent)}
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="min-h-dvh outline-none">
        <Hero />
        <Work />
        <Experience />
        <Projects />
        <Toolbox />
      </main>

      <Footer />
    </>
  );
}
