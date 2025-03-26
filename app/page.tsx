'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { userData } from '@/data/userData'

export default function Home() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const bgClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    const btnBase = 'px-6 py-3 rounded-full font-semibold transition transform hover:scale-105'
    const btnPrimary = theme === 'dark'
        ? 'bg-gray-700 text-white hover:bg-gray-600'
        : 'bg-gray-200 text-black hover:bg-gray-300'
    const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardShadow = 'shadow-lg hover:shadow-xl transition'

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${bgClass}`}>
            {/* Hero Section */}
            <section
                className="max-w-5xl w-full py-16 flex flex-col items-center text-center fade-in-up"
                style={{ animationDelay: '0.2s' }}
            >
                <div className="mb-6 w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/ja.jpg"
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Hi, I&apos;m {userData.name}
                </h1>
                <h2 className="text-xl text-gray-500 mb-8">
                    {userData.title}
                </h2>
                <div className="space-x-4">
                    <Link href="/hire" className={`${btnBase} ${btnPrimary}`}>
                        Hire Me
                    </Link>
                    <Link href="/cv.pdf" download className={`${btnBase} ${btnPrimary}`}>
                        Download CV
                    </Link>
                </div>
            </section>

            {/* Background & Skills Section */}
            <section
                id="about"
                className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-gray-300 dark:border-gray-700 px-4 fade-in-up"
                style={{ animationDelay: '0.4s' }}
            >
                {/* Background Card */}
                <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-4`}>
                    <h3 className="text-2xl font-semibold">Background</h3>
                    <p className="leading-relaxed text-gray-400">
                        {userData.about.summary}
                    </p>
                </div>

                {/* Skills Card */}
                <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-4`}>
                    <h3 className="text-2xl font-semibold">Skills &amp; Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                        {userData.about.skills.map((skill, index) => (
                            <div key={index} className="space-y-1">
                                <h4 className="text-lg font-semibold">{skill.title}</h4>
                                <p className="text-sm">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Centered About Button */}
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
                <p className="text-center text-gray-400 mb-8">
                    A selection of my recent projects in AI, ML, and full-stack development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {userData.featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-3 fade-in-up`}
                            style={{ animationDelay: `${1.0 + index * 0.2}s` }}
                        >
                            <div className="relative w-full h-40 mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            {project.highlight && (
                                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                  {project.highlight}
                </span>
                            )}
                            <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
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
