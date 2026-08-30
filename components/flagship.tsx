"use client";

import { useLanguage } from "@/lib/language-context";
import { flagship, ui } from "@/lib/content";
import { Eyebrow, Section, StackList, StatusBadge } from "./primitives";

export function Flagship() {
  const { tr } = useLanguage();

  return (
    <Section
      id="flagship"
      bleed="border-y border-border bg-elevated/40"
      className="py-20 md:py-28"
    >
      {/* Header */}
      <div className="reveal max-w-3xl">
        <Eyebrow>{tr(flagship.eyebrow)}</Eyebrow>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-lg font-semibold">{flagship.client}</span>
          <StatusBadge status="live" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{tr(flagship.clientNote)}</p>
        <h2 className="mt-4 max-w-[28ch] text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-[2rem] md:leading-[1.15]">
          {tr(flagship.title)}
        </h2>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs tracking-wide text-muted-foreground uppercase">
          <div className="flex gap-2">
            <dt className="sr-only">Role</dt>
            <dd className="text-primary-accent">{tr(flagship.role)}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Period</dt>
            <dd>{tr(flagship.period)}</dd>
          </div>
        </dl>
      </div>

      {/* Problem / approach / outcome */}
      <div data-reveal-stagger className="mt-14 grid gap-8 md:grid-cols-3">
        {[
          { label: ui.theProblem, body: flagship.problem },
          { label: ui.theApproach, body: flagship.approach },
          { label: ui.theOutcome, body: flagship.outcome },
        ].map((block, i) => (
          <div
            key={i}
            className="reveal border-t border-border pt-5"
          >
            <h3 className="font-mono text-xs tracking-[0.16em] text-primary-accent uppercase">
              {tr(block.label)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              {tr(block.body)}
            </p>
          </div>
        ))}
      </div>

      {/* Pipeline — an ordered list, readable as text even without the visuals */}
      <div className="mt-16">
        <h3 className="reveal font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {tr(ui.architecture)}
        </h3>
        <ol
          data-reveal-stagger="55"
          className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {flagship.pipeline.map((node, i) => (
            <li
              key={node.step}
              className="reveal group relative bg-card p-5 transition-colors duration-200 hover:bg-elevated"
            >
              <span className="tnum font-mono text-xs text-primary-accent">
                {node.step}
              </span>
              <h4 className="mt-2 text-sm font-semibold">{tr(node.label)}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {tr(node.detail)}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary-accent transition-transform duration-250 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </div>

      {/* Decisions */}
      <div className="mt-16">
        <h3 className="reveal font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {tr(ui.decisions)}
        </h3>
        <div data-reveal-stagger className="mt-6 grid gap-6 md:grid-cols-3">
          {flagship.decisions.map((decision, i) => (
            <article
              key={i}
              className="reveal rounded-xl border border-border bg-card p-6"
            >
              <h4 className="text-sm font-semibold text-balance">
                {tr(decision.title)}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tr(decision.body)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal mt-12 border-t border-border pt-6">
        <h3 className="sr-only">{tr(ui.stackLabel)}</h3>
        <StackList items={flagship.stack} tone="primary" />
      </div>
    </Section>
  );
}
