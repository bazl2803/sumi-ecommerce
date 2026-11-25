import { Navbar, NavbarItem, NavbarList } from '@/components';
import { usePathname } from 'next/navigation';
import {
	LuEllipsis,
	LuHouse,
	LuList,
	LuShoppingCart,
	LuUser,
} from 'react-icons/lu';

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
		label: 'Más',
		icon: LuEllipsis,
	},
];

export function StorefrontNavbar() {
	const selectedItem = items.find((item) => item.href === usePathname());

	return (
		<Navbar variant='floating' fullWidth>
			<NavbarList>
				{items.map((item, index) => (
					<NavbarItem
						key={index}
						icon={item.icon}
						label={item.label}
						href={item.href}
						selected={item === selectedItem}
					/>
				))}
			</NavbarList>
		</Navbar>
	);
}
