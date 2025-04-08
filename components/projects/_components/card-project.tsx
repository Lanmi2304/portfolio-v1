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

  console.log(active);
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
            "absolute top-0 left-0 h-full w-full items-center justify-center opacity-80 transition duration-300 md:bg-transparent md:group-hover/card:bg-black",
            isMobile && showOverlay && active === project.title
              ? "bg-black"
              : null,
          )}
        ></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-gray-50">
              {project.subject}
            </p>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>
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
            <Link href="/">
              <Radio />
              {!project.comingSoon ? "Live preview" : "Coming soon"}
            </Link>
          </Button>

          <Button
            className="flex cursor-pointer items-center gap-2"
            disabled={project.comingSoon}
            asChild
          >
            <Link href="/">
              <Github />
              {!project.comingSoon ? "Live preview" : "Coming soon"}
            </Link>
          </Button>
        </div>
        <div>
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            {project.title}
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
