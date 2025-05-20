"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { cn } from "@/lib/utils/cn";
import { Github, Radio } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Project {
  comingSoon?: boolean;
  subject: string;
  type: string;
  title: string;
  description: string;
  link: string;
  gitLink: string;
  image: string;
  dev?: boolean;
}

export function ProjectCard({
  project,
  active,
}: {
  project: Project;
  active: string | undefined;
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const isMobile = useIsMobile();

  const handleShowOverlay = () => {
    if (!isMobile) return;
    setShowOverlay(true);
  };

  return (
    <div className="group/card w-full">
      <div
        onClick={handleShowOverlay}
        className={cn(
          "card backgroundImage relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-xl p-4 shadow-xl",
          "bg-cover bg-no-repeat",
        )}
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-full opacity-80 transition duration-300 md:bg-transparent md:group-hover/card:bg-black",
            isMobile && showOverlay && active === project.title
              ? "bg-black"
              : null,
          )}
        ></div>

        <div className="flex flex-col">
          <p className="relative z-10 text-base font-normal text-gray-50">
            {project.subject}
          </p>
          <p className="text-foreground relative z-10 text-sm">
            {project.type}
          </p>
        </div>

        <div
          className={cn(
            "relative z-10 hidden justify-center gap-4 opacity-100 md:group-hover/card:flex",
            isMobile && showOverlay && active === project.title
              ? "flex"
              : "hidden",
          )}
        >
          <Button
            className="flex cursor-pointer items-center gap-2"
            disabled={project.comingSoon}
            asChild
          >
            <Link href={project.link} rel="noopener noreferrer" target="_blank">
              <Radio />
              {!project.comingSoon ? "Live preview" : "Coming soon"}
            </Link>
          </Button>

          <Button
            className="flex cursor-pointer items-center gap-2"
            disabled={project.comingSoon}
            asChild
          >
            <Link
              href={project.gitLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github />
              {!project.comingSoon ? "Code" : "Coming soon"}
            </Link>
          </Button>
        </div>
        <div
          className={cn(
            "hidden group-hover/card:block",
            isMobile && active === project.title ? "block" : "hidden",
          )}
        >
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            {project.title}
          </h1>
          <p className="relative z-10 my-4 h-20 text-sm font-normal text-gray-50">
            {project.description}
          </p>

          {project.dev && (
            <p className="relative z-10 font-semibold text-amber-600">
              *This project is still in development🔧*
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
