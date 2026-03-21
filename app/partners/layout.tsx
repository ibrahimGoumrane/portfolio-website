import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Partners — Ibrahim Goumrane | White-label Development",
  description:
    "White-label development partner based in Casablanca. React, Laravel, Spring Boot, AI/ML. Same timezone as Paris & London.",
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
