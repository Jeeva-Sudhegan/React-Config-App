const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
	CleanWebpackPlugin,
} = require("clean-webpack-plugin");

const config = {
	entry: [
		"react-hot-loader/patch",
		"./src/index.js",
	],
	// entry: './src/index.js',
	output: {
		path: path.resolve(
			__dirname,
			"build",
		),
		filename: "[name].bundle.js",
		chunkFilename:
			"[name].bundle.js",
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js",
			".ts",
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude:
					"/node_modules/",
				use: "ts-loader",
			},
			{
				test: /\.(js)$/,
				exclude:
					"/node_modules/",
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
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
			cleanAfterBeforeBuildPatterns: [
				"./**/*.(js|jsx|ts|tsx)",
			],
		}),
		new HtmlWebpackPlugin({
			template:
				"./src/index.html",
		}),
	],
};

module.exports = config;
