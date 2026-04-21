import { ImageResponse } from "next/og";

export const alt = "ARRIVIO - AI Super App for Newcomers Worldwide";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e0e7ff 100%)",
          color: "#0F172A"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, letterSpacing: "0.08em", fontWeight: 700, color: "#2563EB" }}>ARRIVIO</div>
          <div style={{ fontSize: 20, color: "#334155" }}>arrivioai.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 920 }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em" }}>
            AI Super App for Newcomers Worldwide
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.25, color: "#334155" }}>
            Global guidance for jobs, housing, credit, language, and immigration.
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#1e293b" }}>Global AI platform for immigrant success</div>
      </div>
    ),
    size
  );
}
