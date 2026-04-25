"use client"

import { Cpu, Zap, Shield, Clock, CheckCircle2, Play } from "lucide-react"

const repairServices = [
  {
    icon: Cpu,
    title: "Chip-Level Repair",
    description:
      "Expert BGA reballing, SMD component replacement, and IC chip repairs for all laptop brands.",
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
    <section id="repairs" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Expert Repairs
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Chip-Level Motherboard Repair
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Don&apos;t throw away your laptop. Our expert technicians can bring dead motherboards
              back to life with precision chip-level repairs.
            </p>

            <div className="mt-8 space-y-4">
              {repairServices.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="glass rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-primary/15 p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-950/60 text-center">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600">
                  <Play className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Watch Live Repair</h3>
                <p className="mt-2 text-slate-400">See how we fix motherboards</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">5000+</p>
                <p className="mt-1 text-xs text-slate-400">Repairs Done</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="mt-1 text-xs text-slate-400">Success Rate</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <Clock className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-white">24-48 Hours</p>
              </div>
            </div>

            <a
              href="https://wa.me/919550191261?text=Hi%20Classic%20Computers,%20I%20need%20a%20repair%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Get Free Diagnostic Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}