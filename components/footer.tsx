"use client";

import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { contact, identity, ui } from "@/lib/content";
import { Eyebrow, PrimaryLink } from "./primitives";

export function Footer() {
  const { language, tr } = useLanguage();
  const year = 2026;

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border bg-elevated/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="reveal">
            <Eyebrow>{tr(contact.eyebrow)}</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] text-2xl font-semibold tracking-tight text-balance sm:text-3xl md:text-[2rem] md:leading-[1.15]">
              {tr(contact.title)}
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
              {tr(contact.body)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href={`mailto:${identity.email}`}>
                {identity.email}
              </PrimaryLink>
              <a
                href={identity.cv[language]}
                download={`Ibrahim_Goumrane_CV_${language}.pdf`}
                className="inline-flex min-h-11 items-center rounded-lg border border-border-strong bg-card px-5 text-sm font-medium transition-colors duration-200 hover:border-primary-accent"
              >
                {tr(ui.downloadCvLong)}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <li>{tr(identity.location)}</li>
              <li>
                <a
                  href={identity.phoneHref}
                  className="tnum underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {identity.phone}
                </a>
              </li>
            </ul>
          </div>

          <div
            className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-1"
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <div>
              <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {tr(ui.availableForLabel)}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground/85">
                {contact.availableFor.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {tr(item)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {tr(ui.languagesLabel)}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {contact.languages.map((lang, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground/85">{tr(lang.name)}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {tr(lang.level)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {identity.name}. {tr(ui.footerRights)}{" "}
            <span className="block sm:inline">{tr(ui.builtWith)}</span>
          </p>
          <div className="flex gap-2">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-foreground"
            >
              <Github className="size-5" aria-hidden="true" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-foreground"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
