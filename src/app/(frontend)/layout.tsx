import type { Metadata } from 'next'
import { AppProvider } from '@/features/core/providers/app-provider'
import { Container } from '@/components/atoms/container/container'
import { MobileNavbar } from './_components/mobile-navbar'
import { css } from 'panda/css'
import { MobileToolbar } from './_components/mobile-toolbar'

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
			<body
				className={css({
					height: '100dvh',
					width: '100dvw',
				})}
			>
				<AppProvider>
					<MobileToolbar />
					<Container>{children}</Container>
					<MobileNavbar />
				</AppProvider>
			</body>
		</html>
	)
}
