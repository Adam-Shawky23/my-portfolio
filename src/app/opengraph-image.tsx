import { ogAlt, ogContentType, ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-static";

export default function Image() {
  return renderOgImage();
}
