import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '../security'

export function withRateLimit(
  handler: (request: NextRequest) => Promise<NextResponse>,
  options: { maxRequests?: number; windowMs?: number; identifier?: (req: NextRequest) => string } = {}
) {
  const { maxRequests = 10, windowMs = 60000, identifier } = options

  return async (request: NextRequest) => {
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown'
    const id = identifier ? identifier(request) : `api:${ip}`
    
    const rateLimit = checkRateLimit(id, maxRequests, windowMs)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          message: 'Please try again later',
          resetTime: rateLimit.resetTime,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': maxRequests.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      )
    }

    const response = await handler(request)

    // Add rate limit headers
    response.headers.set('X-RateLimit-Limit', maxRequests.toString())
    response.headers.set('X-RateLimit-Remaining', rateLimit.remaining.toString())
    response.headers.set('X-RateLimit-Reset', rateLimit.resetTime.toString())

    return response
  }
}

