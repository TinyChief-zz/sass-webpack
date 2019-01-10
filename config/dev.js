module.exports = PATHS => {
  return {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'fast-sass-loader']
        }
      ]
    }
  }
}
