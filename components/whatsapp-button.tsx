"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919550191261?text=Hi%20Classic%20Computers!%20I%20need%20help%20with..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp-green animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 px-5 py-4 rounded-full bg-whatsapp-green text-white shadow-lg shadow-whatsapp-green/30 hover:shadow-xl hover:shadow-whatsapp-green/40 hover:scale-105 transition-all">
        <MessageCircle className="w-6 h-6" fill="white" />
        <span className="font-semibold hidden sm:block">Chat with us</span>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="glass px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap">
          Get instant quote! 💬
        </div>
      </div>
    </a>
  )
}
