'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

interface Project {
    title: string;
    description: string;
    image: string;
    techUsed: string[];
    repo: string;
    highlight?: string;
}

interface ProjectCardProps {
    project: Project;
    delay?: string;
}

export default function ProjectCard({ project, delay = '0s' }: ProjectCardProps) {
    const { theme } = useTheme()

    // Card background
    const cardBgClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    // Text color inside the card
    const cardTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
    // Badge background for the techUsed array
    const badgeBgLight = 'bg-gray-300'
    const badgeBgDark = 'bg-gray-700'
    // Button styling
    const btnBase = 'px-6 py-3 rounded-full font-semibold transition transform hover:scale-105'
    const btnPrimary = theme === 'dark'
        ? 'bg-gray-700 text-white hover:bg-gray-600'
        : 'bg-gray-200 text-black hover:bg-gray-300'

    return (
        <div
            className={`flex flex-col h-full rounded-lg p-6 space-y-3 shadow-lg hover:shadow-xl transition fade-in-up ${cardBgClass}`}
            style={{ animationDelay: delay }}
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
        {/*    {project.highlight && (*/}
        {/*        <span className="text-xs font-medium uppercase tracking-wider text-gray-500">*/}
        {/*  {project.highlight}*/}
        {/*</span>*/}
        {/*    )}*/}
            <p className={`text-sm ${cardTextClass}`}>{project.description}</p>

            {/* Tech Used */}
            <div className="mt-4">

                <div className="flex flex-wrap gap-2">
                    {project.techUsed.map((tech, idx) => (
                        <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded ${
                                theme === 'dark' ? badgeBgDark : badgeBgLight
                            }`}
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            {/* Repository button at bottom */}
            <div className="mt-auto pt-2">
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
    )
}
