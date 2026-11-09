"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, flagship, ui } from "@/lib/content";
import { casePath } from "@/lib/routes";
import { DomainTag, Section, SectionHeading, StackList, StatusBadge, domainStyle } from "./primitives";

export function Work() {
  const { tr } = useLanguage();

  return (
    <Section id="work">
      <SectionHeading title={tr(ui.sections.work)} lede={tr(ui.sections.workLede)} />
      <Featured />
      <CaseList />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Featured: the OCP graduation project                                */
/* ------------------------------------------------------------------ */

/** Link to a case study's own page. */
export function CaseLink({ slug, title }: { slug: string; title: string }) {
  const { language, tr } = useLanguage();
  return (
    <Link
      href={casePath(language, slug)}
      className="inline-flex min-h-11 items-center rounded-lg bg-ink px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-cobalt"
    >
      {tr(ui.readCaseStudy)}
      <span className="sr-only">: {title}</span>
    </Link>
  );
}

function Featured() {
  const { tr } = useLanguage();
  const s = domainStyle.agents;

  return (
    <article className="overflow-hidden rounded-2xl border-2 border-ink">
      <div className={cn("px-5 py-6 sm:px-8 sm:py-8", s.tint)}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">
            {tr(ui.featured)}
          </span>
          <DomainTag domain="agents" />
          <StatusBadge status="live" />
        </div>
        <h3 className="wide mt-5 max-w-[26ch] text-2xl leading-[1.1] font-extrabold text-balance sm:text-3xl">
          {tr(flagship.title)}
        </h3>
        <p className="mt-3 text-sm text-ink-soft">
          <span className="font-semibold text-ink">{flagship.client}</span>, {tr(flagship.role)},{" "}
          {tr(flagship.period)}. {tr(flagship.clientNote)}
        </p>
      </div>

      <div className="grid gap-px bg-rule md:grid-cols-3">
        {[
          { label: ui.theProblem, body: flagship.problem },
          { label: ui.theApproach, body: flagship.approach },
          { label: ui.theOutcome, body: flagship.outcome },
        ].map((block, i) => (
          <div key={i} className="bg-paper px-5 py-5 sm:px-8 md:px-6">
            <h4 className={cn("text-sm font-bold", s.ink)}>{tr(block.label)}</h4>
            <p className="mt-2 text-sm leading-relaxed">{tr(block.body)}</p>
          </div>
        ))}
      </div>

      {/* The pipeline is a real sequence, so it is numbered */}
      <div className="border-t border-rule px-5 py-6 sm:px-8">
        <h4 className="text-sm font-bold">{tr(ui.architecture)}</h4>
        <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {flagship.pipeline.map((node) => (
            <li key={node.step} className="rounded-lg border border-rule bg-paper p-3">
              <span className={cn("tnum text-xs font-bold", s.ink)}>{Number(node.step)}</span>
              <p className="mt-1 text-sm font-semibold">{tr(node.label)}</p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">{tr(node.detail)}</p>
            </li>
          ))}
        </ol>

        <details className="group mt-6 rounded-lg border border-rule">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            {tr(ui.readDecisions)}
            <Plus className="size-4 group-open:hidden" aria-hidden="true" />
            <Minus className="hidden size-4 group-open:block" aria-hidden="true" />
          </summary>
          <div className="grid gap-5 border-t border-rule px-4 py-5 md:grid-cols-3">
            {flagship.decisions.map((decision, i) => (
              <div key={i}>
                <p className="text-sm font-bold text-balance">{tr(decision.title)}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tr(decision.body)}</p>
              </div>
            ))}
          </div>
        </details>

        <div className="mt-5">
          <h4 className="sr-only">{tr(ui.stackLabel)}</h4>
          <StackList items={flagship.stack} />
        </div>

        <div className="mt-6">
          <CaseLink slug={flagship.id} title={tr(flagship.title)} />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Client case studies, as an accordion                                */
/* ------------------------------------------------------------------ */

function CaseList() {
  const { tr } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-8 space-y-3">
      {caseStudies.map((study) => {
        const isOpen = openId === study.id;
        const panelId = `case-${study.id}-panel`;
        const buttonId = `case-${study.id}-button`;
        const s = domainStyle[study.domain];

        return (
          <article
            key={study.id}
            className={cn(
              "overflow-hidden rounded-xl border-2 border-l-8 bg-paper transition-colors duration-200",
              s.border,
              isOpen ? "" : "border-t-rule border-r-rule border-b-rule"
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : study.id)}
                className="group flex w-full cursor-pointer items-start gap-4 px-4 py-5 text-left sm:px-6 [touch-action:manipulation]"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold">{tr(study.client)}</span>
                    <DomainTag domain={study.domain} />
                    <StatusBadge status={study.status} />
                    <span className="text-xs text-ink-soft">{tr(study.period)}</span>
                  </span>
                  <span className="semi-wide mt-3 block max-w-[60ch] text-lg leading-snug font-bold text-balance">
                    {tr(study.hook)}
                  </span>
                  <span className="mt-1.5 block text-sm text-ink-soft">{tr(study.title)}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-200",
                    isOpen ? cn(s.fill, s.onFill) : "bg-muted text-ink group-hover:bg-ink group-hover:text-white"
                  )}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-6 sm:px-6"
            >
              <div className="grid gap-5 border-t border-rule pt-5 md:grid-cols-3">
                {[
                  { label: ui.theProblem, body: study.problem },
                  { label: ui.theApproach, body: study.approach },
                  { label: ui.theOutcome, body: study.outcome },
                ].map((block, idx) => (
                  <div key={idx}>
                    <h4 className={cn("text-sm font-bold", s.ink)}>{tr(block.label)}</h4>
                    <p className="mt-2 text-sm leading-relaxed">{tr(block.body)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                <h4 className="sr-only">{tr(ui.stackLabel)}</h4>
                <StackList items={study.stack} />
                <p className="text-xs text-ink-soft">{tr(study.role)}</p>
              </div>
              <div className="mt-5">
                <CaseLink slug={study.id} title={tr(study.title)} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
