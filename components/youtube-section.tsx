"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink, PlayCircle } from "lucide-react"

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Dell Latitude E7470 Unboxing - Premium Business Laptop",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "25K",
    category: "Unboxing",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "HP EliteBook 840 G5 - Full Review & Specs",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "18K",
    category: "Review",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "MacBook Pro Dead - Chip Level Repair Live",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "42K",
    category: "Repair",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Lenovo ThinkPad X1 Carbon - Best Business Laptop?",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "31K",
    category: "Unboxing",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Dell Motherboard No Power - Full Repair Tutorial",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "55K",
    category: "Repair",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "HP ProBook vs EliteBook - Which Should You Buy?",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "22K",
    category: "Comparison",
  },
]

const categories = ["All", "Unboxing", "Repair", "Review", "Comparison"]

export function YoutubeSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory)

  return (
    <section id="videos" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            <PlayCircle className="h-4 w-4" />
            YouTube Channel
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Watch Before You Buy</h2>
          <p className="mt-4 text-slate-400">
            Transparent unboxings, live repairs, and honest reviews. See exactly what you're getting.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredVideos.map((video) => (
            <a
              key={`${video.title}-${video.category}`}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group overflow-hidden rounded-3xl transition hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                  <div className="rounded-full bg-red-600 p-4 shadow-lg">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {video.category}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {video.views} views
                </div>
              </div>

              <div className="p-5">
                <h3 className="line-clamp-2 text-lg font-semibold text-white">{video.title}</h3>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-red-400">
                  Watch Video
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            <PlayCircle className="h-5 w-5" />
            View All Videos
          </a>
        </div>
      </div>
    </section>
  )
}