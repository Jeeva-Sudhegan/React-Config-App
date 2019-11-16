const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
	// entry: ["react-hot-loader/patch", "./src/index.js"],  for hot reloading
	entry: './src/index.js',
	output: {
		path: path.resolve(
			__dirname,
			'dist',
		),
		filename: 'bundle.js',
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude:
					'/node_modules/',
				use: 'ts-loader',
			},
			{
				test: /\.(js)$/,
				exclude:
					'/node_modules/',
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: true,
            cleanAfterBeforeBuildPatterns: ["./**/*.(js|jsx|tsx)"],
        }),
		new HtmlWebpackPlugin({
			template:
				'./src/index.html',
		}),
	],
};

module.exports = config;