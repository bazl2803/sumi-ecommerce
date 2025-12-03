'use client'
import { Button, ButtonIcon, ButtonLabel } from "@/components";
import { IconBrandGoogle } from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient()

const handleSignIn = async () => {
    const redirectToUrl = `${window.location.origin}/auth/callback`

    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: redirectToUrl,
            queryParams: { access_type: 'offline', prompt: 'consent' }
        }
    })

    if (error) {
        console.error('Error al iniciar sesión con Google', error)
    }
}

export const GoogleSignInButton = () => {
    return (
        <Button variant="subtle" onClick={handleSignIn}>
            <ButtonIcon icon={IconBrandGoogle}/>
            <ButtonLabel>Sign in with Google</ButtonLabel>
        </Button>
    )
}