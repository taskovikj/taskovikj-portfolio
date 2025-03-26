'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState, JSX } from 'react'
import {
    FaRegCopy,
    FaEnvelope,
    FaPhone,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaExternalLinkAlt,
} from 'react-icons/fa'

export default function ContactPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [copyStatus, setCopyStatus] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Define your contact details
    const email = 'bjorn@example.com'
    const phone = '+1 (123) 456-7890'
    const twitter = 'twitter.com/bjorn'
    const linkedin = 'linkedin.com/in/bjorn'
    const github = 'github.com/bjorn'

    // Container styling based on theme
    const containerClass = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    // Use a light background for rows: bg-gray-50 in light mode and bg-gray-800 in dark mode
    const rowClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    // Border for each row
    const rowBorder = theme === 'dark' ? 'border border-gray-700' : 'border border-gray-200'

    // Handler to copy text to clipboard
    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopyStatus(`Copied "${text}" to clipboard!`)
            setTimeout(() => setCopyStatus(null), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    // Reusable row component with animation
    const InfoRow = ({
                         icon,
                         label,
                         copyValue,
                         isLink = false,
                         link,
                         delay = '0s',
                     }: {
        icon: JSX.Element
        label: string
        copyValue: string
        isLink?: boolean
        link?: string
        delay?: string
    }) => {
        return (
            <div
                className={`flex items-center justify-between p-4 ${rowClass} ${rowBorder} rounded-md w-full max-w-md transition hover:shadow-md fade-in-up`}
                style={{ animationDelay: delay }}
            >
                <div className="flex items-center space-x-3">
                    {icon}
                    <span className="font-medium">{label}</span>
                </div>
                {isLink ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-lg"
                    >
                        <FaExternalLinkAlt />
                    </a>
                ) : (
                    <button onClick={() => handleCopy(copyValue)} className="cursor-pointer">
                        <FaRegCopy className="text-lg" />
                    </button>
                )}
            </div>
        )
    }

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8">
                {/* Big Name and Title with Animation */}
                <h1 className="text-5xl font-bold fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Bjorn Melin
                </h1>
                <p className="text-2xl text-gray-400 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Senior Data Scientist &amp; Cloud Solutions Architect
                </p>

                {/* Contact Information Rows */}
                <div className="flex flex-col items-center space-y-4 w-full">
                    <InfoRow
                        icon={<FaEnvelope size={20} />}
                        label={email}
                        copyValue={email}
                        delay="0.4s"
                    />
                    <InfoRow
                        icon={<FaPhone size={20} />}
                        label={phone}
                        copyValue={phone}
                        delay="0.5s"
                    />
                    {/* Social Media Rows */}
                    <InfoRow
                        icon={<FaTwitter size={20} />}
                        label="Twitter"
                        copyValue={twitter}
                        isLink={true}
                        link={`https://${twitter}`}
                        delay="0.6s"
                    />
                    <InfoRow
                        icon={<FaLinkedin size={20} />}
                        label="LinkedIn"
                        copyValue={linkedin}
                        isLink={true}
                        link={`https://${linkedin}`}
                        delay="0.7s"
                    />
                    <InfoRow
                        icon={<FaGithub size={20} />}
                        label="GitHub"
                        copyValue={github}
                        isLink={true}
                        link={`https://${github}`}
                        delay="0.8s"
                    />
                </div>

                {/* Copy status message */}
                {copyStatus && (
                    <p className="mt-4 text-center fade-in-up" style={{ animationDelay: '0.9s' }}>
                        {copyStatus}
                    </p>
                )}
            </div>
        </div>
    )
}
