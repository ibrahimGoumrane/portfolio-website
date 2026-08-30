"use client";

import { useLanguage } from "@/lib/language-context";
import { education, recognition, ui } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";

export function Education() {
  const { tr } = useLanguage();

  return (
    <Section id="education">
      <SectionHeading
        eyebrow={tr(ui.sections.educationEyebrow)}
        title={tr(ui.sections.education)}
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal-stagger className="space-y-6">
          {education.map((entry, i) => (
            <article
              key={entry.id}
              className="reveal rounded-xl border border-border bg-card p-6"
            >
              <div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{entry.school}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {tr(entry.schoolFull)}
                  </p>
                  <p className="mt-3 text-sm text-foreground/85">{tr(entry.degree)}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {tr(entry.period)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tr(entry.detail)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="reveal rounded-xl border border-border bg-card p-6"
        >
          <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {tr(ui.recognitionLabel)}
          </h3>
          <ul className="mt-6 space-y-5">
            {recognition.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-3 shrink-0 bg-accent"
                />
                <span className="text-sm leading-relaxed text-foreground/85">
                  {tr(item)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
