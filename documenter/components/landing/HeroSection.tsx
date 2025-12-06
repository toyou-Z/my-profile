'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">ออกแบบกราฟิกได้ง่ายใน 10 วินาที</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              สร้างผลงานระดับ
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
              มืออาชีพ
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            เทมเพลตพรีเมียม + เครื่องมือออกแบบที่ทันสมัย + AI Features เร็วๆ นี้
            <br />
            <span className="text-primary-400">เริ่มใช้งานฟรีวันนี้</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/signup"
              className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-primary-500/50"
            >
              <span>เริ่มใช้งานฟรี</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 glass border border-white/20 hover:border-primary-500/50 text-white rounded-lg font-semibold transition-all duration-300"
            >
              อัปเกรดเป็น Pro
            </Link>
          </div>

          {/* Mockup Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="glass-dark rounded-2xl p-4 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-400">ตัวอย่างผลงานกราฟิก</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}

