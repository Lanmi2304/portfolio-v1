import { Timeline } from "@/components/timeline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Changelog() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Successfully completed a comprehensive program at ITAcademy,
            specializing in FrontEnd JavaScript Web development
          </p>
          <div className="w-full">
            <Image
              src="/images/it-academy.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-foreground/70 mb-8 font-normal">
            In 2024, I wanted to deepen my understanding, so I took a few
            high-quality courses on Udemy, focusing on JavaScript and React –
            the technologies I’m most passionate about and plan to work with
            professionally. Some of the courses I completed:
          </p>
          <Link
            href="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=CP130525"
            className="italic"
          >
            🔗 React – The Complete Guide (incl. Redux) by Maximilian
            Schwarzmüller
          </Link>
          <Link
            href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?kw=react&src=sac&couponCode=CP130525"
            className="italic"
          >
            🔗 The Complete JavaScript Course by Jonas Schmedtmann
          </Link>
          <div className="text-foreground/70 mt-4 grid gap-2">
            A few months later, in the middle of the year landed an internship
            at HonoMedia
            <h4 className="text-xl font-semibold text-purple-400">
              {" "}
              - HonoMedia internship
            </h4>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div className="flex flex-col gap-4">
          <p className="text-foreground mb-4 font-normal">
            My first website for a client! 😁🥳
          </p>
          <Link href="https://www.polo-swim.com" className="hover:underline">
            🔗 PoloSwim
          </Link>
          <Image
            src={"/images/polo-swim.png"}
            alt={"Polo Swim hero"}
            width={500}
            height={500}
            className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
