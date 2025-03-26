'use client'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!mounted) return null

    const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white'
    const textClass = theme === 'dark' ? 'text-white' : 'text-black'
    const borderClass = theme === 'dark' ? 'border-gray-300' : 'border-gray-700'
    const shadowClass = isScrolled ? 'shadow-md' : ''

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 ${bgClass} ${shadowClass} border-b ${borderClass} px-8 py-4`}
        >
            <div className="flex justify-between items-center">
                {/* Left side: Name (clickable, linking to home page) */}
                <Link href="/" className={`text-lg font-bold ${textClass} hover:underline`}>
                    Bjorn Melin
                </Link>

                {/* Right side: Navigation links and ThemeToggle */}
                <div className="flex items-center space-x-4">
                    <Link href="/about" className={`hover:underline ${textClass}`}>
                        About
                    </Link>
                    <Link href="/projects" className={`hover:underline ${textClass}`}>
                        Projects
                    </Link>
                    <Link href="/contact" className={`hover:underline ${textClass}`}>
                        Contact
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
