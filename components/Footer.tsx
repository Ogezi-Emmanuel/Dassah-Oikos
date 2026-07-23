"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/80 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/Dassah Oikos Logo.jpeg"
                alt="Dassah Oikos"
                width={220}
                height={72}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mb-6 font-sans text-foreground/70">
              Crafted in Lagos, Delivered Worldwide
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/d.a.s.s.a.h_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 transition-colors hover:text-rosegold"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <ul className="space-y-3 font-sans">
              <li className="flex items-center justify-center gap-2 text-foreground/70 md:justify-end">
                <MapPin size={16} className="text-rosegold" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-foreground/70 md:justify-end">
                <Mail size={16} className="text-rosegold" />
                <a
                  href="mailto:bookings@dassahoikos.com"
                  className="hover:text-rosegold transition-colors"
                >
                  bookings@dassahoikos.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-foreground/70 md:justify-end">
                <Phone size={16} className="text-rosegold" />
                <a
                  href="https://api.whatsapp.com/send?phone=2348132098926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rosegold transition-colors"
                >
                  +234 813 209 8926
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-border pt-8 flex flex-wrap justify-center gap-8 mb-8">
          <Link href="/" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            Home
          </Link>
          <Link href="/about" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            About
          </Link>
          <Link href="/collections" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            Collections
          </Link>
          <Link href="/faq" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-sans text-sm text-foreground/70 transition-colors hover:text-rosegold">
            Terms of Service
          </Link>
        </div>

        <div className="text-center">
          <p className="font-sans text-sm text-foreground/60">
            © 2026 DASSAH OÍKOS. All rights reserved.
          </p>
          <p className="mt-3 font-sans text-sm text-foreground/60">
            Engineered for Digital Sovereignty
          </p>
          <p className="mt-3 font-sans text-sm text-foreground/60">
            <a
              href="https://emmanuelogezi.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rosegold transition-colors"
            >
              Engineered by Emmanuel Ogezi
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
