import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { getUserSubscription } from '@/lib/subscription'
import { DashboardContent } from '@/components/dashboard/DashboardContent'
import { Navbar } from '@/components/layout/Navbar'

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }

  const subscription = await getUserSubscription(user.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <DashboardContent user={user} subscription={subscription} />
    </div>
  )
}

