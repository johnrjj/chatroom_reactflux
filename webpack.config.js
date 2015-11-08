module.exports = {
  entry: {
    main: [
      './src/main.jsx'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
              presets: ['react', 'es2015']
          }
      }
    ]
  }
}
