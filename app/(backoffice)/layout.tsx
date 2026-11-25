import { BackofficeShell } from './_components/backoffice-shell';

export default function BackofficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <BackofficeShell>{children}</BackofficeShell>;
}
