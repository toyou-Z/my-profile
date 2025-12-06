import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8">ข้อกำหนดการใช้งาน</h1>
        <div className="glass-dark p-8 rounded-xl border border-white/10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. การยอมรับข้อกำหนด</h2>
            <p>โดยการใช้งาน Documenter คุณยอมรับข้อกำหนดและเงื่อนไขเหล่านี้</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. การใช้งานบริการ</h2>
            <p>คุณต้องใช้บริการตามกฎหมายและไม่ละเมิดสิทธิ์ของผู้อื่น</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. สมาชิกและการชำระเงิน</h2>
            <p>การสมัครสมาชิกจะต่ออายุอัตโนมัติทุกเดือนจนกว่าจะยกเลิก</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. สิทธิ์ในเนื้อหา</h2>
            <p>คุณเป็นเจ้าของเนื้อหาที่สร้างขึ้น แต่ให้สิทธิ์ Documenter ในการจัดเก็บและแสดงผล</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

