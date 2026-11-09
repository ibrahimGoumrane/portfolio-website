"use client";

import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { contact, identity, ui } from "@/lib/content";

export function Footer() {
  const { language, tr } = useLanguage();
  const year = 2026;

  return (
    <footer id="contact" className="scroll-mt-20 bg-cobalt text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="wide max-w-[18ch] text-3xl leading-[1.05] font-extrabold text-balance sm:text-5xl">
              {tr(contact.title)}
            </h2>
            <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-white/90">
              {tr(contact.body)}
            </p>

            <a
              href={`mailto:${identity.email}`}
              className="semi-wide mt-8 inline-block rounded-lg bg-saffron px-5 py-3 text-base font-bold break-all text-ink transition-colors duration-200 hover:bg-white sm:text-xl"
            >
              {identity.email}
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a
                href={identity.cv[language]}
                download={`Ibrahim_Goumrane_CV_${language}.pdf`}
                className="inline-flex min-h-11 items-center rounded-lg border-2 border-white px-4 font-semibold transition-colors duration-200 hover:bg-white hover:text-cobalt-ink"
              >
                {tr(ui.downloadCvLong)}
              </a>
              <a
                href={identity.phoneHref}
                className="tnum inline-flex min-h-11 items-center px-2 font-medium underline-offset-4 hover:underline"
              >
                {identity.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="text-sm font-bold">{tr(ui.availableForLabel)}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                {contact.availableFor.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-sm bg-saffron" />
                    {tr(item)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">{tr(ui.languagesLabel)}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {contact.languages.map((lang, i) => (
                  <li key={i} className="flex items-baseline justify-between gap-4 border-b border-white/25 pb-2">
                    <span>{tr(lang.name)}</span>
                    <span className="text-white/80">{tr(lang.level)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-6 border-t border-white/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/80">
            © {year} {identity.name}. {tr(ui.footerRights)}{" "}
            <span className="block sm:inline">{tr(ui.builtWith)}</span>
          </p>
          <div className="flex gap-2">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-lg border-2 border-white/40 transition-colors duration-200 hover:border-white hover:bg-white hover:text-cobalt-ink"
            >
              <Github className="size-5" aria-hidden="true" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-lg border-2 border-white/40 transition-colors duration-200 hover:border-white hover:bg-white hover:text-cobalt-ink"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
