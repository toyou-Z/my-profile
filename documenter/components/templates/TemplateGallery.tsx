'use client'

import { useState } from 'react'
import { Search, Lock, Sparkles } from 'lucide-react'
import { TemplateCard } from './TemplateCard'

const categories = ['ทั้งหมด', 'business', 'education', 'social media', 'poster', 'banner']

// Dummy templates data
const dummyTemplates = [
  { id: '1', name: 'Business Card Modern', category: 'business', isProOnly: false },
  { id: '2', name: 'Social Media Post', category: 'social media', isProOnly: false },
  { id: '3', name: 'Education Poster', category: 'education', isProOnly: false },
  { id: '4', name: 'Premium Banner', category: 'banner', isProOnly: true },
  { id: '5', name: 'Event Poster', category: 'poster', isProOnly: false },
  { id: '6', name: 'Pro Business Template', category: 'business', isProOnly: true },
  { id: '7', name: 'Social Media Story', category: 'social media', isProOnly: false },
  { id: '8', name: 'Education Flyer', category: 'education', isProOnly: false },
]

export function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = dummyTemplates.filter((template) => {
    const matchesCategory = selectedCategory === 'ทั้งหมด' || template.category === selectedCategory
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">เทมเพลต</h1>
        <p className="text-gray-400">เลือกเทมเพลตที่เหมาะกับคุณ</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาเทมเพลต..."
            className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-500 text-white'
                : 'glass border border-white/10 text-gray-300 hover:border-primary-500/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <Sparkles className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">ไม่พบเทมเพลตที่ค้นหา</p>
        </div>
      )}
    </div>
  )
}

