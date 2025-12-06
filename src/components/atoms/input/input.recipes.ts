import { sva } from 'panda/css'

export const InputRecipe = sva({
	slots: ['root', 'input'],
	base: {
		root: {
			paddingBlock: 2,
      paddingInline: 4,
			borderRadius: 'full',
			outline: '1px solid',
			outlineColor: { base: 'neutral.200', _osDark: 'neutral.700' },
		},
		input: {
			outline: 'none',
			width: 'full',
		},
	},
})
