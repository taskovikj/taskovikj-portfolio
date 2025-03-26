'use client'
import { useTheme } from 'next-themes'
import {JSX, useEffect, useState} from 'react'
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

    // For the row cards, use a lighter background for light theme.
    // We'll use bg-gray-50 in light mode and bg-gray-800 in dark mode.
    const rowClass = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'

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

    // Reusable row component
    const InfoRow = ({
                         icon,
                         label,
                         copyValue,
                         isLink = false,
                         link,
                     }: {
        icon: JSX.Element
        label: string
        copyValue: string
        isLink?: boolean
        link?: string
    }) => {
        return (
            <div className={`flex items-center justify-between p-4 ${rowClass} rounded-md w-full max-w-md`}>
                <div className="flex items-center space-x-2">
                    {icon}
                    <span className="font-medium">{label}</span>
                </div>
                {isLink ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"
                    >
                        <FaExternalLinkAlt size={18} />
                    </a>
                ) : (
                    <button onClick={() => handleCopy(copyValue)}>
                        <FaRegCopy size={18} className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-400" />
                    </button>
                )}
            </div>
        )
    }

    return (
        <div className={`pt-16 min-h-screen px-6 py-10 ${containerClass}`}>
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
                {/* Big Name and Title */}
                <h1 className="text-5xl font-bold">Bjorn Melin</h1>
                <p className="text-2xl text-gray-400">
                    Senior Data Scientist &amp; Cloud Solutions Architect
                </p>

                {/* Contact Information */}
                <div className="flex flex-col items-center space-y-4 w-full">
                    <InfoRow icon={<FaEnvelope size={20} />} label={email} copyValue={email} />
                    <InfoRow icon={<FaPhone size={20} />} label={phone} copyValue={phone} />

                    {/* Social Media: these rows open the link in a new tab */}
                    <InfoRow
                        icon={<FaTwitter size={20} />}
                        label="Twitter"
                        copyValue={twitter}
                        isLink={true}
                        link={`https://${twitter}`}
                    />
                    <InfoRow
                        icon={<FaLinkedin size={20} />}
                        label="LinkedIn"
                        copyValue={linkedin}
                        isLink={true}
                        link={`https://${linkedin}`}
                    />
                    <InfoRow
                        icon={<FaGithub size={20} />}
                        label="GitHub"
                        copyValue={github}
                        isLink={true}
                        link={`https://${github}`}
                    />
                </div>

                {copyStatus && <p className="mt-4 text-center">{copyStatus}</p>}
            </div>
        </div>
    )
}
