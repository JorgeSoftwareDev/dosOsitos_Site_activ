import "./globals.css";
import { RootLayoutProps } from "@/app/types";
import { Albert_Sans, Montserrat_Alternates, Pacifico } from "next/font/google";

export const metadata = {
  title: "Dos Ositos Bakery",
  description: "Gourmet cookies and treats at reasonable prices",
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
