'use client';

import { cva } from '@/styled-system/css';
import { StorefrontNavbar } from './storefront-navbar';

interface StorefrontShellProps {
	children: React.ReactNode;
}

const StorefrontShellStyles = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		height: '100dvh',
		width: '100%',
	},
});

export const StorefrontShell = ({ children }: StorefrontShellProps) => {
	return (
		<div className={StorefrontShellStyles()}>
			{children}
			<StorefrontNavbar />
		</div>
	);
};
