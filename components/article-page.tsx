"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { identity, ui } from "@/lib/content";
import { getArticle, type Block } from "@/lib/articles";
import { casePath, homePath } from "@/lib/routes";
import { DomainTag, domainStyle } from "./primitives";

export function ArticlePage({ slug }: { slug: string }) {
  const { language, tr } = useLanguage();
  const article = getArticle(slug);
  if (!article) return null;

  const s = domainStyle[article.domain];

  return (
    <article>
      <header className="graph-paper border-b border-rule">
        <div className="mx-auto w-full max-w-3xl px-4 pt-28 pb-12 sm:px-8 md:pt-32 md:pb-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
              <li>
                <Link href={homePath(language)} className="font-medium text-cobalt-ink hover:underline">
                  {tr(ui.home)}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{tr(ui.article)}</li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
            <DomainTag domain={article.domain} />
            <time dateTime={article.published}>{tr(article.date)}</time>
            <span aria-hidden="true" className="size-1 rounded-full bg-rule" />
            <span>{tr(article.readingTime)}</span>
          </div>

          <h1 className="wide mt-5 text-[2rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
            {tr(article.title)}
          </h1>
          <p className="mt-4 text-sm font-semibold">{identity.name}</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-8 md:py-16">
        <p className="text-lg leading-relaxed sm:text-xl">{tr(article.intro)}</p>

        {article.sections.map((section, i) => (
          <section key={i} className="mt-12">
            <h2 className={cn("semi-wide text-2xl leading-tight font-extrabold text-balance", s.ink)}>
              {tr(section.heading)}
            </h2>
            {section.blocks.map((block, j) => (
              <BlockView key={j} block={block} fill={s.fill} />
            ))}
          </section>
        ))}

        <div className="mt-14 flex flex-wrap gap-3 border-t border-rule pt-8">
          <a
            href={`mailto:${identity.email}`}
            className="semi-wide inline-flex min-h-11 items-center rounded-lg bg-saffron px-5 py-3 text-base font-bold text-ink transition-colors duration-200 hover:bg-saffron-tint"
          >
            {tr(ui.similarProject)}
          </a>
          {article.caseSlug && (
            <Link
              href={casePath(language, article.caseSlug)}
              className="inline-flex min-h-11 items-center rounded-lg border-2 border-ink px-5 text-sm font-semibold transition-colors duration-200 hover:bg-muted"
            >
              {tr(ui.relatedCase)}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function BlockView({ block, fill }: { block: Block; fill: string }) {
  const { tr } = useLanguage();

  switch (block.type) {
    case "p":
      return <p className="mt-4 text-base leading-[1.75]">{tr(block.text)}</p>;
    case "list":
      return (
        <ul className="mt-4 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-[1.7]">
              <span aria-hidden="true" className={cn("mt-2.5 size-2 shrink-0 rounded-sm", fill)} />
              <span>{tr(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="mt-5 overflow-x-auto rounded-xl bg-ink p-4 text-[0.8rem] leading-relaxed text-white sm:p-5">
          <code>{block.text}</code>
        </pre>
      );
    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-xl border-2 border-ink">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col" className="px-4 py-3 font-bold">
                    {tr(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-rule">
                  {row.map((cell, j) => (
                    <td key={j} className={cn("px-4 py-3 align-top", j === 0 && "font-mono text-xs font-semibold whitespace-nowrap")}>
                      {tr(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
