import { css } from '@/styled-system/css';

export default function BackofficeLayout({ children }: LayoutProps<'/'>) {
	return <div className={css({ bg: 'neutral.50' })}>{children}</div>;
}
