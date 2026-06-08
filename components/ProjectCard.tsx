'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface Project {
    title: string;
    description: string;
    image: string;
    techUsed: string[];
    repo?: string;
    preview?: string;
    highlight?: string;
}

interface ProjectCardProps {
    project: Project;
    delay?: string;
}

export default function ProjectCard({ project, delay = '0s' }: ProjectCardProps) {
    const { theme } = useTheme()
    const isDark = theme !== 'light'

    // Card background
    const cardBgClass = isDark ? 'bg-gray-800' : 'bg-gray-100'
    // Text color inside the card
    const cardTextClass = isDark ? 'text-gray-300' : 'text-gray-700'
    // Badge background for the techUsed array
    const badgeBgLight = 'bg-gray-300'
    const badgeBgDark = 'bg-gray-700'
    // Button styling
    const btnBase = 'inline-flex h-11 w-full sm:w-[8.25rem] items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold whitespace-nowrap transition transform hover:scale-105'
    const btnPrimary = isDark
        ? 'bg-gray-700 text-white hover:bg-gray-600'
        : 'bg-gray-200 text-black hover:bg-gray-300'
    const btnSecondary = isDark
        ? 'bg-white text-black hover:bg-gray-200'
        : 'bg-black text-white hover:bg-gray-800'

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
            <div className="space-y-1">
                {project.highlight && (
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {project.highlight}
                    </span>
                )}
                <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
            <p className={`text-sm ${cardTextClass}`}>{project.description}</p>

            {/* Tech Used */}
            <div className="mt-4">

                <div className="flex flex-wrap gap-2">
                    {project.techUsed.map((tech, idx) => (
                        <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded ${
                                isDark ? badgeBgDark : badgeBgLight
                            }`}
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-2 pt-2">
                {project.preview && (
                    <Link
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnBase} ${btnSecondary}`}
                    >
                        <FaExternalLinkAlt className="shrink-0" />
                        Preview
                    </Link>
                )}
                {project.repo && (
                    <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnBase} ${btnPrimary}`}
                    >
                        <FaGithub className="shrink-0" />
                        Repository
                    </Link>
                )}
            </div>
        </div>
    )
}
