const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common");

const chunkFilter = chunk => {
	if (chunk.name == "vendor")
		return false;
	return true;
};

const config = merge(common, {
	mode: "production",
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				chunkFilter,
				parallel: true,
			}),
		],
	},
});

module.exports = config;
