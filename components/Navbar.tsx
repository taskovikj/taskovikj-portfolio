'use client'
import { useTheme } from 'next-themes'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { userData } from '@/data/userData'

export default function Navbar() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!mounted) return null

    const defaultLight = 'bg-white'
    const defaultDark = 'bg-black'
    const scrolledLight = 'bg-gray-100/70 backdrop-blur-md'
    const scrolledDark = 'bg-black/40 backdrop-blur-md'
    const defaultClass = theme === 'dark' ? defaultDark : defaultLight
    const scrolledClass = theme === 'dark' ? scrolledDark : scrolledLight
    const navBackground = isScrolled ? scrolledClass : defaultClass
    const navShadow = isScrolled ? 'shadow-md' : ''
    const textClass = theme === 'dark' ? 'text-white' : 'text-black'

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
                  ${navBackground} ${navShadow} px-8 py-4 flex items-center justify-between ${textClass}`}
        >
            <Link href="/" className="text-lg font-bold hover:underline">
                {userData.name}
            </Link>
            <div className="hidden md:flex items-center space-x-4">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/about" className="hover:underline">
                    About
                </Link>
                <Link href="/projects" className="hover:underline">
                    Projects
                </Link>
                <Link href="/contact" className="hover:underline">
                    Contact
                </Link>
                <ThemeToggle />
            </div>
            <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? 'X' : '☰'}
            </button>
            {isMenuOpen && (
                <div
                    className={`absolute top-full left-0 w-full ${navBackground} ${textClass} flex flex-col items-start space-y-4 p-4 md:hidden shadow-md`}
                >
                    <Link href="" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/projects" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                    <ThemeToggle />
                </div>
            )}
        </nav>
    )
}
