/* ---------------------------------------------------------------------------- */
/* Imports                                                                      */
/* ---------------------------------------------------------------------------- */

import { css, cva } from '@/styled-system/css';
import { cn } from '@/utils';

/* ---------------------------------------------------------------------------- */
/* Recipes                                                                      */
/* ---------------------------------------------------------------------------- */

const CardRecipe = cva({
    base: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'md',
        padding: 4,
        gap: 2,
    },
    variants: {
        variant: {
            default: {
                backgroundColor: 'white',
            },
            outline: {
                border: '1px solid',
                borderColor: 'border',
            },
        },
        rounded: {
            sm: {
                borderRadius: 'sm',
            },
            md: {
                borderRadius: 'md',
            },
            lg: {
                borderRadius: 'lg',
            },
            xl: {
                borderRadius: 'xl',
            },
            '2xl': {
                borderRadius: '2xl',
            },
            '3xl': {
                borderRadius: '3xl',
            },
            full: {
                borderRadius: 'full',
            },
        },
    },
    defaultVariants: {
        variant: 'default',
        rounded: 'xl',
    },
});

/* ---------------------------------------------------------------------------- */
/* Props                                                                         */
/* ---------------------------------------------------------------------------- */

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
    variant?: 'default' | 'outline';
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
}

/* ---------------------------------------------------------------------------- */
/* Components                                                                    */
/* ---------------------------------------------------------------------------- */

export function Card({ children, className, ...props }: CardProps) {
    const styles = CardRecipe();

    return (
        <div className={cn(styles, className)} {...props}>
            {children}
        </div>
    );
}
