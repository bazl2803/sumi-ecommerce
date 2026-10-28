import { useId } from 'react';
import { cva, RecipeVariantProps } from '@/styled-system/css';
import { cn } from '@/utils';
import { Typography } from './typography';

/**
 * @description
 * Tooltip displays a short message when the user hovers over its trigger.
 * It is positioned with the CSS Anchor Positioning API and flips
 * automatically when there is not enough space.
 *
 * @component Tooltip
 *
 * @param content - The message displayed in the tooltip.
 * @param side - The side of the trigger where the tooltip appears.
 * @param className - The className of the tooltip root.
 * @param children - The trigger element.
 *
 * @usage
 * <Tooltip content="Delete item">
 *   <button>Delete</button>
 * </Tooltip>
 */

const TooltipWrapperStyles = cva({
	base: {
		display: 'inline-flex',
	},
});

const TooltipContentStyles = cva({
	base: {
		position: 'absolute',
		zIndex: 10,
		margin: '2',
		paddingX: '2',
		paddingY: '1',
		borderRadius: 'md',
		backgroundColor: 'gray.800',
		color: 'white',
		whiteSpace: 'nowrap',
		opacity: 0,
		transition: 'opacity 150ms ease',
		pointerEvents: 'none',
		'.group:hover &': {
			opacity: 1,
		},
	},
	variants: {
		side: {
			top: {
				positionArea: 'block-start',
				positionTryFallbacks: 'flip-block',
			},
			bottom: {
				positionArea: 'block-end',
				positionTryFallbacks: 'flip-block',
			},
			left: {
				positionArea: 'inline-start',
				positionTryFallbacks: 'flip-inline',
			},
			right: {
				positionArea: 'inline-end',
				positionTryFallbacks: 'flip-inline',
			},
		},
	},
	defaultVariants: {
		side: 'top',
	},
});

interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactNode;
	side?: RecipeVariantProps<typeof TooltipContentStyles>['side'];
	className?: string;
}

export function Tooltip({
	content,
	side,
	className,
	children,
	...rest
}: TooltipProps) {
	const id = useId().replace(/[^a-zA-Z0-9]/g, '');
	const anchorName = `--tooltip-${id}`;

	return (
		<div
			className={cn(TooltipWrapperStyles(), 'group', className)}
			style={{ anchorName }}
			{...rest}
		>
			{children}
			<div
				id={`tooltip-${id}`}
				role='tooltip'
				className={TooltipContentStyles({ side })}
				style={{ positionAnchor: anchorName }}
			>
				<Typography variant='footnote'>{content}</Typography>
			</div>
		</div>
	);
}
