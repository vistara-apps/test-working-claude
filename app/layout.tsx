import { OnchainKitProvider } from '@coinbase/onchainkit/react';
import './globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Test Working Claude - Counter App',
  description: 'A production-ready Base Mini App with advanced counter functionality, built with Next.js 15 and OnchainKit',
  keywords: ['base', 'miniapp', 'onchainkit', 'nextjs', 'counter', 'blockchain', 'web3'],
  authors: [{ name: 'Test Working Claude Team' }],
  creator: 'Test Working Claude',
  publisher: 'Test Working Claude',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://test-working-claude.vercel.app'),
  openGraph: {
    title: 'Test Working Claude - Counter App',
    description: 'A production-ready Base Mini App with advanced counter functionality',
    url: 'https://test-working-claude.vercel.app',
    siteName: 'Test Working Claude',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Test Working Claude Counter App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Working Claude - Counter App',
    description: 'A production-ready Base Mini App with advanced counter functionality',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <OnchainKitProvider 
          chain="base"
          config={{
            appearance: {
              mode: 'auto',
              theme: 'base',
            },
          }}
        >
          <div id="root">
            {children}
          </div>
        </OnchainKitProvider>
      </body>
    </html>
  );
}
