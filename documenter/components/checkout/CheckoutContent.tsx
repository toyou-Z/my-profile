'use client'

import { useState } from 'react'
import { CreditCard, Lock, Check } from 'lucide-react'
import { SUBSCRIPTION_PLANS } from '@/lib/subscription'
import toast from 'react-hot-toast'

export function CheckoutContent({ plan }: { plan: string }) {
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'promptpay'>('stripe')

  const planKey = plan.toUpperCase() as keyof typeof SUBSCRIPTION_PLANS
  const planInfo = SUBSCRIPTION_PLANS[planKey] || SUBSCRIPTION_PLANS.BASIC

  const handleCheckout = async () => {
    setLoading(true)
    try {
      // TODO: Integrate with actual payment gateway
      // This is a placeholder
      const res = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: planKey,
          paymentMethod,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'เกิดข้อผิดพลาดในการชำระเงิน')
      }

      // Redirect to payment URL or success page
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl
      } else {
        toast.success('ชำระเงินสำเร็จ!')
        window.location.href = '/dashboard'
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="glass-dark p-6 rounded-xl border border-white/10 mb-6">
            <h2 className="text-2xl font-bold text-white mb-6">สรุปคำสั่งซื้อ</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">แพ็คเกจ</span>
                <span className="text-white font-semibold">{planInfo.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">ราคา</span>
                <span className="text-white font-semibold">{planInfo.priceTHB} บาท/เดือน</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">ระยะเวลา</span>
                <span className="text-white font-semibold">1 เดือน</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">รวมทั้งสิ้น</span>
                  <span className="text-xl font-bold text-primary-400">{planInfo.priceTHB} บาท</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="glass-dark p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">วิธีการชำระเงิน</h2>

            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-4 glass border border-white/10 rounded-lg cursor-pointer hover:border-primary-500/50 transition-all">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="text-primary-500"
                />
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span className="text-white">บัตรเครดิต/เดบิต (Stripe)</span>
              </label>

              <label className="flex items-center space-x-3 p-4 glass border border-white/10 rounded-lg cursor-pointer hover:border-primary-500/50 transition-all">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="text-primary-500"
                />
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span className="text-white">PayPal</span>
              </label>

              <label className="flex items-center space-x-3 p-4 glass border border-white/10 rounded-lg cursor-pointer hover:border-primary-500/50 transition-all">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="promptpay"
                  checked={paymentMethod === 'promptpay'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="text-primary-500"
                />
                <CreditCard className="w-5 h-5 text-gray-400" />
                <span className="text-white">PromptPay</span>
              </label>
            </div>
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="lg:col-span-1">
          <div className="glass-dark p-6 rounded-xl border border-white/10 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-4">คุณจะได้รับ</h3>
            <ul className="space-y-3 mb-6">
              {planInfo.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>กำลังดำเนินการ...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>ชำระเงิน {planInfo.priceTHB} บาท</span>
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              การชำระเงินจะต่ออายุอัตโนมัติทุกเดือน
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

