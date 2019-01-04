const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.ts',
	},
	output: {
		// chunkFilename: '[name].[chunkhash].js',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: [
			path.resolve('./app/assets/javascripts'),
			`${__dirname}/node_modules`
		],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},

	module: {
		rules: [{
			test: /\.ts$/,
			use: 'ts-loader',
		}, ]
	},


	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
