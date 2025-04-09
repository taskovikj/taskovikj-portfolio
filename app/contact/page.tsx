'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState, JSX } from 'react'
import {
    FaRegCopy,
    FaEnvelope,
    FaPhone,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaExternalLinkAlt,
} from 'react-icons/fa'
import { userData } from '@/data/userData'

export default function ContactPage() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [copyStatus, setCopyStatus] = useState<string | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

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
                    {userData.name}
                </h1>
                <p className="text-2xl text-gray-400 fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {userData.title}
                </p>

                {/* Contact Information Rows */}
                <div className="flex flex-col items-center space-y-4 w-full">
                    <InfoRow
                        icon={<FaEnvelope size={20} />}
                        label={userData.email}
                        copyValue={userData.email}
                        isLink={true}
                        link={`mailto:${userData.email}`}
                        delay="0.4s"
                    />
                    <InfoRow
                        icon={<FaPhone size={20} />}
                        label={userData.phone}
                        copyValue={userData.phone}
                        isLink={true}
                        link={`tel:${userData.phone}`}
                        delay="0.5s"
                    />

                    {/* Social Media Rows that open links */}
                    <InfoRow
                        icon={<FaInstagram size={20} />}
                        label="Instagram"
                        copyValue={userData.social.instagram}
                        isLink={true}
                        link={`https://${userData.social.instagram}`}
                        delay="0.6s"
                    />
                    <InfoRow
                        icon={<FaLinkedin size={20} />}
                        label="LinkedIn"
                        copyValue={userData.social.linkedin}
                        isLink={true}
                        link={`https://${userData.social.linkedin}`}
                        delay="0.7s"
                    />
                    <InfoRow
                        icon={<FaGithub size={20} />}
                        label="GitHub"
                        copyValue={userData.social.github}
                        isLink={true}
                        link={`https://${userData.social.github}`}
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
