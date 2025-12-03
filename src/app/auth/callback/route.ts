import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    let next = searchParams.get('next') ?? '/'

    if (!next.startsWith('/')) {
        next = '/'
    }

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            const forwaredHost = request.headers.get('x-forwarded-host')
            const isLocalEnv = process.env.NODE_ENV === 'development'

            const redirectUrl = (isLocalEnv || !forwaredHost)
                ? `${origin}${next}`
                : `http://${forwaredHost}${next}`

            return NextResponse.redirect(new URL(redirectUrl))
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}