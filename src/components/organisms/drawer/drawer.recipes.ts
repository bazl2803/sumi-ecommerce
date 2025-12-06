import { css, cva } from 'panda/css'

export const DrawerRecipe = css({
	position: 'fixed',
	inset: 0,
	backgroundColor: 'blackAlpha.500',
	backdropFilter: 'blur(4px)',
	zIndex: 40,
	maxWidth: 'none',
	maxHeight: 'none',
	width: 'full',
	height: 'full',
	padding: 0,
})

export const DrawerContentRecipe = cva({
	base: {
		zIndex: 50,
		position: 'fixed',

	},
	variants: {
		open: {
			true: {
				transform: 'translate(0, 0)',
			},
		},
		position: {
			top: {
				top: 0,
				left: 0,
				right: 0,
				bottom: 'auto',
			},
			left: {
				top: 0,
				left: 0,
				right: 'auto',
				bottom: 'auto',
			},
			right: {
				top: 0,
				left: 'auto',
				right: 0,
				bottom: 'auto',
			},
			bottom: {
				top: 'auto',
				left: 0,
				right: 0,
				bottom: 0,
			},
		},
	},
	compoundVariants: [{ position: 'top', open: true, css: { height: '30vh' } }],
})
