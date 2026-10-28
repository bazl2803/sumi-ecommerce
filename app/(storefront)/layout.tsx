import { StorefrontShell } from './_components/storefront-shell';

export default function StorefrontLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <StorefrontShell>{children}</StorefrontShell>;
}
