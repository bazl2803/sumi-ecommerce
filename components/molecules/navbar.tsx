'use client'

import { cva, RecipeVariantProps } from '@/styled-system/css'
import { Typography } from '../atoms/typography'
import Link from 'next/link'
import { cn } from '@/utils'
import { IconType } from 'react-icons'
import React from 'react'

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

const navbarStyles = cva({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	variants: {
		variant: {
			// Lives in the normal flow: full width, flush with its container.
			inset: {
				width: 'full',
			},
			// Detached from the flow: sits above the content with a gap, radius and elevation.
			floating: {
				position: 'fixed',
				insetInline: '3',
				insetBlockEnd: '3',
				width: 'auto',
				paddingX: '3',
				paddingY: '2',
				borderRadius: 'full',
				backgroundColor: 'neutral.50/75',
				backdropFilter: 'auto',
				backdropBlur: 'md',
				borderWidth: '1px',
				borderColor: 'neutral.200',
				zIndex: 40,
			},
		},
	},
	defaultVariants: {
		variant: 'inset',
	},
})

/* ----------------------------------------------------------------------------- */
/* Types                                                                         */
/* ----------------------------------------------------------------------------- */

interface NavbarProps
	extends React.ComponentPropsWithRef<'nav'>,
		RecipeVariantProps<typeof navbarStyles> {}

interface NavbarListProps
	extends React.ComponentPropsWithRef<'ul'>, RecipeVariantProps<typeof navbarListStyles> {}

interface NavbarItemProps
	extends React.ComponentPropsWithRef<'a'>, RecipeVariantProps<typeof navbarItemStyles> {
}

interface NavbarItemLabelProps {
	children: React.ReactNode
	className?: string
}

interface NavbarItemIconProps {
	icon: IconType
	className?: string
}

interface NavbarContextValue {
	selectedItem: string | null
	setSelectedItem: (item: string) => void
}

/* ----------------------------------------------------------------------------- */
/* Context                                                                       */
/* ----------------------------------------------------------------------------- */

const NavbarContext = React.createContext<NavbarContextValue | null>(null)

const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

	return (
		<NavbarContext.Provider value={{ selectedItem, setSelectedItem }}>
			{children}
		</NavbarContext.Provider>
	)
}

const useNavbarContext = () => {
	const context = React.useContext(NavbarContext)
	if (!context) {
		throw new Error('useNavbarContext must be used within a NavbarProvider')
	}
}

/* ----------------------------------------------------------------------------- */
/* Navbar Root                                                                   */
/* ----------------------------------------------------------------------------- */

function Navbar({ className, children, variant, ...rest }: NavbarProps) {
	return (
		<nav
			className={cn('navbar', navbarStyles({ variant }), className)}
			{...rest}
		>
			<NavbarProvider>{children}</NavbarProvider>
		</nav>
	)
}

/* ----------------------------------------------------------------------------- */
/* Navbar List                                                                   */
/* ----------------------------------------------------------------------------- */

function NavbarList({ className, children, direction, fullWidth, ...rest }: NavbarListProps) {
	return (
		<ul
			className={cn('navbar--list', navbarListStyles({ direction, fullWidth }), className)}
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
			className={cn('navbar--item', navbarItemStyles({ selected }), className)}
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
			className={cn('navbar--itemLabel' ,navbarItemLabelStyles({}), className)}
			variant="caption-1"
		>
			{children}
		</Typography>
	)
}

/* ----------------------------------------------------------------------------- */
/* Navbar Item Icon                                                              */
/* ----------------------------------------------------------------------------- */

function NavbarItemIcon({ className, icon: Icon }: NavbarItemIconProps) {
	return <Icon className={cn('navbar--itemIcon', navbarItemIconStyles({}), className)} />
}

export { Navbar, NavbarList, NavbarItem, NavbarItemLabel, NavbarItemIcon }
