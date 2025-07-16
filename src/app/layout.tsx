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

// Metadata config
export const metadata: Metadata = {
  title: {
    default: "MYCLIENT | Construction Website Project",
    template: "%s | MYCLIENT",
  },
  description:
    "We design, build, and deliver durable homes and commercial structures across Nigeria — with a focus on quality, trust, and long-term value.",
  keywords: [
    "Construction",
    "MYCLIENT",
    "Building",
    "Nigeria",
    "Engineering",
    "Contractor",
    "Real estate",
    "Civil works",
    "Construction website",
    "MYCLIENT Nigeria",
  ],
  metadataBase: new URL("https://thebuilderng.netlify.app/"), // Change this to your domain
  openGraph: {
    title: "MYCLIENT | Construction Website Project",
    description:
      "Durable homes and commercial structures built with precision and trust. Explore our engineering and building services.",
    url: "https://thebuilderng.netlify.app/",
    siteName: "MYCLIENT",
    images: [
      {
        url: "/og-image.jpg", // Place this image in /public
        width: 1200,
        height: 630,
        alt: "MYCLIENT Construction Site",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYCLIENT | Construction Website Project",
    description:
      "Explore Nigeria's trusted construction partner. MYCLIENT builds value that lasts.",
    images: ["/og-image.jpg"],
    creator: "@adeoluwaadeoye7", // optional
  },
  icons: {
    icon: "/og-image.jpg",
    shortcut: "/og-image.jpg",
    apple: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
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
