"use client";

import { useLanguage } from "@/lib/language-context";
import { roles, ui } from "@/lib/content";
import { DomainTag, Section, SectionHeading, domainStyle } from "./primitives";

export function Experience() {
  const { tr } = useLanguage();

  return (
    <Section id="experience" bleed="graph-paper border-y border-rule">
      <SectionHeading title={tr(ui.sections.experience)} lede={tr(ui.sections.experienceLede)} />

      <ol className="overflow-hidden rounded-2xl border-2 border-ink bg-paper">
        {roles.map((role) => {
          const s = domainStyle[role.domain];
          return (
            <li
              key={role.id}
              className="grid gap-x-8 gap-y-2 border-b border-rule px-5 py-6 last:border-b-0 sm:px-8 md:grid-cols-[11rem_1fr]"
            >
              <div className="flex items-center gap-2.5 md:block">
                <p className="tnum text-sm font-semibold">{tr(role.period)}</p>
                {role.current && (
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-ink md:mt-1.5 md:flex">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald" />
                    {tr(ui.statusLabels.building)}
                  </p>
                )}
              </div>

              <div className="min-w-0">
                <h3 className="semi-wide text-lg leading-snug font-bold">
                  {tr(role.title)}
                  <span className="font-normal text-ink-soft">, </span>
                  <span className={s.ink}>{tr(role.org)}</span>
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <DomainTag domain={role.domain} />
                  <span className="text-xs text-ink-soft">{tr(role.kind)}</span>
                </div>
                <p className="mt-3 max-w-[72ch] text-sm leading-relaxed">{tr(role.summary)}</p>
                <p className="mt-3 text-xs text-ink-soft">
                  <span className="sr-only">{tr(ui.stackLabel)}: </span>
                  {role.stack.join(", ")}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
