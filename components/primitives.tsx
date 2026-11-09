"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { domains, ui, type Domain, type L, type Status } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Domain colours — full class strings so Tailwind can see them         */
/* ------------------------------------------------------------------ */

export const domainStyle: Record<
  Domain,
  { fill: string; ink: string; tint: string; border: string; edge: string; onFill: string }
> = {
  retrieval: {
    fill: "bg-cobalt",
    ink: "text-cobalt-ink",
    tint: "bg-cobalt-tint",
    border: "border-cobalt",
    edge: "border-l-cobalt",
    onFill: "text-white",
  },
  agents: {
    fill: "bg-rose",
    ink: "text-rose-ink",
    tint: "bg-rose-tint",
    border: "border-rose",
    edge: "border-l-rose",
    onFill: "text-ink",
  },
  cloud: {
    fill: "bg-emerald",
    ink: "text-emerald-ink",
    tint: "bg-emerald-tint",
    border: "border-emerald",
    edge: "border-l-emerald",
    onFill: "text-ink",
  },
  product: {
    fill: "bg-saffron",
    ink: "text-saffron-ink",
    tint: "bg-saffron-tint",
    border: "border-saffron",
    edge: "border-l-saffron",
    onFill: "text-ink",
  },
};

/** A small tag naming the kind of work, in that kind's colour. */
export function DomainTag({ domain }: { domain: Domain }) {
  const { tr } = useLanguage();
  const style = domainStyle[domain];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        style.tint,
        style.ink
      )}
    >
      <span aria-hidden="true" className={cn("size-2 rounded-full", style.fill)} />
      {tr(domains[domain])}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section shell                                                       */
/* ------------------------------------------------------------------ */

export function Section({
  id,
  children,
  className,
  bleed,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Full-bleed background; the inner container still constrains width. */
  bleed?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-20", bleed)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 md:py-24 lg:px-10",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="mb-10 max-w-2xl md:mb-12">
      <h2 className="wide text-3xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-ink-soft">{lede}</p>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Stack & status                                                      */
/* ------------------------------------------------------------------ */

export function StackList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-rule bg-paper px-2 py-1 text-xs leading-none text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Status is conveyed by a dot, a colour AND a word, never colour alone. */
export function StatusBadge({ status }: { status: Status }) {
  const { tr } = useLanguage();
  const label = tr(ui.statusLabels[status] as L);
  const isActive = status === "live" || status === "building";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        isActive ? "bg-emerald-tint text-emerald-ink" : "bg-muted text-ink-soft"
      )}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 rounded-full", isActive ? "bg-emerald" : "bg-ink-soft")}
      />
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold " +
  "transition-[background-color,border-color,color,transform] duration-200 " +
  "cursor-pointer active:translate-y-px [touch-action:manipulation]";

export function PrimaryLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(buttonBase, "bg-cobalt text-white hover:bg-cobalt-ink", className)}
    >
      {children}
    </a>
  );
}

export function GhostLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        buttonBase,
        "border-2 border-ink bg-paper text-ink hover:bg-saffron-tint",
        className
      )}
    >
      {children}
    </a>
  );
}
