module.exports = {
  entry: [
    'babel-polyfill',
    `${__dirname}/index.js`
  ],
  output: {
    path: __dirname,
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /.(js)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
          query: {
            presets: ['env', 'stage-3', 'react']
          }
      },
      {
        test: /\.wasm$/,
        loaders: ['wasm-loader']
       }
    ]
  }
}
