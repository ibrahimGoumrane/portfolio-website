"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { ui, type L, type Status } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Section shell — consistent rhythm and a single heading pattern       */
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
  /** Full-bleed background — the inner container still constrains width. */
  bleed?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24", bleed)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-10",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cn(
        "reveal mb-10 max-w-2xl md:mb-12",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-[2rem] md:leading-[1.15]">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          {lede}
        </p>
      )}
    </header>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs font-medium tracking-[0.18em] text-primary-accent uppercase">
      <span aria-hidden="true" className="h-px w-8 bg-primary-accent/50" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Chips & badges                                                      */
/* ------------------------------------------------------------------ */

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.7rem] leading-none tracking-tight whitespace-nowrap",
        tone === "neutral" && "border-border bg-elevated text-muted-foreground",
        tone === "primary" &&
          "border-primary-accent/30 bg-primary-soft text-primary-accent",
        tone === "accent" && "border-accent/30 bg-accent-soft text-accent"
      )}
    >
      {children}
    </span>
  );
}

export function StackList({
  items,
  tone = "neutral",
}: {
  items: string[];
  tone?: "neutral" | "primary" | "accent";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Chip tone={tone}>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}

/**
 * Status is conveyed by a dot, a colour AND a word — never colour alone.
 */
export function StatusBadge({ status }: { status: Status }) {
  const { tr } = useLanguage();
  const label = tr(ui.statusLabels[status] as L);
  const isActive = status === "live" || status === "building";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        isActive
          ? "border-accent/35 bg-accent-soft text-accent"
          : "border-border bg-elevated text-muted-foreground"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          isActive ? "bg-accent animate-status" : "bg-muted-foreground"
        )}
      />
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 " +
  "cursor-pointer active:scale-[0.98] [touch-action:manipulation]";

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
      className={cn(
        buttonBase,
        "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg",
        className
      )}
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
        "border border-border-strong bg-card/60 text-foreground hover:border-primary-accent hover:bg-elevated",
        className
      )}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Card surface                                                        */
/* ------------------------------------------------------------------ */

export function Panel({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-0.5 hover:border-primary-accent/45 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
