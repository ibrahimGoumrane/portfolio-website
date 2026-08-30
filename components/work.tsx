"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, ui } from "@/lib/content";
import { Section, SectionHeading, StackList, StatusBadge } from "./primitives";

export function Work() {
  const { tr } = useLanguage();
  // The first study is open by default; the rest are progressive disclosure.
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id ?? null);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={tr(ui.sections.workEyebrow)}
        title={tr(ui.sections.work)}
        lede={tr(ui.sections.workLede)}
      />

      <div data-reveal-stagger="90" className="divide-y divide-border border-y border-border">
        {caseStudies.map((study, i) => {
          const isOpen = openId === study.id;
          const panelId = `case-${study.id}-panel`;
          const buttonId = `case-${study.id}-button`;

          return (
            <article
              key={study.id}
              className="reveal"
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : study.id)}
                  className="group flex w-full cursor-pointer items-start gap-5 py-7 text-left [touch-action:manipulation]"
                >
                  <span className="tnum hidden pt-1.5 font-mono text-xs text-muted-foreground sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.14em] text-primary-accent uppercase">
                        {study.client}
                      </span>
                      <StatusBadge status={study.status} />
                      <span className="font-mono text-xs text-muted-foreground">
                        {tr(study.period)}
                      </span>
                    </span>
                    <span className="mt-3 block max-w-[52ch] text-base leading-snug font-semibold text-balance transition-colors duration-200 group-hover:text-primary-accent sm:text-lg">
                      {tr(study.hook)}
                    </span>
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {tr(study.title)}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-9 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 group-hover:border-primary-accent/50 group-hover:text-primary-accent"
                  >
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-9 sm:pl-11"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { label: ui.theProblem, body: study.problem },
                    { label: ui.theApproach, body: study.approach },
                    { label: ui.theOutcome, body: study.outcome },
                  ].map((block, idx) => (
                    <div key={idx} className="border-t border-border pt-4">
                      <h4 className="font-mono text-[0.7rem] tracking-[0.16em] text-primary-accent uppercase">
                        {tr(block.label)}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                        {tr(block.body)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                    {tr(ui.stackLabel)}
                  </span>
                  <StackList items={study.stack} />
                </div>

                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  {tr(study.role)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
