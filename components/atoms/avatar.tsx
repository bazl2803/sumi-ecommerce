'use client';

import { useState } from 'react';
import { sva } from '@/styled-system/css';
import Image from 'next/image';
import { cn } from '@/utils';

// ----------------------------------------------------------------------------
// Styles
// ----------------------------------------------------------------------------

const AvatarStyles = sva({
    slots: ['root', 'image', 'fallback'],
    base: {
        root: {
            backgroundColor: 'neutral.200',
            borderRadius: 'full',
            overflow: 'hidden',
        },
        image: {
            objectFit: 'cover',
        },
        fallback: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    variants: {
        size: {
            sm: {
                root: {
                    width: 12,
                    height: 12,
                },
                image: {
                    width: 12,
                    height: 12,
                },
            },
            md: {
                root: {
                    width: 14,
                    height: 14,
                },
                image: {
                    width: 14,
                    height: 14,
                },
            },
            lg: {
                root: {
                    width: 18,
                    height: 18,
                },
                image: {
                    width: 18,
                    height: 18,
                },
            },
        },
    },
    defaultVariants: {
        size: 'sm',
    },
});

// ----------------------------------------------------------------------------
// Props
// ----------------------------------------------------------------------------

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    // URL to the avatar image
    src: string;
    // Alt text for the image
    alt: string;
    // Size of the avatar
    size?: 'sm' | 'md' | 'lg';
    // Text to show if image fails to load
    fallback?: string;
}

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

export function Avatar({
    className,
    src,
    alt,
    size,
    fallback,
    ...props
}: AvatarProps) {
    // Tracks the src that failed to load, so a new src retries the image
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const styles = AvatarStyles({ size });

    if (failedSrc === src) {
        return (
            <div
                className={cn(styles.fallback, className)}
                role="img"
                aria-label={alt}
                {...props}
            >
                {fallback}
            </div>
        );
    }

    return (
        <div className={cn(styles.root, className)}>
            <Image
                className={styles.image}
                src={src}
                alt={alt}
                width={100}
                height={100}
                loading="eager"
                onError={() => setFailedSrc(src)}
                {...props}
            />
        </div>
    );
}