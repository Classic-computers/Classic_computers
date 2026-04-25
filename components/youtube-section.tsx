"use client"

import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"

const shorts = [
  { id: "9mlpfUpG0f8", title: "Classic Computers Short 1" },
  { id: "ZmLPP3EeIBU", title: "Classic Computers Short 2" },
  { id: "XhxEpC9bnRg", title: "Classic Computers Short 3" },
  { id: "GEvOKEHrwCo", title: "Classic Computers Short 4" },
  { id: "JhhnFOKeIKg", title: "Classic Computers Short 5" },
  { id: "7if5nLyG-FA", title: "Classic Computers Short 6" },
  { id: "i0gLziVagxc", title: "Classic Computers Short 7" },
  { id: "ADe9H87hNJQ", title: "Classic Computers Short 8" },
  { id: "bHjXxL2FaeY", title: "Classic Computers Short 9" },
  { id: "wkiIKlwrUIA", title: "Classic Computers Short 10" },
  { id: "XGoG6GT3-xY", title: "Classic Computers Short 11" },
  { id: "wNjoQazoTqY", title: "Classic Computers Short 12" },
  { id: "yYnW7NKZUWo", title: "Classic Computers Short 13" },
  { id: "_frJDu169wM", title: "Classic Computers Short 14" },
  { id: "B7dv2gbudU8", title: "Classic Computers Short 15" },
  { id: "J5IF9IvYrnU", title: "Classic Computers Short 16" },
  { id: "5c4JfARHaSY", title: "Classic Computers Short 17" },
  { id: "O3Pk9d18d88", title: "Classic Computers Short 18" },
  { id: "V-hT1EZqTrk", title: "Classic Computers Short 19" },
  { id: "zdF7Kt_aOm0", title: "Classic Computers Short 20" },
  { id: "0sgjD3gGr5g", title: "Classic Computers Short 21" },
  { id: "g2vsQHgUTmw", title: "Classic Computers Short 22" },
  { id: "9Uk_vhST3Og", title: "Classic Computers Short 23" },
  { id: "IMGLeXQWxPA", title: "Classic Computers Short 24" },
  { id: "hEYo4RvEDlE", title: "Classic Computers Short 25" },
  { id: "aHO6hPZLmIk", title: "Classic Computers Short 26" },
  { id: "QT2WpzQ9FYY", title: "Classic Computers Short 27" },
]

export function YoutubeSection() {
  return (
    <section id="videos" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            <Play className="h-4 w-4" />
            YouTube Shorts
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Watch Our Latest Shorts
          </h2>
          <p className="mt-4 text-slate-400">
            Quick laptop demos, unboxings, repairs, and shop updates from Classic Computers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shorts.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/shorts/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group overflow-hidden rounded-3xl transition hover:-translate-y-1"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-red-600 p-4 shadow-lg transition group-hover:scale-110">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-white">
                  {video.title}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-400">
                  Watch Short
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@classic_computers/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            <Play className="h-5 w-5" />
            View All Shorts
          </a>
        </div>
      </div>
    </section>
  )
}