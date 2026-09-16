import type { Metadata } from "next";
import { Caveat, Oswald, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspira Impro Fest 2 · Bogotá 11–18 de octubre",
  description:
    "Festival de improvisación en Bogotá. Funciones, talleres montaje con Viviane Eggers y Marisol Correa, e intensivo con Jeff Gladstone. Teatro R101 y Estudio La Gata Cirko.",
  openGraph: {
    title: "Inspira Impro Fest 2",
    description:
      "Bogotá 11–18 de octubre. Invitado especial: Jeff Gladstone (Canadá).",
    images: ["/brand/cartel-fest.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${oswald.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
