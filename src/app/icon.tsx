import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 112,
        }}
      >
        <div style={{ display: "flex", color: "#34e2c9", fontSize: 316 }}>A</div>
      </div>
    ),
    { ...size }
  );
}
