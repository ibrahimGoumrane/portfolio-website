"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { identity, ui } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const { language, toggleLanguage, tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently occupying the upper half of the viewport.
  useEffect(() => {
    const sections = ui.nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile sheet and returns focus to its trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {ui.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative flex h-10 items-center rounded-md px-3 text-sm transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tr(item.label)}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-primary-accent transition-transform duration-200",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={tr(ui.toggleLanguage)}
            className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-lg border border-border bg-card/60 px-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-foreground [touch-action:manipulation]"
          >
            <span className="font-mono text-xs uppercase">{language}</span>
          </button>

          <ThemeToggle />

          <a
            href={identity.cv[language]}
            download={`Ibrahim_Goumrane_CV_${language}.pdf`}
            className="hidden h-11 cursor-pointer items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:inline-flex [touch-action:manipulation]"
          >
            {tr(ui.downloadCv)}
          </a>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? tr(ui.closeMenu) : tr(ui.openMenu)}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-card/60 text-foreground lg:hidden [touch-action:manipulation]"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-border bg-background/97 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Primary (mobile)" className="px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {ui.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-2 text-base text-foreground transition-colors duration-200 hover:bg-elevated"
                >
                  {tr(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
            <a
              href={identity.cv[language]}
              download={`Ibrahim_Goumrane_CV_${language}.pdf`}
              className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
              {tr(ui.downloadCvLong)}
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground"
              aria-label="GitHub"
            >
              <Github className="size-5" aria-hidden="true" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
