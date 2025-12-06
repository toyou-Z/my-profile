'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const templateCategories = [
  { name: 'Business', count: 50, color: 'from-blue-500 to-blue-600' },
  { name: 'Education', count: 30, color: 'from-green-500 to-green-600' },
  { name: 'Social Media', count: 80, color: 'from-purple-500 to-purple-600' },
  { name: 'Poster', count: 40, color: 'from-red-500 to-red-600' },
  { name: 'Banner', count: 60, color: 'from-orange-500 to-orange-600' },
]

export function TemplatePreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              เทมเพลต
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {' '}พรีเมียม
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            เลือกจากเทมเพลตมากกว่า 260+ แบบ พร้อมใช้งานทันที
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            <span>ดูเทมเพลตทั้งหมด</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {templateCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                <div className={`aspect-square bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="relative z-10 text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count}+ เทมเพลต</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

