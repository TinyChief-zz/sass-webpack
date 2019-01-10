module.exports = PATHS => {
  return {
    mode: 'development',
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
          use: ['style-loader', 'css-loader', 'fast-sass-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]'
          }
        }
      ]
    }
  }
}
