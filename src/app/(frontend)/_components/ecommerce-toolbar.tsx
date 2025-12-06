import {
	Avatar,
	Button,
	ButtonLabel,
	Dropdown,
	DropdownContent,
	DropdownTrigger,
	Group,
	Input,
	Toolbar,
} from '@/components'
import Image from 'next/image'
import { css, sva } from 'panda/css'
import { ProfileButton } from '@/app/(frontend)/_components/profile-button'
import { CartButton } from './cart-button'

const EcommerceToolbarRecipe = sva({
	slots: ['root', 'logo', 'search', 'actions'],
	base: {
		search: {
			flex: 1,
			maxWidth: '600px',
		},
	},
})

export const EcommerceToolbar = async () => {
	const styles = EcommerceToolbarRecipe()

	return (
		<Toolbar>
			<div className={styles.logo}>
				<Image
					className={css({
						width: 'auto',
						height: '40px',
						objectFit: 'contain',
					})}
					src={'/logo-white.svg'}
					alt="logo"
					width={100}
					height={100}
				/>
			</div>

			<Input
				className={styles.search}
				placeholder="Buscar productos..."
			/>

			<Group className={styles.actions}>
				<ProfileButton />
				<CartButton />
			</Group>
		</Toolbar>
	)
}
