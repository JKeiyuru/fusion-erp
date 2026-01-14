// ============================================
// FILE: frontend-web/src/app/dashboard/page.tsx
// Location: frontend-web/src/app/dashboard/page.tsx
// ============================================
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store/auth-store'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading, user } = useAuthStore()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.firstName}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Sales" value="KES 1,234,567" change="+12.5%" />
          <StatCard title="Invoices" value="45" change="+5.2%" />
          <StatCard title="Customers" value="128" change="+8.3%" />
          <StatCard title="Products" value="234" change="+3.1%" />
        </div>
      </div>
    </DashboardLayout>
  )
}

function StatCard({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        <span className="ml-2 text-sm font-medium text-green-600">{change}</span>
      </div>
    </div>
  )
}
