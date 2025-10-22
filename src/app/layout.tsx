import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google' 
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import AppProvider from '@/components/providers/SessionProvider' // <-- 1. Impor provider baru

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Solvion Fit', 
  description: 'Track your fitness journey with Solvion Fit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Bungkus semua dengan AppProvider */}
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}