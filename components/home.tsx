"use client";

import { Hero } from "./hero";
import { Work } from "./work";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Toolbox } from "./stack";

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Projects />
      <Toolbox />
    </>
  );
}
