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
		filename:
			"[name].[contenthash:8].js",
		chunkFilename:
			"[name].[contenthash:8].js",
	},
	optimization: {
		moduleIds: "hashed",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	resolve: {
		extensions: [
			".ts",
			".tsx",
			".js",
			".jsx",
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
				test: /\.(js|jsx)$/,
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
