/**
 * One shape for every case study page. The featured OCP project carries a
 * pipeline and design decisions; client studies may carry extra sections.
 */
import { caseStudies, flagship, type Domain, type L, type Status } from "./content";
import type { Language } from "./routes";

export interface CaseView {
  slug: string;
  domain: Domain;
  client: string | L;
  clientNote?: L;
  role: L;
  period: L;
  status: Status;
  title: L;
  hook: L;
  problem: L;
  approach: L;
  outcome: L;
  stack: string[];
  sections?: { title: L; points: L[] }[];
  pipeline?: typeof flagship.pipeline;
  decisions?: typeof flagship.decisions;
}

export function getCase(slug: string): CaseView | undefined {
  if (slug === flagship.id) {
    return {
      slug,
      domain: "agents",
      client: flagship.client,
      clientNote: flagship.clientNote,
      role: flagship.role,
      period: flagship.period,
      status: "live",
      title: flagship.title,
      hook: flagship.hook,
      problem: flagship.problem,
      approach: flagship.approach,
      outcome: flagship.outcome,
      stack: flagship.stack,
      pipeline: flagship.pipeline,
      decisions: flagship.decisions,
    };
  }
  const study = caseStudies.find((c) => c.id === slug);
  if (!study) return undefined;
  return { ...study, slug: study.id };
}

/** A search-result description: the hook, cut to about 160 characters. */
export function caseDescription(view: CaseView, lang: Language) {
  const text = `${view.hook[lang]} ${view.problem[lang]}`;
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).replace(/\s+\S*$/, "")}…`;
}
