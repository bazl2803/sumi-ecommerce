import { Button, ButtonIcon, Group, Input, Toolbar } from '@/components'
import { IconShoppingCart } from '@tabler/icons-react'
import Image from 'next/image'

export const EcommerceToolbar = () => {
	return (
		<Toolbar>
			<div>
				<Image
					src={'/logo-white.svg'}
					alt="logo"
					width={100}
					height={100}
				/>
			</div>

			<div>
				<Input placeholder="Buscar" />
			</div>

			<Group>
				<Button variant="solid">
					<ButtonIcon icon={IconShoppingCart} />
				</Button>
				<Button variant="solid">Iniciar Sesión</Button>
				<Button variant="solid">Registrarse</Button>
			</Group>
		</Toolbar>
	)
}
