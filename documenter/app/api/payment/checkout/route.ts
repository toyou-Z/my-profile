import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { SubscriptionPlan } from '@prisma/client'
import { SUBSCRIPTION_PLANS } from '@/lib/subscription'

// Placeholder payment processing
// In production, integrate with Stripe, PayPal, or Thai payment gateways

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { plan, paymentMethod } = body

    if (!plan || !['BASIC', 'PRO'].includes(plan)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const planInfo = SUBSCRIPTION_PLANS[plan as keyof typeof SUBSCRIPTION_PLANS]

    // TODO: Create payment intent with Stripe/PayPal/PromptPay
    // For now, this is a placeholder that creates a subscription directly

    // Create subscription (placeholder - in production, wait for webhook confirmation)
    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        plan: plan as SubscriptionPlan,
        status: 'PENDING', // Will be updated to ACTIVE after webhook confirmation
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    })

    // Create payment record
    await prisma.payment.create({
      data: {
        userId: user.id,
        subscriptionId: subscription.id,
        amount: planInfo.priceTHB,
        currency: 'THB',
        status: 'PENDING',
        paymentMethod: paymentMethod.toUpperCase(),
      },
    })

    // TODO: Return actual payment URL from payment gateway
    // For Stripe: return { paymentUrl: session.url }
    // For PayPal: return { paymentUrl: approval_url }
    // For PromptPay: return { paymentUrl: qr_code_url }

    return NextResponse.json({
      success: true,
      message: 'Payment processing (placeholder)',
      subscriptionId: subscription.id,
      // paymentUrl: 'https://payment-gateway.com/checkout/...' // In production
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการชำระเงิน' },
      { status: 500 }
    )
  }
}

