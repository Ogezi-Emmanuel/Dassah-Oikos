import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

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
    icon: [{ url: "/Dassah Oikos Logo.jpeg", type: "image/jpeg" }],
    shortcut: [{ url: "/Dassah Oikos Logo.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/Dassah Oikos Logo.jpeg", type: "image/jpeg" }],
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
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
