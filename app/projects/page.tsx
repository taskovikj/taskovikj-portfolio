'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { userData } from '@/data/userData'

export default function ProjectsPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const containerClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    const subTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
    const btnBase = 'px-6 py-3 rounded-full font-semibold transition transform hover:scale-105'
    const btnPrimary = theme === 'dark'
        ? 'bg-gray-700 text-white hover:bg-gray-600'
        : 'bg-gray-200 text-black hover:bg-gray-300'

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            {/* Header / Intro with Animation */}
            <section
                className="max-w-5xl mx-auto text-center fade-in-up"
                style={{ animationDelay: '0.2s' }}
            >
                <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
                <p className={`mt-4 ${subTextClass}`}>
                    A collection of projects showcasing my work in machine learning, cloud architecture, full-stack development, and more.
                </p>
            </section>

            {/* (Optional) Filter / Sort Bar with Animation */}
            <section
                className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 fade-in-up"
                style={{ animationDelay: '0.4s' }}
            >
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <button
                        className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        AI &amp; Machine Learning
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        Web Development
                    </button>
                </div>
                <div>
                    <select
                        className={`px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
                    >
                        <option>Featured First</option>
                        <option>Most Recent</option>
                        <option>Alphabetical</option>
                    </select>
                </div>
            </section>

            {/* Projects Grid with Staggered Animation */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {userData.projects.map((project, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-6 ${cardBgClass} shadow-lg hover:shadow-xl transition space-y-3 fade-in-up`}
                        style={{ animationDelay: `${0.6 + index * 0.2}s` }}
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
                        <p className={`text-sm ${cardTextClass}`}>{project.description}</p>
                        <div className="mt-4">
                            <p className="text-sm mb-2 text-gray-500">Tech Used:</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techUsed.map((tech, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-xs rounded">
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${btnBase} ${btnPrimary}`}
                            >
                                View Repository
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            {/* (Optional) You can add more sections here */}
        </div>
    )
}
