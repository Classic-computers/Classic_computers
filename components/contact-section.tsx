"use client"

import { MapPin, Phone, Clock, MessageCircle, Navigation, Globe } from "lucide-react"
export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">Visit Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visit our store in SR Nagar or reach out on WhatsApp for instant quotes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="glass rounded-3xl p-8 hover:border-primary/30 border border-transparent transition-all">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Store Location</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Opposite New Police Station,<br />
                    SR Nagar, Hyderabad,<br />
                    Telangana - 500038
                  </p>
                  <a
                    href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass rounded-3xl p-8 hover:border-primary/30 border border-transparent transition-all">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call or WhatsApp</h3>
                  <a
                    href="tel:+919550191261"
                    className="text-2xl font-bold text-primary hover:underline block mb-2"
                  >
                    +91 95501 91261
                  </a>
                  <p className="text-muted-foreground text-sm">
                    Quick response guaranteed
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass rounded-3xl p-8 hover:border-primary/30 border border-transparent transition-all">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Saturday: <span className="text-foreground font-medium">10:00 AM - 8:00 PM</span></p>
                    <p>Sunday: <span className="text-foreground font-medium">11:00 AM - 5:00 PM</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/classic_computers_sr_nagar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-2xl p-5 flex items-center justify-center gap-3 hover:bg-pink-500/10 hover:border-pink-500/30 border border-transparent transition-all group"
              >
                <Instagram className="w-6 h-6 text-pink-400" />
                <span className="font-medium group-hover:text-pink-400 transition-colors">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@classic_computers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass rounded-2xl p-5 flex items-center justify-center gap-3 hover:bg-youtube-red/10 hover:border-youtube-red/30 border border-transparent transition-all group"
              >
                <Youtube className="w-6 h-6 text-youtube-red" />
                <span className="font-medium group-hover:text-youtube-red transition-colors">YouTube</span>
              </a>
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="relative">
            <div className="glass rounded-3xl overflow-hidden h-full min-h-[500px] flex flex-col">
              {/* Map Area */}
              <div className="flex-1 bg-gradient-to-br from-deep-blue via-secondary to-muted flex items-center justify-center relative">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Classic Computers</h3>
                  <p className="text-muted-foreground mb-6">SR Nagar, Hyderabad</p>
                  <a
                    href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                  }} />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 border-t border-border">
                <a
                  href="https://wa.me/919550191261?text=Hi!%20I%20want%20to%20visit%20your%20store."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Before You Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
