import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Open_Sans,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export const metadata: Metadata = {
  title: "Tarun R S | Software Engineer - AI Agents, Full-Stack & Mobile",
  description:
    "Portfolio of Tarun R S, Software Engineer at Prodoc AI. Production AI agents, MCP tool servers, full-stack web and Flutter mobile apps.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} ${montserrat.variable} ${poppins.variable} ${openSans.variable} ${interSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
