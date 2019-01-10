const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = PATHS => {
  return {
    mode: 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            'file-loader?name=[name].[ext]',
            'extract-loader',
            'html-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'postcss-loader',
            'fast-sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanPlugin(['dist']),
      new MiniCssExtractPlugin({ filename: '[name].css' }),
      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
      })
    ]
  }
}
