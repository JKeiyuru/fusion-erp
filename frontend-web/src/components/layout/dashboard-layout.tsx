// FILE: frontend-web/src/components/layout/dashboard-layout.tsx
'use client'

import Link from 'next/link'
import { useAuthStore } from '@/lib/store/auth-store'
import { useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  ShoppingCart, 
  Calculator,
  Settings,
  LogOut
} from 'lucide-react'

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary-600">Fusion ERP</h1>
          <p className="text-sm text-gray-600">{user?.companyName}</p>
        </div>

        <nav className="px-4 space-y-1">
          <NavLink href="/dashboard" icon={<LayoutDashboard size={20} />}>
            Dashboard
          </NavLink>
          <NavLink href="/dashboard/sales" icon={<ShoppingCart size={20} />}>
            Sales
          </NavLink>
          <NavLink href="/dashboard/inventory" icon={<Package size={20} />}>
            Inventory
          </NavLink>
          <NavLink href="/dashboard/accounting" icon={<Calculator size={20} />}>
            Accounting
          </NavLink>
          <NavLink href="/dashboard/customers" icon={<Users size={20} />}>
            Customers
          </NavLink>
          <NavLink href="/dashboard/settings" icon={<Settings size={20} />}>
            Settings
          </NavLink>
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-red-600 w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

function NavLink({ href, icon, children }: { 
  href: string
  icon: React.ReactNode
  children: React.ReactNode 
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}