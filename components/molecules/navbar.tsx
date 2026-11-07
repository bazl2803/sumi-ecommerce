'use client'

import { cva, RecipeVariantProps } from '@/styled-system/css'
import { Typography } from '../atoms/typography'
import Link from 'next/link'
import { cn } from '@/utils'
import { IconType } from 'react-icons'

/* ----------------------------------------------------------------------------- */
/* Styles                                                                        */
/* ----------------------------------------------------------------------------- */

const navbarListStyles = cva({
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
})

const navbarItemStyles = cva({
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
})

const navbarItemIconStyles = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 6,
		width: 6,
	},
})

const navbarItemLabelStyles = cva({
	base: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		width: 'full',
		textAlign: 'center',
	},
})

/* ----------------------------------------------------------------------------- */
/* Types                                                                         */
/* ----------------------------------------------------------------------------- */

interface NavbarProps extends React.ComponentPropsWithRef<'nav'> {}

interface NavbarListProps
	extends React.ComponentPropsWithRef<'ul'>, RecipeVariantProps<typeof navbarListStyles> {}

interface NavbarItemProps
	extends React.ComponentPropsWithRef<'a'>, RecipeVariantProps<typeof navbarItemStyles> {
	selected?: boolean
}

interface NavbarItemLabelProps {
	children: React.ReactNode
	className?: string
}

interface NavbarItemIconProps {
	icon: IconType
	className?: string
}

/* ----------------------------------------------------------------------------- */
/* Navbar Root                                                                   */
/* ----------------------------------------------------------------------------- */

function Navbar({ className, children, ...rest }: NavbarProps) {
	return <nav className={cn('navbar-root', className)} {...rest}>{children}</nav>
}

/* ----------------------------------------------------------------------------- */
/* Navbar List                                                                   */
/* ----------------------------------------------------------------------------- */

function NavbarList({ className, children, direction, fullWidth, ...rest }: NavbarListProps) {
	return (
		<ul
			className={cn(navbarListStyles({ direction, fullWidth }), className)}
			{...rest}
		>
			{children}
		</ul>
	)
}

/* ----------------------------------------------------------------------------- */
/* Navbar Item                                                                   */
/* ----------------------------------------------------------------------------- */

function NavbarItem({ href, selected, className, children, ...rest }: NavbarItemProps) {
	return (
		<Link
			className={cn(navbarItemStyles({ selected }), className)}
			href={href!}
			{...rest}
		>
			{children}
		</Link>
	)
}

/* ----------------------------------------------------------------------------- */
/* Navbar Item Label                                                             */
/* ----------------------------------------------------------------------------- */

function NavbarItemLabel({ children, className }: NavbarItemLabelProps) {
	return (
		<Typography
			className={cn(navbarItemLabelStyles({}), className)}
			variant="caption-1"
		>
			{children}
		</Typography>
	)
}

/* ----------------------------------------------------------------------------- */
/* Navbar Item Icon                                                              */
/* ----------------------------------------------------------------------------- */

function NavbarItemIcon({ className, icon : Icon }: NavbarItemIconProps) {
	return <Icon className={cn(navbarItemIconStyles({}), className)} />
}

export {Navbar, NavbarList, NavbarItem, NavbarItemLabel, NavbarItemIcon}
