"use client"

import { Monitor, Phone, MapPin, Heart, Globe, PlayCircle } from "lucide-react"

const quickLinks = [
  { href: "#videos", label: "Watch Shorts" },
  { href: "#inventory", label: "Browse Laptops" },
  { href: "#repairs", label: "Repair Services" },
  { href: "#contact", label: "Contact Us" },
]

const services = [
  "Chip-Level Repair",
  "Motherboard Repair",
  "SSD/RAM Upgrade",
  "Battery Replacement",
  "Screen Replacement",
  "Data Recovery",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/15 p-2">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-white">Classic Computers</p>
                <p className="text-sm text-slate-400">SR Nagar, Hyderabad</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Premium imported laptops, honest Shorts, and expert chip-level repairs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="tel:+919550191261" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                +91 95501 91261
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>Opposite New Police Station, SR Nagar, Hyderabad</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/classic_computers_sr_nagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  aria-label="Instagram"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/@classic_computers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  aria-label="YouTube"
                >
                  <PlayCircle className="h-4 w-4" />
                </a>
                <a
                  href="https://share.google/qwdM2WZCl0P9waJTY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
                  aria-label="Google location"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {currentYear} Classic Computers. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-400" /> for better laptop buying
          </p>
        </div>
      </div>
    </footer>
  )
}