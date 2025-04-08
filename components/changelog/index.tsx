import Image from "next/image";

export function ChangeLog() {
  return (
    <div className="grid gap-20 p-4 pt-10 md:p-10">
      <div className="grid gap-4">
        <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-4xl">
          Changelog from my journey
        </h3>
        <p className="text-foreground/80">
          Unfortunately there is not yet employments in IT industry for me. I
          started my journey in 07.2024{" "}
        </p>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary size-6 rounded-full ring-4"></div>
          <p className="text-foreground/70 text-3xl">Error 404 ;(</p>
        </div>

        <Image
          src={"/images/404.png"}
          alt="Not found image"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
