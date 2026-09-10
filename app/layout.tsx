import type { Metadata } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const displayFont = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://melissa-akinyi.vercel.app"; // update after deployment

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melissa Akinyi | Physiotherapist & Health Systems Researcher",
    template: "%s | Melissa Akinyi",
  },
  description:
    "Melissa Akinyi is a physiotherapist and emerging health systems researcher interested in health services research, patient-centred care, rehabilitation, healthcare quality, digital health and global health.",
  openGraph: {
    title: "Melissa Akinyi | Physiotherapist & Health Systems Researcher",
    description:
      "Physiotherapist and emerging health systems researcher working at the intersection of health services research, patient-centred care, rehabilitation, digital health and global health.",
    url: siteUrl,
    siteName: "Melissa Akinyi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Akinyi | Physiotherapist & Health Systems Researcher",
    description:
      "Physiotherapist and emerging health systems researcher — health systems, health services research, rehabilitation, digital health.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
