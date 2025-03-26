'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ProjectsPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Ensure we're in the browser before rendering
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Dynamically compute classes based on the current theme
    const containerClass =
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    const subTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
    const cardHighlightClass = theme === 'dark' ? 'text-blue-400' : 'text-blue-500'

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            {/* Header / Intro */}
            <section className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
                <p className={`mt-4 ${subTextClass}`}>
                    A collection of projects showcasing my work in machine learning and AI, cloud architecture,
                    and web development, as well as open source contributions.
                </p>
            </section>

            {/* Filter / Sort Bar */}
            <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8">
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

            {/* Projects Grid */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Project Card #1 */}
                <div className={`rounded-lg p-4 ${cardBgClass}`}>
                    <div className="relative w-full h-40 mb-4">
                        <Image
                            src="/stardex.png" // Update to your own image
                            alt="Stardex"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Stardex - Explore GitHub Stars Intelligently</h3>
                    <span className={`text-xs mb-2 inline-block ${cardHighlightClass}`}>
            Featured Project
          </span>
                    <p className={`text-sm ${cardTextClass}`}>
                        Explore GitHub Stars in real-time with AI-driven classification and analytics.
                    </p>
                </div>

                {/* Project Card #2 */}
                <div className={`rounded-lg p-4 ${cardBgClass}`}>
                    <div className="relative w-full h-40 mb-4">
                        <Image
                            src="/polyagent.png" // Update to your own image
                            alt="PolyAgent"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">PolyAgent Research Intelligence</h3>
                    <span className={`text-xs mb-2 inline-block ${cardHighlightClass}`}>
            Featured Project
          </span>
                    <p className={`text-sm ${cardTextClass}`}>
                        A multi-agent AI research and report-generation platform, providing insights into advanced ML models.
                    </p>
                </div>

                {/* Project Card #3 */}
                <div className={`rounded-lg p-4 ${cardBgClass}`}>
                    <div className="relative w-full h-40 mb-4">
                        <Image
                            src="/aiscout.png" // Update to your own image
                            alt="AIScout"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AIScout</h3>
                    <p className={`text-sm ${cardTextClass}`}>
                        Real-time AI/ML platform analyzing performance metrics and data to guide sports scouting decisions.
                    </p>
                </div>
            </section>
        </div>
    )
}
