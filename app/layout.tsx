import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Classic Computers | Premium Laptops & Chip-Level Repairs | SR Nagar, Hyderabad",
  description:
    "Watch. Trust. Buy. Premium imported laptops and expert chip-level motherboard repairs at Classic Computers, SR Nagar, Hyderabad.",
  keywords: [
    "laptops",
    "chip-level repair",
    "Dell Latitude",
    "HP Elitebook",
    "MacBook",
    "SR Nagar",
    "Hyderabad",
    "second hand laptops",
    "motherboard repair",
  ],
  authors: [{ name: "Classic Computers" }],
  openGraph: {
    title: "Classic Computers | Premium Laptops & Repairs",
    description:
      "Watch. Trust. Buy. Premium imported laptops and expert chip-level motherboard repairs.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Computers | Premium Laptops & Repairs",
    description:
      "Watch. Trust. Buy. Premium imported laptops and expert chip-level motherboard repairs.",
  },
}

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}