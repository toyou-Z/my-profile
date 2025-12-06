'use client'

import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { SUBSCRIPTION_PLANS } from '@/lib/subscription'

export function PricingSection() {
  const plans = [
    SUBSCRIPTION_PLANS.BASIC,
    SUBSCRIPTION_PLANS.PRO,
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950">
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
              เลือกแพ็คเกจที่
            </span>
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              {' '}เหมาะกับคุณ
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            เริ่มต้นใช้งานฟรี หรืออัปเกรดเพื่อปลดล็อกฟีเจอร์ทั้งหมด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-dark p-8 rounded-2xl border ${
                plan.name === 'Pro'
                  ? 'border-primary-500/50 shadow-lg shadow-primary-500/20'
                  : 'border-white/10'
              } relative`}
            >
              {plan.name === 'Pro' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary-500 text-white rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Sparkles className="w-4 h-4" />
                    <span>แนะนำ</span>
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.priceTHB}</span>
                  <span className="text-gray-400 ml-2">บาท/เดือน</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/checkout?plan=${plan.name.toLowerCase()}`}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Pro'
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'glass border border-white/20 hover:border-primary-500/50 text-white'
                }`}
              >
                {plan.name === 'Pro' ? 'อัปเกรดเป็น Pro' : 'เลือกแพ็คเกจ Basic'}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            มีคำถาม? <Link href="/support" className="text-primary-400 hover:text-primary-300">ติดต่อเรา</Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

