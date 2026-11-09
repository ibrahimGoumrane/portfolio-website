"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { testimonials, ui } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";

/** Real client reviews; the first one gets the larger, coloured card. */
export function Testimonials() {
  const { language, tr } = useLanguage();

  return (
    <Section id="testimonials">
      <SectionHeading title={tr(ui.sections.testimonials)} lede={tr(ui.sections.testimonialsLede)} />

      <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
        {testimonials.map((t, i) => (
          <figure
            key={t.id}
            className={cn(
              "flex flex-col rounded-2xl p-6 sm:p-8",
              i === 0 ? "bg-cobalt text-white" : "border-2 border-ink bg-saffron-tint"
            )}
          >
            <p className="semi-wide text-xl leading-snug font-extrabold text-balance sm:text-2xl">
              {tr(t.headline)}
            </p>
            <blockquote
              className={cn("mt-4 text-base leading-relaxed", i === 0 ? "text-white/90" : "text-ink")}
            >
              <p>{tr(t.quote)}</p>
            </blockquote>
            <figcaption className={cn("mt-auto pt-6 text-sm", i === 0 ? "text-white/85" : "text-ink-soft")}>
              <span className={cn("block font-bold", i === 0 ? "text-white" : "text-ink")}>
                {tr(ui.verifiedReview)}
              </span>
              {tr(t.project)}, {tr(t.date)}
              {language === "en" && <span className="block italic">{tr(ui.translatedFromFrench)}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
