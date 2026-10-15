import type { Metadata } from "next";
import { Alfa_Slab_One, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const display = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const text = Roboto_Condensed({ subsets: ["latin"], variable: "--font-text" });

export const metadata: Metadata = {
  title: "Sanjay Srinivasan | Research & Projects",
  description:
    "Sanjay Srinivasan, high school ML researcher: DeepScope (published in Applied Water Science), computational hydrogel design (Regeneron ISEF 4th Place Grand Award), and UW lab research.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
