import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const ogAlt = `${profile.name} -- ${profile.role}`;
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#05060a",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(52,226,201,0.28), transparent 45%), radial-gradient(circle at 85% 25%, rgba(167,139,250,0.24), transparent 45%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", color: "#34e2c9", fontSize: 26 }}>
          {`~/${profile.name.toLowerCase().replace(/\s+/g, "-")}`}
        </div>
        <div style={{ display: "flex", color: "#e7e9ee", fontSize: 68, marginTop: 28 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", color: "#8b93a7", fontSize: 32, marginTop: 18, maxWidth: 900 }}>
          {profile.role}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
