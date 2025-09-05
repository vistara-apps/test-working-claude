import { OnchainKitProvider } from '@coinbase/onchainkit/react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base Mini App',
  description: 'A Base Mini App built with OnchainKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <OnchainKitProvider chain="base">
          {children}
        </OnchainKitProvider>
      </body>
    </html>
  )
}