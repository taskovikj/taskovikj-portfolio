'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Wait for client-side hydration so theme is available
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Dynamic background/text classes
    const bgClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    // Monochrome button styling
    const btnBase =
        'px-6 py-3 rounded-full font-semibold transition transform hover:scale-105'
    const btnPrimary =
        theme === 'dark'
            ? 'bg-gray-700 text-white hover:bg-gray-600'
            : 'bg-gray-200 text-black hover:bg-gray-300'
    // A subtle card background
    const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardShadow = 'shadow-lg hover:shadow-xl transition'

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${bgClass}`}>
            {/* Hero Section */}
            <section className="max-w-5xl w-full py-16 flex flex-col items-center text-center">
                <div className="mb-6 w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/ja.jpg" // Ensure this image exists in /public
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Crafting AI Solutions &amp; Cloud Architecture
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mb-8">
                    Senior Data Scientist and AWS Solutions Architect specializing in AI/ML
                    innovations and scalable cloud architecture.
                </p>
                <div className="space-x-4">
                    <Link href="/contact" className={`${btnBase} ${btnPrimary}`}>
                        Hire Me
                    </Link>
                    <Link href="/cv.pdf" download className={`${btnBase} ${btnPrimary}`}>
                        Download CV
                    </Link>
                </div>
            </section>

            {/* Background & Skills Section */}
            <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-gray-300 dark:border-gray-700 px-4">
                {/* Background Card */}
                <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-4`}>
                    <h3 className="text-2xl font-semibold">Background</h3>
                    <p className="leading-relaxed text-gray-400">
                        I&apos;m a seasoned data scientist and cloud architect with a strong background in building
                        machine learning pipelines, architecting scalable cloud solutions, and delivering insights through
                        data-driven analytics. My expertise spans AWS, Python, and MLOps, with a proven track record of
                        leveraging advanced analytics to solve real-world business challenges.
                    </p>
                </div>

                {/* Skills Card */}
                <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-4`}>
                    <h3 className="text-2xl font-semibold">Skills &amp; Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                        <div className="space-y-1">
                            <h4 className="text-lg font-semibold">AI &amp; Machine Learning</h4>
                            <p className="text-sm">
                                TensorFlow, PyTorch, building end-to-end ML pipelines
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg font-semibold">Cloud Architecture &amp; MLOps</h4>
                            <p className="text-sm">
                                AWS (EC2, S3, Lambda, SageMaker), Docker, Kubernetes, CI/CD
                            </p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg font-semibold">Programming</h4>
                            <p className="text-sm">Python, TypeScript, Go, and more</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg font-semibold">Data Science</h4>
                            <p className="text-sm">Statistical analysis, data visualization</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learn More Button */}
            <div className="max-w-5xl w-full flex justify-center pb-16">
                <Link href="/about" className={`${btnBase} ${btnPrimary}`}>
                    Learn More About Me
                </Link>
            </div>

            {/* Featured Projects Section */}
            <section className="max-w-5xl w-full py-16 border-t border-gray-300 dark:border-gray-700 px-4">
                <h3 className="text-3xl font-semibold mb-2 text-center">Featured Projects</h3>
                <p className="text-center text-gray-400 mb-8">
                    A selection of my recent projects in AI, ML, and full-stack development
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project Card #1 */}
                    <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-3`}>
                        <h4 className="text-xl font-semibold">Stardex - Explore GitHub Stars Intelligently</h4>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Featured Project
            </span>
                        <p className="text-sm text-gray-400">
                            Explore GitHub Stars in real-time with AI-driven classification and analytics.
                        </p>
                    </div>
                    {/* Project Card #2 */}
                    <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-3`}>
                        <h4 className="text-xl font-semibold">PolyAgent Research Intelligence</h4>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Featured Project
            </span>
                        <p className="text-sm text-gray-400">
                            A modular, multi-agent AI research and report-generation platform, providing insights
                            into advanced ML models.
                        </p>
                    </div>
                    {/* Project Card #3 */}
                    <div className={`${cardBg} ${cardShadow} p-6 rounded-lg space-y-3`}>
                        <h4 className="text-xl font-semibold">AIScout</h4>
                        <p className="text-sm text-gray-400">
                            Real-time AI/ML platform analyzing performance metrics and data to guide sports scouting decisions.
                        </p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Link href="/projects" className={`${btnBase} ${btnPrimary}`}>
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    )
}
