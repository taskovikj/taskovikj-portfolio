import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnalyticsTracker from '@/components/AnalyticsTracker'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Branislav Taskoikj',
    description: 'My portfolio website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">
            {/* Tracking Component */}
            <AnalyticsTracker />

            <header>
                <Navbar />
            </header>
            <main className="min-h-screen md:pt-0">
                {children}
            </main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}
