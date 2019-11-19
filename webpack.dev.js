const merge = require("webpack-merge");
const common = require("./webpack.common");

const config = merge(common, {
	devtool: "inline-source-map",
	mode: "development",
	devServer: {
		open: true,
		hot: true,
	},
});

module.exports = config;
