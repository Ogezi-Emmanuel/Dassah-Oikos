"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (pathname === path) {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "FAQ", href: "/faq" },
  ]

  const useSolidNavbar = pathname !== "/" || isScrolled

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidNavbar
          ? "border-b border-rosegold/20 bg-[rgba(255,247,244,0.85)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Dassah Oikos Logo.png"
              alt="Dassah Oikos"
              width={220}
              height={76}
              sizes="(max-width: 768px) 160px, 220px"
              className="h-10 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className={`font-sans text-[0.72rem] uppercase tracking-[0.24em] transition-colors ${
                  useSolidNavbar ? "text-foreground/80 hover:text-burgundy" : "text-white/90 hover:text-rosegold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#booking"
              onClick={(e) => handleHashClick(e, "/#booking")}
              className="rounded-full border border-rosegold/30 bg-burgundy px-4 py-2.5 text-center font-sans text-[0.68rem] uppercase tracking-[0.18em] leading-tight text-white transition-all hover:scale-105 hover:bg-burgundy/90 md:px-6 md:text-[0.72rem] md:tracking-[0.22em]"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${useSolidNavbar ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-rosegold/15 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="font-sans text-lg text-foreground/80 transition-colors hover:text-burgundy"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#booking"
                onClick={(e) => handleHashClick(e, "/#booking")}
                className="rounded-full border border-rosegold/30 bg-burgundy px-5 py-3 text-center font-sans text-sm leading-tight text-white transition-all hover:bg-burgundy/90"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
