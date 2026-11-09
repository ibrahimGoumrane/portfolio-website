import type React from "react";
import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { seo } from "@/lib/content";
import { SITE_URL } from "@/lib/routes";
import "./globals.css";

// One family throughout; headlines use the width axis (see `.wide`).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

// Site-wide defaults only; each page sets its own title, description,
// canonical URL and language alternates (see lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: seo.homeTitle.en, template: "%s | Ibrahim Goumrane" },
  description: seo.homeDescription.en,
  authors: [{ name: "Ibrahim Goumrane", url: SITE_URL }],
  creator: "Ibrahim Goumrane",
  robots: { index: true, follow: true },
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
