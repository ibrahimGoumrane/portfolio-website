"use client";

import { useEffect } from "react";

/** Gap between siblings in a staggered group, in ms. */
const STAGGER_STEP = 70;
/** Cap the cascade so a long grid does not take seconds to finish. */
const STAGGER_MAX_INDEX = 8;

/**
 * Drives the scroll-entrance animations.
 *
 * Two modes:
 *  - a lone `.reveal` element animates when it scrolls into view;
 *  - a `[data-reveal-stagger]` container animates its `.reveal` children as one
 *    cascade, so a grid ripples in instead of each cell firing on its own.
 *
 * Elements are unobserved once revealed, and under `prefers-reduced-motion`
 * everything is marked visible immediately.
 */
export function useReveal() {
  useEffect(() => {
    const all = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const groups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]")
    );
    if (all.length === 0 && groups.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      all.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    // Children of a stagger group are driven by the group, not individually.
    const grouped = new Set<HTMLElement>();
    groups.forEach((group) =>
      group
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach((child) => grouped.add(child))
    );

    const reveal = (el: HTMLElement) => {
      if (!el.hasAttribute("data-reveal-stagger")) {
        el.classList.add("is-visible");
        return;
      }
      const step = Number(el.dataset.revealStagger) || STAGGER_STEP;
      el.querySelectorAll<HTMLElement>(".reveal").forEach((child, i) => {
        child.style.setProperty(
          "--reveal-delay",
          `${Math.min(i, STAGGER_MAX_INDEX) * step}ms`
        );
        child.classList.add("is-visible");
      });
      if (el.classList.contains("reveal")) el.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target as HTMLElement);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 }
    );

    all.filter((node) => !grouped.has(node)).forEach((n) => observer.observe(n));
    groups.forEach((g) => observer.observe(g));

    return () => observer.disconnect();
  }, []);
}
