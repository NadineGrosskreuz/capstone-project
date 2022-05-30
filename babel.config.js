module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					ie: '11',
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: ['@babel/plugin-proposal-nullish-coalescing-operator'],
};
