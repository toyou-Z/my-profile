import { prisma } from './prisma'
import { SubscriptionPlan, SubscriptionStatus } from '@prisma/client'

export const SUBSCRIPTION_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceTHB: 0,
    features: ['เข้าถึงเทมเพลตพื้นฐาน', 'Export PNG/JPG', '5 โปรเจค'],
  },
  BASIC: {
    name: 'Basic',
    price: 159,
    priceTHB: 159,
    features: [
      'เข้าถึงเทมเพลตทั้งหมด',
      'Export PNG/JPG/PDF',
      'โปรเจคไม่จำกัด',
      'ดาวน์โหลดคุณภาพสูง',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 559,
    priceTHB: 559,
    features: [
      'ทุกอย่างใน Basic',
      'เทมเพลตพิเศษ Pro Only',
      'Export คุณภาพสูงสุด',
      'AI Features (เร็วๆ นี้)',
      'Priority Support',
      'Custom Branding',
    ],
  },
} as const

export async function getUserSubscription(userId: string) {
  return prisma.subscription.findFirst({
    where: {
      userId,
      status: {
        in: [SubscriptionStatus.ACTIVE, SubscriptionStatus.PENDING],
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function hasProAccess(userId: string): Promise<boolean> {
  const subscription = await getUserSubscription(userId)
  return subscription?.plan === SubscriptionPlan.PRO && subscription.status === SubscriptionStatus.ACTIVE
}

export async function hasBasicAccess(userId: string): Promise<boolean> {
  const subscription = await getUserSubscription(userId)
  return (
    subscription?.plan === SubscriptionPlan.BASIC ||
    subscription?.plan === SubscriptionPlan.PRO
  ) && subscription?.status === SubscriptionStatus.ACTIVE
}

export function canAccessTemplate(userPlan: SubscriptionPlan | null, templateIsProOnly: boolean): boolean {
  if (!templateIsProOnly) return true
  return userPlan === SubscriptionPlan.PRO
}

