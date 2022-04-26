const path = require('path');

module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.(sass|scss)$/,
		use: ['style-loader', 'css-loader', 'sass-loader'],
		include: path.resolve(__dirname, '../'),
	});
	// fonts
	config.module.rules.push({
		test: /\.(png|woff|woff2|eot|ttf|svg)$/,
		use: [
			{
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
				},
			},
		],
		include: path.resolve(__dirname, '../'),
	});

	return config;
};
