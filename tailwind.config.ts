import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2F67D8",
          dark: "#1F3256",
          light: "#F4EDE4",
          muted: "#4E607E",
          soft: "#E5ECE8"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      },
      maxWidth: {
        content: "1200px"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2F67D8, #4E79DB)",
        "hero-glow": "radial-gradient(circle at 18% 9%, rgba(79, 128, 216, 0.16), transparent 40%), radial-gradient(circle at 82% 12%, rgba(159, 178, 214, 0.24), transparent 43%)"
      }
    }
  },
  plugins: []
};

export default config;
