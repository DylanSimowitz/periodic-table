const path = require('path')
const vueConfig = require('./vue-loader.config')

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './client/src/client-entry.js',
    vendor: [
      'es6-promise',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve(__dirname, '../client/src/'),
      path.resolve(__dirname, '../node_modules')
    ],
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'assets': path.resolve(__dirname, '../client/src/assets'),
      'components': path.resolve(__dirname, '../client/src/components')
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // options: {
          // objectAssign: 'Object.assign'
        // }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
}
