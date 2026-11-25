import { cn } from '@/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { css } from '@/styled-system/css';

const inter = Inter({
    variable: '--font-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Suministros Eléctricos',
    description: 'Venta de insumos eléctricos',
};

const RootLayoutRecipe = css({
    backgroundColor: 'neutral.100',
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="es-SV"
            className={cn(
                RootLayoutRecipe,
                inter.variable,
            )}
        >
            <body>{children}</body>
        </html>
    );
}
