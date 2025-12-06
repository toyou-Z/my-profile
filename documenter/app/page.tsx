import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield, Palette, Smartphone, Brain } from 'lucide-react'
import { HeroSection } from '@/components/landing/HeroSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { TemplatePreviewSection } from '@/components/landing/TemplatePreviewSection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TemplatePreviewSection />
      <PricingSection />
      <Footer />
    </main>
  )
}

