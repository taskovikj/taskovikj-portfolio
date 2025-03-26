'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white'
    const textClass = theme === 'dark' ? 'text-white' : 'text-black'
    const borderClass = theme === 'dark' ? 'border-gray-300' : 'border-gray-700'
    // Use gray hover colors for social icons
    const socialHover = theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600'

    return (
        <footer
            className={`w-full ${bgClass} border-t ${borderClass} px-8 py-12 flex flex-col items-center`}
        >
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${socialHover} ${textClass}`}
                >
                    <FaTwitter size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${socialHover} ${textClass}`}
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${socialHover} ${textClass}`}
                >
                    <FaGithub size={24} />
                </a>
            </div>

            {/* Additional Navigation and Contact Info */}
            <div className="flex flex-col items-center mt-4">
                <div className="flex space-x-6 mb-2">
                    <Link href="/about" className={`hover:underline ${textClass}`}>
                        About
                    </Link>
                    <Link href="/projects" className={`hover:underline ${textClass}`}>
                        Projects
                    </Link>
                    <Link href="/contact" className={`hover:underline ${textClass}`}>
                        Contact
                    </Link>
                </div>
                <div>
                    <a href="mailto:bjorn@example.com" className={`hover:underline ${textClass}`}>
                        bjorn@example.com
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className={`text-sm ${textClass} mt-4`}>
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
        </footer>
    )
}
