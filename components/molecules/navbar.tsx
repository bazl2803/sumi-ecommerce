'use client';

import { cva, RecipeVariantProps, sva } from '@/styled-system/css';
import { Typography } from '../atoms/typography';
import Link from 'next/link';
import { cn } from '@/utils';
import { IconBase, IconType } from 'react-icons';

/**
 * @description
 * Navbar is a navigation component that is used to navigate between different pages of the application.
 *
 * @slot Root - The root component of the navbar.
 * @slot Item - The item component of the navbar.
 *
 * @component Navbar
 * @slot Root
 * @slot Item
 *
 * @usage
 * <Navbar>
 *  <Navbar.Item label="Home" icon={<HomeIcon />} href="/home" />
 * </Navbar>
 */

const NavbarStyles = cva({
	base: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
	},
	variants: {
		direction: {
			row: { flexDirection: 'row' },
			column: { flexDirection: 'column' },
		},
		fullWidth: {
			true: { width: 'full' },
		},
	},
	defaultVariants: {
		direction: 'row',
		fullWidth: false,
	},
});

function NavbarRoot({
	className,
	children,
	direction,
	fullWidth,
	...rest
}: React.ComponentPropsWithRef<'ul'> &
	RecipeVariantProps<typeof NavbarStyles>) {
	return (
		<ul
			className={cn(NavbarStyles({ direction, fullWidth }), className)}
			{...rest}
		>
			{children}
		</ul>
	);
}

/**
 * @description
 * NavbarItem is a item component of the navbar.
 *
 * @component NavbarItem
 *
 * @param label - The label of the navbar item.
 * @param icon - The icon of the navbar item.
 * @param href - The href of the navbar item.
 * @param selected - The selected state of the navbar item.
 * @param className - The className of the navbar item.
 * @param rest - The rest of the navbar item.
 * @returns
 */

interface NavbarItemProps
	extends
		React.ComponentPropsWithRef<'a'>,
		RecipeVariantProps<typeof NavbarItemStyles> {
	selected?: boolean;
}

const NavbarItemStyles = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 16,
		width: 'full',
		flexGrow: 1,
		padding: 1,
		gap: 1,
	},
	variants: {
		selected: {
			true: {
				backgroundColor: 'primary.100',
			},
		},
	},
});

function NavbarItem({
	href,
	selected,
	className,
	children,
	...rest
}: NavbarItemProps) {
	return (
		<Link
			className={cn(NavbarItemStyles({ selected }), className)}
			href={href!}
			{...rest}
		>
			{children}
		</Link>
	);
}

/**
 * @description
 * NavbarItemLabel is a item label component of the navbar.
 *
 * @component NavbarItemLabel
 *
 * @param className - The className of the navbar item.
 * @param children - The children of the navbar item.
 * @returns React.ReactNode
 */

interface NavbarItemLabelProps {
	children: React.ReactNode;
	className?: string;
}

const NavbarItemLabelStyles = cva({
	base: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		width: 'full',
		textAlign: 'center',
	},
});

function NavbarItemLabel({ children, className }: NavbarItemLabelProps) {
	return (
		<Typography
			className={cn(NavbarItemLabelStyles({}), className)}
			variant='caption-1'
		>
			{children}
		</Typography>
	);
}

/**
 * @description
 * NavbarItemIcon is a item icon component of the navbar.
 *
 * @component NavbarItemIcon
 *
 * @param className - The className of the navbar item icon.
 * @param children - The children of the navbar item icon.
 * @returns React.ReactNode
 */

interface NavbarItemIconProps {
	Icon: IconType;
	className?: string;
}

const NavbarItemIconStyles = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 6,
		width: 6,
	},
});

function NavbarItemIcon({ className, Icon }: NavbarItemIconProps) {
	return <Icon className={cn(NavbarItemIconStyles({}), className)} />;
}

export const Navbar = Object.assign(NavbarRoot, {
	Item: NavbarItem,
	ItemLabel: NavbarItemLabel,
	ItemIcon: NavbarItemIcon,
});
