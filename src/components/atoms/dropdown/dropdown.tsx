'use client'
import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { DropdownContentRecipe } from './dropdown.recipes'

interface DropdownContextType {
	isOpen: boolean
	toggle: () => void
	close: () => void
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined)

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggle = () => setIsOpen(!isOpen)
	const close = () => setIsOpen(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				close()
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<DropdownContext.Provider value={{ isOpen, toggle, close }}>
			<div
				ref={dropdownRef}
				style={{ position: 'relative', display: 'inline-block' }}
			>
				{children}
			</div>
		</DropdownContext.Provider>
	)
}

export const DropdownTrigger = ({ children }: { children: React.ReactNode }) => {
	const context = useContext(DropdownContext)
	if (!context) throw new Error('DropdownTrigger must be used within a Dropdown')

	return (
		<div
			onClick={context.toggle}
			style={{ display: 'inline-flex', cursor: 'pointer' }}
		>
			{children}
		</div>
	)
}

export const DropdownContent = ({ children }: { children: React.ReactNode }) => {
	const context = useContext(DropdownContext)
	if (!context) throw new Error('DropdownContent must be used within a Dropdown')

	if (!context.isOpen) return null

	return <div className={DropdownContentRecipe()}>{children}</div>
}
