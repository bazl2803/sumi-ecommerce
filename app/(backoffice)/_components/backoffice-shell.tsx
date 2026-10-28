import { css, sva } from '@/styled-system/css';

const styles = sva({
	slots: ['root', 'navbar', 'sidebar', 'workspace'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'row',
		},
	},
});

export function BackofficeShell() {
	return <div>BackofficeShell</div>;
}
