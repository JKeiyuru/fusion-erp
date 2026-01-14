// FILE: frontend-web/src/app/dashboard/page.tsx
// Location: frontend-web/src/app/dashboard/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store/auth-store'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { TrendingUp, TrendingDown, Users, Package, ShoppingCart, DollarSign } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading, user } = useAuthStore()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.firstName}! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="KES 1,234,567"
            change="+12.5%"
            trend="up"
            icon={<DollarSign className="w-6 h-6" />}
            color="blue"
          />
          <StatCard
            title="Total Sales"
            value="156"
            change="+8.2%"
            trend="up"
            icon={<ShoppingCart className="w-6 h-6" />}
            color="green"
          />
          <StatCard
            title="Customers"
            value="89"
            change="+5.1%"
            trend="up"
            icon={<Users className="w-6 h-6" />}
            color="purple"
          />
          <StatCard
            title="Products"
            value="234"
            change="-2.3%"
            trend="down"
            icon={<Package className="w-6 h-6" />}
            color="orange"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Sales */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Invoice #INV-{1000 + i}</p>
                      <p className="text-xs text-gray-500">Customer Name</p>
                    </div>
                  </div>
                  <span className="font-semibold">KES {(50000 + i * 1000).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Low Stock Alerts</h3>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <Package className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Product Name {i + 1}</p>
                      <p className="text-xs text-gray-500">Reorder Level: {10 + i}</p>
                    </div>
                  </div>
                  <span className="text-red-600 font-semibold">{5 - i} left</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActionButton title="New Invoice" href="/dashboard/sales/invoices/new" />
            <QuickActionButton title="Add Product" href="/dashboard/inventory/products/new" />
            <QuickActionButton title="New Customer" href="/dashboard/sales/customers/new" />
            <QuickActionButton title="View Reports" href="/dashboard/reports" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function StatCard({ 
  title, 
  value, 
  change, 
  trend,
  icon,
  color 
}: {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
  color: 'blue' | 'green' | 'purple' | 'orange'
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

function QuickActionButton({ title, href }: { title: string; href: string }) {
  return (
    <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
      <p className="text-sm font-medium text-gray-700">{title}</p>
    </button>
  )
}