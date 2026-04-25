"use client"

import { useState } from "react"
import { Cpu, HardDrive, MemoryStick, BadgeCheck, Flame, MessageCircle } from "lucide-react"

const laptops = [
  {
    id: 1,
    name: "Dell Latitude E7470",
    processor: "Intel Core i7-6600U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD IPS',
    price: 28999,
    originalPrice: 35000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: true,
  },
  {
    id: 2,
    name: "HP EliteBook 840 G5",
    processor: "Intel Core i5-8350U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14" FHD',
    price: 32999,
    originalPrice: 40000,
    condition: "Grade A+",
    warranty: "6 Months",
    isHotDeal: true,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    processor: "Intel Core i7-8650U",
    ram: "16GB DDR4",
    storage: "512GB NVMe",
    display: '14" FHD Touch',
    price: 38999,
    originalPrice: 48000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: false,
  },
  {
    id: 4,
    name: "Dell Latitude 5490",
    processor: "Intel Core i5-8350U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '14" HD',
    price: 24999,
    originalPrice: 30000,
    condition: "Grade B+",
    warranty: "3 Months",
    isHotDeal: true,
  },
  {
    id: 5,
    name: "HP ProBook 450 G6",
    processor: "Intel Core i5-8265U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: '15.6" FHD',
    price: 26999,
    originalPrice: 32000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: false,
  },
  {
    id: 6,
    name: "MacBook Air 2017",
    processor: "Intel Core i5",
    ram: "8GB LPDDR3",
    storage: "128GB SSD",
    display: '13.3" Retina',
    price: 34999,
    originalPrice: 45000,
    condition: "Grade A",
    warranty: "3 Months",
    isHotDeal: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function InventorySection() {
  const [showAll, setShowAll] = useState(false)
  const displayedLaptops = showAll ? laptops : laptops.slice(0, 6)

  return (
    <section id="inventory" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <Flame className="h-4 w-4" />
            Hot Deals
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Premium Inventory</h2>
          <p className="mt-4 text-slate-400">
            Hand-picked, tested, and certified laptops with warranty and transparent pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedLaptops.map((laptop) => (
            <div key={laptop.id} className="glass rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {laptop.isHotDeal && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                      <Flame className="h-3.5 w-3.5" />
                      HOT DEAL
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white">{laptop.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{laptop.display}</p>
                </div>
                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                  {laptop.condition}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/5 p-3 text-slate-300">
                  <Cpu className="mb-2 h-4 w-4 text-primary" />
                  {laptop.processor}
                </div>
                <div className="rounded-2xl bg-white/5 p-3 text-slate-300">
                  <MemoryStick className="mb-2 h-4 w-4 text-primary" />
                  {laptop.ram}
                </div>
                <div className="rounded-2xl bg-white/5 p-3 text-slate-300">
                  <HardDrive className="mb-2 h-4 w-4 text-primary" />
                  {laptop.storage}
                </div>
                <div className="rounded-2xl bg-white/5 p-3 text-slate-300">
                  <BadgeCheck className="mb-2 h-4 w-4 text-primary" />
                  {laptop.warranty}
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-white">{formatPrice(laptop.price)}</p>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="text-slate-500 line-through">
                      {formatPrice(laptop.originalPrice)}
                    </span>
                    <span className="font-medium text-green-400">
                      {Math.round(
                        ((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100
                      )}
                      % OFF
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919550191261?text=Hi%20Classic%20Computers,%20I%20want%20a%20quote%20for%20${encodeURIComponent(
                  laptop.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                <MessageCircle className="h-4 w-4" />
                Get Quote on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {laptops.length > 6 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="rounded-2xl border border-border px-8 py-4 font-semibold text-white transition hover:border-primary hover:bg-white/5"
            >
              {showAll ? "Show Less" : `View All ${laptops.length} Laptops`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}