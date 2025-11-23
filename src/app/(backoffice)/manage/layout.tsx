import type { Metadata } from 'next'
import { AppProvider } from '@/features/core/providers/app-provider'
import { DashboardSidebar } from './_components/dashboard-sidebar'
import { css } from 'panda/css'
import { Page } from '@/components'

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
					height: 'full',
					backgroundColor: { base: 'neutral.50', _osDark: 'neutral.950' },
				})}
			>
				<AppProvider>
					<div
						className={css({
							display: 'grid',
							gridTemplateColumns: 'auto 1fr',
						})}
					>
						<DashboardSidebar />
						<Page>{children}</Page>
					</div>
				</AppProvider>
			</body>
		</html>
	)
}
