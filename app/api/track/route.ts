// app/api/track/route.ts
import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { url, referrer, userAgent, country } = body
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    const { error } = await supabase.from('visits').insert({
        url,
        referrer,
        user_agent: userAgent,
        country,
        ip,
    })

    if (error) {
        console.error(error)
        return NextResponse.json({ status: 'error', error }, { status: 500 })
    }

    return NextResponse.json({ status: 'ok' })
}
