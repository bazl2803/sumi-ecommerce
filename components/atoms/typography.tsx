import { RecipeVariantProps, cva } from '@/styled-system/css';
import clsx from 'clsx';

/* --------------------- typography styles ---------------------*/
const TypographyStyles = cva({
	base: {
		fontFamily: 'geist',
		color: { base: 'black.100', _osDark: 'black.500' },
	},
	variants: {
		variant: {
			'large-title': {
				fontWeight: 'Regular',
				fontSize: '26pt',
				lineHeight: '32pt',
			},
			'title-1': {
				fontWeight: 'Regular',
				fontSize: '22pt',
				lineHeight: '26pt',
			},
			'title-2': {
				fontWeight: 'Regular',
				fontSize: '17pt',
				lineHeight: '22pt',
			},
			'title-3': {
				fontWeight: 'Regular',
				fontSize: '15pt',
				lineHeight: '20pt',
			},
			headline: {
				fontWeight: 'Bold',
				fontSize: '13pt',
				lineHeight: '16pt',
			},
			body: {
				fontWeight: 'Regular',
				fontSize: '13pt',
				lineHeight: '16pt',
			},
			callout: {
				fontWeight: 'Regular',
				fontSize: '12pt',
				lineHeight: '15pt',
			},
			subheadline: {
				fontWeight: 'Regular',
				fontSize: '11pt',
				lineHeight: '14pt',
			},
			footnote: {
				fontWeight: 'Regular',
				fontSize: '10pt',
				lineHeight: '13pt',
			},
			'caption-1': {
				fontWeight: 'Regular',
				fontSize: '10pt',
				lineHeight: '13pt',
			},
			'caption-2': {
				fontWeight: 'Regular',
				fontSize: '10pt',
				lineHeight: '13pt',
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
				fontWeight: 'bold',
			},
		},
		{
			variant: 'title-1',
			emphasized: true,
			css: {
				fontWeight: 'bold',
			},
		},
		{
			variant: 'title-2',
			emphasized: true,
			css: {
				fontWeight: 'bold',
			},
		},
		{
			variant: 'title-3',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
			},
		},
		{
			variant: 'headline',
			emphasized: true,
			css: {
				fontWeight: 'heavy',
			},
		},
		{
			variant: 'body',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
			},
		},
		{
			variant: 'callout',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
			},
		},
		{
			variant: 'subheadline',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
			},
		},
		{
			variant: 'footnote',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
			},
		},
		{
			variant: 'caption-1',
			emphasized: true,
			css: {
				fontWeight: 'medium',
			},
		},
		{
			variant: 'caption-2',
			emphasized: true,
			css: {
				fontWeight: 'semibold',
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
