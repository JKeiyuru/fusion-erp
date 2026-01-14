// FILE: frontend-web/src/app/auth/register/page.tsx
// Location: frontend-web/src/app/auth/register/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/lib/store/auth-store'
import { Building2, User, Mail, Phone, Key } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    kraPin: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await register(formData)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-blue-600">
            Fusion ERP
          </Link>
          <p className="mt-2 text-gray-600">Create your account and start your free trial</p>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Company Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Company Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Company Name *</label>
                  <input
                    name="companyName"
                    required
                    className="input"
                    placeholder="Acme Ltd"
                    value={formData.companyName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">Company Email *</label>
                  <input
                    name="companyEmail"
                    type="email"
                    required
                    className="input"
                    placeholder="info@company.com"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">Company Phone</label>
                  <input
                    name="companyPhone"
                    type="tel"
                    className="input"
                    placeholder="+254712345678"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">KRA PIN (Optional)</label>
                  <input
                    name="kraPin"
                    className="input"
                    placeholder="A001234567P"
                    value={formData.kraPin}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Your Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">First Name *</label>
                  <input
                    name="firstName"
                    required
                    className="input"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">Last Name *</label>
                  <input
                    name="lastName"
                    required
                    className="input"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">Your Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="input"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="label">Your Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="input"
                    placeholder="+254712345678"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Key className="w-5 h-5 mr-2 text-blue-600" />
                Security
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Password *</label>
                  <input
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    className="input"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
                </div>
                <div>
                  <label className="label">Confirm Password *</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    className="input"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-blue-600 rounded mt-1"
                disabled={loading}
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-3 text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account & Start Trial'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in instead
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          🎉 14-day free trial • No credit card required
        </p>
      </div>
    </div>
  )
}