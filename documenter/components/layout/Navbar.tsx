'use client'

import Link from 'next/link'
import { useAuth } from '@/components/providers/AuthProvider'
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const { user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Sparkles className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Documenter
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/templates" className="text-gray-300 hover:text-white transition-colors">
              เทมเพลต
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              ราคา
            </Link>
            {user ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  เข้าสู่ระบบ
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                >
                  เริ่มใช้งานฟรี
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/10">
            <Link
              href="/templates"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              เทมเพลต
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ราคา
            </Link>
            {user ? (
              <Link
                href="/dashboard"
                className="block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  เข้าสู่ระบบ
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  เริ่มใช้งานฟรี
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

