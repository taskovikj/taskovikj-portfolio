'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { userData } from '@/data/userData'
import ProjectCard from '@/components/ProjectCard'

const cvOptions = [
    {
        label: 'English CV',
        href: '/Branislav_Taskovikj_CV_EN.pdf',
        filename: 'Branislav_Taskovikj_CV_EN.pdf',
    },
    {
        label: 'German CV',
        href: '/Branislav_Taskovikj_CV_DE.pdf',
        filename: 'Branislav_Taskovikj_CV_DE.pdf',
    },
]

export default function Home() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isCvMenuOpen, setIsCvMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = !mounted || theme === 'dark'
    const bgClass = isDark ? 'bg-black text-white' : 'bg-white text-black'
    const btnBase = 'inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition transform hover:scale-105'
    const btnPrimary = isDark
        ? 'bg-gray-700 text-white hover:bg-gray-600'
        : 'bg-gray-200 text-black hover:bg-gray-300'
    const menuClass = isDark
        ? 'bg-gray-900 text-white border-gray-700'
        : 'bg-white text-black border-gray-200'
    const menuItemClass = isDark
        ? 'hover:bg-gray-800'
        : 'hover:bg-gray-100'

    // For the card-like background behind Background & Skills
    const cardBg = isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-700'

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${bgClass}`}>
            {/* Hero Section */}
            <section
                className="relative z-30 max-w-5xl w-full py-16 flex flex-col items-center text-center fade-in-up"
                style={{ animationDelay: '0.2s' }}
            >
                <div className="mb-6 w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/profile_picture.jpg"
                        alt="Profile Photo"
                        fill
                        className="object-cover object-top"
                    />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Hi, I&apos;m {userData.name}
                </h1>
                <h2 className="text-xl text-gray-500 mb-8">
                    {userData.title}
                </h2>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Link href="/contact" className={`${btnBase} ${btnPrimary}`}>
                        Hire Me
                    </Link>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsCvMenuOpen((isOpen) => !isOpen)}
                            className={`${btnBase} ${btnPrimary}`}
                            aria-expanded={isCvMenuOpen}
                            aria-haspopup="menu"
                        >
                            <FaDownload className="shrink-0" />
                            Download CV
                        </button>
                        {isCvMenuOpen && (
                            <div
                                className={`absolute left-1/2 z-50 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-lg border shadow-xl ${menuClass}`}
                                role="menu"
                            >
                                {cvOptions.map((cv) => (
                                    <Link
                                        key={cv.href}
                                        href={cv.href}
                                        download={cv.filename}
                                        className={`block px-4 py-3 text-sm font-semibold transition ${menuItemClass}`}
                                        role="menuitem"
                                        onClick={() => setIsCvMenuOpen(false)}
                                    >
                                        {cv.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Background & Skills Section */}
            <section
                id="about"
                className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-gray-300 dark:border-gray-700 px-4 fade-in-up"
                style={{ animationDelay: '0.4s' }}
            >
                {/* Background Card */}
                <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition ${cardBg}`}>
                    <h3 className="text-2xl font-semibold mb-2">Background</h3>
                    <p className="leading-relaxed">
                        {userData.about.summary}
                    </p>
                </div>

                {/* Skills Card */}
                <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition ${cardBg}`}>
                    <h3 className="text-2xl font-semibold mb-2">Skills &amp; Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {userData.about.skills.map((skill, index) => (
                            <div key={index} className="space-y-1">
                                <h4 className="text-lg font-semibold">{skill.title}</h4>
                                <p className="text-sm">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div
                className="max-w-5xl w-full flex justify-center pb-16 fade-in-up"
                style={{ animationDelay: '0.6s' }}
            >
                <Link href="/about" className={`${btnBase} ${btnPrimary}`}>
                    Learn More About Me
                </Link>
            </div>

            {/* Featured Projects Section */}
            <section
                className="max-w-5xl w-full py-16 border-t border-gray-300 dark:border-gray-700 px-4 fade-in-up"
                style={{ animationDelay: '0.8s' }}
            >
                <h3 className="text-3xl font-semibold mb-2 text-center">Featured Projects</h3>
                <p className="text-center text-gray-700 dark:text-gray-400 mb-8">
                    A selection of my strongest production, automation, data, and open-source work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {userData.featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            delay={`${1.0 + index * 0.2}s`}
                        />
                    ))}
                </div>
                <div
                    className="mt-8 text-center fade-in-up"
                    style={{ animationDelay: '1.6s' }}
                >
                    <Link href="/projects" className={`${btnBase} ${btnPrimary}`}>
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    )
}
