import { Button } from "@/components/ui/button";
import { Github, Radio } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
  comingSoon?: boolean;
  subject: string;
  type: string;
  title: string;
  description: string;
  link: string;
  gitLink: string;
  image: string | StaticImageData;
  dev?: boolean;
}

export function ProjectCard1({ project }: { project: Project }) {
  return (
    <div className="group/card flex h-fit w-full flex-col justify-between rounded-xl border p-2.5 transition-all hover:scale-105 md:h-[450px]">
      <div>
        <div className="mb-3 flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <Image src={project.image} alt={project.title} className="rounded-md" />

        <div className="mt-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mb-2 text-sm text-white">{project.type}</p>
          {project.dev && (
            <p className="text-sm text-amber-500">⚠️ In Development</p>
          )}
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-3 flex w-full flex-col gap-2">
        <Button
          className="text-foreground flex cursor-pointer items-center gap-2 border bg-transparent"
          disabled={project.comingSoon}
          asChild
        >
          <Link href={project.link} rel="noopener noreferrer" target="_blank">
            <Radio />
            {!project.comingSoon ? "Live preview" : "Coming soon"}
          </Link>
        </Button>

        <Button
          className="text-foreground flex cursor-pointer items-center gap-2 border bg-transparent"
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
    </div>
  );
}
