'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sparkles, Plus, FileText, CreditCard, Crown, ArrowRight } from 'lucide-react'
import { SUBSCRIPTION_PLANS } from '@/lib/subscription'

interface User {
  id: string
  email: string
  name: string | null
  image: string | null
  role: string
}

interface Subscription {
  id: string
  plan: string
  status: string
  currentPeriodEnd: Date
}

export function DashboardContent({ user, subscription }: { user: User; subscription: Subscription | null }) {
  const router = useRouter()

  const planName = subscription?.plan || 'FREE'
  const planInfo = SUBSCRIPTION_PLANS[planName as keyof typeof SUBSCRIPTION_PLANS] || SUBSCRIPTION_PLANS.FREE

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          ยินดีต้อนรับ, {user.name || user.email}
        </h1>
        <p className="text-gray-400">จัดการโปรเจคและตั้งค่าบัญชีของคุณ</p>
      </div>

      {/* Subscription Status */}
      <div className="glass-dark p-6 rounded-xl border border-white/10 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              {planName === 'PRO' ? (
                <Crown className="w-5 h-5 text-primary-400" />
              ) : planName === 'BASIC' ? (
                <Sparkles className="w-5 h-5 text-primary-400" />
              ) : null}
              <h2 className="text-xl font-semibold text-white">แพ็คเกจปัจจุบัน: {planInfo.name}</h2>
            </div>
            <p className="text-gray-400">
              {subscription?.status === 'ACTIVE' ? (
                <>หมดอายุ: {new Date(subscription.currentPeriodEnd).toLocaleDateString('th-TH')}</>
              ) : (
                'ยังไม่ได้สมัครแพ็คเกจ'
              )}
            </p>
          </div>
          {planName !== 'PRO' && (
            <Link
              href="/checkout?plan=pro"
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <span>อัปเกรดเป็น Pro</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/editor"
          className="glass-dark p-6 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
            <Plus className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">สร้างโปรเจคใหม่</h3>
          <p className="text-gray-400">เริ่มออกแบบกราฟิกใหม่</p>
        </Link>

        <Link
          href="/templates"
          className="glass-dark p-6 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
            <Sparkles className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">เทมเพลต</h3>
          <p className="text-gray-400">เลือกเทมเพลตที่คุณชอบ</p>
        </Link>

        <Link
          href="/dashboard/payments"
          className="glass-dark p-6 rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
            <CreditCard className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">การชำระเงิน</h3>
          <p className="text-gray-400">ดูประวัติการชำระเงิน</p>
        </Link>
      </div>

      {/* Recent Projects */}
      <div className="glass-dark p-6 rounded-xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">โปรเจคล่าสุด</h2>
          <Link href="/dashboard/projects" className="text-primary-400 hover:text-primary-300 text-sm">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">ยังไม่มีโปรเจค</p>
          <Link
            href="/editor"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>สร้างโปรเจคใหม่</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

