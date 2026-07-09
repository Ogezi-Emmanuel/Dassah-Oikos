"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (pathname === path || path === '/') {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setIsMobileMenuOpen(false)
        }
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Atelier", href: "/#atelier" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-onyx/80 backdrop-blur-xl border-b border-rosegold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-white">
            DASSAH OÍKOS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-gray-300 hover:text-rosegold transition-colors font-sans text-sm tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#booking"
              onClick={(e) => handleHashClick(e, "/#booking")}
              className="bg-burgundy hover:bg-burgundy/90 text-white px-6 py-2 rounded-full border border-rosegold/30 transition-all hover:scale-105 font-sans text-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
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
            className="md:hidden bg-onyx/95 backdrop-blur-xl border-b border-rosegold/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="text-gray-300 hover:text-rosegold transition-colors font-sans text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#booking"
                onClick={(e) => handleHashClick(e, "/#booking")}
                className="bg-burgundy hover:bg-burgundy/90 text-white px-6 py-3 rounded-full border border-rosegold/30 transition-all text-center font-sans"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
