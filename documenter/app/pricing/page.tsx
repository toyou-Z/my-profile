import { Navbar } from '@/components/layout/Navbar'
import { PricingSection } from '@/components/landing/PricingSection'
import { Footer } from '@/components/layout/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <div className="pt-24">
        <PricingSection />
      </div>
      <Footer />
    </div>
  )
}

