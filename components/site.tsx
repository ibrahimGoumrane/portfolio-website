"use client";

import type { ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/content";
import type { Language } from "@/lib/routes";
import { Header } from "./header";
import { Footer } from "./footer";

/** Chrome shared by every page: skip link, header, footer and the language. */
export function Site({ lang, children }: { lang: Language; children: ReactNode }) {
  return (
    <LanguageProvider language={lang}>
      <Shell>{children}</Shell>
    </LanguageProvider>
  );
}

function Shell({ children }: { children: ReactNode }) {
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
        {children}
      </main>

      <Footer />
    </>
  );
}
