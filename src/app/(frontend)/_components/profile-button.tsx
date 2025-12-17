import { Avatar, Button, ButtonLabel, Typography } from '@/components'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { sva } from 'panda/css'

const ProfileButtonRecipe = sva({
	slots: ['avatar', 'label'],
	base: {
		avatar: {
			width: '2rem',
			height: '2rem',
		},
		label: {
			display: { base: 'none' },
		},
	},
})

export const ProfileButton = async ({ className }: { className?: string }) => {
	const styles = ProfileButtonRecipe({ className })
	const supabase = await createClient()
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser()

	if (error || !user) {
		return (
			<Link href={'/auth'}>
				<Button>Iniciar Sesión</Button>
			</Link>
		)
	}

	const usernameByMetadata = user.user_metadata.full_name || user.user_metadata.name
	const avatarUrl = user.user_metadata.avatar_url

	return (
		<Button variant={'ghost'}>
			<Avatar
				className={styles.avatar}
				src={avatarUrl}
				fallback={usernameByMetadata[0]}
			/>

			<ButtonLabel className={styles.label}>
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
