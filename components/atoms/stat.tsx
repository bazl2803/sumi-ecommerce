/* ----------------------------------------------------------------------------- */
/* Imports                                                                       */
/* ----------------------------------------------------------------------------- */

import { css } from '@/styled-system/css';
import { cn } from '@/utils';
import { Typography } from './typography';

/* ----------------------------------------------------------------------------- */
/* Recipes                                                                       */
/* ----------------------------------------------------------------------------- */

const StatRecipe = css({
	display: 'flex',
	flexDirection: 'column',
	gap: 1,
});

const StatLabelRecipe = css({
	display: 'flex',
	gap: 1,
	alignItems: 'center',
	color: 'neutral.500',
});

const StatFootnoteRecipe = css({
	display: 'flex',
	gap: 1,
	alignItems: 'center',
	color: 'neutral.500',
});

/* ----------------------------------------------------------------------------- */
/* Props                                                                         */
/* ----------------------------------------------------------------------------- */

export interface StatProps extends React.ComponentPropsWithRef<'div'> {
}

export interface StatValueProps extends React.ComponentPropsWithRef<'div'> {
	variant?: React.ComponentProps<typeof Typography>['variant'];
}

export interface StatLabelProps extends React.ComponentPropsWithRef<'div'> {
	variant?: React.ComponentProps<typeof Typography>['variant'];
}

export interface StatFootnoteProps extends React.ComponentPropsWithRef<'div'> {
	variant?: React.ComponentProps<typeof Typography>['variant'];
}

/* ----------------------------------------------------------------------------- */
/* Components                                                                    */
/* ----------------------------------------------------------------------------- */

export function Stat({ children, className, ...props }: StatProps) {
	return (
		<div className={cn(StatRecipe, className)} {...props}>
			{children}
		</div>
	);
}

export function StatValue({ children, className, variant = 'title-2', ...props }: StatValueProps) {
	return (
		<Typography variant={variant} className={cn(className)} emphasized {...props}>
			{children}
		</Typography>
	);
}

export function StatLabel({ children, className, variant = 'body', ...props }: StatLabelProps) {
	return (
		<Typography variant={variant} className={cn(StatLabelRecipe, className)} {...props}>
			{children}
		</Typography>
	);
}

export function StatFootnote({ children, className, variant = 'footnote', ...props }: StatFootnoteProps) {
	return (
		<Typography variant={variant} className={cn(StatFootnoteRecipe, className)} {...props}>
			{children}
		</Typography>
	);
}