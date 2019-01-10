// const path = require('path')

module.exports = PATH => {
  return {
    entry: `${PATH.src}/index.js`,
    output: {
      filename: 'build.js',
      path: PATH.dist
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
          test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              loader: 'eslint-loader'
            }
          ]
        }
      ]
    }
  }
}
