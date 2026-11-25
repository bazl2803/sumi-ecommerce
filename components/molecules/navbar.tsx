'use client';

import { cva, RecipeVariantProps, sva } from '@/styled-system/css';
import { Typography } from '../atoms/typography';
import Link from 'next/link';
import { cn } from '@/utils';
import { IconType } from 'react-icons';
import React from 'react';

/* ----------------------------------------------------------------------------- */
/* Recipes                                                                       */
/* ----------------------------------------------------------------------------- */

const navbarRecipe = cva({
    base: {
        width: 'full',
    },
});

const navbarListRecipe = cva({
    base: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginInline: 'auto',
        maxWidth: 'full',
        gap: 1,
    },
    variants: {
        orientation: {
            horizontal: { flexOrientation: 'row' },
            vertical: { flexOrientation: 'column' },
        },
        fullWidth: {
            true: { width: 'auto' },
            false: { width: 'fit' },
        },
        variant: {
            inset: {
                width: 'full',
            },
            floating: {
                paddingX: 2,
                paddingY: 2,
                borderRadius: 'full',
                backgroundColor: 'white/75',
                backdropFilter: 'auto',
                backdropBlur: 'md',
                borderWidth: '1px',
                borderColor: 'neutral.200',
                zIndex: 40,
                width: 'calc(100% - var(--spacing-4))',
            },
        },
    },
    defaultVariants: {
        orientation: 'horizontal',
        fullWidth: false,
    },
});

const navbarItemRecipe = sva({
    slots: ['root', 'label', 'icon'],
    base: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 16,
            width: 'full',
            flexGrow: 1,
            paddingBlock: 2,
            paddingInline: 1,
            gap: 1,
            borderRadius: '4xl',
            userSelect: 'none',
            overflow: 'hidden',
            _hover: {
                backgroundColor: 'secondary/20',
                color: 'black',
            },
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 6,
            width: 6,
        },
        label: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: 'full',
            textAlign: 'center',
        },
    },
    variants: {
        selected: {
            true: {
                root: {
                    backgroundColor: 'secondary',
                    color: 'black',
                },
            },
        },
    },
});

/* ----------------------------------------------------------------------------- */
/* Types                                                                         */
/* ----------------------------------------------------------------------------- */

type NavbarVariant = 'inset' | 'floating';
type NavbarOrientation = 'vertical' | 'horizontal';

interface NavbarProps extends React.ComponentPropsWithRef<'nav'> {
    variant?: NavbarVariant;
    orientation?: NavbarOrientation;
    fullWidth?: boolean;
}

interface NavbarListProps extends React.ComponentPropsWithRef<'ul'> {}

interface NavbarItemProps
    extends
        React.ComponentPropsWithRef<'a'>,
        RecipeVariantProps<typeof navbarItemRecipe> {
    icon?: IconType;
    label?: string;
    href?: string;
}

interface NavbarContextValue {
    variant?: NavbarVariant;
    setVariant?: (variant: NavbarVariant) => void;
    orientation?: NavbarOrientation;
    setOrientation?: (Orientation: NavbarOrientation) => void;
    fullWidth?: boolean;
    setFullWidth?: (fullWidth: boolean) => void;
}

/* ----------------------------------------------------------------------------- */
/* Context                                                                       */
/* ----------------------------------------------------------------------------- */

const NavbarContext = React.createContext<NavbarContextValue | null>(null);

const NavbarProvider: React.FC<{
    value: NavbarContextValue;
    children: React.ReactNode;
}> = ({ children, value }) => {
    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    );
};

const useNavbarContext = () => {
    const context = React.useContext(NavbarContext);
    if (!context) {
        throw new Error(
            'useNavbarContext must be used within a NavbarProvider',
        );
    }
    return context;
};

/* ----------------------------------------------------------------------------- */
/* Components                                                                    */
/* ----------------------------------------------------------------------------- */

export function Navbar({
    className,
    children,
    variant: variantProp,
    orientation: orientationProp,
    fullWidth: fullWidthProp,
    ...rest
}: NavbarProps) {
    const [variant, setVariant] = React.useState<NavbarVariant>(
        variantProp || 'inset',
    );

    const [orientation, setOrientation] = React.useState<NavbarOrientation>(
        orientationProp || 'horizontal',
    );

    const [fullWidth, setFullWidth] = React.useState<boolean>(fullWidthProp || false);

    return (
        <nav
            className={cn(
                'navbar',
                navbarRecipe({ variant, orientation }),
                className,
            )}
            {...rest}
        >
            <NavbarProvider
                value={{
                    variant,
                    setVariant,
                    orientation,
                    setOrientation,
                    fullWidth,
                    setFullWidth,
                }}
            >
                {children}
            </NavbarProvider>
        </nav>
    );
}

export function NavbarList({ className, children, ...rest }: NavbarListProps) {
    const { variant, orientation, fullWidth } = useNavbarContext();
    return (
        <ul
            className={cn(
                'navbar--list',
                navbarListRecipe({ variant, orientation, fullWidth }),
                className,
            )}
            {...rest}
        >
            {children}
        </ul>
    );
}

export function NavbarItem({
    href,
    className,
    selected,
    icon: Icon,
    label,
    children,
    ...rest
}: NavbarItemProps) {
    const recipe = navbarItemRecipe({ selected }); // Ensure Recipe are generated for the selected state

    return (
        <Link
            className={cn('navbar--item', recipe.root, className)}
            href={href || '#'}
            {...rest}
        >
            {Icon && <Icon className={recipe.icon} />}
            <Typography className={recipe.label} variant="caption-2">
                {label}
            </Typography>
        </Link>
    );
}
