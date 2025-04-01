import { Spotlight } from "@/components/spotlight";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SOCIALS } from "@/lib/configs/socials-config";
import { TECH_ICONS } from "@/lib/configs/tech-config";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="border-muted/20 relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-md border">
      <div className="relative flex h-fit w-full overflow-hidden bg-black/[0.96] p-10 antialiased">
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
        </div>
      </div>
      <div className="border-muted/20 relative grid gap-4 border bg-transparent p-4 backdrop-blur-xs md:p-10">
        <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0, 0, 0, 0.7),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen"></div>
        <div className="flex items-center gap-10">
          <Avatar className="size-30">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="grid text-lg">
            <p className="text-foreground/70 text-lg">
              Im 23y old web developer from Belgrade, Serbia
            </p>
            <div className="grid gap-1">
              <p className="text-foreground text-lg font-semibold">
                Familiar with
              </p>
              <div className="flex gap-4">
                {TECH_ICONS.map((icon) => (
                  <Image
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-2 grid gap-1">
              <p className="text-foreground text-lg font-semibold">Socials</p>

              <div className="flex gap-2">
                {SOCIALS.map((social) => (
                  <Link
                    key={social.id}
                    className="text-foreground/50 hover:text-foreground"
                    href={social.href.path}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
