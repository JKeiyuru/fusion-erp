// frontend-web/src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fusion ERP - Business Management System',
  description: 'Complete ERP solution for Kenyan businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Move the font class inside a div to avoid SSR hydration mismatch */}
        <ClientLayout>
          <div className={inter.className}>
            {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
