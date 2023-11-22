import CTA from "@/components/landing/CTA"
import ContactSection from "@/components/landing/ContactSection"
import LandingHero from "@/components/landing/LandingHero"
import OurKitchen from "@/components/landing/OurKitchen"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import TrustSection from "@/components/landing/TrustSection"

export default function Home() {
  return (
    <>
      <LandingHero />
      <TrustSection />
      <OurKitchen />
      <CTA />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
