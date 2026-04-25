"use client"

import { useEffect, useState } from "react"
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/20 p-2">
              <Monitor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-white">Classic Computers</p>
              <p className="text-xs text-slate-400">SR Nagar, Hyderabad</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919550191261"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-4 rounded-2xl border border-white/10 bg-slate-950/95 p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919550191261"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}