import { TECH_ICONS } from "@/components/info/_configs/tech-config";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { SOCIALS } from "@/components/info/_configs/socials-config";
import Link from "next/link";

export function Info() {
  return (
    <div className="border-muted relative grid gap-4 border-t border-b bg-transparent p-4 backdrop-blur-xs md:p-10">
      <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0, 0, 0, 0.7),rgba(255,255,255,0))] absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="flex items-center gap-10">
        <Avatar className="size-30 bg-contain">
          <AvatarImage
            src="/images/milan_pavlovic.jpg"
            className="object-cover"
          />
          <AvatarFallback>MP</AvatarFallback>
        </Avatar>
        <div className="grid text-lg">
          <p className="text-foreground/70 text-lg">
            I&apos;m 23 years old web developer from Belgrade, Serbia
          </p>
          <div className="grid gap-1">
            <p className="text-foreground text-lg font-semibold">
              Familiar with
            </p>

            <div className="flex gap-4 overflow-y-auto">
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
            <ul className="flex gap-2">
              {SOCIALS.map((social) => (
                <li key={social.key}>
                  <Link
                    className="text-foreground/50 hover:text-foreground"
                    href={social.href.path}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
