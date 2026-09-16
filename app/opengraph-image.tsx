import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const alt = "Braedan Chappel — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#fafaf9",
          color: "#1c1917",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#78716c",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            marginTop: 16,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Braedan Chappel
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#57534e" }}>
          University of Guelph · Portfolio
        </div>
      </div>
    ),
    { ...size },
  )
}
