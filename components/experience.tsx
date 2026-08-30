"use client";

import { useLanguage } from "@/lib/language-context";
import { roles, ui } from "@/lib/content";
import { Section, SectionHeading, StackList } from "./primitives";

export function Experience() {
  const { tr } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={tr(ui.sections.experienceEyebrow)}
        title={tr(ui.sections.experience)}
        lede={tr(ui.sections.experienceLede)}
      />

      <ol className="relative">
        {/* Timeline rail — decorative */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-linear-to-b from-primary-accent/50 via-border to-transparent md:block"
        />

        {roles.map((role, i) => (
          <li
            key={role.id}
            className="reveal relative pb-10 md:pl-10"
          >
            {/* Node */}
            <span
              aria-hidden="true"
              className={
                role.current
                  ? "absolute top-2 left-0 hidden size-[15px] rounded-full border-2 border-background bg-accent md:block"
                  : "absolute top-2 left-0 hidden size-[15px] rounded-full border-2 border-background bg-border-strong md:block"
              }
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold">{tr(role.title)}</h3>
              <span aria-hidden="true" className="text-muted-foreground">
                ·
              </span>
              <span className="text-base text-primary-accent">{role.org}</span>
            </div>

            <p className="mt-1.5 font-mono text-xs tracking-wide text-muted-foreground">
              {tr(role.period)}
              <span aria-hidden="true"> · </span>
              {tr(role.kind)}
            </p>

            <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-foreground/85">
              {tr(role.summary)}
            </p>

            <div className="mt-4">
              <h4 className="sr-only">{tr(ui.stackLabel)}</h4>
              <StackList items={role.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
