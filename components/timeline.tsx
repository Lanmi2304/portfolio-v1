"use client";
import { useIsMobile } from "@/lib/hooks/use-is-mobile";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const isMobile = useIsMobile();

  return (
    <div
      className="bg-background border-muted w-full border-t font-sans"
      ref={containerRef}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 md:px-10">
        <h3 className="text-foreground text-4xl font-bold md:text-4xl">
          Changelog from my journey 👨🏼‍💻
        </h3>
        <p className="text-foreground max-w-lg md:text-sm">
          At the beginning of 2023, I started exploring web development out of
          curiosity. Over time, it turned into something I truly enjoy and want
          to pursue professionally. Through online courses, personal projects,
          and constant learning, I’ve been gradually building up my skills.
          Right now, I’m working on a few projects and doing my best to improve
          every day. In the future, I’d love to work as a developer and keep
          growing in this field.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-1.5">
                <div className="border-muted h-4 w-4 rounded-full bg-neutral-800 p-2" />
              </div>
              <h3 className="foreground hidden text-xl font-bold md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4">
              <h3 className="text-foreground mb-4 block text-left text-2xl font-bold md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: !isMobile ? height - 100 + "px" : height - 200 + "px",
          }}
          className="absolute top-0 left-6 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
