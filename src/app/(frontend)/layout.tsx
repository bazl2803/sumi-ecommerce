import type { Metadata } from 'next'
import { AppProvider } from '@/features/core/providers/app-provider'
import { Container } from '@/components/atoms/container/container'
import { Navbar } from '@/components'
import { NavbarItem } from '@/components/molecules/navbar/components/navbar-item'
import { IconHome } from '@tabler/icons-react'
import { MobileEcommerceNavbar } from './_components/mobile-ecommerce-navbar'
import { css } from 'panda/css'

export const metadata: Metadata = {
	title: 'Suministros Eléctricos',
	description: 'Principal',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={css({
				height: '100dvh',
				width: '100dvw',
			})}>
				<AppProvider>
					<Container>
						{children}
					</Container>
					<MobileEcommerceNavbar />
				</AppProvider>
			</body>
		</html>
	)
}
