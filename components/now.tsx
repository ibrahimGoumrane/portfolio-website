"use client";

import { useLanguage } from "@/lib/language-context";
import { now, ui } from "@/lib/content";
import { Eyebrow, Section, StackList, StatusBadge } from "./primitives";

export function Now() {
  const { tr } = useLanguage();

  return (
    <Section id="now">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        {/* Sticky intro on desktop, so the threads read against a fixed frame */}
        <div className="reveal reveal-left lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{tr(now.eyebrow)}</Eyebrow>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-lg font-semibold">{now.client}</span>
            <StatusBadge status="building" />
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{now.project}</p>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            {tr(now.title)}
          </h2>
          <p className="mt-3 font-mono text-xs tracking-wide text-primary-accent uppercase">
            {tr(now.role)}
          </p>
          <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
            {tr(now.summary)}
          </p>

          <div className="mt-8">
            <h3 className="sr-only">{tr(ui.stackLabel)}</h3>
            <StackList items={now.stack} tone="primary" />
          </div>
        </div>

        {/* Work threads */}
        <ol data-reveal-stagger="90" className="space-y-4">
          {now.threads.map((thread, i) => (
            <li
              key={i}
              className="reveal relative rounded-xl border border-border bg-card p-6 pl-7 transition-colors duration-200 hover:border-primary-accent/40"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-6 left-0 w-0.5 rounded-full bg-primary-accent/45"
              />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="max-w-[38ch] text-sm font-semibold text-balance">
                  {tr(thread.title)}
                </h3>
                <StatusBadge status={thread.status} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tr(thread.body)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
