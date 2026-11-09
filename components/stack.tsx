"use client";

import { useLanguage } from "@/lib/language-context";
import { education, recognition, stackGroups, ui } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";

/** Tools and education share one section to keep the page short. */
export function Toolbox() {
  const { tr } = useLanguage();

  return (
    <Section id="toolbox" bleed="border-t border-rule">
      <SectionHeading title={tr(ui.sections.toolbox)} lede={tr(ui.sections.toolboxLede)} />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <dl className="divide-y divide-rule border-y border-rule">
          {stackGroups.map((group) => (
            <div key={group.id} className="grid gap-2 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-bold">{tr(group.label)}</dt>
              <dd className="text-sm leading-relaxed text-ink-soft">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h3 className="semi-wide text-lg font-bold">{tr(ui.sections.education)}</h3>
          <ul className="mt-4 space-y-4">
            {education.map((entry) => (
              <li key={entry.id} className="rounded-xl bg-cobalt-tint p-5">
                <p className="font-bold">{entry.school}</p>
                <p className="text-sm text-ink-soft">{tr(entry.schoolFull)}</p>
                <p className="mt-3 text-sm">{tr(entry.degree)}</p>
                <p className="mt-1 text-sm font-medium text-cobalt-ink">{tr(entry.period)}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tr(entry.detail)}</p>
              </li>
            ))}
          </ul>

          <h3 className="semi-wide mt-8 text-lg font-bold">{tr(ui.recognitionLabel)}</h3>
          <ul className="mt-3 space-y-2.5">
            {recognition.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-1.5 size-2.5 shrink-0 rounded-sm bg-saffron" />
                {tr(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
