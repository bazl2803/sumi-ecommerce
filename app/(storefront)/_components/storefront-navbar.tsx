import { Navbar, NavbarItem, NavbarItemIcon, NavbarItemLabel, NavbarList } from '@/components'
import { LuHouse, LuList, LuSearch, LuShoppingCart, LuUser } from 'react-icons/lu'

const items = [
	{
		label: 'Inicio',
		icon: LuHouse,
		href: '/',
	},
	{
		label: 'Categorías',
		icon: LuList,
		href: '/categories',
	},
	{
		label: 'Carrito',
		icon: LuShoppingCart,
		href: '/cart',
	},
	{
		label: 'Perfil',
		icon: LuUser,
		href: '/profile',
	},
	{
		label: 'Buscar',
		icon: LuSearch,
		href: '/search',
	},
]

export function StorefrontNavbar() {
	return (
		<Navbar variant='floating'>
			<NavbarList>
				{items.map((item) => (
					<NavbarItem
						href={item.href}
						key={item.label}
					>
						<NavbarItemIcon icon={item.icon} />
						<NavbarItemLabel>{item.label}</NavbarItemLabel>
					</NavbarItem>
				))}
			</NavbarList>
		</Navbar>
	)
}
