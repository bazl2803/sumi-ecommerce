import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
	preflight: true,
	include: [
		'./components/**/*.{ts,tsx,js,jsx}',
		'./features/**/*.{ts,tsx,js,jsx}',
		'./app/**/*.{ts,tsx,js,jsx}',
	],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: 'styled-system',
});
