module.exports = {
	plugins: {
		'@pandacss/dev/postcss': {},
		autoprefixer: {
			overrideBrowserslist: ['>0.5%', 'not dead', 'not safari <= 15'],
		},
		remove: true,
	},
}
