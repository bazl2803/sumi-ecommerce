import { Card, Typography } from "@/components";
import { css } from "panda/css";
import { GoogleSignInButton } from "@/app/auth/_components/google-signin-button";


export default function AuthPage() {
    return (
        <Card className={
            css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                width: 'xs',
                maxWidth: '400px',
                margin: '0 auto',
                textAlign: 'center',
                gap: 4,
            })
        }>
            <Typography role="title1" emphasized>Iniciar Sesión</Typography>
            <GoogleSignInButton/>
        </Card>
    )
}