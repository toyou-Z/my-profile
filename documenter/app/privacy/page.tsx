import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8">นโยบายความเป็นส่วนตัว</h1>
        <div className="glass-dark p-8 rounded-xl border border-white/10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. ข้อมูลที่เรารวบรวม</h2>
            <p>เรารวบรวมข้อมูลอีเมล, ชื่อ, และข้อมูลการชำระเงินเพื่อให้บริการ</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. การใช้ข้อมูล</h2>
            <p>เราใช้ข้อมูลเพื่อให้บริการ, ปรับปรุงบริการ, และส่งข้อมูลสำคัญ</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. การแชร์ข้อมูล</h2>
            <p>เราไม่ขายข้อมูลของคุณให้กับบุคคลที่สาม</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. ความปลอดภัย</h2>
            <p>เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณ</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

