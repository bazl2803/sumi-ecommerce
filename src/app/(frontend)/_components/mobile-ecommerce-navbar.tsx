'use client'

import { Navbar, NavbarItem } from "@/components"
import { IconHeart, IconHome, IconShoppingCart, IconTruck, IconUser } from "@tabler/icons-react"

export const MobileEcommerceNavbar = () => {
	return (
		<Navbar>
			<NavbarItem icon={IconHome} href="/" label="Inicio" />
			<NavbarItem icon={IconHeart} href="#" label="Categorías" />
			<NavbarItem icon={IconShoppingCart} href="#" label="Carrito" />
			<NavbarItem icon={IconTruck} href="#" label="Pedidos" />
			<NavbarItem icon={IconUser} href="#" label="Perfil" />
		</Navbar>
	)
}