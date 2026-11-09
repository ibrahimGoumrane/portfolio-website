"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { projects, ui, type Project } from "@/lib/content";
import { Section, SectionHeading } from "./primitives";
import { ProjectCard } from "./project-card";

export function Projects() {
  const { tr } = useLanguage();
  const [video, setVideo] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Projects with a demo lead; the text-only ones wait behind a toggle so the
  // section stays short for visitors who only skim.
  const [withDemo, textOnly] = useMemo(() => {
    const hasThumb = (p: Project) => Boolean(p.image && p.videoUrl);
    return [projects.filter(hasThumb), projects.filter((p) => !hasThumb(p))];
  }, []);

  return (
    <Section id="projects">
      <SectionHeading title={tr(ui.sections.projects)} lede={tr(ui.sections.projectsLede)} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {withDemo.map((project) => (
          <ProjectCard key={project.id} project={project} onPlay={setVideo} />
        ))}
      </div>

      <div id="more-projects" hidden={!showAll} className="mt-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {textOnly.map((project) => (
            <ProjectCard key={project.id} project={project} onPlay={setVideo} />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowAll((v) => !v)}
        aria-expanded={showAll}
        aria-controls="more-projects"
        className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border-2 border-ink px-5 text-sm font-semibold transition-colors duration-200 hover:bg-saffron-tint [touch-action:manipulation]"
      >
        {showAll ? (
          <Minus className="size-4" aria-hidden="true" />
        ) : (
          <Plus className="size-4" aria-hidden="true" />
        )}
        {showAll
          ? tr(ui.showFewerProjects)
          : tr(ui.showMoreProjects).replace("{n}", String(textOnly.length))}
      </button>

      {video && <VideoDialog project={video} onClose={() => setVideo(null)} />}
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Video dialog — escape to close, focus moved in and restored on exit  */
/* ------------------------------------------------------------------ */

function VideoDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { tr } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);

  const close = useCallback(() => {
    onClose();
    if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
  }, [onClose]);

  useEffect(() => {
    openerRef.current = document.activeElement;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [close]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title}: ${tr(ui.watchDemo)}`}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={tr(ui.closeVideo)}
          className="absolute top-3 right-3 z-10 grid size-11 cursor-pointer place-items-center rounded-lg bg-black/70 text-white transition-colors hover:bg-black"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={project.videoUrl}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black object-contain"
        />
      </div>
    </div>
  );
}
