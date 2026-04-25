"use client"

import { Play, ChevronDown, Youtube, Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/90 via-background/70 to-background z-10" />
        {/* Video placeholder - replace with actual video */}
        <div className="w-full h-full bg-gradient-to-br from-deep-blue via-background to-secondary flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Youtube className="w-4 h-4 text-youtube-red" />
            <span className="text-sm font-medium text-muted-foreground">
              50K+ YouTube Subscribers | @classic_computers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
            <span className="text-gradient">Watch.</span>
            <span className="text-foreground"> Trust.</span>
            <span className="text-accent"> Buy.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            Premium imported laptops & expert chip-level repairs. 
            See our unboxings. Witness our repairs. Make confident decisions.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Warranty Included</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Play className="w-5 h-5 text-youtube-red" />
              <span>Live Repair Videos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <a
              href="https://www.youtube.com/@classic_computers"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-youtube-red hover:bg-youtube-red/90 text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-youtube-red/25"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Videos
            </a>
            <a
              href="#inventory"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass hover:bg-white/10 font-semibold text-lg transition-all border border-border hover:border-primary"
            >
              Browse Inventory
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#videos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-medium">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
