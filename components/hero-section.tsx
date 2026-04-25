"use client"

import { Play, ChevronDown, PlayCircle, Shield, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              <PlayCircle className="h-4 w-4" />
              50K+ YouTube Subscribers | @classic_computers
            </div>

            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Watch.
              <span className="text-gradient block">Trust.</span>
              Buy.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Premium imported laptops and expert chip-level repairs. See our unboxings,
              witness our repairs, and make confident decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#videos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
              >
                <Play className="h-5 w-5" />
                Watch Our Videos
              </a>
              <a
                href="#inventory"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Browse Inventory
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="glass rounded-xl px-4 py-3">Warranty Included</div>
              <div className="glass rounded-xl px-4 py-3">Certified Technicians</div>
              <div className="glass rounded-xl px-4 py-3">Live Repair Videos</div>
            </div>
          </div>

          <div className="relative">
            <div className="glass glow-border rounded-3xl p-6">
              <div className="aspect-video rounded-2xl bg-slate-900/80 p-6">
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-slate-950/60 text-center">
                  <div className="mb-4 rounded-full bg-red-600 p-4">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-white">Featured Video</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Replace this area with your latest repair or unboxing video preview.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-4">
                <Shield className="mb-3 h-6 w-6 text-primary" />
                <p className="font-semibold text-white">Trusted Quality</p>
                <p className="mt-1 text-sm text-slate-400">Tested and verified devices</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <Award className="mb-3 h-6 w-6 text-primary" />
                <p className="font-semibold text-white">Expert Repairs</p>
                <p className="mt-1 text-sm text-slate-400">Chip-level service available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#videos" className="animate-float inline-flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm">Scroll to Explore</span>
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}