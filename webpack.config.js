var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	mode: 'development', //development or production
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			},

			{
				test: /\.png$/,
				loader: 'file-loader',
				options: {
					name: './images/[name].[ext]'
				}
			},
			// {
			// 	test: /\.css$/,
			// 	use: ['style-loader', 'css-loader']
			// },

			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
	]
}

if (this.mode === 'production') {
	module.exports.plugins.push (
		new webpack.optimize.UglifyJsPlugin()
	);
}