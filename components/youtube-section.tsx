"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink, PlayCircle } from "lucide-react"
// Featured YouTube videos - replace with your actual video IDs
const videos = [
  {
    id: "VIDEO_ID_1",
    title: "Dell Latitude E7470 Unboxing - Premium Business Laptop",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "25K",
    category: "Unboxing",
  },
  {
    id: "VIDEO_ID_2", 
    title: "HP Elitebook 840 G5 - Full Review & Specs",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "18K",
    category: "Review",
  },
  {
    id: "VIDEO_ID_3",
    title: "MacBook Pro Dead - Chip Level Repair Live",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "42K",
    category: "Repair",
  },
  {
    id: "VIDEO_ID_4",
    title: "Lenovo ThinkPad X1 Carbon - Best Business Laptop?",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "31K",
    category: "Unboxing",
  },
  {
    id: "VIDEO_ID_5",
    title: "Dell Motherboard No Power - Full Repair Tutorial",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "55K",
    category: "Repair",
  },
  {
    id: "VIDEO_ID_6",
    title: "HP ProBook vs EliteBook - Which Should You Buy?",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    views: "22K",
    category: "Comparison",
  },
]

const categories = ["All", "Unboxing", "Repair", "Review", "Comparison"]

export function YoutubeSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === activeCategory)

  return (
    <section id="videos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-youtube-red/10 text-youtube-red mb-6">
            <Youtube className="w-4 h-4" />
            <span className="text-sm font-semibold">YouTube Channel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Watch Before You <span className="text-gradient">Buy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent unboxings, live repairs, and honest reviews. 
            See exactly what you&apos;re getting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-youtube-red flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-medium text-white">
                    {video.category}
                  </span>
                </div>
                {/* Views Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-xs text-white">
                    {video.views} views
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@classic_computers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-youtube-red hover:bg-youtube-red/90 text-white font-semibold transition-all hover:scale-105"
          >
            <Youtube className="w-5 h-5" />
            View All Videos
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
