import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { YoutubeSection } from "@/components/youtube-section"
import { InventorySection } from "@/components/inventory-section"
import { RepairSection } from "@/components/repair-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <YoutubeSection />
      <InventorySection />
      <RepairSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}