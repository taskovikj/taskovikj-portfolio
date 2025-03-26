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
    const socialHover = theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600'

    return (
        <footer
            className={`
        w-full
        ${bgClass}
        border-t
        ${borderClass}
        py-10
        px-8
      `}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                {/* Left Column */}
                <div className="flex flex-col space-y-6">
                    {/* Row 1: Social Icons */}
                    <div className="flex space-x-4">
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

                    {/* Row 2: Email */}
                    <div>
                        <a
                            href="mailto:branislav.taskovikj@gmail.com"
                            className={`hover:underline ${textClass}`}
                        >
                            branislav.taskovikj@gmail.com
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-6 text-right">
                    {/* Row 1: Navigation Links */}
                    <div className="flex space-x-6 justify-end">
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

                    {/* Row 2: Copyright */}
                    <div>
                        <p className={`text-sm ${textClass}`}>
                            &copy; {new Date().getFullYear()} taskovikj.io. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
