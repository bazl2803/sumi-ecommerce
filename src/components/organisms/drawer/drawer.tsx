'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import { DrawerContext } from '@/components/organisms/drawer/drawer-context'
import { DrawerRecipe } from './drawer.recipes'

interface DrawerProps extends React.ComponentPropsWithRef<'dialog'> {
	position?: 'left' | 'right' | 'top' | 'bottom'
	open?: boolean
}

export const Drawer: React.FC<DrawerProps> = ({ className, open = false, ...props }) => {
	const [isOpen, setIsOpen] = useState<boolean>(open)
	const toggle = () => setIsOpen(!isOpen)
	const close = () => setIsOpen(false)

	return (
		<DrawerContext.Provider value={{ isOpen, toggle, close }}>
			<dialog
				className={clsx(DrawerRecipe, className)}
				{...props}
			/>
		</DrawerContext.Provider>
	)
}
