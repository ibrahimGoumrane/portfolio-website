import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    images: [{ url: "/main.png", width: 1200, height: 630, alt: "Ibrahim Goumrane" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Goumrane — AI / RAG / Agentic Systems Engineer",
    description,
    images: ["/main.png"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
