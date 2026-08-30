"use client";

import { useLanguage } from "@/lib/language-context";
import { positioning } from "@/lib/content";
import { Eyebrow, Section } from "./primitives";

export function Positioning() {
  const { tr } = useLanguage();

  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="reveal">
          <Eyebrow>{tr(positioning.title)}</Eyebrow>
          <div className="mt-6 space-y-5">
            {positioning.body.map((paragraph, i) => (
              <p
                key={i}
                className="max-w-[66ch] text-sm leading-relaxed text-foreground/85 sm:text-base"
              >
                {tr(paragraph)}
              </p>
            ))}
          </div>
        </div>

        <aside
          className="reveal reveal-right rounded-xl border border-border bg-card p-6 lg:self-start"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {tr(positioning.focusTitle)}
          </h3>
          <ul className="mt-5 space-y-4">
            {positioning.focus.map((item, i) => (
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
        </aside>
      </div>
    </Section>
  );
}
