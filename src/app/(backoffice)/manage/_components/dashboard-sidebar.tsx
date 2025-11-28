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

export const DashboardSidebar = () => {
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
					<div
						className={grid({
							gridTemplateColumns: 'auto 1fr',
							gridTemplateRows: 'auto auto',
							alignItems: 'center',
							columnGap: 2,
						})}
					>
						<Avatar
							className={css({
								gridRow: '1/3',
							})}
							src="/me.jpg"
						/>
						<div
							className={clsx(
								TypographyRecipe({ role: 'subheadline', emphasized: true }),
								css({ gridRow: '1', gridColumn: '2' })
							)}
						>
							Bryan Lemus
						</div>
						<Hint className={clsx(css({ gridRow: '2', gridColumn: '2' }))}>
							bryanalelemus@gmail.com
						</Hint>
					</div>
				</SidebarFooter>
			</SidebarTrail>
		</>
	)
}
