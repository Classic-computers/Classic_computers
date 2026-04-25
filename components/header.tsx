"use client"

import { useState, useEffect } from "react"
import { Menu, X, Monitor, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#videos", label: "Videos" },
  { href: "#inventory", label: "Hot Deals" },
  { href: "#repairs", label: "Repairs" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Monitor className="w-8 h-8 text-primary group-hover:text-glow-blue transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">
                CLASSIC <span className="text-primary">COMPUTERS</span>
              </span>
              <p className="text-xs text-muted-foreground hidden sm:block">SR Nagar, Hyderabad</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919550191261"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <a
              href="https://wa.me/919550191261?text=Hi%20Classic%20Computers!%20I%20need%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-whatsapp-green text-white hover:bg-whatsapp-green/90 transition-colors font-medium text-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 px-4">
                <a
                  href="tel:+919550191261"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href="https://wa.me/919550191261?text=Hi%20Classic%20Computers!%20I%20need%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-whatsapp-green text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
