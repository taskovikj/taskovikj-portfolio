'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { userData } from '@/data/userData'

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
            className={`w-full ${bgClass} border-t ${borderClass} py-10 px-8`}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Social links */}
                <div className="flex flex-col gap-2 items-start w-full md:w-1/3">
                    <a
                        href={`https://${userData.social.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${socialHover} ${textClass} flex items-center space-x-2`}
                    >
                        <FaInstagram size={24} />
                        <span>Instagram</span>
                    </a>
                    <a
                        href={`https://${userData.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${socialHover} ${textClass} flex items-center space-x-2`}
                    >
                        <FaLinkedin size={24} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={`https://${userData.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${socialHover} ${textClass} flex items-center space-x-2`}
                    >
                        <FaGithub size={24} />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* Copyright */}
                <div className={`text-sm ${textClass} text-center w-full md:w-1/3`}>
                    &copy; {new Date().getFullYear()} {userData.domain.trim()}. All rights reserved.
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-2 items-end w-full md:w-1/3">
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
            </div>
        </footer>
    )
}
