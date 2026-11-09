"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import type { L } from "./content";
import type { Language } from "./routes";

export type { Language };

interface LanguageContextValue {
  language: Language;
  /** Resolve a bilingual string for the active language; plain strings pass through. */
  tr: (value: L | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

/**
 * The language comes from the URL (`/` or `/fr`), so each language is its
 * own prerendered page that search engines can index.
 */
export function LanguageProvider({
  language,
  children,
}: {
  language: Language;
  children: ReactNode;
}) {
  // The root layout is shared, so it always renders lang="en"; correct it here.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const tr = useCallback(
    (value: L | string) => (typeof value === "string" ? value : (value[language] ?? value.en)),
    [language]
  );

  const value = useMemo(() => ({ language, tr }), [language, tr]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside a LanguageProvider");
  return ctx;
}
