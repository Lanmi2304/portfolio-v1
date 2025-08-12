"use client";
import { PROJECTS } from "@/public/data/projects";
import { ProjectCard1 } from "./_components/card-project-1";
// import { useState } from "react";

export function Projects() {
  // const [active, setActive] = useState<undefined | string>(undefined);
  return (
    <div className="border-muted grid gap-10 border-t p-4 pt-10 md:p-10">
      <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-4xl">
        My projects
      </h3>

      <p className="text-foreground/50 text-sm">
        * If you are on mobile device click the card to preview the project,
        otherwise just hover over the desired one *
      </p>

      <div className="grid grid-rows-1 gap-4 md:grid-cols-2">
        {PROJECTS.map((project) => (
          // <div key={project.title} onClick={() => setActive(project.title)}>
          <div key={project.title}>
            <ProjectCard1 project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
