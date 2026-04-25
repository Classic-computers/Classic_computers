"use client"

import { useState } from "react"
import { Cpu, HardDrive, MemoryStick, Battery, BadgeCheck, Flame, MessageCircle } from "lucide-react"

// Sample inventory - replace with your actual products
const laptops = [
  {
    id: 1,
    name: "Dell Latitude E7470",
    image: "/laptops/dell-latitude.jpg",
    processor: "Intel Core i7-6600U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    display: "14\" FHD IPS",
    price: 28999,
    originalPrice: 35000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: true,
    inStock: true,
  },
  {
    id: 2,
    name: "HP EliteBook 840 G5",
    image: "/laptops/hp-elitebook.jpg",
    processor: "Intel Core i5-8350U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: "14\" FHD",
    price: 32999,
    originalPrice: 40000,
    condition: "Grade A+",
    warranty: "6 Months",
    isHotDeal: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Lenovo ThinkPad T480",
    image: "/laptops/lenovo-thinkpad.jpg",
    processor: "Intel Core i7-8650U",
    ram: "16GB DDR4",
    storage: "512GB NVMe",
    display: "14\" FHD Touch",
    price: 38999,
    originalPrice: 48000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Dell Latitude 5490",
    image: "/laptops/dell-5490.jpg",
    processor: "Intel Core i5-8350U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: "14\" HD",
    price: 24999,
    originalPrice: 30000,
    condition: "Grade B+",
    warranty: "3 Months",
    isHotDeal: true,
    inStock: true,
  },
  {
    id: 5,
    name: "HP ProBook 450 G6",
    image: "/laptops/hp-probook.jpg",
    processor: "Intel Core i5-8265U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    display: "15.6\" FHD",
    price: 26999,
    originalPrice: 32000,
    condition: "Grade A",
    warranty: "6 Months",
    isHotDeal: false,
    inStock: true,
  },
  {
    id: 6,
    name: "MacBook Air 2017",
    image: "/laptops/macbook-air.jpg",
    processor: "Intel Core i5",
    ram: "8GB LPDDR3",
    storage: "128GB SSD",
    display: "13.3\" Retina",
    price: 34999,
    originalPrice: 45000,
    condition: "Grade A",
    warranty: "3 Months",
    isHotDeal: true,
    inStock: true,
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
    <section id="inventory" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-semibold">Hot Deals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-gradient">Inventory</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hand-picked, tested, and certified laptops. 
            All with warranty and transparent pricing.
          </p>
        </div>

        {/* Laptop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedLaptops.map((laptop, index) => (
            <div
              key={laptop.id}
              className="group relative glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hot Deal Badge */}
              {laptop.isHotDeal && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    <Flame className="w-3 h-3" />
                    HOT DEAL
                  </span>
                </div>
              )}

              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                  💻
                </div>
                {/* Condition Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs text-white">
                    <BadgeCheck className="w-3 h-3 text-green-400" />
                    {laptop.condition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {laptop.name}
                </h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Cpu className="w-4 h-4 text-primary" />
                    <span className="truncate">{laptop.processor.split(" ").slice(-1)[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MemoryStick className="w-4 h-4 text-primary" />
                    <span>{laptop.ram.split(" ")[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <HardDrive className="w-4 h-4 text-primary" />
                    <span>{laptop.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span>{laptop.warranty}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-foreground">
                      {formatPrice(laptop.price)}
                    </span>
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      {formatPrice(laptop.originalPrice)}
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs font-semibold">
                    {Math.round(((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/919550191261?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(laptop.name)}%20(${formatPrice(laptop.price)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-whatsapp-green hover:bg-whatsapp-green/90 text-white font-semibold transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Quote on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {laptops.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-2xl glass hover:bg-white/10 font-semibold transition-all border border-border hover:border-primary"
            >
              {showAll ? "Show Less" : `View All ${laptops.length} Laptops`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
