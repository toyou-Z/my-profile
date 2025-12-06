'use client'

import { Zap, Shield, Palette, Smartphone, Brain, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Zap,
    title: 'เร็ว',
    description: 'โหลดเร็ว ไม่มีหน่วง ประสบการณ์ที่ลื่นไหล',
  },
  {
    icon: Palette,
    title: 'เทมเพลตพรีเมียม',
    description: 'เทมเพลตคุณภาพสูงจากดีไซเนอร์มืออาชีพ',
  },
  {
    icon: Sparkles,
    title: 'Editor ลื่นไหล',
    description: 'เครื่องมือออกแบบที่ใช้งานง่ายและมีประสิทธิภาพ',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'ใช้งานได้ทุกอุปกรณ์ Desktop, Tablet, Mobile',
  },
  {
    icon: Brain,
    title: 'AI Features',
    description: 'Text2Image, RemoveBG, Auto Layout (เร็วๆ นี้)',
  },
  {
    icon: Shield,
    title: 'ปลอดภัย',
    description: 'ระบบรักษาความปลอดภัยระดับสูง',
  },
]

export function FeaturesSection() {
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
              ทำไมต้องเลือก
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {' '}Documenter?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เครื่องมือออกแบบกราฟิกที่ครบครันและใช้งานง่าย
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-dark p-6 rounded-xl hover:border-primary-500/50 border border-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

