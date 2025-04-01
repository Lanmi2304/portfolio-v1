import { TECH_ICONS } from "@/components/info/_configs/tech-config";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { SOCIALS } from "@/components/info/_configs/socials-config";
import Link from "next/link";

export function Info() {
  return (
    <div className="border-muted/20 relative grid gap-4 border bg-transparent p-4 backdrop-blur-xs md:p-10">
      <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0, 0, 0, 0.7),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="flex items-center gap-10">
        <Avatar className="size-30">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MP</AvatarFallback>
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
  );
}
