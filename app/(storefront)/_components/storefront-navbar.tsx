import { Navbar } from '@/components';
import { css } from '@/styled-system/css';
import {
	LuHouse,
	LuList,
	LuSearch,
	LuShoppingCart,
	LuUser,
} from 'react-icons/lu';

/**
 * @description
 * StorefrontNavbar is a navigation component that is used to navigate between different pages of the application.
 *
 * @component StorefrontNavbar
 *
 * @param className - The className of the navbar.
 * @returns React.ReactNode
 */

const StorefrontNavbarStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	border: '1px solid black',
	borderColor: 'neutral.200',
	borderRadius: 'full',
	position: 'fixed',
	bottom: 4,
	padding: 1,
	width: 'fit-content',
	left: '50%',
	transform: 'translateX(-50%)',
});

const navItems = [
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
];

export function StorefrontNavbar() {
	return (
		<nav className={StorefrontNavbarStyles}>
			<Navbar>
				{navItems.map((item) => (
					<Navbar.Item
						href={item.href}
						key={item.label}
					>
						<Navbar.ItemIcon Icon={item.icon} />
						<Navbar.ItemLabel>{item.label}</Navbar.ItemLabel>
					</Navbar.Item>
				))}
			</Navbar>
		</nav>
	);
}
