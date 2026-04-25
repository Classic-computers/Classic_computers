"use client"

import { MapPin, Phone, Clock, MessageCircle, Navigation, Globe, PlayCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-blue-300">
            Visit Us
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-slate-400">
            Visit our store in SR Nagar or reach out on WhatsApp for instant quotes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Store Location</h3>
                  <p className="mt-2 whitespace-pre-line text-slate-400">
                    Opposite New Police Station,
                    {"\n"}SR Nagar, Hyderabad,
                    {"\n"}Telangana - 500038
                  </p>
                  <a
                    href="https://maps.google.com/?q=SR+Nagar+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-green-500/15 p-3">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Call or WhatsApp</h3>
                  <a href="tel:+919550191261" className="mt-2 block text-lg font-semibold text-white">
                    +91 95501 91261
                  </a>
                  <p className="mt-1 text-slate-400">Quick response guaranteed</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-500/15 p-3">
                  <Clock className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Business Hours</h3>
                  <p className="mt-2 text-slate-400">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-slate-400">Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-center gap-3 rounded-2xl p-5"
              >
                <Globe className="h-6 w-6 text-pink-400" />
                <span className="font-medium text-white transition-colors group-hover:text-pink-400">
                  Instagram
                </span>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-center gap-3 rounded-2xl p-5"
              >
                <PlayCircle className="h-6 w-6 text-red-400" />
                <span className="font-medium text-white transition-colors group-hover:text-red-400">
                  YouTube
                </span>
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="flex h-full min-h-[420px] flex-col justify-between rounded-2xl bg-slate-950/50 p-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Classic Computers</h3>
                <p className="mt-2 text-slate-400">SR Nagar, Hyderabad</p>

                <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center">
                  <MapPin className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-4 font-medium text-white">Open in Google Maps</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Use the directions button to navigate to our store.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919550191261?text=Hi%20Classic%20Computers,%20I%20want%20to%20visit%20the%20store"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white transition hover:bg-green-500"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Before You Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}