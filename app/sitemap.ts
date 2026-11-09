import type { MetadataRoute } from "next";
import { absolute, articlePath, articleSlugs, caseSlugs, casePath, homePath } from "@/lib/routes";

export const dynamic = "force-static";

/** Every page in both languages, each pointing at its translation. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { en: homePath("en"), fr: homePath("fr"), priority: 1 },
    ...caseSlugs.map((slug) => ({ en: casePath("en", slug), fr: casePath("fr", slug), priority: 0.8 })),
    ...articleSlugs.map((slug) => ({ en: articlePath("en", slug), fr: articlePath("fr", slug), priority: 0.8 })),
  ];

  return pages.flatMap(({ en, fr, priority }) =>
    [en, fr].map((path) => ({
      url: absolute(path),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: { en: absolute(en), fr: absolute(fr) } },
    }))
  );
}
