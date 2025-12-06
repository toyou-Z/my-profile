import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { CheckoutContent } from '@/components/checkout/CheckoutContent'
import { Navbar } from '@/components/layout/Navbar'

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string }
}) {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login?redirect=/checkout')
  }

  const plan = searchParams.plan || 'basic'

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <CheckoutContent plan={plan} />
    </div>
  )
}

