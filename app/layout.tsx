import type React from "react";
import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

// One family throughout; headlines use the width axis (see `.wide`).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const description =
  "AI engineer specialising in RAG architecture, LangGraph multi-agent orchestration and the GCP infrastructure underneath. Freelance, based in Casablanca.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibrahimgoumrane.dev"),
  title: {
    default: "Ibrahim Goumrane — AI / RAG / Agentic Systems Engineer",
    template: "%s · Ibrahim Goumrane",
  },
  description,
  keywords: [
    "RAG engineer",
    "agentic AI",
    "LangGraph",
    "retrieval augmented generation",
    "vector database",
    "Terraform",
    "GCP",
    "freelance AI engineer",
    "Casablanca",
  ],
  authors: [{ name: "Ibrahim Goumrane" }],
  creator: "Ibrahim Goumrane",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: "https://www.ibrahimgoumrane.dev",
    siteName: "Ibrahim Goumrane",
    title: "Ibrahim Goumrane — AI / RAG / Agentic Systems Engineer",
    description,
    images: [{ url: "/main.jpeg", width: 1200, height: 1600, alt: "Ibrahim Goumrane" }],
  },
  twitter: {
    card: "summary",
    title: "Ibrahim Goumrane — AI / RAG / Agentic Systems Engineer",
    description,
    images: ["/main.jpeg"],
  },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // No maximum-scale / user-scalable — pinch zoom stays available.
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
