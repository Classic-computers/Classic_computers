"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"

export function YoutubeSection() {
  return (
    <section id="videos" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            <Play className="h-4 w-4" />
            YouTube Shorts
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Watch Our Latest Shorts</h2>
          <p className="mt-4 text-slate-400">
            Quick unboxings, live repairs, and honest reviews. See exactly what you're getting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <a
            href="https://www.youtube.com/@classic_computers/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group relative overflow-hidden rounded-3xl transition hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/50 to-black/70">
              <Image
                src="https://img.youtube.com/vi/PLACEHOLDER_SHORT_ID/hqdefault.jpg"
                alt="YouTube Shorts"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="rounded-full bg-red-600 p-4 shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white">Latest YouTube Shorts</h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-400">
                Watch Shorts
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@classic_computers"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group overflow-hidden rounded-3xl transition hover:-translate-y-1"
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/50 to-black/70">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/60 text-center">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">Full Channel</h3>
                  <p className="mt-2 text-slate-400">All videos & playlists</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white">Full YouTube Channel</h3>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-400">
                View Channel
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@classic_computers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            <Play className="h-5 w-5" />
            Subscribe to Classic Computers
          </a>
        </div>
      </div>
    </section>
  )
}