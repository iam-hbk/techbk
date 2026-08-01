import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "TecHBK — Software development consulting. From first decision to daily operation.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080B12",
          color: "#F2F3F6",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 4, backgroundColor: "#2855F5" }} />
          <span style={{ fontSize: 28, fontWeight: 700 }}>TecHBK</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            Software, from first decision to daily operation.
          </span>
          <span style={{ fontSize: 26, color: "#AEB4BF" }}>
            Software development consulting — South Africa / DRC / Global
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#AEB4BF",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          <span>techbk.dev</span>
          <span>Currently available</span>
        </div>
      </div>
    ),
    size
  );
}
