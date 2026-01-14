'use client'

import { ReactNode } from 'react'
import { Providers } from './providers'

export default function ClientLayout({
  children,
}: {
  children: ReactNode
}) {
  return <Providers>{children}</Providers>
}
