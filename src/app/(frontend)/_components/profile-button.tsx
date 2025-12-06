import { Avatar, Button, ButtonLabel, Group, Hint, Stack, Typography } from '@/components'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { css } from 'panda/css'

export const ProfileButton = async () => {
	const supabase = await createClient()
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser()

	if (error || !user) {
		return (
			<Link href={'/auth'}>
				<Button>Iniciar Sesion</Button>
			</Link>
		)
	}

	const usernameByMetadata = user.user_metadata.full_name || user.user_metadata.name
	const avatarUrl = user.user_metadata.avatar_url

	return (
		<Button variant={'subtle'}>
			<Avatar
				src={avatarUrl}
				fallback={usernameByMetadata[0]}
			/>

			<ButtonLabel>
				<Typography
					role="callout"
					emphasized
				>
					{usernameByMetadata}
				</Typography>
			</ButtonLabel>
		</Button>
	)
}
