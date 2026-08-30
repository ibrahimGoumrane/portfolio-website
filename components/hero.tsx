"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { hero, identity, metrics, tickerItems } from "@/lib/content";
import { GhostLink, PrimaryLink } from "./primitives";

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Backdrop: engineering grid + two soft colour fields */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div
          className="absolute -top-40 -left-32 size-[34rem] rounded-full blur-[110px]"
          style={{ background: "var(--glow-primary)" }}
        />
        <div
          className="absolute -top-24 right-0 size-[26rem] rounded-full blur-[110px]"
          style={{ background: "var(--glow-accent)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 sm:px-8 md:pt-36 md:pb-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <div className="reveal flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
                <span
                  aria-hidden="true"
                  className="animate-status size-1.5 rounded-full bg-accent"
                />
                {tr(hero.status)}
              </span>
              <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {tr(hero.eyebrow)}
              </span>
            </div>

            <h1
              className="reveal reveal-mask mt-6 text-[1.9rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
              style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            >
              {tr(hero.headline)}
            </h1>

            <p
              className="reveal mt-5 max-w-[58ch] text-base leading-relaxed text-muted-foreground"
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {tr(hero.lede)}
            </p>

            <div
              className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              <PrimaryLink href="#flagship">{tr(hero.primaryCta)}</PrimaryLink>
              <GhostLink href="#contact">{tr(hero.secondaryCta)}</GhostLink>
            </div>

            <ul
              className="reveal mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            >
              <li>{tr(identity.location)}</li>
              <li>
                <a
                  href={`mailto:${identity.email}`}
                  className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {identity.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Portrait — decorative on small screens, so it is dropped there */}
          <div
            className="reveal reveal-right relative mx-auto hidden w-full max-w-sm lg:block"
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] blur-3xl"
              style={{ background: "var(--glow-primary)" }}
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/main.png"
                alt={tr(hero.portraitAlt)}
                fill
                sizes="384px"
                className="object-cover"
              />
              {/* A soft vignette settles the photo into the card in dark mode
                  without tinting the subject. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden dark:block"
                style={{
                  background:
                    "radial-gradient(ellipse 78% 70% at 50% 40%, transparent 0%, transparent 55%, color-mix(in srgb, var(--card) 85%, transparent) 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card/85 to-transparent"
              />
            </div>
          </div>
        </div>

        {/* Proof strip */}
        <dl
          data-reveal-stagger="80"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-20 md:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div key={metric.value} className="reveal reveal-pop bg-card p-5">
              <dt className="tnum font-mono text-xl font-semibold text-primary-accent sm:text-2xl">
                {metric.value}
              </dt>
              <dd className="mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">
                {tr(metric.label)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Stack ticker — decorative, hidden from assistive tech */}
      <div
        aria-hidden="true"
        className="mask-fade-x relative overflow-hidden border-y border-border py-3"
      >
        <div className="animate-marquee flex w-max gap-8 pr-8">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-xs tracking-wide whitespace-nowrap text-muted-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
