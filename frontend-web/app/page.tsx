// FILE: frontend-web/src/app/page.tsx
// Location: frontend-web/src/app/page.tsx
import Link from 'next/link'
import { Building2, Users, Package, ShoppingCart, Calculator, FileText, TrendingUp, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Fusion ERP</div>
            <div className="flex gap-4">
              <Link href="/auth/login" className="px-6 py-2 rounded-lg hover:bg-white/10 transition">
                Login
              </Link>
              <Link href="/auth/register" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Business Management for Kenya
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Run your entire business with one powerful system. Sales, inventory, accounting, HR, and more - all integrated and KRA compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth/register" className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Start Free Trial
              </Link>
              <Link href="#features" className="px-8 py-4 bg-blue-700 hover:bg-blue-600 rounded-lg text-lg font-semibold transition">
                See Features
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">KRA</div>
              <div className="text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">All modules included, no hidden fees</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calculator className="w-8 h-8" />}
              title="Accounting & Finance"
              description="Complete double-entry accounting, financial reports, trial balance, P&L, balance sheet"
              features={['Chart of Accounts', 'Journal Entries', 'Financial Reports', 'Bank Reconciliation']}
            />
            <FeatureCard
              icon={<ShoppingCart className="w-8 h-8" />}
              title="Sales & CRM"
              description="Manage customers, quotations, orders, invoices, and payments seamlessly"
              features={['Customer Management', 'Quotations', 'Sales Orders', 'Invoicing']}
            />
            <FeatureCard
              icon={<Package className="w-8 h-8" />}
              title="Inventory Management"
              description="Track products, warehouses, stock movements, and reorder levels in real-time"
              features={['Multi-warehouse', 'Stock Movements', 'Low Stock Alerts', 'Batch Tracking']}
            />
            <FeatureCard
              icon={<Building2 className="w-8 h-8" />}
              title="Point of Sale"
              description="Fast POS system with offline support and receipt printing"
              features={['Offline Mode', 'Receipt Printing', 'Cash Management', 'M-Pesa Integration']}
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="HR & Payroll"
              description="Employee management, payroll processing, PAYE, NHIF, NSSF calculations"
              features={['Employee Records', 'Payroll Processing', 'Leave Management', 'Tax Compliance']}
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Procurement"
              description="Supplier management, purchase orders, bills, and vendor payments"
              features={['Supplier Management', 'Purchase Orders', 'Bill Tracking', 'Vendor Payments']}
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Manufacturing"
              description="Bill of materials, production orders, and manufacturing workflows"
              features={['BOM Management', 'Production Orders', 'Work Orders', 'Material Planning']}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="KRA Compliance"
              description="Automatic eTIMS invoice submission to Kenya Revenue Authority"
              features={['eTIMS Integration', 'Auto Submission', 'VAT Reports', 'Tax Compliance']}
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Reports & Analytics"
              description="Comprehensive financial and operational reports"
              features={['Financial Reports', 'Sales Analytics', 'Inventory Reports', 'Custom Reports']}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="5,000"
              period="month"
              features={[
                '1 User',
                'Basic Modules',
                '100 Invoices/month',
                'Email Support',
                'Cloud Hosted',
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="15,000"
              period="month"
              features={[
                '5 Users',
                'All Modules',
                'Unlimited Invoices',
                'Priority Support',
                'eTIMS Integration',
                'M-Pesa Integration',
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="50,000"
              period="month"
              features={[
                'Unlimited Users',
                'All Features',
                'Custom Integrations',
                'Dedicated Support',
                'White Label Option',
                'Training Included',
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join hundreds of Kenyan businesses using Fusion ERP to streamline operations and grow faster.
          </p>
          <Link href="/auth/register" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
            Start Your Free Trial
          </Link>
          <p className="mt-4 text-sm text-blue-200">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Fusion ERP</div>
              <p className="text-gray-400">Complete business management for Kenyan enterprises</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
                <li><Link href="#" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Fusion ERP. All rights reserved. Made in Kenya 🇰🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description,
  features 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PricingCard({ 
  name, 
  price, 
  period, 
  features,
  popular 
}: { 
  name: string
  price: string
  period: string
  features: string[]
  popular: boolean
}) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-sm border-2 ${popular ? 'border-blue-600 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">KES {price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href="/auth/register"
        className={`block text-center py-3 rounded-lg font-semibold transition ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </Link>
    </div>
  )
}