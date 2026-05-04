import type { Metadata } from "next";
import { Anton, Bebas_Neue, DM_Sans, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miami HEAT × Agora — East Plaza Pop-Up Activation Program",
  description:
    "Tiered activation buildouts for the East Plaza inside Kaseya Center. Three retainer tiers (Base $5K · Elevated $8K · Premium $10K) plus a tiered build menu with a stackable add-on catalog. Prepared by Agora Visuals for Miami HEAT.",
  keywords:
    "Miami HEAT, Agora Visuals, East Plaza, Kaseya Center, brand activation, pop-up, fabrication, retail buildout, sponsorship, NBA",
  openGraph: {
    title: "Miami HEAT × Agora — East Plaza Pop-Up Activation Program",
    description:
      "Retainer + tiered build + add-on catalog for the 26–27 NBA season activation cycle.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${dmSans.variable} ${shareTechMono.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
