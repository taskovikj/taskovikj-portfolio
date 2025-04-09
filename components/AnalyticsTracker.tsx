'use client'

import { useEffect } from 'react'

export default function AnalyticsTracker() {
    useEffect(() => {
        const sendTracking = async () => {
            try {
                const geo = await fetch('https://ipapi.co/json')
                const data = await geo.json()

                await fetch('/api/track', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        url: window.location.pathname,
                        referrer: document.referrer,
                        userAgent: navigator.userAgent,
                        country: data.country_name || 'unknown',
                    }),
                })
            } catch (err) {
                console.error('Failed to track visit', err)
            }
        }

        sendTracking()
    }, [])

    return null
}
