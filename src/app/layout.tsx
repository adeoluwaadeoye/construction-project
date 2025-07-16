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

export const metadata: Metadata = {
  title: {
    default: "MYCLIENT | Construction Website Project",
    template: "%s | MYCLIENT",
  },
  description:
    "We design, build, and deliver durable homes and commercial structures across Nigeria — with a focus on quality, trust, and long-term value.",
  metadataBase: new URL("https://thebuilderng.netlify.app"),
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
    url: "https://thebuilderng.netlify.app",
    siteName: "MYCLIENT",
    images: [
      {
        url: "/og-image.jpg", // ✅ Must be in /public and accessible
        width: 1200,
        height: 630,
        alt: "MYCLIENT Construction Preview Image",
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
    images: ["/og-image.jpg"],
    creator: "@adeoluwaadeoye7",
  },
  icons: {
    icon: "/favicon.ico", // ✅ Make sure this exists in /public
    apple: "/apple-touch-icon.png", // ✅ Create 180x180 version for Apple devices
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
        {/* Optional: extra meta fallback in case OG doesn't hydrate */}
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MYCLIENT | Construction Website Project" />
        <meta property="og:description" content="Durable homes and commercial structures built with precision and trust." />
        <meta name="twitter:card" content="summary_large_image" />
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
