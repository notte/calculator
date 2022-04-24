const path = require('path')
// const webpack = require('webpack')

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    index: './src/index.ts'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
    // fallback: {
    //   stream: require.resolve("stream-browserify"),
    //   buffer: false
    // }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  watch: true,

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: ['ts-loader']
      }, {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
        ]
      }
    ]
  }
})
