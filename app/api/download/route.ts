import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "milan_pavlovic_cv.pdf");
  const data = await fs.readFileSync(filePath);

  const uint8Array = new Uint8Array(data);

  return new Response(uint8Array, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
