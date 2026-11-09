/**
 * Server-side page builders shared by the EN (`/`) and FR (`/fr`) routes,
 * so each route file only states its language.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Site } from "@/components/site";
import { Home } from "@/components/home";
import { CaseStudyPage } from "@/components/case-study-page";
import { seo, ui } from "./content";
import { caseDescription, getCase } from "./cases";
import { caseSlugs, casePath, homePath, type Language } from "./routes";
import { caseJsonLd, homeJsonLd, jsonLdScript, pageMetadata } from "./seo";

export function homeMetadata(lang: Language): Metadata {
  return pageMetadata({
    lang,
    title: seo.homeTitle[lang],
    description: seo.homeDescription[lang],
    paths: { en: homePath("en"), fr: homePath("fr") },
  });
}

export function HomeRoute({ lang }: { lang: Language }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(homeJsonLd(lang))} />
      <Site lang={lang}>
        <Home />
      </Site>
    </>
  );
}

export const caseStaticParams = () => caseSlugs.map((slug) => ({ slug }));

export function caseMetadata(lang: Language, slug: string): Metadata {
  const view = getCase(slug);
  if (!view) return {};
  return pageMetadata({
    lang,
    title: `${view.title[lang]} | Ibrahim Goumrane`,
    description: caseDescription(view, lang),
    paths: { en: casePath("en", slug), fr: casePath("fr", slug) },
    type: "article",
  });
}

export function CaseRoute({ lang, slug }: { lang: Language; slug: string }) {
  const view = getCase(slug);
  if (!view) notFound();

  const data = caseJsonLd({
    lang,
    title: view.title[lang],
    description: caseDescription(view, lang),
    path: casePath(lang, slug),
    keywords: view.stack,
    homeLabel: ui.home[lang],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(data)} />
      <Site lang={lang}>
        <CaseStudyPage slug={slug} />
      </Site>
    </>
  );
}
