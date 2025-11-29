'use client'
import {
	SidebarHeader,
	SidebarSection,
	SidebarItem,
	SidebarTrail,
	SidebarFooter,
	SidebarContent,
	Avatar,
	TypographyRecipe,
	Hint,
	Button,
} from '@/components'
import {
	IconHome,
	IconBookmark,
	IconPackage,
	IconTruckDelivery,
	IconKey,
	IconUserDollar,
	IconClipboardCheck,
} from '@tabler/icons-react'
import clsx from 'clsx'
import { css } from 'panda/css'
import { grid } from 'panda/patterns'

export const BackofficeSidebar = () => {
	const CollectionItems = [
		{
			href: '/manage/products',
			icon: IconPackage,
			label: 'Productos',
		},
		{
			href: '/manage/categories',
			icon: IconBookmark,
			label: 'Categorías',
		},
		{
			href: '/manage/orders',
			icon: IconClipboardCheck,
			label: 'Ordenes',
		},
	]

	const PersonItems = [
		{
			href: '/manage/permissions',
			icon: IconKey,
			label: 'Permisos',
		},
		{
			href: '/manage/customers',
			icon: IconUserDollar,
			label: 'Clientes',
		},
		{
			href: '/manage/vendors',
			icon: IconTruckDelivery,
			label: 'Proveedores',
		},
	]
	return (
		<>
			<SidebarTrail>
				<SidebarHeader>
					{/* Light mode logo */}
					<SidebarHeader.Logo
						className={css({ display: { _osDark: 'none' } })}
						src="/logo-alt.svg"
						width={100}
						height={100}
						alt="Logo"
					/>

					{/* Dark mode logo */}
					<SidebarHeader.Logo
						className={css({ display: { _osLight: 'none' } })}
						src="/logo-white.svg"
						width={100}
						height={100}
						alt="Logo"
					/>
				</SidebarHeader>

				<SidebarContent>
					<SidebarSection>
						<SidebarItem
							href="/manage"
							icon={IconHome}
							label="Inicio"
						/>
					</SidebarSection>

					<SidebarSection title="Colecciones">
						{CollectionItems.map((item) => (
							<SidebarItem
								key={item.href}
								{...item}
							/>
						))}
					</SidebarSection>

					<SidebarSection title="Personas">
						{PersonItems.map((item) => (
							<SidebarItem
								key={item.href}
								{...item}
							/>
						))}
					</SidebarSection>
				</SidebarContent>
				<SidebarFooter>
					<Button variant="solid">test</Button>
				</SidebarFooter>
			</SidebarTrail>
		</>
	)
}
