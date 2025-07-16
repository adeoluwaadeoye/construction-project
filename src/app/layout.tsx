// app/layout.tsx
import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// Font Configurations
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// ✅ Base domain (change if self-hosted)
const siteUrl = "https://thebuilderng.netlify.app";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: {
    default: "MYCLIENT | Construction Website Project",
    template: "%s | MYCLIENT",
  },
  description:
    "We design, build, and deliver durable homes and commercial structures across Nigeria — with a focus on quality, trust, and long-term value.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Construction",
    "MYCLIENT",
    "Building",
    "Nigeria",
    "Engineering",
    "Contractor",
    "Real estate",
    "Civil works",
  ],
  openGraph: {
    title: "MYCLIENT | Construction Website Project",
    description:
      "Durable homes and commercial structures built with precision and trust. Explore our engineering and building services.",
    url: siteUrl,
    siteName: "MYCLIENT",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "MYCLIENT Construction OG Image",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYCLIENT | Construction Website Project",
    description:
      "Explore Nigeria's trusted construction partner. MYCLIENT builds value that lasts.",
    images: [ogImage],
    creator: "@adeoluwaadeoye7",
  },
  icons: {
    icon: "/icon.webp",
    shortcut: "/icon.webp",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 🔁 Redundant fallback tags for full OG support */}
        <meta property="og:title" content="MYCLIENT | Construction Website Project" />
        <meta
          property="og:description"
          content="Durable homes and commercial structures built with precision and trust."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MYCLIENT | Construction Website Project" />
        <meta
          name="twitter:description"
          content="Explore Nigeria's trusted construction partner. MYCLIENT builds value that lasts."
        />
        <meta name="twitter:image" content={ogImage} />
      </head>
      <body
        className={`
          ${jost.variable} 
          ${cormorant.variable} 
          font-sans antialiased
        `}
      >
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
