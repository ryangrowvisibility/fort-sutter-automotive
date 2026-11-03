import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-baskerville" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "Fort Sutter Automotive | Family-Owned Auto Repair in Midtown Sacramento | (916) 447-7182",
  description:
    "Family-owned auto repair shop at 1705 19th St in Midtown Sacramento. Oil changes, brakes, exhaust repair, engine diagnostics, tune-ups and maintenance. NAPA AutoCare Center. 4.8 stars from 59 Google reviews. Call (916) 447-7182.",
  openGraph: {
    title: "Fort Sutter Automotive | Midtown Sacramento Auto Repair",
    description: "Honest, family-owned auto repair in Midtown. 4.8 stars from 59 Google reviews. Call (916) 447-7182.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${baskerville.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
