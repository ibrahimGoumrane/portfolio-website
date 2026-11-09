"use client";

import type React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { hero, identity, metrics, systemMap } from "@/lib/content";
import { GhostLink, PrimaryLink, domainStyle } from "./primitives";

/** Animation order for the system map; see `.map-node` in globals.css. */
const step = (n: number) => ({ "--step": n }) as React.CSSProperties;

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="graph-paper relative border-b border-rule">
      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 sm:px-8 md:pt-32 md:pb-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-tint px-3 py-1.5 text-sm font-medium text-emerald-ink">
              <span aria-hidden="true" className="size-2 rounded-full bg-emerald" />
              {tr(hero.status)}
            </p>

            <h1 className="wide mt-6 text-[2.15rem] leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
              {tr(hero.headline)}
            </h1>

            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-ink-soft sm:text-lg">
              {tr(hero.lede)}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryLink href="#work">{tr(hero.primaryCta)}</PrimaryLink>
              <GhostLink href="#contact">{tr(hero.secondaryCta)}</GhostLink>
            </div>

            <p className="mt-6 flex flex-col gap-1 text-sm text-ink-soft sm:flex-row sm:items-center sm:gap-3">
              {tr(identity.location)}
              <span aria-hidden="true" className="hidden size-1 rounded-full bg-rule sm:block" />
              <a
                href={`mailto:${identity.email}`}
                className="font-medium text-cobalt-ink underline-offset-4 hover:underline"
              >
                {identity.email}
              </a>
            </p>
          </div>

          <div className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-[10px_10px_0_var(--saffron)]">
              <Image
                src="/main.jpeg"
                alt={tr(hero.portraitAlt)}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-cover"
              />
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {metrics.map((metric, i) => (
                <div
                  key={metric.value}
                  className={cn(
                    "rounded-xl p-4",
                    i === 0 ? "bg-cobalt text-white" : "bg-rose-tint text-ink"
                  )}
                >
                  <dt className="wide tnum text-3xl leading-none font-extrabold">{metric.value}</dt>
                  <dd className={cn("mt-2 text-sm leading-snug", i === 0 ? "text-white/90" : "text-rose-ink")}>
                    {tr(metric.label)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <SystemMap />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* System map: documents → find → reason → answer, all on the cloud    */
/* ------------------------------------------------------------------ */

function SystemMap() {
  const { tr } = useLanguage();
  const base = domainStyle[systemMap.base.domain];

  return (
    <figure className="mt-16 md:mt-20">
      <figcaption className="semi-wide mb-5 text-lg font-bold">{tr(systemMap.title)}</figcaption>

      <div className="grid items-stretch gap-2 lg:grid-cols-[1fr_2.75rem_1.3fr_2.75rem_1.3fr_2.75rem_1fr] lg:gap-0">
        <EndNode style={step(0)} label={tr(systemMap.input.label)} detail={tr(systemMap.input.detail)} />
        <Wire style={step(0)} />

        {systemMap.stages.map((stage, i) => {
          const s = domainStyle[stage.domain];
          return (
            <div key={i} className="contents">
              <article
                style={step(i + 1)}
                className={cn("map-node flex flex-col overflow-hidden rounded-xl border-2 bg-paper", s.border)}
              >
                <h3 className={cn("wide px-4 py-2.5 text-lg font-extrabold", s.fill, s.onFill)}>
                  {tr(stage.label)}
                </h3>
                <ol className="flex-1 space-y-2 px-4 py-4">
                  {stage.steps.map((item, j) => (
                    <li key={j} className="flex items-baseline gap-2.5 text-sm">
                      <span className={cn("tnum text-xs font-bold", s.ink)}>{j + 1}</span>
                      {tr(item)}
                    </li>
                  ))}
                </ol>
                <p className={cn("flex items-start gap-2 px-4 py-3 text-sm font-medium", s.tint, s.ink)}>
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {tr(stage.proof)}
                </p>
              </article>
              <Wire style={step(i + 1)} />
            </div>
          );
        })}

        <EndNode style={step(3)} label={tr(systemMap.output.label)} detail={tr(systemMap.output.detail)} />
      </div>

      <div
        style={step(4)}
        className={cn(
          "map-node mt-3 flex flex-col gap-3 rounded-xl border-2 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center",
          base.border,
          base.tint
        )}
      >
        <p className={cn("text-sm font-bold", base.ink)}>{tr(systemMap.base.label)}</p>
        <ul className="flex flex-wrap gap-1.5">
          {systemMap.base.items.map((item) => (
            <li key={item} className="rounded-md bg-paper px-2 py-1 text-xs font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>
        <p className={cn("flex items-center gap-2 text-sm font-medium sm:ml-auto", base.ink)}>
          <Check className="size-4 shrink-0" aria-hidden="true" />
          {tr(systemMap.base.proof)}
        </p>
      </div>
    </figure>
  );
}

function EndNode({
  label,
  detail,
  style,
}: {
  label: string;
  detail: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className="map-node flex flex-col justify-center rounded-xl border-2 border-saffron bg-saffron-tint px-4 py-4"
    >
      <p className="semi-wide text-base font-bold">{label}</p>
      <p className="mt-1.5 text-sm leading-snug text-saffron-ink">{detail}</p>
    </div>
  );
}

/** Connector: points down on narrow screens, right on wide ones. */
function Wire({ style }: { style: React.CSSProperties }) {
  return (
    <div aria-hidden="true" className="grid h-8 place-items-center lg:h-auto">
      <svg
        viewBox="0 0 40 12"
        style={style}
        className="map-wire h-3 w-10 rotate-90 text-ink lg:rotate-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path pathLength={1} d="M3 6H35" />
        <path pathLength={1} d="M30 1.5L35.5 6L30 10.5" />
      </svg>
    </div>
  );
}
