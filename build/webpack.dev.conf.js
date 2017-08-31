const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const util = require('./util');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'build': './examples/main.ts'
  },
  output: {
    path: util.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: util.root('examples/index.html')
    }),
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
  ],
  devServer: {
    port: 7777,
    host: '0.0.0.0',
    historyApiFallback: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    open: true
  }
});
