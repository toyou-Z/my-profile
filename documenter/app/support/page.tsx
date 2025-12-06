import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Mail, MessageCircle, HelpCircle } from 'lucide-react'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">สนับสนุน</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-dark p-6 rounded-xl border border-white/10 text-center">
            <Mail className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">อีเมล</h3>
            <p className="text-gray-400">support@documenter.com</p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-white/10 text-center">
            <MessageCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">แชท</h3>
            <p className="text-gray-400">24/7 Support</p>
          </div>
          <div className="glass-dark p-6 rounded-xl border border-white/10 text-center">
            <HelpCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">FAQ</h3>
            <p className="text-gray-400">คำถามที่พบบ่อย</p>
          </div>
        </div>

        <div className="glass-dark p-8 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">คำถามที่พบบ่อย</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">วิธีสมัครสมาชิก?</h3>
              <p className="text-gray-400">คลิกที่ปุ่ม "เริ่มใช้งานฟรี" และกรอกข้อมูล</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">วิธียกเลิกสมาชิก?</h3>
              <p className="text-gray-400">ไปที่ Dashboard → Settings → Cancel Subscription</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">รองรับการชำระเงินแบบใด?</h3>
              <p className="text-gray-400">บัตรเครดิต, PayPal, และ PromptPay</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

