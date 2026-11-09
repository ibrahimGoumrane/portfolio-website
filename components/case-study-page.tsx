"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { identity, testimonials, ui } from "@/lib/content";
import { caseSlugs, casePath, homePath } from "@/lib/routes";
import { getCase } from "@/lib/cases";
import { DomainTag, StackList, StatusBadge, domainStyle } from "./primitives";

export function CaseStudyPage({ slug }: { slug: string }) {
  const { language, tr } = useLanguage();
  const view = getCase(slug);
  if (!view) return null;

  const s = domainStyle[view.domain];
  const testimonial = testimonials.find((t) => t.id === slug);
  const others = caseSlugs.filter((other) => other !== slug).map((other) => getCase(other)!);

  return (
    <article>
      <header className="graph-paper border-b border-rule">
        <div className="mx-auto w-full max-w-4xl px-4 pt-28 pb-12 sm:px-8 md:pt-32 md:pb-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
              <li>
                <Link href={homePath(language)} className="font-medium text-cobalt-ink hover:underline">
                  {tr(ui.home)}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`${homePath(language)}#work`} className="font-medium text-cobalt-ink hover:underline">
                  {tr(ui.backToWork)}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <DomainTag domain={view.domain} />
            <StatusBadge status={view.status} />
          </div>

          <h1 className="wide mt-5 text-[2rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {tr(view.title)}
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-soft">{tr(view.hook)}</p>

          <dl className="mt-8 grid gap-4 rounded-xl border-2 border-ink bg-paper p-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-bold text-ink-soft">{tr(ui.client)}</dt>
              <dd className="mt-1 text-sm font-semibold">{tr(view.client)}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold text-ink-soft">{tr(ui.role)}</dt>
              <dd className="mt-1 text-sm">{tr(view.role)}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold text-ink-soft">{tr(ui.period)}</dt>
              <dd className="mt-1 text-sm">{tr(view.period)}</dd>
            </div>
          </dl>
          {view.clientNote && <p className="mt-3 text-sm text-ink-soft">{tr(view.clientNote)}</p>}
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-8 md:py-20">
        {[
          { label: ui.theProblem, body: view.problem },
          { label: ui.theApproach, body: view.approach },
          { label: ui.theOutcome, body: view.outcome },
        ].map((block, i) => (
          <section key={i} className="mb-10">
            <h2 className={cn("semi-wide text-2xl font-extrabold", s.ink)}>{tr(block.label)}</h2>
            <p className="mt-3 max-w-[70ch] text-base leading-relaxed">{tr(block.body)}</p>
          </section>
        ))}

        {view.pipeline && (
          <section className="mb-10">
            <h2 className={cn("semi-wide text-2xl font-extrabold", s.ink)}>{tr(ui.architecture)}</h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {view.pipeline.map((node) => (
                <li key={node.step} className="flex gap-3 rounded-lg border border-rule p-4">
                  <span className={cn("tnum text-sm font-bold", s.ink)}>{Number(node.step)}</span>
                  <span>
                    <span className="block text-sm font-semibold">{tr(node.label)}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{tr(node.detail)}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {view.decisions && (
          <section className="mb-10">
            <h2 className={cn("semi-wide text-2xl font-extrabold", s.ink)}>{tr(ui.readDecisions)}</h2>
            <div className="mt-4 space-y-5">
              {view.decisions.map((decision, i) => (
                <div key={i} className={cn("rounded-xl p-5", s.tint)}>
                  <h3 className="font-bold">{tr(decision.title)}</h3>
                  <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">{tr(decision.body)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {view.sections?.map((section, i) => (
          <section key={i} className="mb-10">
            <h2 className={cn("semi-wide text-2xl font-extrabold", s.ink)}>{tr(section.title)}</h2>
            <ul className="mt-4 space-y-3">
              {section.points.map((point, j) => (
                <li key={j} className="flex max-w-[72ch] gap-3 text-base leading-relaxed">
                  <span aria-hidden="true" className={cn("mt-2.5 size-2 shrink-0 rounded-sm", s.fill)} />
                  {tr(point)}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {testimonial && (
          <figure className="mb-12 rounded-2xl bg-cobalt p-6 text-white sm:p-8">
            <blockquote className="semi-wide text-lg leading-relaxed font-medium sm:text-xl">
              <p>{tr(testimonial.quote)}</p>
            </blockquote>
            <figcaption className="mt-5 text-sm text-white/85">
              <span className="block font-bold text-white">{tr(testimonial.source)}</span>
              {language === "en" && <span className="italic">{tr(ui.translatedFromFrench)}</span>}
            </figcaption>
          </figure>
        )}

        <section className="mb-12">
          <h2 className={cn("semi-wide text-2xl font-extrabold", s.ink)}>{tr(ui.stackLabel)}</h2>
          <div className="mt-4">
            <StackList items={view.stack} />
          </div>
        </section>

        <a
          href={`mailto:${identity.email}`}
          className="semi-wide inline-flex min-h-11 items-center rounded-lg bg-saffron px-5 py-3 text-base font-bold text-ink transition-colors duration-200 hover:bg-saffron-tint"
        >
          {tr(ui.similarProject)}
        </a>
      </div>

      <nav aria-labelledby="more-work" className="border-t border-rule bg-muted">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-8">
          <h2 id="more-work" className="semi-wide text-2xl font-extrabold">
            {tr(ui.otherWork)}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={casePath(language, other.slug)}
                  className={cn(
                    "block h-full rounded-xl border-2 border-l-8 border-rule bg-paper p-4 transition-colors duration-200 hover:border-ink",
                    domainStyle[other.domain].edge
                  )}
                >
                  <span className="text-xs font-bold text-ink-soft">{tr(other.client)}</span>
                  <span className="mt-1 block font-bold text-balance">{tr(other.title)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </article>
  );
}
