import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0e15",
        }}
      >
        <div style={{ display: "flex", color: "#34e2c9", fontSize: 112 }}>A</div>
      </div>
    ),
    { ...size }
  );
}
