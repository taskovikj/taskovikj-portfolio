'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { userData } from '@/data/userData'

export default function AboutPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const containerClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    const cardText = theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
    const cardTextSmall = theme === 'dark' ? 'text-gray-400' : 'text-gray-600'

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto">
                    <Image
                        src={userData.profileImage}
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{userData.name}</h1>
                <p className="mt-2 text-gray-500">{userData.title}</p>
            </section>

            {/* Summary */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold">Professional Summary</h2>
                <p className="mt-4 leading-relaxed">{userData.about.summary}</p>
            </section>

            {/* Skills */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-2xl font-bold">Skills &amp; Expertise</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {userData.about.skills.map((skill, index) => (
                        <div key={index} className={`p-4 rounded-lg ${cardBg} shadow-lg hover:shadow-xl transition`}>
                            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                            <p className={`text-sm ${cardText}`}>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Work Experience */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="mt-6 space-y-6">
                    {(userData.workExperience.length ? userData.workExperience : [
                        {
                            role: "Full Stack Developer",
                            company: "TechNova Labs",
                            period: "Jan 2023 – Present",
                            details: [
                                "Developed and maintained scalable web applications.",
                                "Worked closely with cross-functional teams on backend services.",
                                "Participated in system architecture design and deployment automation."
                            ]
                        },
                        {
                            role: "Software Engineer Intern",
                            company: "CodeSphere",
                            period: "Jul 2022 – Dec 2022",
                            details: [
                                "Built internal dashboards for performance monitoring.",
                                "Wrote REST APIs and implemented authentication systems.",
                                "Assisted in database optimization and data migrations."
                            ]
                        }
                    ]).map((exp, index) => (
                        <div key={index} className={`p-4 rounded-lg ${cardBg} shadow-lg transition`}>
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className={`text-sm ${cardTextSmall}`}>{exp.company} | {exp.period}</p>
                            <ul className={`mt-2 list-disc list-inside text-sm ${cardText}`}>
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '1s' }}>
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userData.certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block p-3 rounded-md ${cardBg} shadow hover:shadow-xl transition duration-300 text-center cursor-pointer hover:scale-[1.02]`}
                        >
                            <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
                            <p className={`text-xs ${cardTextSmall}`}>{cert.level}</p>
                            {cert.link && (
                                <p className="text-blue-400 text-xs mt-1 underline">
                                    {cert.link.split('/').pop()?.replace('.pdf', '')}
                                </p>
                            )}
                        </a>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="mt-6 space-y-4">
                    {userData.education.map((edu, index) => (
                        <div key={index} className={`p-4 rounded-lg ${cardBg} shadow-lg transition`}>
                            <h3 className="text-lg font-semibold">{edu.degree}</h3>
                            <p className={`text-sm ${cardTextSmall}`}>{edu.institution} ({edu.period})</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Personal Interests */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '1.4s' }}>
                <h2 className="text-2xl font-bold">Personal Interests</h2>
                <p className="mt-4 leading-relaxed">{userData.personalInterests}</p>
            </section>

            {/* Contact */}
            <section className="max-w-5xl mx-auto mt-12 fade-in-up" style={{ animationDelay: '1.6s' }}>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-4">Feel free to reach out if you have any questions or opportunities to collaborate:</p>
                <p className="mt-2 text-blue-500">{userData.email}</p>
            </section>
        </div>
    )
}
