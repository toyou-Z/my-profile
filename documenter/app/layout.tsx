import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/components/providers/AuthProvider'

const inter = Inter({ subsets: ['latin', 'thai'] })

export const metadata: Metadata = {
  title: 'Documenter - ออกแบบกราฟิกได้ง่ายใน 10 วินาที',
  description: 'สร้างผลงานระดับมืออาชีพด้วยเทมเพลตพรีเมียมและเครื่องมือออกแบบที่ทันสมัย',
  keywords: 'ออกแบบกราฟิก, กราฟิกดีไซน์, เทมเพลต, Canva alternative, ไทย',
  authors: [{ name: 'Documenter Team' }],
  openGraph: {
    title: 'Documenter - ออกแบบกราฟิกได้ง่ายใน 10 วินาที',
    description: 'สร้างผลงานระดับมืออาชีพด้วยเทมเพลตพรีเมียม',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  )
}

