var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		directory: 'dist',
		filename: 'app.js'
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				query: {
					presets: ['es2015']
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			jquery: 'jquery',
			$: 'jquery'
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: 'src/index.html',
			filename: 'dist/index.html'
		})
	]
};
