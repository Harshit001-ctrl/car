import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import VideoSection from "@/components/VideoSection"
import PremiumDetail from "@/components/PremiumDetail"
import Contact from "@/components/Contact"
import Smooth from "@/components/Smooth"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Smooth />
      <section className="min-h-screen">
        <Hero />
      </section>
      <section className="min-h-screen">
        <Services />
      </section>
      <section className="min-h-screen">
        <Gallery />
      </section>
      <section className="min-h-screen">
        <VideoSection />
      </section>
      <section className="min-h-screen">
        <PremiumDetail />
      </section>
      <section className="min-h-screen">
        <Contact />
      </section>
    </main>
  )
}

