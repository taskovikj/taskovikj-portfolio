'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AboutPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Dynamically compute classes based on the current theme
    const containerClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardText = theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
    const cardTextSmall = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            {/* Hero / Header Section */}
            <section className="max-w-5xl mx-auto text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto">
                    <Image
                        src="/ja.jpg" // Update with your image path
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Bjorn Melin</h1>
                <p className="mt-2 text-gray-500">
                    Senior Data Scientist | Cloud Solutions Architect | Ex AWS Certified
                </p>
            </section>

            {/* Professional Summary */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Professional Summary</h2>
                <p className="mt-4 leading-relaxed">
                    I am a data scientist and cloud architect with a strong background in
                    building machine learning pipelines, architecting scalable cloud solutions,
                    and delivering insights through data-driven analytics. My expertise spans
                    AWS, Python, and MLOps, with a proven track record of leveraging advanced
                    analytics to solve real-world business challenges.
                </p>
            </section>

            {/* Skills & Expertise */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Skills &amp; Expertise</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Skill Card #1 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold mb-2">AI &amp; Machine Learning</h3>
                        <p className={`text-sm ${cardText}`}>
                            TensorFlow, PyTorch, building end-to-end ML pipelines.
                        </p>
                    </div>
                    {/* Skill Card #2 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold mb-2">Cloud Architecture &amp; MLOps</h3>
                        <p className={`text-sm ${cardText}`}>
                            AWS (EC2, S3, Lambda, SageMaker), Docker, Kubernetes, CI/CD pipelines.
                        </p>
                    </div>
                    {/* Skill Card #3 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold mb-2">Programming</h3>
                        <p className={`text-sm ${cardText}`}>
                            Python, TypeScript, Go, and more.
                        </p>
                    </div>
                    {/* Skill Card #4 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                        <p className={`text-sm ${cardText}`}>
                            Statistical analysis, data visualization, feature engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* Work Experience */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="mt-6 space-y-6">
                    {/* Experience #1 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold">Senior Data Scientist</h3>
                        <p className={`text-sm ${cardTextSmall}`}>ABC Tech | Jan 2021 - Present</p>
                        <ul className={`mt-2 list-disc list-inside text-sm ${cardText}`}>
                            <li>Built and deployed end-to-end ML models for real-time analytics on AWS.</li>
                            <li>Led a team of 5 data scientists, implementing best practices for MLOps.</li>
                            <li>Developed automated CI/CD pipelines for model deployment.</li>
                        </ul>
                    </div>
                    {/* Experience #2 */}
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-xl font-semibold">Cloud Solutions Architect</h3>
                        <p className={`text-sm ${cardTextSmall}`}>XYZ Cloud Services | Jun 2018 - Dec 2020</p>
                        <ul className={`mt-2 list-disc list-inside text-sm ${cardText}`}>
                            <li>Designed scalable architectures on AWS, reducing infrastructure costs by 30%.</li>
                            <li>Migrated legacy systems to containerized microservices on Kubernetes.</li>
                            <li>Implemented DevOps pipelines for faster and more reliable releases.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* AWS Certifications */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">AWS Certifications</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Cert #1 */}
                    <div className={`p-4 rounded-lg text-center ${cardBg}`}>
                        <h3 className="text-lg font-semibold mb-2">AWS Certified Solutions Architect</h3>
                        <p className={`text-sm ${cardTextSmall}`}>Associate</p>
                    </div>
                    {/* Cert #2 */}
                    <div className={`p-4 rounded-lg text-center ${cardBg}`}>
                        <h3 className="text-lg font-semibold mb-2">AWS Certified Developer</h3>
                        <p className={`text-sm ${cardTextSmall}`}>Associate</p>
                    </div>
                    {/* Cert #3 */}
                    <div className={`p-4 rounded-lg text-center ${cardBg}`}>
                        <h3 className="text-lg font-semibold mb-2">AWS Certified SysOps Admin</h3>
                        <p className={`text-sm ${cardTextSmall}`}>Associate</p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="mt-6 space-y-4">
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
                        <p className={`text-sm ${cardTextSmall}`}>University of Example (2014 - 2016)</p>
                    </div>
                    <div className={`p-4 rounded-lg ${cardBg}`}>
                        <h3 className="text-lg font-semibold">Bachelor of Science in Information Systems</h3>
                        <p className={`text-sm ${cardTextSmall}`}>Example State University (2010 - 2014)</p>
                    </div>
                </div>
            </section>

            {/* Personal Interests */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Personal Interests</h2>
                <p className="mt-4 leading-relaxed">
                    In my spare time, I enjoy hiking, reading tech blogs, exploring new machine learning frameworks,
                    and contributing to open-source projects. I’m also an avid traveler, always on the lookout for
                    new cultures and cuisines to experience.
                </p>
            </section>

            {/* Get in Touch */}
            <section className="max-w-5xl mx-auto mt-12">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-4">
                    Feel free to reach out if you have any questions or opportunities to collaborate:
                </p>
                <p className="mt-2 text-blue-500">bjorn@example.com</p>
            </section>
        </div>
    )
}
