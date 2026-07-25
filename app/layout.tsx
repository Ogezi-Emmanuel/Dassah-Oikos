import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import SiteBackground from "@/components/SiteBackground"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "DASSAH OÍKOS | Bespoke Couture Studio",
  description: "Masterpieces in Corsetry & Couture. Bespoke Bridal, Prom, and Occasion Wear. Crafted in Lagos, Shipped Worldwide.",
  keywords: "bespoke couture, luxury corsetry, custom bridal, prom dresses, occasion wear, Lagos fashion",
  icons: {
    icon: [{ url: "/Dassah Oikos Logo.png", type: "image/png" }],
    shortcut: [{ url: "/Dassah Oikos Logo.png", type: "image/png" }],
    apple: [{ url: "/Dassah Oikos Logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "DASSAH OÍKOS | Bespoke Couture Studio",
    description: "Masterpieces in Corsetry & Couture. Bespoke Bridal, Prom, and Occasion Wear. Crafted in Lagos, Shipped Worldwide.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} relative isolate min-h-screen overflow-x-hidden antialiased`}
      >
        <SiteBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
