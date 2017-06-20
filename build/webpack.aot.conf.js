const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.dev.conf');
const util = require('./util');


module.exports = webpackMerge(devConfig, {
  entry: {
    'build': './examples/main.ts'
  }
});
