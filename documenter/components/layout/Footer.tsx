import Link from 'next/link'
import { Sparkles, Mail, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary-400" />
              <span className="text-lg font-bold text-white">Documenter</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              ออกแบบกราฟิกได้ง่ายใน 10 วินาที – สร้างผลงานระดับมืออาชีพด้วยเทมเพลตพรีเมียมและเครื่องมือที่ทันสมัย
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">ลิงก์สำคัญ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-gray-400 hover:text-white transition-colors">
                  เทมเพลต
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  ราคา
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  ฟีเจอร์
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">กฎหมาย</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  ข้อกำหนดการใช้งาน
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  สนับสนุน
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Documenter. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  )
}

