import { NextRequest, NextResponse } from 'next/server'
import { generateCSRFToken } from '../security'

// CSRF Token generation and validation
export function generateCSRFTokenForRequest(): string {
  return generateCSRFToken()
}

export function validateCSRFToken(request: NextRequest, token: string): boolean {
  const cookieToken = request.cookies.get('csrf-token')?.value
  return cookieToken === token
}

export function setCSRFTokenCookie(response: NextResponse, token: string) {
  response.cookies.set('csrf-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  })
}

