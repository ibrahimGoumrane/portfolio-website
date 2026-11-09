"use client";

import { Hero } from "./hero";
import { Work } from "./work";
import { Testimonials } from "./testimonials";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Toolbox } from "./stack";

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Testimonials />
      <Experience />
      <Projects />
      <Toolbox />
    </>
  );
}
