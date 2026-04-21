import { ImageResponse } from "next/og";

export const alt = "ARRIVIO - AI Super App for Newcomers Worldwide";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 45%, #eef2ff 100%)",
          color: "#0F172A"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              fontSize: 34,
              letterSpacing: "0.08em",
              fontWeight: 700,
              color: "#2563EB"
            }}
          >
            ARRIVIO
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#334155"
            }}
          >
            arrivioai.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 920 }}>
          <div style={{ fontSize: 68, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em" }}>
            AI Super App for Newcomers Worldwide
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.25, color: "#334155" }}>
            Jobs, housing, credit, language, and immigration guidance powered by AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 20,
            color: "#1e293b"
          }}
        >
          <div style={{ padding: "10px 16px", borderRadius: 9999, background: "#dbeafe" }}>Built for immigrants worldwide</div>
          <div style={{ padding: "10px 16px", borderRadius: 9999, background: "#e0e7ff" }}>AI-powered guidance</div>
        </div>
      </div>
    ),
    size
  );
}
