import { Navbar } from '@/components/layout/Navbar'
import { TemplateGallery } from '@/components/templates/TemplateGallery'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <TemplateGallery />
    </div>
  )
}

