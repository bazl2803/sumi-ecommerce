'use client';

import { cva } from '@/styled-system/css';
import { StorefrontNavbar } from './storefront-navbar';

/**
 * @description
 * StorefrontShell is a shell component that is used to wrap the content of the storefront.
 *
 * @component StorefrontShell
 * @slot children - The children of the shell.
 * @returns React.ReactNode
 */

interface StorefrontShellProps {
	children: React.ReactNode;
}

const StorefrontShellStyles = cva({
	base: {
		display: 'flex',
		flexDirection: 'column',
		height: '100dvh',
		width: '100dvw',
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
