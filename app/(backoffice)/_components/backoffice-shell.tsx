'use client';

import { sva } from '@/styled-system/css';
import { BackofficeNavbar } from './backoffice-navbar';
import { BackofficeAppbar } from './backoffice-appbar';

const BackofficeShellStyles = sva({
    slots: ['root', 'navbar', 'appbar', 'sidebar', 'workspace'],
    base: {
        workspace: {
            padding: 4,
        },
        appbar: {
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        },
        navbar: {
            position: 'fixed',
            top: 'auto',
            bottom: 2,
            zIndex: 1000,
            hideFrom: 'md',
        },
    },
});

export function BackofficeShell({ children }: { children: React.ReactNode }) {
    const styles = BackofficeShellStyles();

    return (
        <div className={styles.root}>
            <BackofficeAppbar className={styles.appbar} />
            <div className={styles.workspace}>
                {children}
            </div>
            <BackofficeNavbar className={styles.navbar} />
        </div>
    );
}
