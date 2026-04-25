"use client"

import { Monitor, Instagram, Youtube, Phone, MapPin, Heart } from "lucide-react"

const quickLinks = [
  { href: "#videos", label: "Watch Videos" },
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
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Monitor className="w-8 h-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  CLASSIC <span className="text-primary">COMPUTERS</span>
                </span>
              </div>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted destination for premium imported laptops and expert chip-level repairs in Hyderabad.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@classic_computers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-youtube-red/20 hover:text-youtube-red transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/classic_computers_sr_nagar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919550191261"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +91 95501 91261
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Opp. New Police Station,<br />
                    SR Nagar, Hyderabad
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Classic Computers. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
