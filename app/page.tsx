import { ChangeLog } from "@/components/changelog";
import { CodeBlock } from "@/components/codeblock";
import { ContactMe } from "@/components/contact-me";
import { DownloadButton } from "@/components/download/button-download";
import { Info } from "@/components/info";
import { Projects } from "@/components/projects";
import { Spotlight } from "@/components/spotlight";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils/cn";

export default function Home() {
  return (
    <div className="border-muted relative mx-auto max-w-3xl overflow-hidden rounded-md border">
      <div className="relative flex h-fit w-full overflow-hidden bg-black/[0.96] p-4 antialiased md:p-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
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
            Fullstack Web developer
          </h3>

          <div className="flex items-center gap-4">
            <Button size="lg" className="mt-4 cursor-pointer">
              Get in touch
            </Button>
            <DownloadButton />
          </div>
        </div>
      </div>
      <Info />
      <CodeBlock />
      <ChangeLog />
      <Projects />
      <ContactMe />
    </div>
  );
}
