import type { Metadata } from 'next'
import { AppProvider } from '@/features/core/providers/app-provider'
import { css } from 'panda/css'
import { Page, Sidebar, SidebarPage } from '@/components'
import { BackofficeSidebar } from './_components/backoffice-sidebar'

export const metadata: Metadata = {
	title: 'Administración - Suministros Elécricos',
	description: 'Página de inicio del tablero de administración',
}

export default function BackOfficeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html>
			<body
				className={css({
					backgroundColor: { base: 'white', _osDark: 'black' },
				})}
			>
				<AppProvider>
					<Sidebar>
						<BackofficeSidebar />
						<SidebarPage>
							<Page>{children}</Page>
						</SidebarPage>
					</Sidebar>
				</AppProvider>
			</body>
		</html>
	)
}
