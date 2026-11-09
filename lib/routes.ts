/**
 * URL scheme. English is the default at the root, French lives under /fr,
 * and each case study has its own page so search engines can index it.
 * Paths end in "/" to match `trailingSlash: true` in next.config.mjs.
 */
import { caseStudies, flagship } from "./content";
import { articles } from "./articles";

export type Language = "en" | "fr";

export const languages: Language[] = ["en", "fr"];

export const SITE_URL = "https://www.ibrahimgoumrane.dev";

/** Every case study slug, the featured OCP project first. */
export const caseSlugs: string[] = [flagship.id, ...caseStudies.map((c) => c.id)];

/** Every article slug. */
export const articleSlugs: string[] = articles.map((a) => a.slug);

export function articlePath(lang: Language, slug: string) {
  return `${homePath(lang)}articles/${slug}/`;
}

export function homePath(lang: Language) {
  return lang === "fr" ? "/fr/" : "/";
}

export function casePath(lang: Language, slug: string) {
  return `${homePath(lang)}work/${slug}/`;
}

/** The same page in the other language. */
export function switchLanguagePath(pathname: string, to: Language) {
  const bare = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
  const withSlash = bare.endsWith("/") ? bare : `${bare}/`;
  return to === "fr" ? `/fr${withSlash}` : withSlash;
}

export const absolute = (path: string) => `${SITE_URL}${path}`;
