var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },

      {
        test: /\.(png|jpg|gif|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
		new ExtractTextPlugin('style.css'),
		// new HtmlWebpackPlugin()
	]
}

module.exports = (env, argv) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('DEV')
    config.mode = 'development'
  }

  if (process.env.NODE_ENV === 'production') {
    config.mode = 'production'
    // config.optimization.minimize()
  }

  return config
}
