import { CodeBlock } from "@/components/codeblock";
import { ContactMe } from "@/components/contact-me";
import { DownloadButton } from "@/components/download/button-download";
import { Info } from "@/components/info";
import { Projects } from "@/components/projects";
import { Spotlight } from "@/components/spotlight";
import { Changelog } from "@/components/timeline/_components/timeline";
import { cn } from "@/lib/utils/cn";
import { Cog } from "lucide-react";
import { GetInTouchButton } from "./_components/get-in-touch-btn";

export default function Home() {
  return (
    <div className="border-muted relative mx-auto max-w-3xl overflow-hidden rounded-md border">
      <div className="relative z-0 flex h-fit w-full overflow-hidden bg-black/[0.96] p-4 antialiased md:p-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 mask-r-from-90% mask-b-from-20% [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />

        <Spotlight
          className="-top-40 -left-20 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Hi, I am Milan Pavlovic <br />
          </h1>
          <h3 className="bg-opacity-50 text mt-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl text-transparent">
            Frontend Web developer
          </h3>

          <div className="flex items-center gap-4 brightness-100">
            <GetInTouchButton />
            <DownloadButton />
          </div>
        </div>
      </div>
      <Info />
      <CodeBlock />
      <Changelog />
      <Projects />
      <ContactMe />

      <div className="border-muted fixed right-0 bottom-0 left-0 z-50 mx-auto flex h-20 max-w-3xl items-center gap-2 border bg-black p-4">
        <Cog className="size-14 md:size-8" />
        <p>
          Site is in the development phase, some features may not work as
          expected! 🔧
        </p>
      </div>
    </div>
  );
}
