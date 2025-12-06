import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { EditorContent } from '@/components/editor/EditorContent'
import { Navbar } from '@/components/layout/Navbar'

export default async function EditorPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
      <Navbar />
      <EditorContent />
    </div>
  )
}

