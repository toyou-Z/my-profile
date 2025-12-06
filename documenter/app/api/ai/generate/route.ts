import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { hasProAccess } from '@/lib/subscription'
import { generateTextToImage, removeBackground, generateAutoLayout } from '@/lib/ai/placeholder'
import { withRateLimit } from '@/lib/middleware/rateLimit'

async function handler(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check Pro access for AI features
    const hasPro = await hasProAccess(user.id)
    if (!hasPro) {
      return NextResponse.json(
        { error: 'AI features require Pro subscription' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { type, prompt, imageUrl, config } = body

    let result

    switch (type) {
      case 'text2image':
        if (!prompt) {
          return NextResponse.json(
            { error: 'Prompt is required for text2image' },
            { status: 400 }
          )
        }
        result = await generateTextToImage(prompt, config)
        break

      case 'removebg':
        if (!imageUrl) {
          return NextResponse.json(
            { error: 'Image URL is required for removebg' },
            { status: 400 }
          )
        }
        result = await removeBackground(imageUrl)
        break

      case 'autolayout':
        result = await generateAutoLayout(body.content || [], config)
        break

      default:
        return NextResponse.json(
          { error: 'Invalid AI service type' },
          { status: 400 }
        )
    }

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'AI service unavailable' },
        { status: 503 }
      )
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('AI generate error:', error)
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการสร้าง AI' },
      { status: 500 }
    )
  }
}

export const POST = withRateLimit(handler, {
  maxRequests: 5,
  windowMs: 60000, // 1 minute
})

