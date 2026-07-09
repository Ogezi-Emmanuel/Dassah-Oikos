"use client"

import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              DASSAH OÍKOS
            </h3>
            <p className="text-gray-400 font-sans mb-6">
              Crafted in Lagos, Shipped Worldwide
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rosegold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <ul className="space-y-3 font-sans">
              <li className="flex items-center justify-center md:justify-end gap-2 text-gray-400">
                <MapPin size={16} className="text-rosegold" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 text-gray-400">
                <Mail size={16} className="text-rosegold" />
                <a
                  href="mailto:bookings@dassahoikos.com"
                  className="hover:text-rosegold transition-colors"
                >
                  bookings@dassahoikos.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2 text-gray-400">
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
          <Link href="/" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            About
          </Link>
          <Link href="/collections" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            Collections
          </Link>
          <Link href="/faq" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-rosegold transition-colors font-sans text-sm">
            Terms of Service
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-500 font-sans text-sm">
            © 2026 DASSAH OÍKOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
