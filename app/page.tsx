import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { FeaturedImage } from "@/components/featured-image"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <FeaturedImage />
      <Process />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
