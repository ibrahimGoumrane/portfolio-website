"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { testimonials, ui } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";

/** Real client testimonials: the first spans the row, the rest sit side by side. */
export function Testimonials() {
  const { language, tr } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionHeading title={tr(ui.sections.testimonials)} lede={tr(ui.sections.testimonialsLede)} />

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => {
          const lead = i === 0;
          return (
            <figure
              key={t.id}
              className={cn(
                "flex flex-col rounded-2xl p-6 sm:p-8",
                lead ? "bg-cobalt text-white md:col-span-2" : "border-2 border-ink",
                i === 1 && "bg-saffron-tint",
                i === 2 && "bg-rose-tint"
              )}
            >
              {t.headline && (
                <p className="semi-wide text-xl leading-snug font-extrabold text-balance sm:text-2xl">
                  {tr(t.headline)}
                </p>
              )}
              <blockquote
                className={cn(
                  "leading-relaxed",
                  t.headline && "mt-4",
                  lead ? "semi-wide max-w-[68ch] text-lg font-medium text-white sm:text-xl" : "text-base text-ink"
                )}
              >
                <p>{tr(t.quote)}</p>
              </blockquote>
              <figcaption className={cn("mt-auto pt-6 text-sm", lead ? "text-white/85" : "text-ink-soft")}>
                <span className={cn("block font-bold", lead ? "text-white" : "text-ink")}>
                  {tr(t.source)}
                </span>
                {tr(t.project)}, {tr(t.date)}
                {language === "en" && <span className="block italic">{tr(ui.translatedFromFrench)}</span>}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Section>
  );
}
