"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-white/30 bg-[rgba(255,247,244,0.72)] px-6 pb-8 pt-16 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        {/* 3-Column Layout - utilizes middle space on laptop */}
        <div className="mb-12 grid gap-10 md:grid-cols-3 md:items-start md:gap-8 lg:gap-16">
          {/* COLUMN 1: Brand */}
          <div>
            <p className="mb-3 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-burgundy">
              Couture House Based in Lagos
            </p>
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/Dassah Oikos Logo.png"
                alt="Dassah Oikos"
                width={260}
                height={90}
                sizes="260px"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-sm font-sans leading-relaxed text-foreground/70">
              Bespoke Bridal, Prom, and Occasion Wear. Crafted in Lagos with love, delivered worldwide with pride.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/d.a.s.s.a.h_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-rosegold/20 bg-white/50 text-foreground/70 transition-all hover:bg-burgundy hover:text-white hover:border-burgundy"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links + Collections (MIDDLE - fills empty space) */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div>
              <p className="mb-5 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-burgundy">
                Explore
              </p>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link href="/" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-foreground/75 transition-colors hover:text-rosegold">
                    About The House
                  </Link>
                </li>
                <li>
                  <Link href="/the-house" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Ethos &amp; Stories
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Client Stories
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-foreground/75 transition-colors hover:text-rosegold">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-5 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-burgundy">
                Collections
              </p>
              <ul className="space-y-3 font-sans">
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Custom Bridal
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Aso Ebi Couture
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Luxury Corsetry
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Prom &amp; Red Carpet
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-foreground/75 transition-colors hover:text-rosegold">
                    Occasion Wear
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMN 3: Contact */}
          <div>
            <p className="mb-5 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-burgundy">
              Begin Your Journey
            </p>
            <ul className="space-y-5 font-sans">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-rosegold" />
                <span className="text-foreground/75">
                  Studio in Lagos, Nigeria
                  <br />
                  <span className="text-foreground/55 text-sm">Worldwide Orders Welcomed</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-rosegold" />
                <a
                  href="mailto:bookings@dassahoikos.com"
                  className="text-foreground/75 transition-colors hover:text-rosegold break-all"
                >
                  bookings@dassahoikos.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-rosegold" />
                <a
                  href="https://api.whatsapp.com/send?phone=2348132098926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/75 transition-colors hover:text-rosegold"
                >
                  +234 813 209 8926
                  <br />
                  <span className="text-foreground/55 text-sm">WhatsApp Preferred</span>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/#booking"
                className="inline-flex w-full justify-center rounded-full border border-rosegold/30 bg-burgundy px-8 py-4 text-center font-sans text-[0.72rem] uppercase tracking-[0.22em] text-white transition-all hover:scale-[1.02] hover:bg-burgundy/90"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Links + Legal */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/30 pt-8">
          <Link href="/privacy-policy" className="font-sans text-[0.78rem] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-rosegold">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-sans text-[0.78rem] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-rosegold">
            Terms of Service
          </Link>
        </div>

        {/* Copyright & Credits */}
        <div className="text-center">
          <p className="font-sans text-sm text-foreground/60">
            © 2026 DASSAH OÍKOS. All rights reserved. Bespoke Couture Studio.
          </p>
          <p className="mt-3 font-sans text-sm text-foreground/60">
            Crafted in Lagos 🇳🇬 · Delivered Worldwide 🌍 · Engineered for Digital Sovereignty
          </p>
          <p className="mt-3 font-sans text-sm text-foreground/60">
            <a
              href="https://emmanuelogezi.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-rosegold"
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
