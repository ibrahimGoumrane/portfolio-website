"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ui, type Project } from "@/lib/content";
import { StackList } from "./primitives";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-lg border border-rule px-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink";

export function ProjectCard({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (project: Project) => void;
}) {
  const { tr } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-rule bg-paper transition-colors duration-200 hover:border-ink">
      {/* A thumbnail means there is a real demo behind it; it doubles as the play control */}
      {project.image && project.videoUrl && (
        <button
          type="button"
          onClick={() => onPlay(project)}
          // A pointer shortcut to the labelled "Watch demo" button below; keeping it
          // out of the tab order avoids announcing the same control twice.
          tabIndex={-1}
          aria-hidden="true"
          className="relative aspect-16/10 shrink-0 cursor-pointer overflow-hidden border-b border-rule bg-muted [touch-action:manipulation]"
        >
          <Image
            src={project.image}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover object-top"
          />
          <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-full bg-cobalt text-white transition-transform duration-200 group-hover:scale-110">
            <Play className="size-4 translate-x-px" />
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base leading-snug font-bold text-balance">{project.title}</h3>
          {project.period && (
            <span className="tnum shrink-0 text-xs whitespace-nowrap text-ink-soft">
              {project.period}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tr(project.blurb)}</p>

        <div className="mt-4">
          <StackList items={project.stack} />
        </div>

        {(project.videoUrl || project.github || project.kaggle) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => onPlay(project)}
                className={`${linkClass} cursor-pointer [touch-action:manipulation]`}
              >
                <Play className="size-4" aria-hidden="true" />
                {tr(ui.watchDemo)}
                <span className="sr-only">: {project.title}</span>
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {tr(ui.viewOnGithub)}
                <span className="sr-only">: {project.title}</span>
              </a>
            )}
            {project.kaggle && (
              <a href={project.kaggle} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {tr(ui.viewOnKaggle)}
                <span className="sr-only">: {project.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
