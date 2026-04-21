import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrivioai.com"),
  title: {
    default: "ARRIVIO | AI Super App for Newcomers Worldwide",
    template: "%s | ARRIVIO"
  },
  description:
    "ARRIVIO is the AI super app helping newcomers navigate jobs, housing, credit, language, and immigration systems worldwide.",
  openGraph: {
    title: "ARRIVIO | AI Super App for Newcomers Worldwide",
    description:
      "ARRIVIO is building global AI-powered relocation tools for immigrants and newcomers.",
    url: "https://arrivioai.com",
    siteName: "ARRIVIO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ARRIVIO - AI Super App for Newcomers Worldwide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ARRIVIO | AI Super App for Newcomers Worldwide",
    description:
      "Jobs, housing, credit, language, and immigration guidance powered by AI.",
    images: [
      {
        url: "/twitter-image",
        alt: "ARRIVIO - AI Super App for Newcomers Worldwide"
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-dark focus:shadow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
