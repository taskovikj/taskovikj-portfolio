'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { userData } from '@/data/userData'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setMounted(true)
    }, [])

    // Light/dark mode classes
    const isDark = !mounted || theme === 'dark'
    const containerClass = isDark ? 'bg-black text-white' : 'bg-white text-black'
    const subTextClass = isDark ? 'text-gray-400' : 'text-gray-500'

    // Filter the projects by title, description, or techUsed
    const filteredProjects = userData.projects.filter((project) => {
        const lcSearch = searchTerm.toLowerCase()
        // Check title or description
        if (
            project.title.toLowerCase().includes(lcSearch) ||
            project.description.toLowerCase().includes(lcSearch)
        ) {
            return true
        }
        // Check techUsed array
        const matchesTech = project.techUsed.some((tech) =>
            tech.toLowerCase().includes(lcSearch)
        )
        return matchesTech
    })

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            {/* Header / Intro with Animation */}
            <section
                className="max-w-5xl mx-auto text-center fade-in-up"
                style={{ animationDelay: '0.2s' }}
            >
                <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
                <p className={`mt-4 ${subTextClass}`}>
                    Production websites, automation systems, data tools, and backend-heavy applications I have built or maintain.
                </p>
            </section>

            {/* Modern Search Form */}
            <section
                className="max-w-5xl mx-auto mt-8 fade-in-up"
                style={{ animationDelay: '0.4s' }}
            >
                <div className="flex justify-center w-full">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search projects..."
                        className={`
              w-full max-w-md px-4 py-2 rounded-full 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition
              ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}
            `}
                    />
                </div>
            </section>

            {/* Projects Grid with Staggered Animation */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        delay={`${0.6 + index * 0.2}s`}
                    />
                ))}
            </section>
        </div>
    )
}
