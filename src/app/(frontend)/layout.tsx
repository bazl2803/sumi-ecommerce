import type { Metadata } from 'next'
import { AppProvider } from '@/features/core/providers/app-provider'
import { EcommerceToolbar } from './_components/ecommerce-toolbar'
import '../globals.css'
import { Page, PageContent, PageHeader } from '@/components'

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
			<body>
				<Page>
					<PageHeader>
						<EcommerceToolbar />
					</PageHeader>
					<PageContent>
						<AppProvider>{children}</AppProvider>
					</PageContent>
				</Page>
			</body>
		</html>
	)
}
