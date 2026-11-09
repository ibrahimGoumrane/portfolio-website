/**
 * Page metadata and schema.org structured data, shared by every route.
 */
import type { Metadata } from "next";
import { contact, education, identity, seo, type L } from "./content";
import { SITE_URL, absolute, homePath, type Language } from "./routes";

const ogLocale: Record<Language, string> = { en: "en_US", fr: "fr_FR" };

/**
 * Title, description, canonical URL and the hreflang links that tell search
 * engines the EN and FR pages are translations of each other.
 */
export function pageMetadata({
  lang,
  title,
  description,
  paths,
  type = "website",
}: {
  lang: Language;
  title: string;
  description: string;
  /** This page's path in each language. */
  paths: Record<Language, string>;
  type?: "website" | "article";
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: paths[lang],
      languages: { en: paths.en, fr: paths.fr, "x-default": paths.en },
    },
    openGraph: {
      type,
      url: paths[lang],
      siteName: identity.name,
      title,
      description,
      locale: ogLocale[lang],
      alternateLocale: ogLocale[lang === "en" ? "fr" : "en"],
      images: [{ url: "/main.jpeg", width: 1200, height: 1600, alt: identity.name }],
    },
    twitter: { card: "summary", title, description, images: ["/main.jpeg"] },
  };
}

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;

/** Who I am and what I sell, for the home pages. */
export function homeJsonLd(lang: Language) {
  const t = (value: L) => value[lang];
  const url = absolute(homePath(lang));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: identity.name,
        url,
        image: absolute("/main.jpeg"),
        email: `mailto:${identity.email}`,
        telephone: identity.phone,
        jobTitle: t(seo.jobTitle),
        description: t(seo.homeDescription),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: `${education[0].school}, ${t(education[0].schoolFull)}`,
        },
        knowsAbout: seo.knowsAbout,
        knowsLanguage: contact.languages.map((l) => l.name.en),
        sameAs: [identity.github, identity.linkedin],
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: t(seo.serviceName),
        url,
        image: absolute("/main.jpeg"),
        description: t(seo.homeDescription),
        founder: { "@id": PERSON_ID },
        email: identity.email,
        telephone: identity.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
        areaServed: [
          { "@type": "Country", name: "Morocco" },
          { "@type": "Country", name: "France" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Place", name: "Remote" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t(seo.serviceName),
          itemListElement: seo.services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: t(service) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: absolute("/"),
        name: identity.name,
        inLanguage: ["en", "fr"],
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

/** A case study as an article, plus its breadcrumb trail. */
export function caseJsonLd({
  lang,
  title,
  description,
  path,
  keywords,
  homeLabel,
}: {
  lang: Language;
  title: string;
  description: string;
  path: string;
  keywords: string[];
  homeLabel: string;
}) {
  const url = absolute(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        inLanguage: lang,
        image: absolute("/main.jpeg"),
        keywords: keywords.join(", "),
        author: { "@type": "Person", "@id": PERSON_ID, name: identity.name, url: absolute("/") },
        publisher: { "@type": "Person", "@id": PERSON_ID, name: identity.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: absolute(homePath(lang)) },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}

/** An article as a BlogPosting, plus its breadcrumb trail. */
export function articleJsonLd({
  lang,
  title,
  description,
  path,
  published,
  keywords,
  homeLabel,
}: {
  lang: Language;
  title: string;
  description: string;
  path: string;
  published: string;
  keywords: string[];
  homeLabel: string;
}) {
  const url = absolute(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        inLanguage: lang,
        datePublished: published,
        dateModified: published,
        image: absolute("/main.jpeg"),
        keywords: keywords.join(", "),
        author: { "@type": "Person", "@id": PERSON_ID, name: identity.name, url: absolute("/") },
        publisher: { "@type": "Person", "@id": PERSON_ID, name: identity.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: absolute(homePath(lang)) },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
    ],
  };
}

/** Renders structured data; `<` is escaped so content cannot close the tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
