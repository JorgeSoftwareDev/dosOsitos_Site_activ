import "./globals.css";
import { RootLayoutProps } from "@/app/types";
import { Albert_Sans, Montserrat_Alternates, Pacifico } from "next/font/google";
import StructuredData from "./components/StructuredData";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dosositosbakery.com"),
  title: {
    default: "Dos Ositos Bakery",
    template: "%s | Dos Ositos Bakery",
  },
  description: "Cookies & Bars baked with Amor.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Cookie.ico",
  },
};

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="qguzFqKsr/bQ7rCXtKTTVg" async></script>
      </head>
      <body
        className={`min-h-screen ${albertSans.className} ${montserratAlternates.variable} ${pacifico.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
