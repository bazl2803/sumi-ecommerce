'use client';

import { Avatar, Logo } from '@/components';
import { sva } from '@/styled-system/css';
import { cn } from '@/utils';

/* ----------------------------------------------------------------------------- */
/* Recipes                                                                       */
/* ----------------------------------------------------------------------------- */

const BackofficeAppbarRecipe = sva({
    slots: ['root'],
    base: {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 4,
        },
    },
});

/* ----------------------------------------------------------------------------- */
/* Types                                                                         */
/* ----------------------------------------------------------------------------- */

interface BackofficeAppbarProps {
    className?: string;
}

/* ----------------------------------------------------------------------------- */
/* Component                                                                     */
/* ----------------------------------------------------------------------------- */

export function BackofficeAppbar({ className }: BackofficeAppbarProps) {
    const styles = BackofficeAppbarRecipe();
    return (
        <div className={cn(styles.root, className)}>
            <Logo />
            <Avatar src="https://via.placeholder.com/avatar/Bryan%20Lemus@2x.png" alt="Bryan Lemus" fallback="BL" />
        </div>
    );
}
