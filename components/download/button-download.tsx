"use client";

import { useRef } from "react";
import { Button } from "../ui/button";
import { getBaseUrl } from "@/lib/utils/get-base-url";

export function DownloadButton() {
  const linkRef = useRef(null);

  const handleDownload = async () => {
    const response = await fetch(`${getBaseUrl()}api/download`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = linkRef.current as HTMLAnchorElement | null;

    if (!link) {
      return;
    }

    link.href = url;
    link.download = "milan_pavlovic_resume.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <a ref={linkRef} style={{ display: "none" }}></a>
      <Button
        size="lg"
        variant="secondary"
        className="mt-4 cursor-pointer"
        onClick={handleDownload}
      >
        Download resume
      </Button>
    </>
  );
}
