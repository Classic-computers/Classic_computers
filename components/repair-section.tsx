"use client"

import { Wrench, Cpu, Zap, Shield, Clock, CheckCircle2, Play } from "lucide-react"

const repairServices = [
  {
    icon: Cpu,
    title: "Chip-Level Repair",
    description: "Expert BGA reballing, SMD component replacement, and IC chip repairs for all laptop brands.",
  },
  {
    icon: Zap,
    title: "No Power Issues",
    description: "Dead laptop? No charging? We diagnose and fix power IC failures and short circuits.",
  },
  {
    icon: Shield,
    title: "Motherboard Repairs",
    description: "Complete motherboard diagnostics and repairs with professional equipment.",
  },
]

const features = [
  "Free Diagnostic",
  "90-Day Repair Warranty",
  "Genuine Components",
  "Same Day Service*",
  "Transparent Pricing",
  "Live Repair Videos",
]

export function RepairSection() {
  return (
    <section id="repairs" className="py-24 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-semibold">Expert Repairs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chip-Level <span className="text-gradient">Motherboard Repair</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t throw away your laptop. Our expert technicians can bring 
            dead motherboards back to life with precision chip-level repairs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Services */}
          <div className="space-y-6">
            {repairServices.map((service, index) => (
              <div
                key={service.title}
                className="group glass rounded-2xl p-6 hover:bg-white/5 transition-all hover:scale-[1.02] border border-transparent hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Video Showcase */}
          <div className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden glass glow-border">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-secondary to-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-youtube-red/90 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer animate-pulse-glow">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">Watch Live Repair</p>
                  <p className="text-muted-foreground text-sm">See how we fix motherboards</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  LIVE REPAIR
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-xs text-muted-foreground">Repairs Done</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  <Clock className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-xs text-muted-foreground">24-48 Hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/919550191261?text=Hi!%20I%20need%20a%20laptop%20repair%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Wrench className="w-5 h-5" />
            Get Free Diagnostic Quote
          </a>
        </div>
      </div>
    </section>
  )
}
