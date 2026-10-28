import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Suministros Eléctricos',
	description: 'Venta de insumos eléctricos',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang='es-SV'
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
