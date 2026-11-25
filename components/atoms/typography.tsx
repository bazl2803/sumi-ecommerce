import { RecipeVariantProps, cva } from '@/styled-system/css';
import clsx from 'clsx';

/* --------------------- typography styles ---------------------*/
const TypographyStyles = cva({
	base: {
		fontFamily: 'var(--font-sans)',
		color: { base: 'black.100', _osDark: 'black.500' },
	},
	variants: {
		variant: {
			'large-title': {
				fontWeight: 400,
				fontSize: '2.125rem',
				lineHeight: '2.5625rem',
			},
			'title-1': {
				fontWeight: 400,
				fontSize: '1.75rem',
				lineHeight: '2.125rem',
			},
			'title-2': {
				fontWeight: 400,
				fontSize: '1.375rem',
				lineHeight: '1.75rem',
			},
			'title-3': {
				fontWeight: 400,
				fontSize: '1.25rem',
				lineHeight: '1.5625rem',
			},
			headline: {
				fontWeight: 600,
				fontSize: '1.0625rem',
				lineHeight: '1.375rem',
			},
			body: {
				fontWeight: 400,
				fontSize: '1.0625rem',
				lineHeight: '1.375rem',
			},
			callout: {
				fontWeight: 400,
				fontSize: '1rem',
				lineHeight: '1.3125rem',
			},
			subhead: {
				fontWeight: 400,
				fontSize: '0.9375rem',
				lineHeight: '1.25rem',
			},
			footnote: {
				fontWeight: 400,
				fontSize: '0.8125rem',
				lineHeight: '1.125rem',
			},
			'caption-1': {
				fontWeight: 400,
				fontSize: '0.75rem',
				lineHeight: '1rem',
			},
			'caption-2': {
				fontWeight: 400,
				fontSize: '0.6875rem',
				lineHeight: '0.8125rem',
			},
		},
		emphasized: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variant: 'large-title',
			emphasized: true,
			css: {
				fontWeight: 700,
			},
		},
		{
			variant: 'title-1',
			emphasized: true,
			css: {
				fontWeight: 700,
			},
		},
		{
			variant: 'title-2',
			emphasized: true,
			css: {
				fontWeight: 700,
			},
		},
		{
			variant: 'title-3',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'headline',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'body',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'callout',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'subhead',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'footnote',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'caption-1',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
		{
			variant: 'caption-2',
			emphasized: true,
			css: {
				fontWeight: 600,
			},
		},
	],
	defaultVariants: {
		variant: 'body',
	},
});

/* --------------------- typography component ---------------------*/
export function Typography({
	children,
	variant,
	emphasized,
	className,
	...props
}: RecipeVariantProps<typeof TypographyStyles> &
	React.ComponentPropsWithRef<'p'>) {
	return (
		<p
			className={clsx(
				TypographyStyles({ variant, emphasized }),
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
}
