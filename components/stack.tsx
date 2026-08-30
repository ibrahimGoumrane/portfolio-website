"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { stackGroups, ui } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";

export function Stack() {
  const { tr } = useLanguage();

  return (
    <Section id="stack" bleed="border-t border-border bg-elevated/40">
      <SectionHeading
        eyebrow={tr(ui.sections.stackEyebrow)}
        title={tr(ui.sections.stack)}
        lede={tr(ui.sections.stackLede)}
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {stackGroups.map((group, i) => (
          <section
            key={group.id}
            className={cn(
              "reveal bg-card p-6",
              // An odd group count would leave a hollow cell — let the last one span.
              i === stackGroups.length - 1 &&
                stackGroups.length % 2 === 1 &&
                "md:col-span-2"
            )}
          >
            <h3 className="text-sm font-semibold">{tr(group.label)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-elevated px-2.5 py-1.5 font-mono text-xs text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
