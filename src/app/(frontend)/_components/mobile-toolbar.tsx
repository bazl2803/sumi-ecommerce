import { sva } from 'panda/css'
import Image from 'next/image'
import { ProfileButton } from './profile-button'
import { Typography } from '@/components'

const MobileToolbarRecipe = sva({
	slots: ['root', 'darkLogo', 'lightLogo', 'profileButton', 'grettings'],
	base: {
		root: {
			display: { base: 'grid', md: 'none' },
			gridTemplateColumns: '1fr auto',
			gridTemplateRows: 'auto',
			padding: '1rem',
			gap: '1rem',
		},
		darkLogo: {
			width: 'auto',
			height: '40px',
			objectFit: 'contain',
			display: { base: 'none', _osDark: 'block' },
		},
		lightLogo: {
			width: 'auto',
			height: '40px',
			objectFit: 'contain',
			display: { base: 'block', _osDark: 'none' },
		},
		profileButton: {
			gridColumn: '2',
		}
	},
})

export const MobileToolbar = () => {
	const styles = MobileToolbarRecipe()

	return (
		<div className={styles.root}>
			<Image
				className={styles.darkLogo}
				src="/logo-white.svg"
				alt="logo"
				width={100}
				height={100}
			/>
			<Image
				className={styles.lightLogo}
				src="/logo-alt.svg"
				alt="logo"
				width={100}
				height={100}
			/>
			<ProfileButton className={styles.profileButton} />
		</div>
	)
}
