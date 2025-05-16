"use client";
import { Button } from "@/components/ui/button";

export function GetInTouchButton() {
  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Button
      size="lg"
      className="mt-4 cursor-pointer"
      onClick={handleScrollToContact}
    >
      Get in touch
    </Button>
  );
}
