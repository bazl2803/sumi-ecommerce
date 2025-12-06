import { Button, ButtonIcon, ButtonLabel, Group } from '@/components'
import { IconShoppingCart } from '@tabler/icons-react'

export const CartButton = () => {
	return (
		<Button variant="subtle">
			<ButtonIcon icon={IconShoppingCart} />
			<ButtonLabel>Cart</ButtonLabel>
		</Button>
	)
}
