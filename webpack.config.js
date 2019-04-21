const path = require('path');
const pkg = require('./package');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = 'production' === process.env.NODE_ENV;

const config = {
	mode: isProd ? 'production' : 'development',
	target: 'node',
	devtool: 'eval',
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: '[name].js',
		library: pkg.name,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	module: {
		rules: [
			{
				test: /.js?$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new UglifyJsPlugin()
	]
};

module.exports = config;
