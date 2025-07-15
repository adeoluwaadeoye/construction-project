import type { Metadata } from "next";
import {
  Jost,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';


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
  title: "Build Project",
  description: "Professional website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
