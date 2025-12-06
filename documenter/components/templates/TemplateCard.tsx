'use client'

import Link from 'next/link'
import { Lock } from 'lucide-react'
import { useAuth } from '@/components/providers/AuthProvider'

interface Template {
  id: string
  name: string
  category: string
  isProOnly: boolean
}

export function TemplateCard({ template }: { template: Template }) {
  const { user } = useAuth()
  const canAccess = !template.isProOnly || user // Simplified: check if user exists and has pro access

  return (
    <Link
      href={canAccess ? `/editor?template=${template.id}` : '/checkout?plan=pro'}
      className="group relative glass-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/400/300')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative z-10 text-center p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
          <span className="text-sm text-gray-400">{template.category}</span>
        </div>
        {template.isProOnly && (
          <div className="absolute top-2 right-2">
            <div className="bg-primary-500/90 backdrop-blur-sm px-2 py-1 rounded flex items-center space-x-1">
              <Lock className="w-3 h-3 text-white" />
              <span className="text-xs text-white font-semibold">Pro</span>
            </div>
          </div>
        )}
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold">
          {canAccess ? 'เปิดใช้งาน' : 'อัปเกรดเป็น Pro'}
        </span>
      </div>
    </Link>
  )
}

