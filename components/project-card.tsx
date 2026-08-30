"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ui, type Project } from "@/lib/content";
import { StackList } from "./primitives";

export function ProjectCard({
  project,
  onPlay,
}: {
  project: Project;
  onPlay: (project: Project) => void;
}) {
  const { tr } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-0.5 hover:border-primary-accent/45 hover:shadow-lg">
      {/* A thumbnail means there is a real demo behind it — it doubles as the play control */}
      {project.image && project.videoUrl && (
        <button
          type="button"
          onClick={() => onPlay(project)}
          // A pointer shortcut to the labelled "Watch demo" button below — keeping it
          // out of the tab order avoids announcing the same control twice.
          tabIndex={-1}
          aria-hidden="true"
          className="relative aspect-16/10 shrink-0 cursor-pointer overflow-hidden bg-elevated [touch-action:manipulation]"
        >
          <Image
            src={project.image}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-card/85 via-card/10 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-250 group-hover:opacity-100"
          >
            <span className="grid size-12 place-items-center rounded-full border border-white/35 bg-black/55 backdrop-blur-sm">
              <Play className="size-5 translate-x-px text-white" />
            </span>
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base leading-snug font-semibold text-balance">
            {project.title}
          </h3>
          {project.period && (
            <span className="tnum shrink-0 font-mono text-[0.7rem] whitespace-nowrap text-muted-foreground">
              {project.period}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {tr(project.blurb)}
        </p>

        <div className="mt-5">
          <StackList items={project.stack} />
        </div>

        {(project.videoUrl || project.github || project.kaggle) && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => onPlay(project)}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-primary-accent [touch-action:manipulation]"
              >
                <Play className="size-4" aria-hidden="true" />
                {tr(ui.watchDemo)}
                <span className="sr-only">— {project.title}</span>
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-primary-accent"
              >
                {tr(ui.viewOnGithub)}
                <span className="sr-only">— {project.title}</span>
              </a>
            )}
            {project.kaggle && (
              <a
                href={project.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm text-foreground transition-colors duration-200 hover:border-primary-accent/50 hover:text-primary-accent"
              >
                {tr(ui.viewOnKaggle)}
                <span className="sr-only">— {project.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
