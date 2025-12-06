import DOMPurify from 'isomorphic-dompurify'
import { z } from 'zod'

// XSS Protection
export function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href'],
  })
}

// Input Validation Schemas
export const emailSchema = z.string().email('อีเมลไม่ถูกต้อง').min(1, 'กรุณากรอกอีเมล')
export const passwordSchema = z.string().min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
export const nameSchema = z.string().min(1, 'กรุณากรอกชื่อ').max(100, 'ชื่อยาวเกินไป')

// SQL Injection Protection - Use parameterized queries (Prisma handles this)
// But we can add additional validation
export function validateSqlSafe(input: string): boolean {
  const dangerousPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/i,
    /(--|;|\/\*|\*\/|xp_|sp_)/i,
  ]
  return !dangerousPatterns.some(pattern => pattern.test(input))
}

// CSRF Token Generation
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Rate Limiting Store (In-memory, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs }
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime }
}

// Cleanup old rate limit records
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Cleanup every minute

