const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
	devtool: 'inline-source-map',
	mode: 'development',
});

module.exports = config;
