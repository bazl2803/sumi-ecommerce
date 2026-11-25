import { css, cva } from '@/styled-system/css';
import { cn } from '@/utils';
import React from 'react';

/* ---------------------------------------------------------------------------- */
/* Recipes                                                                       */
/* ---------------------------------------------------------------------------- */

const listRecipe = css({});

const listItemRecipe = cva({
    base: {},
    variants: {
        selected: {
            true: {},
            false: {},
        },
    },
});

/* ---------------------------------------------------------------------------- */
/* Types                                                                        */
/* ---------------------------------------------------------------------------- */

interface ListProps extends React.ComponentPropsWithRef<'ul'> {
    children: React.ReactNode;
}

interface ListItemProps extends React.ComponentPropsWithRef<'li'> {
    selected?: boolean;
}

/* ---------------------------------------------------------------------------- */
/* Context                                                                      */
/* ---------------------------------------------------------------------------- */

//const ListContext = React.createContext<ListContextValue | null>(null);

/* ---------------------------------------------------------------------------- */
/* Components                                                                   */
/* ---------------------------------------------------------------------------- */

export function List({ children, className, ...props }: ListProps) {
    const styles = listRecipe;
    return (
        <ul {...props} className={cn('list', styles, className)}>
            {children}
        </ul>
    );
}

export function ListItem({
    children,
    className,
    selected,
    ...props
}: ListItemProps) {
    const styles = listItemRecipe({ selected });
    return (
        <li {...props} className={cn('list-item', styles, className)}>
            {children}
        </li>
    );
}
