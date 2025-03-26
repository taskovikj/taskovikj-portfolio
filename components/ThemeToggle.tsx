// components/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === 'dark'

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox */}
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={() => setTheme(isDark ? 'light' : 'dark')}
            />
            {/* Toggle Track */}
            <div
                className={`w-12 h-7 rounded-full transition-colors
          ${isDark ? 'bg-gray-600 peer-checked:bg-gray-500' : 'bg-gray-300 peer-checked:bg-gray-400'}
          peer
          peer-focus:outline-none
          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all
          after:border after:border-gray-200
          peer-checked:after:translate-x-5
          dark:after:border-gray-700
        `}
            />
            {/* Label Text */}
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDark ? 'Dark' : 'Light'}
      </span>
        </label>
    )
}
